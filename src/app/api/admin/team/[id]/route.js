import { NextResponse } from "next/server"
import { count, eq, or } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { teamMembers } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { serializeTeamMember } from "@/src/lib/team"
import { teamData } from "@/src/lib/teamValidation"
import { isManagedTeamImage, removeManagedTeamImage } from "@/src/lib/teamImages"

async function authorized(request) {
  return getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
}

async function cleanupUnusedImages(paths) {
  for (const imagePath of new Set(paths.filter(isManagedTeamImage))) {
    const references = db.select({ value: count() }).from(teamMembers)
      .where(or(eq(teamMembers.image, imagePath), eq(teamMembers.singlePageImage, imagePath)))
      .get()?.value || 0
    if (references === 0) await removeManagedTeamImage(imagePath)
  }
}

export async function PUT(request, { params }) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const { id: paramId } = await params
  const id = Number(paramId)
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid id." }, { status: 400 })
  try {
    const data = teamData(await request.json())
    if (!data) return NextResponse.json({ error: "Invalid team member data." }, { status: 400 })
    const previous = db.select().from(teamMembers).where(eq(teamMembers.id, id)).get()
    if (!previous) return NextResponse.json({ error: "Team member not found." }, { status: 404 })
    const member = db.update(teamMembers)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(teamMembers.id, id))
      .returning()
      .get()
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
  const { id: paramId } = await params
  const id = Number(paramId)
  if (!Number.isInteger(id)) return NextResponse.json({ error: "Invalid id." }, { status: 400 })
  try {
    const member = db.delete(teamMembers).where(eq(teamMembers.id, id)).returning().get()
    if (!member) return NextResponse.json({ error: "Team member not found." }, { status: 404 })
    await cleanupUnusedImages([member.image, member.singlePageImage])
      .catch((error) => console.error("Could not clean deleted team images", error))
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Could not delete team member." }, { status: 500 })
  }
}
