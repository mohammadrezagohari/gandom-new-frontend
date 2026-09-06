import type { MetadataRoute } from "next"
import { eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { articles, teamMembers } from "@/src/db/schema.mjs"
import { absoluteUrl, SUPPORTED_LOCALES, toIsoDate } from "@/src/lib/seo"
import { serializeTeamMember } from "@/src/lib/team"

type SitemapEntry = MetadataRoute.Sitemap[number]
type ChangeFrequency = SitemapEntry["changeFrequency"]

const staticRoutes: Array<[string, number, ChangeFrequency]> = [
  ["", 1, "weekly"],
  ["about-us", 0.8, "monthly"],
  ["service", 0.9, "weekly"],
  ["portfolio", 0.8, "monthly"],
  ["weblog", 0.8, "daily"],
  ["article", 0.8, "daily"],
  ["team", 0.7, "monthly"],
  ["contact", 0.6, "monthly"],
]

const services: Array<[number, string]> = [
  [1, "software-development"],
  [2, "search-engine-optimization"],
  [3, "graphic-design"],
  [4, "web-development"],
  [5, "content-generate"],
  [6, "mobile-application"],
]

function entry(locale: string, route: string, options: Partial<SitemapEntry> = {}): SitemapEntry {
  const suffix = route ? `/${route}` : ""
  const languages = Object.fromEntries(
    SUPPORTED_LOCALES.map((item) => [item, absoluteUrl(`/${item}${suffix}`)]),
  )
  languages["x-default"] = absoluteUrl(`/en${suffix}`)

  return {
    url: absoluteUrl(`/${locale}${suffix}`),
    alternates: { languages },
    ...options,
  }
}

export async function getSitemapEntries(): Promise<MetadataRoute.Sitemap> {
  const articleRows = await db.select().from(articles).where(eq(articles.isActive, true))
  const memberRows = await db.select().from(teamMembers).where(eq(teamMembers.isActive, true))
  const result: MetadataRoute.Sitemap = []

  for (const locale of SUPPORTED_LOCALES) {
    for (const [route, priority, changeFrequency] of staticRoutes) {
      result.push(entry(locale, route, { priority, changeFrequency }))
    }

    for (const [id, slug] of services) {
      result.push(entry(locale, `service/${id}/${slug}`, {
        priority: 0.8,
        changeFrequency: "monthly",
      }))
    }

    for (const article of articleRows) {
      result.push(entry(locale, `article/${article.id}/${encodeURIComponent(article.slug)}`, {
        lastModified: toIsoDate(article.updatedAt || article.publishedAt),
        priority: 0.7,
        changeFrequency: "monthly",
      }))
    }

    for (const memberRow of memberRows) {
      const member = serializeTeamMember(memberRow, locale)
      const slug = `${member.name}-${member.family}`
        .trim()
        .replace(/\s+/g, "-")
        .toLowerCase()

      result.push(entry(locale, `team/${member.id}/${encodeURIComponent(slug)}`, {
        lastModified: toIsoDate(member.updatedAt),
        priority: member.isFormer ? 0.3 : 0.5,
        changeFrequency: "yearly",
      }))
    }
  }

  return result
}
