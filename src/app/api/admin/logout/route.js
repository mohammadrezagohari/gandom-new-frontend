import { NextResponse } from "next/server"
import { ADMIN_COOKIE, deleteAdminSession } from "@/src/lib/adminAuth"

export async function POST(request) {
  await deleteAdminSession(request.cookies.get(ADMIN_COOKIE)?.value)
  const response = NextResponse.json({ success: true })
  response.cookies.set(ADMIN_COOKIE, "", { httpOnly: true, sameSite: "strict", path: "/", maxAge: 0 })
  return response
}
