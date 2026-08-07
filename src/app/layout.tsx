import type { Metadata, Viewport } from "next"
import "./globals.css"
import "./style/landing.css"
import "./style/media.css"
import "./style/sliders.css"
import "./style/service-single-page.css"
import "./style/about.css"
import "./style/weblog.css"
import "./style/video.css"
import { FeedbackProvider } from "../components/common/feedback-dialog"
import { SITE_URL } from "@/src/lib/seo"
import { headers } from "next/headers"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Gandom | Software Development, Product Design and SEO", template: "%s | Gandom" },
  description: "Gandom designs, builds and grows digital products through software development, product design and technical SEO.",
  applicationName: "Gandom", authors: [{ name: "Gandom", url: SITE_URL }], creator: "Gandom", publisher: "Gandom",
  category: "technology", icons: { icon: "/favicon.ico", apple: "/img/logo.png" },
  verification: { google: "Te99GpNYx_dMXAGjx_zT6mk9EK-OlmFAyiuV6FaGJKw" },
  formatDetection: { email: false, address: false, telephone: false },
}
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#212121" }
export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers()
  const locale = requestHeaders.get("x-gandom-locale") === "fa" ? "fa" : "en"
  return <html lang={locale} dir={locale === "fa" ? "rtl" : "ltr"}><body className="bg-gf"><FeedbackProvider>{children}</FeedbackProvider></body></html>
}
