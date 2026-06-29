import { notFound } from "next/navigation"
import TeamMemberProfile from "@/src/components/page/team/member-profile"
import { and, eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { teamMembers } from "@/src/db/schema.mjs"
import { serializeTeamMember } from "@/src/lib/team"

export default async function TeamSinglePage({ params }) {
  const { id: paramId } = await params
  const id = Number(paramId)
  if (!Number.isInteger(id)) notFound()
  const member = db.select().from(teamMembers)
    .where(and(eq(teamMembers.id, id), eq(teamMembers.isActive, true)))
    .get()
  if (!member) notFound()
  return <TeamMemberProfile team={serializeTeamMember(member, "en")} locale="en" />
}
