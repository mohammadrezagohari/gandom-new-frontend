import ContentSection from "@/src/components/page/articles/content-section"
import { staticMetadata } from "@/src/lib/staticPageMetadata"

export async function generateMetadata({ params }) { const { locale } = await params; return staticMetadata(locale, "article") }

const labels = {
  en: "Articles",
  fa: "مقالات",
}

export default async function Articles({ params }) {
  const { locale } = await params
  const isFa = locale === "fa"

  return (
    <main dir={isFa ? "rtl" : "ltr"}>
      <h1 className={`container max-w-none text-center text-[3.125em] text-g21 lg:text-[6.083333333333333vw] ${isFa ? "rokh-font-bold" : "font-Holispay"}`}>{labels[locale] || labels.en}</h1>
      <div className="mb-[2.6rem] flex flex-col items-center justify-start gap-[2.6rem]">
        <ContentSection locale={locale} basePath={`/${locale}/article`} />
      </div>
    </main>
  )
}
