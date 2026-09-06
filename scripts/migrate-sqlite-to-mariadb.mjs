import "dotenv/config"
import Database from "better-sqlite3"
import { existsSync } from "node:fs"
import path from "node:path"
import { closeDatabasePool, pool } from "../src/db/index.mjs"

const sqliteArgument = process.argv.find((value) => value.startsWith("--sqlite="))
const sqlitePath = path.resolve(sqliteArgument?.slice("--sqlite=".length) || process.env.SQLITE_PATH || "./data/gandom.db")
if (!existsSync(sqlitePath)) throw new Error(`SQLite database not found: ${sqlitePath}`)

const tableOrder = [
  "Admin",
  "TeamMember",
  "Article",
  "SiteContent",
  "FormSubmission",
  "AdminSession",
  "ArticleComment",
]
const dateColumns = new Set(["createdAt", "updatedAt", "expiresAt"])

function normalizeRow(row) {
  return Object.fromEntries(Object.entries(row).map(([column, value]) => {
    if (dateColumns.has(column) && value != null) {
      const date = new Date(value)
      if (!Number.isNaN(date.getTime())) return [column, date]
    }
    return [column, value]
  }))
}

const sqlite = new Database(sqlitePath, { readonly: true, fileMustExist: true })
const connection = await pool.getConnection()

try {
  const nonEmpty = []
  for (const table of tableOrder) {
    const [rows] = await connection.query("SELECT COUNT(*) AS count FROM ??", [table])
    if (Number(rows[0].count) > 0) nonEmpty.push(table)
  }
  if (nonEmpty.length) {
    throw new Error(`Target MariaDB must be empty. Non-empty tables: ${nonEmpty.join(", ")}`)
  }

  await connection.beginTransaction()
  const counts = {}
  for (const table of tableOrder) {
    const rows = sqlite.prepare(`SELECT * FROM \`${table}\` ORDER BY id`).all()
    for (const row of rows) {
      await connection.query("INSERT INTO ?? SET ?", [table, normalizeRow(row)])
    }
    counts[table] = rows.length
  }
  await connection.commit()
  console.log("SQLite data migrated to MariaDB:", counts)
} catch (error) {
  await connection.rollback()
  throw error
} finally {
  sqlite.close()
  connection.release()
  await closeDatabasePool()
}
