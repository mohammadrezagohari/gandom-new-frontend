import React from "react";
import HeaderSection from "./../../components/videos-page-sections/header-section/index";
import ContentSection from "@/components/videos-page-sections/content-section";

function Video() {
  return (
    <main className="">
      <h1 className="text-g21 lg:text-[6.083333333333333vw] text-center text-[3.125em]  font-Holispay container max-w-none">
        Video
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

export default Video;
