import { NextResponse } from "next/server"
import prisma from "@/src/lib/prisma"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"

export async function GET(request) {
  try {
    const admin = await getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
    if (!admin) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
    const submissions = await prisma.formSubmission.findMany({
      orderBy: { createdAt: "desc" },
      take: 500,
    })
    return NextResponse.json({ submissions })
  } catch {
    return NextResponse.json({ error: "Could not load submissions." }, { status: 500 })
  }
}
