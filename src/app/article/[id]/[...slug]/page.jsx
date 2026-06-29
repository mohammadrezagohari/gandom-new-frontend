import { notFound } from "next/navigation"
import Image from "next/image"
import CommentSection from "@/src/components/page/article-single/comment-section"
import RelatedPostSection from "@/src/components/page/article-single/related-post-section"
import { getSinglePostData } from "@/src/core/services/api/videos"

function renderParagraphs(content) {
  return content.split(/\n{2,}/).filter(Boolean).map((paragraph, index) => (
    <p key={index} className="py-4 text-base leading-8 text-g8 lg:text-[1.05rem] lg:leading-9 font-PoppinsRegular whitespace-pre-wrap text-justify">
      {paragraph}
    </p>
  ))
}

export default async function ArticlePage({ params }) {
  const { id } = await params
  const article = await getSinglePostData(id, "en")
  if (!article?.id) notFound()

  return (
    <>
      <h1 className="text-start text-[1.7rem] leading-[40.68px] text-g25 lg:text-[3.7vw] lg:leading-[5.517578125vw] font-Holispay">{article.title}</h1>
      {article.excerpt && <p className="py-6 text-base leading-7 text-g70 lg:text-[1.25vw] lg:leading-[2vw] font-PoppinsLight">{article.excerpt}</p>}
      <div className="w-full rounded-xl lg:h-[67vh] overflow-hidden">
        <Image width={1400} height={900} className="h-full w-full rounded-xl object-cover" src={article.coverImage || "/wimg.png"} alt={article.title} />
      </div>
      {renderParagraphs(article.content)}
      <CommentSection articleId={String(article.id)} />
      <RelatedPostSection currentArticleId={article.id} locale="en" basePath="/article" />
    </>
  )
}
