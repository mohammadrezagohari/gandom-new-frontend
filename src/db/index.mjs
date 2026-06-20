import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"
import { mkdirSync } from "node:fs"
import path from "node:path"
import * as schema from "./schema.mjs"

const dataDirectory = path.join(process.cwd(), "data")
mkdirSync(dataDirectory, { recursive: true })

export const databasePath = process.env.DATABASE_PATH
  ? path.resolve(process.env.DATABASE_PATH)
  : path.join(dataDirectory, "gandom.db")

const globalDatabase = globalThis
const sqlite = globalDatabase.__gandomSqlite || new Database(databasePath)
sqlite.pragma("journal_mode = WAL")
sqlite.pragma("foreign_keys = ON")
sqlite.pragma("busy_timeout = 5000")

if (process.env.NODE_ENV !== "production") globalDatabase.__gandomSqlite = sqlite

export const db = drizzle(sqlite, { schema })
export { sqlite }
