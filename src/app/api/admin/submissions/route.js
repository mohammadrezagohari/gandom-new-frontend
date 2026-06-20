import { NextResponse } from "next/server"
import { desc } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { formSubmissions } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"

export async function GET(request) {
  try {
    const admin = await getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
    if (!admin) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
    const submissions = db.select().from(formSubmissions)
      .orderBy(desc(formSubmissions.createdAt))
      .limit(500)
      .all()
    return NextResponse.json({ submissions })
  } catch {
    return NextResponse.json({ error: "Could not load submissions." }, { status: 500 })
  }
}
