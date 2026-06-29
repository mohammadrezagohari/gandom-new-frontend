import ContentSection from "@/src/components/page/team/content-section"

const labels = {
  en: "Our Team",
  fa: "تیم ما",
}

export default async function TeamPage({ params }) {
  const { locale } = await params
  const isFa = locale === "fa"

  return (
    <main dir={isFa ? "rtl" : "ltr"}>
      <h1 className={`container max-w-none text-center text-[3.125em] text-g21 lg:text-[6.8em] ${isFa ? "rokh-font-bold" : "font-Holispay"}`}>{labels[locale] || labels.en}</h1>
      <div>
        <ContentSection locale={locale} />
      </div>
    </main>
  )
}
