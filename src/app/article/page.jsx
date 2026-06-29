import ContentSection from "@/src/components/page/articles/content-section"

export default function Articles() {
  return (
    <main>
      <h1 className="container max-w-none text-center text-[3.125em] text-g21 lg:text-[6.083333333333333vw] font-Holispay">Articles</h1>
      <div className="mb-[2.6rem] flex flex-col items-center justify-start gap-[2.6rem]">
        <ContentSection locale="en" basePath="/article" />
      </div>
    </main>
  )
}
