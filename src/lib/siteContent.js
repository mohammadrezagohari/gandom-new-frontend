import { asc, eq } from "drizzle-orm"
import { db } from "@/src/db/index.mjs"
import { siteContents } from "@/src/db/schema.mjs"
import { safeJsonParse } from "@/src/lib/localizedContent"
import { setNestedValue } from "@/src/content/siteDefaults"
export async function getSiteContentMessages(locale) {
  const result = {}
  try {
    const rows = await db.select().from(siteContents).where(eq(siteContents.isActive, true)).orderBy(asc(siteContents.sortOrder), asc(siteContents.id))
    for (const row of rows) {
      const translations = safeJsonParse(row.translations, {})
      let value = translations[locale] || translations.en || translations.fa || ""
      if (row.valueType === "json" && typeof value === "string") value = safeJsonParse(value, value)
      setNestedValue(result, row.key, value)
    }
  } catch (error) {
    if (!String(error?.message || "").includes("doesn't exist")) throw error
  }
  return result
}
export function serializeSiteContent(row) { return { ...row, translations: safeJsonParse(row.translations, { fa: "", en: "" }) } }
