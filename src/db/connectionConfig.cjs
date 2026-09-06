function databaseConnectionOptions(env = process.env) {
  const splitKeys = ["DB_HOST", "DB_PORT", "DB_DATABASE", "DB_USERNAME", "DB_PASSWORD"]
  const usesSplitConfig = splitKeys.some((key) => env[key] !== undefined)

  if (usesSplitConfig) {
    const connection = (env.DB_CONNECTION || "mysql").toLowerCase()
    if (!["mysql", "mariadb"].includes(connection)) {
      throw new Error('DB_CONNECTION must be "mysql" or "mariadb".')
    }

    const missing = ["DB_HOST", "DB_DATABASE", "DB_USERNAME"].filter((key) => !env[key])
    if (missing.length) {
      throw new Error(`Missing database environment variables: ${missing.join(", ")}`)
    }

    const port = Number(env.DB_PORT || 3306)
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      throw new Error("DB_PORT must be a valid TCP port.")
    }

    return {
      host: env.DB_HOST,
      port,
      database: env.DB_DATABASE,
      user: env.DB_USERNAME,
      password: env.DB_PASSWORD || "",
    }
  }

  if (env.DATABASE_URL) return { url: env.DATABASE_URL }

  throw new Error(
    "Database configuration is required. Set DB_HOST, DB_DATABASE and DB_USERNAME (plus optional DB_PORT and DB_PASSWORD).",
  )
}

module.exports = { databaseConnectionOptions }
