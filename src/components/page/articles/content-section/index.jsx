import { getPostsData } from "@/src/core/services/api/videos"
import VideoCardBox from "@/src/components/common/cards/video-box"

const labels = {
  en: { link: "See more" },
  fa: { link: "بیشتر ببینید" },
}

export default async function ContentSection({ locale = "en", basePath }) {
  const copy = labels[locale] || labels.en
  const data = await getPostsData(locale)
  const articleBasePath = basePath || (locale ? `/${locale}/article` : "/article")

  return (
    <section className="w-full">
      <div className="container max-w-none">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
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
      </div>
    </section>
  )
}
