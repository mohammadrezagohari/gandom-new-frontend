import { NextResponse } from "next/server"
import prisma from "@/src/lib/prisma"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { serializeTeamMember } from "@/src/lib/team"
import { teamData } from "@/src/lib/teamValidation"
import { isManagedTeamImage, removeManagedTeamImage } from "@/src/lib/teamImages"

async function authorized(request) {
  return getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
}

async function cleanupUnusedImages(paths) {
  for (const imagePath of new Set(paths.filter(isManagedTeamImage))) {
    const references = await prisma.teamMember.count({
      where: { OR: [{ image: imagePath }, { singlePageImage: imagePath }] },
    })
    if (references === 0) await removeManagedTeamImage(imagePath)
  }
}

export async function PUT(request, { params }) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const id = Number(params.id)
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid id." }, { status: 400 })
  try {
    const data = teamData(await request.json())
    if (!data) return NextResponse.json({ error: "Invalid team member data." }, { status: 400 })
    const previous = await prisma.teamMember.findUnique({ where: { id } })
    if (!previous) return NextResponse.json({ error: "Team member not found." }, { status: 404 })
    const member = await prisma.teamMember.update({ where: { id }, data })
    await cleanupUnusedImages([
      previous.image !== member.image ? previous.image : null,
      previous.singlePageImage !== member.singlePageImage ? previous.singlePageImage : null,
    ]).catch((error) => console.error("Could not clean old team image", error))
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
    const member = await prisma.teamMember.delete({ where: { id } })
    await cleanupUnusedImages([member.image, member.singlePageImage])
      .catch((error) => console.error("Could not clean deleted team images", error))
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Could not delete team member." }, { status: 500 })
  }
}
