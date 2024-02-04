import ArticleSection from "@/components/weblog-page-sections/article-section";
import HeaderSection from "@/components/weblog-page-sections/header-section";
import VideoSection from "@/components/weblog-page-sections/video-section";
import React from "react";

function Weblog() {
  return (
    <main className="">
      <h1 className="text-g21 lg:text-[6.083333333333333vw] text-center text-[3.125em]  font-Holispay container max-w-none">
        Weblog
      </h1>

      <div className="flex flex-col justify-start items-center gap-[2.6rem] mb-[2.6rem]">
        <HeaderSection />
        <VideoSection />
        <ArticleSection />
      </div>
    </main>
  );
}

export default Weblog;
