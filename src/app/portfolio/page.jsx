import SectionFive from "@/src/components/page/portfolio/section-five";
import SectionFoure from "@/src/components/page/portfolio/section-foure";
import SectionOne from "@/src/components/page/portfolio/section-one";
import SectionThree from "@/src/components/page/portfolio/section-three";
import SectionTwo from "@/src/components/page/portfolio/section-two";
import React from "react";

function Portfolio() {
  return (
    <main className="">
      <h1 className="text-g21 lg:text-[6.083333333333333vw] text-center text-[3.125em]  font-Holispay container max-w-none">
        Portfolio
      </h1>

      <div className="flex flex-col justify-start items-center ">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFoure />
        <SectionFive />
      </div>
    </main>
  );
}

export default Portfolio;
