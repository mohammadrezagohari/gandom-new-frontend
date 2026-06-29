import { getSingleMovieData } from "@/src/core/services/api/movies"
import VideoPlayerSection from "@/src/components/page/videos-single/video-player-section"
import VideoContent from "@/src/components/page/videos-single/video-content"
import CommentSection from "@/src/components/page/videos-single/comment-section"
import RelatedPostSection from "@/src/components/page/videos-single/related-post-section"

export default async function VideoSinglePage({ params }) {
  const { id } = await params
  const data = await getSingleMovieData(id)

  return (
    <main>
      <VideoPlayerSection />
      <VideoContent>
        <h1 className="text-start text-[1.7rem] leading-[40.68px] text-g25 lg:text-[3.7541666666666665vw] lg:leading-[5.517578125vw] font-Holispay">{data.title}</h1>
        <p className="py-6 text-base leading-6 tracking-wide text-g8 lg:text-[1.23vw] lg:leading-[1.95vw] font-PoppinsRegular text-justify">{data.plot}</p>
        <CommentSection />
        <RelatedPostSection />
      </VideoContent>
    </main>
  )
}
