import { NextResponse } from "next/server"
import { asc, eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { articles } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { articleData } from "@/src/lib/articleValidation"
import { serializeArticle } from "@/src/lib/articles"
import { isDuplicateEntry } from "@/src/lib/databaseErrors"

async function authorized(request) {
  return getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
}

export async function GET(request) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const items = await db.select().from(articles)
    .orderBy(asc(articles.sortOrder), asc(articles.id))
  return NextResponse.json({ articles: items.map((item) => serializeArticle(item, "en")) })
}

export async function POST(request) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  try {
    const data = articleData(await request.json())
    if (!data) return NextResponse.json({ error: "Invalid article data." }, { status: 400 })
    const [inserted] = await db.insert(articles).values(data).$returningId()
    const [item] = await db.select().from(articles).where(eq(articles.id, inserted.id)).limit(1)
    return NextResponse.json({ article: serializeArticle(item, "en") }, { status: 201 })
  } catch (error) {
    if (isDuplicateEntry(error)) {
      return NextResponse.json({ error: "Slug must be unique." }, { status: 409 })
    }
    return NextResponse.json({ error: "Could not create article." }, { status: 500 })
  }
}
