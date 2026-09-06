import { asc, eq } from "drizzle-orm"
import { getTranslations } from "next-intl/server"
import ContactUsSection from "../../../components/page/about/contactus-section"
import HeaderSection from "../../../components/page/about/header-section"
import JoinSection from "../../../components/page/about/join-section"
import PropertySection from "../../../components/page/about/property-section"
import TeamSection, { FormerTeamSection } from "../../../components/page/about/team-section"
import { db } from "@/src/db/index.mjs"
import { teamMembers } from "@/src/db/schema.mjs"
import { serializeTeamMember } from "@/src/lib/team"

export default async function AboutUs({ params }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "about.team" })
  const memberRows = await db.select().from(teamMembers)
    .where(eq(teamMembers.isActive, true))
    .orderBy(asc(teamMembers.isFormer), asc(teamMembers.sortOrder), asc(teamMembers.id))
  const members = memberRows.map((member) => serializeTeamMember(member, locale))

  const currentMembers = members.filter((member) => !member.isFormer)
  const formerMembers = members.filter((member) => member.isFormer)
  const teamCopy = {
    title: t("title"),
    intro: t("intro"),
    seeAll: t("seeAll"),
    activeMembers: t("activeMembers"),
    specialties: t("specialties"),
    formerMembers: t("formerMembers"),
    formerTitle: t("formerTitle"),
    formerDescription: t("formerDescription"),
    leftAt: t("leftAt"),
  }

  return (
    <main>
      <div className="flex flex-col items-center justify-start gap-12">
        <div className="w-full"><HeaderSection /><PropertySection /></div>
        <TeamSection members={currentMembers} formerCount={formerMembers.length} locale={locale} copy={teamCopy} />
        <div className="w-full"><JoinSection /><ContactUsSection /></div>
        <FormerTeamSection members={formerMembers} locale={locale} copy={teamCopy} />
      </div>
    </main>
  )
}
