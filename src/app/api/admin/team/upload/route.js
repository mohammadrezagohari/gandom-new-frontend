import { NextResponse } from "next/server"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { saveTeamImage } from "@/src/lib/teamImages"

export const runtime = "nodejs"

export async function POST(request) {
  const admin = await getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
  if (!admin) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  try {
    const formData = await request.formData()
    const path = await saveTeamImage(formData.get("image"))
    return NextResponse.json({ path }, { status: 201 })
  } catch (error) {
    if (error.message === "INVALID_IMAGE") {
      return NextResponse.json({ error: "Only JPG, PNG or WebP images up to 5 MB are accepted." }, { status: 400 })
    }
    return NextResponse.json({ error: "Could not upload image." }, { status: 500 })
  }
}
