import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"
import { createDefaultSiteMessages, mergeDeep } from "@/src/content/siteDefaults"
import { getSiteContentMessages } from "@/src/lib/siteContent"

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale
  const baseMessages = structuredClone((await import(`../../messages/${locale}.json`)).default)
  mergeDeep(baseMessages, createDefaultSiteMessages(locale))
  mergeDeep(baseMessages, getSiteContentMessages(locale))
  return { locale, messages: baseMessages }
})
