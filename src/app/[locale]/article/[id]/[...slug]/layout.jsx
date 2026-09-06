import ArticleContent from "@/src/components/page/article-single/article-content"
import Link from "next/link"
import Image from "next/image"
import { getArticleById, listArticles } from "@/src/lib/articles"

const labels = {
  en: { latest: "Latest Articles", minutes: "minutes" },
  fa: { latest: "آخرین مقالات", minutes: "دقیقه" },
}

export default async function RootLayout({ children, params }) {
  const { id, locale } = await params
  const isFa = locale === "fa"
  const copy = labels[locale] || labels.en
  const currentArticle = await getArticleById(id, { locale, onlyActive: true })
  const data = await listArticles({ locale, onlyActive: true, limit: 6 })

  return (
    <div dir={isFa ? "rtl" : "ltr"} className="container relative grid max-w-none grid-cols-12 gap-8 lg:grid-cols-12">
      <aside className="col-span-12 hidden flex-col lg:sticky lg:top-0 lg:left-0 lg:col-span-4 lg:flex lg:p-6">
        {currentArticle && (
          <div className="relative mb-12 h-[67vh] w-full overflow-hidden rounded-xl">
            <Image width={1200} height={900} className="h-full w-full rounded-xl object-cover" src={currentArticle.coverImage || "/wimg.png"} alt={currentArticle.title} />
            <div className="absolute inset-0 flex items-end justify-start rounded-xl bg-g4c bg-opacity-[50%]">
              <h4 className={`absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[1.7rem] text-gf lg:text-[2.8125vw] ${isFa ? "rokh-font-bold" : "font-Holispay"}`}>{currentArticle.title}</h4>
              <div className="flex items-center justify-start gap-1 p-5 lg:p-7">
                <span className={`text-base text-gDarkYellow lg:text-[1.25vw] ${isFa ? "yekan-bakh-font" : "font-PoppinsRegular"}`}>{currentArticle.publishedAt}</span>
                <span className={`text-base text-gf lg:text-[1.25vw] ${isFa ? "yekan-bakh-font" : "font-PoppinsRegular"}`}>/</span>
                <span className={`text-base text-gf lg:text-[1.25vw] ${isFa ? "yekan-bakh-font" : "font-PoppinsRegular"}`}>{currentArticle.readingMinutes} {copy.minutes}</span>
              </div>
            </div>
          </div>
        )}
        <div className="hidden w-full rounded-xl border-[1.5px] border-ge4 bg-gec p-5 lg:block">
          <h4 className={`w-full border-b-[1px] border-gd5 pb-3 text-[1.7rem] text-g4c lg:pb-[0.78125vw] lg:text-[2.3vw] ${isFa ? "rokh-font-bold" : "font-Holispay"}`}>{copy.latest}</h4>
          <ul className="mt-4 w-full lg:mt-[16px]">
            {data.map((item) => (
              <li key={item.id}>
                <Link href={`/${locale}/article/${item.id}/${item.slug}`} className={`flex items-start justify-start gap-2 py-2 text-base text-g4c lg:gap-[0.5208333333333334vw] lg:py-[0.5208333333333334vw] lg:text-[1.15vw] ${isFa ? "yekan-bakh-font" : "font-PoppinsRegular"}`}>
                  <span className="text-[3rem] text-gDarkYellow">&#8226;</span>
                  <span className="leading-8">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <ArticleContent classes="col-span-12 lg:col-span-8">
        <>{children}</>
      </ArticleContent>
    </div>
  )
}
