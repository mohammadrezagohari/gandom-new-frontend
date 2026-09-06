import "dotenv/config"
import mysql from "mysql2/promise"
import { drizzle } from "drizzle-orm/mysql2"
import { migrate } from "drizzle-orm/mysql2/migrator"
import path from "node:path"
import connectionConfig from "../src/db/connectionConfig.cjs"

const { databaseConnectionOptions } = connectionConfig
const databaseConfig = databaseConnectionOptions()

const connection = await mysql.createConnection({
  ...(databaseConfig.url ? { uri: databaseConfig.url } : databaseConfig),
  timezone: "Z",
  charset: "utf8mb4",
})

try {
  await migrate(drizzle({ client: connection }), {
    migrationsFolder: path.join(process.cwd(), "drizzle-mariadb"),
  })
  console.log("MariaDB migrations applied.")
} finally {
  await connection.end()
}
