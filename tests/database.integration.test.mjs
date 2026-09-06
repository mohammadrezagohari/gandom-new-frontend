import assert from "node:assert/strict"
import { after, before, test } from "node:test"
import mysql from "mysql2/promise"
import { drizzle } from "drizzle-orm/mysql2"
import { migrate } from "drizzle-orm/mysql2/migrator"
import { eq } from "drizzle-orm"
import * as schema from "../src/db/schema.mjs"
import { isDuplicateEntry } from "../src/lib/databaseErrors.mjs"

const databaseUrl = process.env.TEST_DATABASE_URL
const databaseName = databaseUrl ? decodeURIComponent(new URL(databaseUrl).pathname.slice(1)) : ""
const state = { connection: null, pool: null, db: null }

before(async () => {
  if (!databaseUrl) return
  assert.match(databaseName, /_test$/, "TEST_DATABASE_URL must target a database ending in _test")

  state.connection = await mysql.createConnection(databaseUrl)
  const migrationDb = drizzle({ client: state.connection, schema, mode: "default" })
  await migrate(migrationDb, { migrationsFolder: "drizzle-mariadb" })

  state.pool = mysql.createPool({ uri: databaseUrl, connectionLimit: 2, charset: "utf8mb4", timezone: "Z" })
  state.db = drizzle({ client: state.pool, schema, mode: "default" })
})

after(async () => {
  await state.pool?.end()
  await state.connection?.end()
})

test("runs CRUD, unicode, booleans and duplicate constraints on MariaDB", { skip: !databaseUrl }, async () => {
  const [versionRows] = await state.connection.query("SELECT VERSION() AS version")
  assert.match(versionRows[0].version, /MariaDB/i)

  const marker = `${Date.now()}-${Math.random().toString(16).slice(2)}`
  let memberId
  let articleId

  try {
    ;[{ id: memberId }] = await state.db.insert(schema.teamMembers).values({
      name: "تست",
      family: `MariaDB-${marker}`,
      position: "توسعه‌دهنده 🟢",
      about: "آزمایش ذخیره و بازیابی متن فارسی",
      skills: JSON.stringify(["SQL", "سئو"]),
      image: "/test.webp",
      singlePageImage: "/test.png",
      isFormer: false,
      isActive: true,
    }).$returningId()

    const [member] = await state.db.select().from(schema.teamMembers).where(eq(schema.teamMembers.id, memberId)).limit(1)
    assert.equal(member.name, "تست")
    assert.equal(member.position, "توسعه‌دهنده 🟢")
    assert.equal(member.isActive, true)

    await state.db.update(schema.teamMembers).set({ isFormer: true }).where(eq(schema.teamMembers.id, memberId))
    const [updated] = await state.db.select().from(schema.teamMembers).where(eq(schema.teamMembers.id, memberId)).limit(1)
    assert.equal(updated.isFormer, true)

    const slug = `mariadb-integration-${marker}`
    ;[{ id: articleId }] = await state.db.insert(schema.articles).values({
      slug,
      titleTranslations: JSON.stringify({ fa: "عنوان تست", en: "Test title" }),
      contentTranslations: JSON.stringify({ fa: "متن", en: "Body" }),
      publishedAt: "2026-08-08",
    }).$returningId()

    await assert.rejects(
      state.db.insert(schema.articles).values({
        slug,
        titleTranslations: "{}",
        contentTranslations: "{}",
      }),
      isDuplicateEntry,
    )
  } finally {
    if (articleId) await state.db.delete(schema.articles).where(eq(schema.articles.id, articleId))
    if (memberId) await state.db.delete(schema.teamMembers).where(eq(schema.teamMembers.id, memberId))
  }
})
