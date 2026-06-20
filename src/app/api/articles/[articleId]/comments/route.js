import { NextResponse } from "next/server"
import { and, asc, desc, eq, inArray, isNull } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { articleComments } from "@/src/db/schema.mjs"
import { isRateLimited, requestIp } from "@/src/lib/rateLimit"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const publicFields = {
  id: articleComments.id,
  articleId: articleComments.articleId,
  name: articleComments.name,
  content: articleComments.content,
  createdAt: articleComments.createdAt,
  parentId: articleComments.parentId,
}

function clean(value, maxLength) {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, maxLength)
}

function validArticleId(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 100
}

export async function GET(_request, { params }) {
  const { articleId } = await params
  if (!validArticleId(articleId)) {
    return NextResponse.json({ error: "Invalid article id." }, { status: 400 })
  }
  try {
    const roots = db.select(publicFields).from(articleComments)
      .where(and(eq(articleComments.articleId, articleId), isNull(articleComments.parentId)))
      .orderBy(desc(articleComments.createdAt))
      .limit(200)
      .all()
    const rootIds = roots.map((comment) => comment.id)
    const replies = rootIds.length
      ? db.select(publicFields).from(articleComments)
        .where(inArray(articleComments.parentId, rootIds))
        .orderBy(asc(articleComments.createdAt))
        .all()
      : []
    const comments = roots.map((comment) => ({
      ...comment,
      replies: replies.filter((reply) => reply.parentId === comment.id),
    }))
    return NextResponse.json({ comments })
  } catch {
    return NextResponse.json({ error: "Could not load comments." }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  const { articleId } = await params
  if (!validArticleId(articleId)) {
    return NextResponse.json({ error: "Invalid article id." }, { status: 400 })
  }
  if (isRateLimited(`comment:${requestIp(request)}`, 12, 10 * 60 * 1000)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 })
  }
  try {
    const body = await request.json()
    const name = clean(body?.name, 100)
    const email = clean(body?.email, 254).toLowerCase() || null
    const content = clean(body?.content, 3000)
    const parentId = body?.parentId == null ? null : Number(body.parentId)

    if (!name || !content || (email && !emailPattern.test(email)) || (parentId !== null && !Number.isInteger(parentId))) {
      return NextResponse.json({ error: "Invalid comment data." }, { status: 400 })
    }
    if (parentId !== null) {
      const parent = db.select({ id: articleComments.id }).from(articleComments)
        .where(and(
          eq(articleComments.id, parentId),
          eq(articleComments.articleId, articleId),
          isNull(articleComments.parentId),
        ))
        .get()
      if (!parent) return NextResponse.json({ error: "Parent comment not found." }, { status: 400 })
    }

    const comment = db.insert(articleComments)
      .values({ articleId, name, email, content, parentId })
      .returning(publicFields)
      .get()
    return NextResponse.json({ comment }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Could not save comment." }, { status: 500 })
  }
}
