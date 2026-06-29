export const SUPPORTED_LOCALES = ["fa", "en"]
export const DEFAULT_LOCALE = "en"

export function normalizeLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale) ? locale : DEFAULT_LOCALE
}

function normalizeText(value, maxLength = 5000) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : ""
}

export function safeJsonParse(value, fallback) {
  try {
    return value ? JSON.parse(value) : fallback
  } catch {
    return fallback
  }
}

export function normalizeTranslationRecord(value, options = {}) {
  const { maxLength = 5000, required = false, fallback = "" } = options
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {}
  const record = {}

  for (const locale of SUPPORTED_LOCALES) {
    record[locale] = normalizeText(source[locale], maxLength)
  }

  const firstValue = record.en || record.fa || normalizeText(fallback, maxLength)
  for (const locale of SUPPORTED_LOCALES) {
    if (!record[locale]) record[locale] = firstValue
  }

  if (required && !firstValue) return null
  return record
}

export function normalizeTranslationArrayRecord(value, options = {}) {
  const { maxItemLength = 200, maxItems = 50, required = false, fallback = [] } = options
  const source = value && typeof value === "object" && !Array.isArray(value) ? value : {}
  const record = {}

  for (const locale of SUPPORTED_LOCALES) {
    const items = Array.isArray(source[locale]) ? source[locale] : []
    record[locale] = items
      .map((item) => normalizeText(item, maxItemLength))
      .filter(Boolean)
      .slice(0, maxItems)
  }

  const firstValue = record.en.length ? record.en : record.fa.length ? record.fa : fallback
  for (const locale of SUPPORTED_LOCALES) {
    if (!record[locale].length) record[locale] = [...firstValue]
  }

  if (required && !firstValue.length) return null
  return record
}

export function parseTranslationRecord(value, fallback = "") {
  return normalizeTranslationRecord(safeJsonParse(value, {}), { fallback })
}

export function parseTranslationArrayRecord(value, fallback = []) {
  return normalizeTranslationArrayRecord(safeJsonParse(value, {}), { fallback })
}

export function pickLocalizedText(record, locale, fallback = "") {
  const normalized = normalizeLocale(locale)
  return record?.[normalized] || record?.en || record?.fa || fallback
}

export function pickLocalizedArray(record, locale, fallback = []) {
  const normalized = normalizeLocale(locale)
  const items = record?.[normalized]?.length ? record[normalized] : record?.en?.length ? record.en : record?.fa?.length ? record.fa : fallback
  return Array.isArray(items) ? items : fallback
}

export function stringifyTranslations(record) {
  return JSON.stringify(record || {})
}
