import { NextResponse } from "next/server"
import { eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { articles } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { articleData } from "@/src/lib/articleValidation"
import { serializeArticle } from "@/src/lib/articles"
import { isDuplicateEntry } from "@/src/lib/databaseErrors"

async function authorized(request) {
  return getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
}

export async function PUT(request, { params }) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const { id: paramId } = await params
  const id = Number(paramId)
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid id." }, { status: 400 })

  try {
    const data = articleData(await request.json())
    if (!data) return NextResponse.json({ error: "Invalid article data." }, { status: 400 })
    const [existing] = await db.select().from(articles).where(eq(articles.id, id)).limit(1)
    if (!existing) return NextResponse.json({ error: "Article not found." }, { status: 404 })
    await db.update(articles)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(articles.id, id))
    const [item] = await db.select().from(articles).where(eq(articles.id, id)).limit(1)
    return NextResponse.json({ article: serializeArticle(item, "en") })
  } catch (error) {
    if (isDuplicateEntry(error)) {
      return NextResponse.json({ error: "Slug must be unique." }, { status: 409 })
    }
    return NextResponse.json({ error: "Could not update article." }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const { id: paramId } = await params
  const id = Number(paramId)
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid id." }, { status: 400 })
  try {
    const [item] = await db.select({ id: articles.id }).from(articles).where(eq(articles.id, id)).limit(1)
    if (!item) return NextResponse.json({ error: "Article not found." }, { status: 404 })
    await db.delete(articles).where(eq(articles.id, id))
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Could not delete article." }, { status: 500 })
  }
}
