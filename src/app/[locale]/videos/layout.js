import { createPageMetadata } from "@/src/lib/seo"
export async function generateMetadata({ params }) {
  const { locale } = await params
  return createPageMetadata({ locale, pathname: "videos", title: locale === "fa" ? "ویدئوهای فناوری" : "Technology Videos", description: locale === "fa" ? "آرشیو آزمایشی ویدئوهای فناوری گندم." : "Gandom's experimental technology video archive.", noIndex: true })
}
export default function Layout({ children }) { return children }
