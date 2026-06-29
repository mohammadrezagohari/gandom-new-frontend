import ArticleSection from "@/src/components/page/weblog/article-section"
import HeaderSection from "@/src/components/page/weblog/header-section"
import VideoSection from "@/src/components/page/weblog/video-section"

export default function Weblog() {
  return (
    <main>
      <h1 className="container max-w-none text-center text-[3.125em] text-g21 lg:text-[6.083333333333333vw] font-Holispay">Weblog</h1>
      <div className="mb-[2.6rem] flex flex-col items-center justify-start gap-[2.6rem]">
        <HeaderSection />
        <VideoSection />
        <ArticleSection locale="en" basePath="/article" />
      </div>
    </main>
  )
}
