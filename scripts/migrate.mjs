import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { migrate } from "drizzle-orm/better-sqlite3/migrator"
import { mkdirSync } from "node:fs"
import path from "node:path"

const dataDirectory = path.join(process.cwd(), "data")
mkdirSync(dataDirectory, { recursive: true })
const databasePath = process.env.DATABASE_PATH
  ? path.resolve(process.env.DATABASE_PATH)
  : path.join(dataDirectory, "gandom.db")

const sqlite = new Database(databasePath)
sqlite.pragma("journal_mode = WAL")
sqlite.pragma("foreign_keys = ON")

try {
  migrate(drizzle(sqlite), { migrationsFolder: path.join(process.cwd(), "drizzle") })
  console.log(`Database migrations applied to ${databasePath}`)
} finally {
  sqlite.close()
}
