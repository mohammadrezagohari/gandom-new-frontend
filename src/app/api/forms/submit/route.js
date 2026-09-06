import { NextResponse } from "next/server"
import { db } from "@/src/db/index.mjs"
import { formSubmissions } from "@/src/db/schema.mjs"
import { isRateLimited, requestIp } from "@/src/lib/rateLimit"

const allowedTypes = new Set(["contact", "join", "article-comment", "contract", "other"])
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function text(value, maxLength) {
  if (typeof value !== "string") return null
  const result = value.trim()
  return result ? result.slice(0, maxLength) : null
}

export async function POST(request) {
  try {
    if (isRateLimited(`form:${requestIp(request)}`, 10, 10 * 60 * 1000)) {
      return NextResponse.json({ success: false, error: "Too many requests. Please try again later." }, { status: 429 })
    }
    const contentLength = Number(request.headers.get("content-length") || 0)
    if (contentLength > 25_000) {
      return NextResponse.json({ success: false, error: "Request body is too large." }, { status: 413 })
    }
    const body = await request.json()
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ success: false, error: "Invalid form data." }, { status: 400 })
    }

    const formType = allowedTypes.has(body.formType) ? body.formType : null
    const name = text(body.name, 120)
    const phone = text(body.phone, 30)
    const email = text(body.email, 254)?.toLowerCase() || null
    const content = text(body.content, 5000)
    const cv = text(body.cv, 1000)

    if (!formType || !name || !content || (email && !emailPattern.test(email))) {
      return NextResponse.json({ success: false, error: "Please enter valid and complete information." }, { status: 400 })
    }
    if (formType === "contact" && (!email || !phone)) {
      return NextResponse.json({ success: false, error: "Email and phone are required." }, { status: 400 })
    }
    if (formType === "join" && (!email || !cv)) {
      return NextResponse.json({ success: false, error: "Email and CV are required." }, { status: 400 })
    }

    const [submission] = await db.insert(formSubmissions)
      .values({ formType, name, phone, email, content, cv })
      .$returningId()
    return NextResponse.json({ success: true, id: submission.id }, { status: 201 })
  } catch {
    return NextResponse.json({ success: false, error: "Could not save the form." }, { status: 500 })
  }
}
