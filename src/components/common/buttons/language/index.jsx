"use client"

import React from "react"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

const locales = new Set(["fa", "en"])

export default function LanguageButton({ isDark }) {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  function changeLanguage(event) {
    const nextLocale = event.target.value
    const segments = pathname.split("/")
    if (locales.has(segments[1])) segments[1] = nextLocale
    else segments.splice(1, 0, nextLocale)

    const nextPath = segments.join("/") || `/${nextLocale}`
    const suffix = typeof window === "undefined" ? "" : `${window.location.search}${window.location.hash}`
    router.replace(`${nextPath}${suffix}`, { scroll: false })
  }

  return (
    <label className={`border-language-box rounded ${locale === "fa" ? "rtl" : "ltr"}`}>
      <span className="sr-only">Change language</span>
      <select
        style={{ color: isDark ? "#D9D9D9" : "#070000" }}
        className="bg-transparent p-2 outline-none"
        name="change-language"
        value={locale}
        onChange={changeLanguage}
      >
        <option className="text-gray-900" value="en">EN</option>
        <option className="text-gray-900" value="fa">FA</option>
      </select>
    </label>
  )
}
