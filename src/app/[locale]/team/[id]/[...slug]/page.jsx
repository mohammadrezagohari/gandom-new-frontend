import { notFound } from "next/navigation";
import TeamMemberProfile from "@/src/components/page/team/member-profile";
import prisma from "@/src/lib/prisma";
import { serializeTeamMember } from "@/src/lib/team";

export default async function TeamSinglePage({ params }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) notFound();
  const member = await prisma.teamMember.findFirst({ where: { id, isActive: true } });
  if (!member) notFound();
  return <TeamMemberProfile team={serializeTeamMember(member)} />;
}
