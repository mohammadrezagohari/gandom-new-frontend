import { NextResponse } from "next/server"
import { asc } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { siteContents } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { serializeSiteContent } from "@/src/lib/siteContent"
export async function GET(request) {
  if (!await getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const items = await db.select().from(siteContents).orderBy(asc(siteContents.group), asc(siteContents.sortOrder), asc(siteContents.id))
  return NextResponse.json({ contents: items.map(serializeSiteContent) })
}
