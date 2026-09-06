import { notFound, permanentRedirect } from "next/navigation"
import TeamMemberProfile from "@/src/components/page/team/member-profile"
import { and, eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { teamMembers } from "@/src/db/schema.mjs"
import { serializeTeamMember } from "@/src/lib/team"
import JsonLd from "@/src/components/seo/json-ld"
import { absoluteUrl, createPageMetadata } from "@/src/lib/seo"

async function findMember(id) {
  const numericId = Number(id)
  if (!Number.isInteger(numericId)) return null
  const [member] = await db.select().from(teamMembers).where(and(eq(teamMembers.id, numericId), eq(teamMembers.isActive, true))).limit(1)
  return member || null
}

function decodeSlugParts(slug = []) {
  return slug.map((part) => {
    try {
      return decodeURIComponent(part)
    } catch {
      return part
    }
  }).join("/")
}

export async function generateMetadata({ params }) {
  const { id, locale } = await params
  const row = await findMember(id)
  if (!row) return createPageMetadata({ locale, pathname: `team/${id}`, title: locale === "fa" ? "عضو تیم یافت نشد" : "Team member not found", noIndex: true })
  const member = serializeTeamMember(row, locale)
  const expectedSlug = `${member.name}-${member.family}`.trim().replace(/\s+/g, "-")
  return createPageMetadata({ locale, pathname: `team/${member.id}/${encodeURIComponent(expectedSlug)}`, title: `${member.name} ${member.family} — ${member.position}`, description: member.about, image: member.singlePageImage || member.image })
}

export default async function TeamSinglePage({ params }) {
  const { id: paramId, locale, slug } = await params
  const id = Number(paramId)
  if (!Number.isInteger(id)) notFound()
  const member = await findMember(id)
  if (!member) notFound()
  const localizedMember = serializeTeamMember(member, locale)
  const expectedSlug = `${localizedMember.name}-${localizedMember.family}`.trim().replace(/\s+/g, "-")
  if (decodeSlugParts(slug) !== expectedSlug) permanentRedirect(`/${locale}/team/${localizedMember.id}/${encodeURIComponent(expectedSlug)}`)
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "Person", name: `${localizedMember.name} ${localizedMember.family}`, jobTitle: localizedMember.position, description: localizedMember.about, image: absoluteUrl(localizedMember.singlePageImage || localizedMember.image), worksFor: {"@type": "Organization", name: "Gandom", url: absoluteUrl("/")}, sameAs: [localizedMember.linkedin, localizedMember.instagram].filter((url) => url && url !== "/") }} /><TeamMemberProfile team={localizedMember} locale={locale} /></>
}
