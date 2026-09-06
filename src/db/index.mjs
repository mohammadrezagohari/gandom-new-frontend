import mysql from "mysql2/promise"
import { drizzle } from "drizzle-orm/mysql2"
import * as schema from "./schema.mjs"
import connectionConfig from "./connectionConfig.cjs"

const { databaseConnectionOptions } = connectionConfig
export const databaseConfig = databaseConnectionOptions()
const mysqlConnectionOptions = databaseConfig.url ? { uri: databaseConfig.url } : databaseConfig

const globalDatabase = globalThis
export const pool = globalDatabase.__gandomMariaPool || mysql.createPool({
  ...mysqlConnectionOptions,
  waitForConnections: true,
  connectionLimit: Math.max(1, Number(process.env.DATABASE_POOL_SIZE) || 10),
  maxIdle: Math.max(1, Number(process.env.DATABASE_POOL_SIZE) || 10),
  idleTimeout: 60_000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  timezone: "Z",
  charset: "utf8mb4",
})

if (process.env.NODE_ENV !== "production") globalDatabase.__gandomMariaPool = pool

export const db = drizzle({ client: pool, schema, mode: "default" })
export async function closeDatabasePool() {
  if (globalDatabase.__gandomMariaPool === pool) delete globalDatabase.__gandomMariaPool
  await pool.end()
}
