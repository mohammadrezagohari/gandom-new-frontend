import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"
import { isDuplicateEntry } from "../src/lib/databaseErrors.mjs"
import connectionConfig from "../src/db/connectionConfig.cjs"

const { databaseConnectionOptions } = connectionConfig

const readProjectFile = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8")

test("runtime database layer uses MariaDB-compatible MySQL drivers", async () => {
  const [schema, connection, config] = await Promise.all([
    readProjectFile("src/db/schema.mjs"),
    readProjectFile("src/db/index.mjs"),
    readProjectFile("drizzle.config.js"),
  ])

  assert.match(schema, /drizzle-orm\/mysql-core/)
  assert.match(schema, /mysqlTable/)
  assert.match(connection, /mysql2\/promise/)
  assert.match(connection, /drizzle-orm\/mysql2/)
  assert.match(connection, /charset:\s*["']utf8mb4["']/)
  assert.match(config, /dialect:\s*["']mysql["']/)
  assert.doesNotMatch(`${schema}\n${connection}`, /better-sqlite3|sqlite-core/)
})

test("initial migration preserves Persian and emoji text with utf8mb4", async () => {
  const migration = await readProjectFile("drizzle-mariadb/0000_unique_chat.sql")

  for (const table of ["Admin", "AdminSession", "Article", "ArticleComment", "FormSubmission", "SiteContent", "TeamMember"]) {
    assert.ok(migration.includes(`CREATE TABLE \`${table}\``), `missing ${table} table`)
  }
  assert.match(migration, /CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci/)
  assert.match(migration, /ON DELETE cascade/)
})

test("duplicate detection follows the Drizzle error cause chain", () => {
  const driverError = Object.assign(new Error("Duplicate entry"), { code: "ER_DUP_ENTRY", errno: 1062 })
  const drizzleError = new Error("Failed query", { cause: driverError })

  assert.equal(isDuplicateEntry(drizzleError), true)
  assert.equal(isDuplicateEntry(new Error("Connection refused")), false)
})

test("database configuration supports separate DB environment variables", () => {
  assert.deepEqual(databaseConnectionOptions({
    DB_CONNECTION: "mysql",
    DB_HOST: "127.0.0.1",
    DB_PORT: "3306",
    DB_DATABASE: "gandomdb",
    DB_USERNAME: "gandomdb",
    DB_PASSWORD: "123",
    DATABASE_URL: "mysql://legacy.example/ignored",
  }), {
    host: "127.0.0.1",
    port: 3306,
    database: "gandomdb",
    user: "gandomdb",
    password: "123",
  })
})

test("DATABASE_URL remains available as a legacy fallback", () => {
  assert.deepEqual(databaseConnectionOptions({ DATABASE_URL: "mysql://legacy.example/gandom" }), {
    url: "mysql://legacy.example/gandom",
  })
})
