export const SITE_NAME = "Gandom"
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://gandom.link").replace(/\/$/, "")
export const SUPPORTED_LOCALES = ["en", "fa"]

const localeCopy = {
  en: { defaultTitle: "Gandom | Software Development, Product Design and SEO", defaultDescription: "Gandom designs, builds and grows digital products through software development, product design, technical SEO and long-term support." },
  fa: { defaultTitle: "گندم | توسعه نرم‌افزار، طراحی محصول و سئو", defaultDescription: "گندم با توسعه نرم‌افزار، طراحی محصول، سئوی فنی و پشتیبانی مستمر به کسب‌وکارها برای ساخت و رشد محصولات دیجیتال کمک می‌کند." },
}
export function normalizeLocale(locale) { return SUPPORTED_LOCALES.includes(locale) ? locale : "en" }
export function normalizeTitle(value, locale = "en") {
  let title = String(value || "").normalize("NFKC").replace(/[\u200B\u200E\u200F\u2060\uFEFF]/g, "").replace(/[ \t\r\n]+/g, " ").replace(/\s+([،,:;!?؟])/g, "$1").trim()
  if (locale === "fa") title = title.replace(/ي/g, "ی").replace(/ك/g, "ک")
  return title
}
export function plainText(value) { return String(value || "").replace(/<[^>]*>/g, " ").replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/\s+/g, " ").trim() }
export function truncateDescription(value, max = 160) {
  const content = plainText(value)
  return content.length <= max ? content : `${content.slice(0, max - 1).replace(/\s+\S*$/, "").trim()}…`
}
export function absoluteUrl(path = "/") {
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
}
export function localizedAlternates(locale, pathname = "") {
  const cleanPath = pathname === "/" ? "" : `/${String(pathname).replace(/^\/+|\/+$/g, "")}`
  const languages = Object.fromEntries(SUPPORTED_LOCALES.map((item) => [item, absoluteUrl(`/${item}${cleanPath}`)]))
  languages["x-default"] = absoluteUrl(`/en${cleanPath}`)
  return { canonical: absoluteUrl(`/${normalizeLocale(locale)}${cleanPath}`), languages }
}
export function createPageMetadata({ locale = "en", pathname = "", title = "", description = "", image = "/poster.png", type = "website", publishedTime = undefined, modifiedTime = undefined, authors = [], noIndex = false }) {
  const normalizedLocale = normalizeLocale(locale)
  const copy = localeCopy[normalizedLocale]
  const normalizedTitle = normalizeTitle(title || copy.defaultTitle, normalizedLocale)
  const normalizedDescription = truncateDescription(description || copy.defaultDescription)
  const url = localizedAlternates(normalizedLocale, pathname).canonical
  const imageUrl = absoluteUrl(image || "/poster.png")
  return {
    title: normalizedTitle, description: normalizedDescription, alternates: localizedAlternates(normalizedLocale, pathname),
    robots: noIndex ? { index: false, follow: false, noarchive: true } : { index: true, follow: true },
    openGraph: { type, locale: normalizedLocale === "fa" ? "fa_IR" : "en_US", alternateLocale: normalizedLocale === "fa" ? ["en_US"] : ["fa_IR"], url, siteName: SITE_NAME, title: normalizedTitle, description: normalizedDescription, images: [{ url: imageUrl, alt: normalizedTitle }], ...(publishedTime ? { publishedTime } : {}), ...(modifiedTime ? { modifiedTime } : {}), ...(authors?.length ? { authors } : {}) },
    twitter: { card: "summary_large_image", title: normalizedTitle, description: normalizedDescription, images: [imageUrl] },
  }
}
export function safeJsonLd(value) { return JSON.stringify(value).replace(/</g, "\\u003c") }
export function toIsoDate(value) { if (!value) return undefined; const date = value instanceof Date ? value : new Date(value); return Number.isNaN(date.getTime()) ? undefined : date.toISOString() }
