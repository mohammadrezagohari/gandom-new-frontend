import {
  normalizeTranslationRecord,
  stringifyTranslations,
} from "./localizedContent"
import { normalizeTitle } from "./seo"

function clean(value, maxLength, required = false) {
  const result = typeof value === "string" ? value.trim().slice(0, maxLength) : ""
  return required && !result ? null : result
}

function normalizeSlug(value) {
  const base = clean(value, 160) || ""
  return base
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 160)
}

export function articleData(body) {
  const fallbackTitle = clean(body?.title, 200)
  const fallbackExcerpt = clean(body?.excerpt, 1200)
  const fallbackContent = clean(body?.content, 20000)
  const fallbackAuthor = clean(body?.author, 120)

  const rawTitles = normalizeTranslationRecord(body?.titleTranslations, { maxLength: 200, required: true, fallback: fallbackTitle })
  const titleTranslations = rawTitles && { en: normalizeTitle(rawTitles.en, "en"), fa: normalizeTitle(rawTitles.fa, "fa") }
  const excerptTranslations = normalizeTranslationRecord(body?.excerptTranslations, { maxLength: 1200, fallback: fallbackExcerpt })
  const contentTranslations = normalizeTranslationRecord(body?.contentTranslations, { maxLength: 20000, required: true, fallback: fallbackContent })
  const authorTranslations = normalizeTranslationRecord(body?.authorTranslations, { maxLength: 120, fallback: fallbackAuthor || "Gandom Team" })

  if (!titleTranslations || !contentTranslations || !authorTranslations) return null

  const slug = normalizeSlug(body?.slug || titleTranslations.en || titleTranslations.fa)
  if (!slug) return null

  return {
    slug,
    titleTranslations: stringifyTranslations(titleTranslations),
    excerptTranslations: stringifyTranslations(excerptTranslations),
    contentTranslations: stringifyTranslations(contentTranslations),
    authorTranslations: stringifyTranslations(authorTranslations),
    coverImage: clean(body?.coverImage, 500) || "/wimg.png",
    publishedAt: clean(body?.publishedAt, 50) || new Date().toISOString().slice(0, 10),
    readingMinutes: Number.isInteger(Number(body?.readingMinutes)) ? Math.max(1, Number(body.readingMinutes)) : 5,
    sortOrder: Number.isInteger(Number(body?.sortOrder)) ? Number(body.sortOrder) : 0,
    isActive: body?.isActive !== false,
  }
}
