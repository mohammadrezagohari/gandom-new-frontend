import HeaderSection from "@/components/page/articles/header-section";
import ContentSection from "@/components/page/articles/content-section";

function Articles() {
  return (
    <main className="">
      <h1 className="text-g21 lg:text-[6.083333333333333vw] text-center text-[3.125em]  font-Holispay container max-w-none">
        Articles
      </h1>
      <div className="flex flex-col justify-start items-center gap-[2.6rem] mb-[2.6rem]">
        <HeaderSection />
      </div>
      <div>
        <ContentSection />
      </div>
    </main>
  );
}

export default Articles;
