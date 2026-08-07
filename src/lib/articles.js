import { and, asc, desc, eq, ne } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { articles } from "@/src/db/schema.mjs"
import {
  normalizeLocale,
  parseTranslationRecord,
  pickLocalizedText,
} from "./localizedContent"
import { normalizeTitle } from "./seo"

export function serializeArticle(article, locale = "en") {
  const normalizedLocale = normalizeLocale(locale)
  const titleTranslations = parseTranslationRecord(article.titleTranslations)
  const excerptTranslations = parseTranslationRecord(article.excerptTranslations)
  const contentTranslations = parseTranslationRecord(article.contentTranslations)
  const authorTranslations = parseTranslationRecord(article.authorTranslations, "Gandom Team")

  return {
    ...article,
    locale: normalizedLocale,
    titleTranslations,
    excerptTranslations,
    contentTranslations,
    authorTranslations,
    title: normalizeTitle(pickLocalizedText(titleTranslations, normalizedLocale), normalizedLocale),
    excerpt: pickLocalizedText(excerptTranslations, normalizedLocale),
    content: pickLocalizedText(contentTranslations, normalizedLocale),
    author: pickLocalizedText(authorTranslations, normalizedLocale, "Gandom Team"),
  }
}

function applyBaseOrdering(query) {
  return query.orderBy(desc(articles.publishedAt), asc(articles.sortOrder), desc(articles.id))
}

export function listArticles({ locale = "en", onlyActive = true, limit } = {}) {
  let query = db.select().from(articles)
  if (onlyActive) query = query.where(eq(articles.isActive, true))
  const rows = applyBaseOrdering(query).all()
  const items = rows.map((article) => serializeArticle(article, locale))
  return typeof limit === "number" ? items.slice(0, limit) : items
}

export function getArticleById(id, { locale = "en", onlyActive = true } = {}) {
  const numericId = Number(id)
  if (!Number.isInteger(numericId)) return null
  const conditions = [eq(articles.id, numericId)]
  if (onlyActive) conditions.push(eq(articles.isActive, true))
  const row = db.select().from(articles).where(and(...conditions)).get()
  return row ? serializeArticle(row, locale) : null
}

export function getRelatedArticles(currentArticleId, { locale = "en", limit = 3, onlyActive = true } = {}) {
  const numericId = Number(currentArticleId)
  const conditions = []
  if (Number.isInteger(numericId)) conditions.push(ne(articles.id, numericId))
  if (onlyActive) conditions.push(eq(articles.isActive, true))
  let query = db.select().from(articles)
  if (conditions.length) query = query.where(and(...conditions))
  return applyBaseOrdering(query).all().slice(0, limit).map((article) => serializeArticle(article, locale))
}
