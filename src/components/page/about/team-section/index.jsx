import Link from "next/link"
import Image from "next/image"
import SectionTitle from "@/src/components/common/section-title"
import OutlinedButton from "@/src/components/common/buttons/outlined"
import GridCard from "@/src/components/common/cards/grid-card-about-page"
const cardShapes = [
  "bg-gYellow rounded-t-full overflow-hidden inline-block",
  "bg-g21 overflow-hidden inline-block rounded-tr-[50%] lg:rounded-none",
  "bg-gYellow rounded-tr-[50%] overflow-hidden hidden lg:inline-block",
  "bg-g21 rounded-bl-[50%] overflow-hidden inline-block",
  "bg-gYellow overflow-hidden inline-block rounded-b-full lg:rounded-none",
  "bg-g21 rounded-br-[50%] overflow-hidden hidden lg:inline-block",
]


export default function TeamSection({ members, formerCount, locale, copy }) {
  const specialties = new Set(members.map((member) => member.position).filter(Boolean)).size
  const statistics = [
    { number: String(members.length) + "+", title: copy.activeMembers },
    { number: String(specialties) + "+", title: copy.specialties },
    { number: String(formerCount), title: copy.formerMembers },
  ]
  const gridItems = members.slice(0, 6).map((member, index) => ({
    id: member.id,
    parentClasses: cardShapes[index],
    hoverClasses: "",
    position: member.position,
    name: member.name + " " + member.family,
    img: member.image,
    link: memberHref(member, locale),
  }))

  return (
    <section className="w-full">
      <div className="container max-w-none flex h-auto flex-col items-center justify-start gap-8 bg-gf lg:min-h-screen">
        <div className="w-full text-center lg:w-[50%]">
          <SectionTitle classes="text-g21" title={copy.title} />
        </div>

        <div className="grid w-full grid-cols-12 lg:gap-3">
          <div className="order-3 col-span-12 flex items-center justify-start lg:order-1 lg:col-span-2">
            <div className="flex h-full w-full flex-col items-center justify-center gap-12 lg:items-start">
              <h5 className="hidden text-justify text-xs leading-[1.8rem] text-g8 line-clamp-5 lg:block lg:text-[1.25vw] lg:leading-[2vw]">{copy.intro}</h5>
              <OutlinedButton classes="border-g8 text-g8" title={copy.seeAll} link={"/" + locale + "/team"} />
            </div>
          </div>

          <Grid gridItems={gridItems} moreLabel={copy.seeAll} />

          <div className="order-2 col-span-12 my-10 flex items-center justify-center lg:order-3 lg:col-span-2 lg:my-auto lg:justify-end">
            <ul className="flex flex-row items-center justify-between gap-10 lg:flex-col lg:items-start lg:justify-center lg:gap-[1.3020833333333333vw]">
              {statistics.map((item) => (
                <li key={item.title} className="text-center lg:text-start">
                  <span className="block text-[38px] leading-[40.68px] text-g21 font-Holispay lg:text-[3.8541666666666665vw] lg:leading-[5.517578125vw]">{item.number}</span>
                  <span className="block text-justify text-xs text-g70 line-clamp-5 lg:text-[1.1979166666666665vw]">{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Grid({ gridItems, moreLabel }) {
  return (
    <div className="order-1 col-span-12 grid grid-cols-2 grid-rows-2 gap-2 md:grid-cols-2 lg:order-2 lg:col-span-8 lg:h-[36vw] lg:grid-cols-3 lg:gap-[1vw] lg:px-5">
      {gridItems.map((item) => (
        <GridCard key={item.id} {...item} moreLabel={moreLabel} />
      ))}
    </div>
  )
}

export function FormerTeamSection({ members, locale, copy }) {
  if (!members.length) return null

  return (
    <section className="w-full bg-gf5 py-12 lg:py-20">
      <div className="container max-w-none">
        <div className="mb-9 max-w-3xl">
          <SectionTitle classes="text-g21" title={copy.formerTitle} />
          <p className="mt-3 text-base leading-8 text-g70">{copy.formerDescription}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {members.map((member) => (
            <Link key={member.id} href={memberHref(member, locale)} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white">
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
                <Image src={member.image} alt={`${member.name} ${member.family}`} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover grayscale transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-g21">{member.name} {member.family}</h3>
                <p className="mt-1 text-sm text-g70">{member.position}</p>
                {member.leftAt && <p className="mt-3 text-xs text-gray-400">{copy.leftAt}: {member.leftAt}</p>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function MemberCard({ member, locale, index }) {
  const dark = index % 3 === 1
  return (
    <Link href={memberHref(member, locale)} className={`group overflow-hidden rounded-3xl ${dark ? "bg-g21 text-white" : "bg-gYellow text-g21"}`}>
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image src={member.image} alt={`${member.name} ${member.family}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover object-top transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{member.name} {member.family}</h3>
        <p className={`mt-1 text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}>{member.position}</p>
      </div>
    </Link>
  )
}

function memberHref(member, locale) {
  const slug = `${member.name}-${member.family}`.trim().replace(/\s+/g, "-")
  return `/${locale}/team/${member.id}/${encodeURIComponent(slug)}`
}
