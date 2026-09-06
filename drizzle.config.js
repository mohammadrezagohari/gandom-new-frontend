require("dotenv/config")
const { defineConfig } = require("drizzle-kit")
const { databaseConnectionOptions } = require("./src/db/connectionConfig.cjs")

module.exports = defineConfig({
  dialect: "mysql",
  schema: "./src/db/schema.mjs",
  out: "./drizzle-mariadb",
  dbCredentials: databaseConnectionOptions(),
  strict: true,
  verbose: true,
})
