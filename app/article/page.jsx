import HeaderSection from "@/components/articles-page-sections/header-section";
import ContentSection from "@/components/articles-page-sections/content-section";

function Articles() {
  return (
    <main className="">
      <h1 className="text-g21 lg:text-[6.8em] text-center text-[3.125em]  font-Holispay container">
        Articles
      </h1>
      <div className="flex flex-col justify-start items-center gap-[2.6rem] mb-[2.6rem]">
        <HeaderSection />
      </div>
      <div>
        <ContentSection  />
      </div>
    </main>
  );
}

export default Articles;
