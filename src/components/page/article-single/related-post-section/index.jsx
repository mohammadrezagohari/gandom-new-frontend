import SectionTitle from "@/src/components/common/section-title"
import VideoCardBox from "@/src/components/common/cards/video-box"
import { getRelatedArticles } from "@/src/lib/articles"

const labels = {
  en: { title: "Related", link: "See more" },
  fa: { title: "مطالب مرتبط", link: "بیشتر ببینید" },
}

export default async function RelatedPostSection({ locale = "en", currentArticleId, basePath }) {
  const copy = labels[locale] || labels.en
  const data = await getRelatedArticles(currentArticleId, { locale, limit: 3, onlyActive: true })
  const articleBasePath = basePath || (locale ? `/${locale}/article` : "/article")

  if (!data.length) return null

  return (
    <section className="my-[5%]">
      <SectionTitle classes="text-g21" title={copy.title} lang={locale} />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-5">
        {data.map((item) => (
          <VideoCardBox
            key={item.id}
            parentClasses="border-gec bg-gec"
            titleClasses="text-g4c"
            descClasses="text-g8"
            linkClasses="text-gDarkYellow"
            dateClasses="text-g8"
            img={item.coverImage || "/wimg.png"}
            title={item.title}
            desc={item.excerpt || item.content}
            link={copy.link}
            date={item.publishedAt}
            href={`${articleBasePath}/${item.id}/${item.slug}`}
          />
        ))}
      </div>
    </section>
  )
}
