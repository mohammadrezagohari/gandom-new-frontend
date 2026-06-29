import SectionTitle from "@/src/components/common/section-title"
import VideoCardBox from "@/src/components/common/cards/video-box"
import { getMoviesData } from "@/src/core/services/api/movies"

export default async function RelatedPostSection() {
  const data = await getMoviesData()
  const items = Array.isArray(data?.data) ? data.data : []

  return (
    <section className="my-[5%]">
      <SectionTitle classes="text-g21" title="Related Videos" />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {items.slice(0, 4).map((item) => (
          <VideoCardBox
            key={item.id}
            parentClasses="border-gec bg-gec"
            titleClasses="text-g4c"
            descClasses="text-g8"
            linkClasses="text-gDarkYellow"
            dateClasses="text-g8"
            img={item.poster || "/vImg.svg"}
            title={item.title}
            desc={item.plot}
            link="see more"
            date={item.year}
            href={`/videos/${item.id}/${encodeURIComponent(item.title)}`}
          />
        ))}
      </div>
    </section>
  )
}
