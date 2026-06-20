import { NextResponse } from "next/server"
import prisma from "@/src/lib/prisma"
import { isRateLimited, requestIp } from "@/src/lib/rateLimit"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const publicFields = {
  id: true,
  articleId: true,
  name: true,
  content: true,
  createdAt: true,
  parentId: true,
}

function clean(value, maxLength) {
  if (typeof value !== "string") return ""
  return value.trim().slice(0, maxLength)
}

function validArticleId(value) {
  return typeof value === "string" && value.length > 0 && value.length <= 100
}

export async function GET(_request, { params }) {
  const articleId = params.articleId
  if (!validArticleId(articleId)) {
    return NextResponse.json({ error: "Invalid article id." }, { status: 400 })
  }
  try {
    const comments = await prisma.articleComment.findMany({
      where: { articleId, parentId: null },
      orderBy: { createdAt: "desc" },
      select: {
        ...publicFields,
        replies: {
          orderBy: { createdAt: "asc" },
          select: publicFields,
        },
      },
      take: 200,
    })
    return NextResponse.json({ comments })
  } catch {
    return NextResponse.json({ error: "Could not load comments." }, { status: 500 })
  }
}

export async function POST(request, { params }) {
  const articleId = params.articleId
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
      const parent = await prisma.articleComment.findFirst({
        where: { id: parentId, articleId, parentId: null },
        select: { id: true },
      })
      if (!parent) return NextResponse.json({ error: "Parent comment not found." }, { status: 400 })
    }

    const comment = await prisma.articleComment.create({
      data: { articleId, name, email, content, parentId },
      select: publicFields,
    })
    return NextResponse.json({ comment }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Could not save comment." }, { status: 500 })
  }
}
