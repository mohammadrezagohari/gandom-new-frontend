const { defineConfig } = require("drizzle-kit")

module.exports = defineConfig({
  dialect: "sqlite",
  schema: "./src/db/schema.mjs",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_PATH || "./data/gandom.db",
  },
})
