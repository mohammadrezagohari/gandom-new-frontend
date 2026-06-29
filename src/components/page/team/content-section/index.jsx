import TeamCard from "@/src/components/common/cards/team"
import { asc, eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { teamMembers } from "@/src/db/schema.mjs"
import { serializeTeamMember } from "@/src/lib/team"

const labels = {
  en: { seeMore: "See more" },
  fa: { seeMore: "بیشتر ببینید" },
}

export default async function ContentSection({ locale }) {
  const normalizedLocale = locale || "en"
  const members = db.select().from(teamMembers)
    .where(eq(teamMembers.isActive, true))
    .orderBy(asc(teamMembers.sortOrder), asc(teamMembers.id))
    .all()
    .map((member) => serializeTeamMember(member, normalizedLocale))

  const basePath = locale ? `/${locale}/team` : "/team"
  const copy = labels[normalizedLocale] || labels.en

  return (
    <section className="w-full">
      <div className="container max-w-none">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {members.map((item) => (
            <TeamCard
              key={item.id}
              img={item.image}
              href={`${basePath}/${item.id}/${encodeURIComponent(`${item.name} ${item.family}`)}`}
              name={item.name}
              family={item.family}
              position={item.position}
              link={copy.seeMore}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
