import { NextResponse } from "next/server"
import prisma from "@/src/lib/prisma"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { serializeTeamMember } from "@/src/lib/team"
import { teamData } from "@/src/lib/teamValidation"

async function authorized(request) {
  return getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
}

export async function PUT(request, { params }) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const id = Number(params.id)
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid id." }, { status: 400 })
  try {
    const data = teamData(await request.json())
    if (!data) return NextResponse.json({ error: "Invalid team member data." }, { status: 400 })
    const member = await prisma.teamMember.update({ where: { id }, data })
    return NextResponse.json({ member: serializeTeamMember(member) })
  } catch {
    return NextResponse.json({ error: "Could not update team member." }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const id = Number(params.id)
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid id." }, { status: 400 })
  try {
    await prisma.teamMember.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Could not delete team member." }, { status: 500 })
  }
}
