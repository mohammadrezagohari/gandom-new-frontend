import ArticleSection from "@/src/components/page/weblog/article-section"
import HeaderSection from "@/src/components/page/weblog/header-section"
import VideoSection from "@/src/components/page/weblog/video-section"

const labels = {
  en: "Weblog",
  fa: "وبلاگ",
}

export default async function Weblog({ params }) {
  const { locale } = await params
  const isFa = locale === "fa"

  return (
    <main dir={isFa ? "rtl" : "ltr"}>
      <h1 className={`container max-w-none text-center text-[3.125em] text-g21 lg:text-[6.083333333333333vw] ${isFa ? "rokh-font-bold" : "font-Holispay"}`}>{labels[locale] || labels.en}</h1>
      <div className="mb-[2.6rem] flex flex-col items-center justify-start gap-[2.6rem]">
        <HeaderSection />
        <VideoSection />
        <ArticleSection locale={locale} basePath={`/${locale}/article`} />
      </div>
    </main>
  )
}
