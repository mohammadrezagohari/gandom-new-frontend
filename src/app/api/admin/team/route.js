import { NextResponse } from "next/server"
import { asc, eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { teamMembers } from "@/src/db/schema.mjs"
import { ADMIN_COOKIE, getAdminFromToken } from "@/src/lib/adminAuth"
import { serializeTeamMember } from "@/src/lib/team"
import { teamData } from "@/src/lib/teamValidation"

async function authorized(request) {
  return getAdminFromToken(request.cookies.get(ADMIN_COOKIE)?.value)
}

export async function GET(request) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  const members = await db.select().from(teamMembers)
    .orderBy(asc(teamMembers.sortOrder), asc(teamMembers.id))
  return NextResponse.json({ members: members.map(serializeTeamMember) })
}

export async function POST(request) {
  if (!await authorized(request)) return NextResponse.json({ error: "Unauthorized." }, { status: 401 })
  try {
    const data = teamData(await request.json())
    if (!data) return NextResponse.json({ error: "Invalid team member data." }, { status: 400 })
    const [inserted] = await db.insert(teamMembers).values(data).$returningId()
    const [member] = await db.select().from(teamMembers).where(eq(teamMembers.id, inserted.id)).limit(1)
    return NextResponse.json({ member: serializeTeamMember(member) }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Could not create team member." }, { status: 500 })
  }
}
