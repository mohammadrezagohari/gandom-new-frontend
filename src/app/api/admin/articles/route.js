import { NextResponse } from "next/server"
import { asc } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { articles } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { articleData } from "@/src/lib/articleValidation"
import { serializeArticle } from "@/src/lib/articles"

async function authorized(request) {
  return getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
}

export async function GET(request) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const items = db.select().from(articles)
    .orderBy(asc(articles.sortOrder), asc(articles.id))
    .all()
  return NextResponse.json({ articles: items.map((item) => serializeArticle(item, "en")) })
}

export async function POST(request) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  try {
    const data = articleData(await request.json())
    if (!data) return NextResponse.json({ error: "Invalid article data." }, { status: 400 })
    const item = db.insert(articles).values(data).returning().get()
    return NextResponse.json({ article: serializeArticle(item, "en") }, { status: 201 })
  } catch (error) {
    if (String(error?.message || "").includes("UNIQUE")) {
      return NextResponse.json({ error: "Slug must be unique." }, { status: 409 })
    }
    return NextResponse.json({ error: "Could not create article." }, { status: 500 })
  }
}
