import SectionFive from "@/components/portfolio-page-sections/section-five";
import SectionFoure from "@/components/portfolio-page-sections/section-foure";
import SectionOne from "@/components/portfolio-page-sections/section-one";
import SectionThree from "@/components/portfolio-page-sections/section-three";
import SectionTwo from "@/components/portfolio-page-sections/section-two";
import React from "react";

function Portfolio() {
  return (
    <main className="">
      <h1 className="text-g21 lg:text-[6.083333333333333vw] text-center text-[3.125em]  font-Holispay container max-w-none">
        Portfolio
      </h1> 

      <div className="flex flex-col justify-start items-center mb-[2.6rem]">
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
