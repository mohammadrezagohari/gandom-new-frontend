"use client"

import { useEffect } from "react"

export default function LocaleDocument({ locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === "fa" ? "rtl" : "ltr"
  }, [locale])
  return null
}
