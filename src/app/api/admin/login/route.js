import { NextResponse } from "next/server"
import { eq, lt } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { admins, adminSessions } from "@/src/db/schema.mjs"
import { adminCookieOptions, ADMIN_COOKIE, createAdminSession, hashPassword, verifyPassword } from "@/src/lib/adminAuth"
import { isRateLimited, requestIp } from "@/src/lib/rateLimit"

export async function POST(request) {
  try {
    if (isRateLimited(`login:${requestIp(request)}`, 5, 15 * 60 * 1000)) {
      return NextResponse.json({ success: false, error: "Please try again later." }, { status: 429 })
    }
    const body = await request.json()
    const username = typeof body?.username === "string" ? body.username.trim().toLowerCase() : ""
    const password = typeof body?.password === "string" ? body.password : ""
    if (!/^[a-z0-9_.-]{3,50}$/i.test(username) || password.length < 8 || password.length > 128) {
      return NextResponse.json({ success: false, error: "Invalid username or password." }, { status: 401 })
    }

    const admin = db.select().from(admins).where(eq(admins.username, username)).get()
    const valid = admin?.isActive ? await verifyPassword(password, admin.passwordHash) : (await hashPassword(password), false)
    if (!valid) {
      return NextResponse.json({ success: false, error: "Invalid username or password." }, { status: 401 })
    }

    db.delete(adminSessions).where(lt(adminSessions.expiresAt, new Date())).run()
    const session = await createAdminSession(admin.id)
    const response = NextResponse.json({ success: true })
    response.cookies.set(ADMIN_COOKIE, session.token, adminCookieOptions(session))
    return response
  } catch {
    return NextResponse.json({ success: false, error: "Login failed." }, { status: 500 })
  }
}
