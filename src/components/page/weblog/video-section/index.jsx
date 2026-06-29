import SectionTitle from "@/src/components/common/section-title"
import { getMoviesData } from "@/src/core/services/api/movies"
import OutlinedButton from "@/src/components/common/buttons/outlined"
import VideoCardBox from "@/src/components/common/cards/video-box"

export default async function VideoSection() {
  const data = await getMoviesData()
  const items = Array.isArray(data?.data) ? data.data : []

  return (
    <section className="w-full bg-g21">
      <div className="container max-w-none">
        <SectionTitle classes="text-gYellow py-[3%] lg:py-[1%]" title="Recent Videos" />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {items.slice(0, 4).map((item) => (
            <VideoCardBox
              key={item.id}
              parentClasses="border-g3c bg-g3c"
              titleClasses="text-gf"
              descClasses="text-gb8"
              linkClasses="text-gDarkYellow"
              dateClasses="text-gb8"
              img={item.poster || "/vImg.svg"}
              title={item.title}
              desc={item.plot}
              link="see more"
              date={item.year}
              href={`/videos/${item.id}/${encodeURIComponent(item.title)}`}
            />
          ))}
        </div>

        <div className="my-8 flex items-center justify-center lg:my-[2.0833333333333335vw]">
          <OutlinedButton classes="border-gec text-gec hover:text-g21" title="See More" link="/videos" />
        </div>
      </div>
    </section>
  )
}
