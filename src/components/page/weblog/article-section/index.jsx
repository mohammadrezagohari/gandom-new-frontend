import SectionTitle from "@/src/components/common/section-title"
import RecentArticleBox from "@/src/components/common/cards/recent-article-box"
import OutlinedButton from "@/src/components/common/buttons/outlined"
import { getPostsData } from "@/src/core/services/api/videos"

const labels = {
  en: { title: "Recent Articles", more: "See More" },
  fa: { title: "مقالات اخیر", more: "مشاهده همه" },
}

export default async function ArticleSection({ locale = "en", basePath }) {
  const copy = labels[locale] || labels.en
  const data = await getPostsData(locale)
  const articleBasePath = basePath || (locale ? `/${locale}/article` : "/article")

  return (
    <section className="w-full">
      <div className="container max-w-none">
        <SectionTitle classes="text-g21 py-[3%] lg:py-[1%]" title={copy.title} lang={locale} />

        <div className="recentArticleBoxContainer flex flex-col items-center justify-start gap-8">
          {data.slice(0, 3).map((item) => (
            <RecentArticleBox
              key={item.id}
              author={item.author}
              date={item.publishedAt}
              href={`${articleBasePath}/${item.id}/${item.slug}`}
              cardTitle={item.title}
              cardDesc={item.excerpt || item.content}
            />
          ))}
        </div>

        <div className="mb-8 mt-8 flex items-center justify-center lg:mb-[2.0833333333333335vw] lg:mt-[3.6458333333333335vw]">
          <OutlinedButton classes="border-g21 text-g21" title={copy.more} link={articleBasePath} />
        </div>
      </div>
    </section>
  )
}

