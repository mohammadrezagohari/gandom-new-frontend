import { pool } from "../src/db/index.mjs"

const dateColumns = new Set(["createdAt", "updatedAt", "expiresAt"])
const tables = [
  ["TeamMember", "teamMembers"],
  ["Article", "articles"],
  ["SiteContent", "siteContents"],
  ["ArticleComment", "articleComments"],
]

function normalizeRow(row) {
  return Object.fromEntries(Object.entries(row).map(([column, value]) => {
    if (dateColumns.has(column) && value != null && !(value instanceof Date)) {
      const date = new Date(value)
      if (!Number.isNaN(date.getTime())) return [column, date]
    }
    return [column, value]
  }))
}

export async function seedSnapshot(snapshot) {
  const connection = await pool.getConnection()
  try {
    await connection.beginTransaction()
    for (const [table, key] of tables) {
      for (const row of snapshot[key] || []) {
        await connection.query("INSERT IGNORE INTO ?? SET ?", [table, normalizeRow(row)])
      }
    }
    await connection.commit()
  } catch (error) {
    await connection.rollback()
    throw error
  } finally {
    connection.release()
  }

  console.log(
    `Content seeded: ${snapshot.teamMembers?.length || 0} team members, ` +
    `${snapshot.articles?.length || 0} articles, ` +
    `${snapshot.siteContents?.length || 0} site contents, ` +
    `${snapshot.articleComments?.length || 0} comments.`,
  )
}
