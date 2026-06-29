import { getMoviesData } from "@/src/core/services/api/movies"
import VideoCardBox from "@/src/components/common/cards/video-box"

export default async function ContentSection() {
  const data = await getMoviesData()
  const items = Array.isArray(data?.data) ? data.data : []

  return (
    <section className="w-full">
      <div className="container max-w-none">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {items.map((item) => (
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
      </div>
    </section>
  )
}
