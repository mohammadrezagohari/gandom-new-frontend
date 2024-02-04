import React from "react";
import { GoArrowDownLeft } from "react-icons/go";
function GlassmorphismBox({ title, desc, link = null }) {
  return (
    <div>
      <div className="glassBox w-[278.92px] min-h-[160.01px] lg:w-[37.337239583333336vw] lg:h-[21.419270833333332vw]  p-4 pb-[15%] lg:p-7 rounded-md relative">
        <h3 className="text-gf mb-[1%] lg:mb-[5%] lg:text-[32px] lg:leading-[36.16px] text-xl leading-[40.68px] font-Holispay ">
          {title}
        </h3>
        <p className="text-gf lg:text-justify lg:text-[1.171875vw] lg:leading-[1.7578125vw] text-[15px] leading-[24px] font-normal font-PoppinsLight tracking-wide line-clamp-4">
          {desc}
        </p>
        <div className="absolute -bottom-5 right-4 lg:border-4 border-4 boreder-g21 w-[30.64px] h-[30.64px] lg:w-[63px] lg:h-[63px] rounded-full  border-g21 flex justify-center items-center bg-gYellow lg:text-2xl text-xl">
          <a href={link??""} target="_blank">
            <GoArrowDownLeft className="transform rotate-180" />
          </a>
        </div>
        {/* <div style={{border:'1px solid rgba(199, 199, 199, 0.68)',}} className=" absolute -bottom-7 right-8 lg:-bottom-14 lg:right-10 w-[45.64px] h-[45.64px] lg:w-[93px] lg:h-[93px] bg-transparent rounded-full flex justify-center items-center">
          <div className="w-[30.64px] h-[30.64px] lg:w-[63px] lg:h-[63px] rounded-full flex justify-center items-center  bg-gYellow">
            <GoArrowDownLeft className="transform rotate-180 lg:text-2xl text-xl" /> text-justify text-lg tracking-wide leading-7 font-normal
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default GlassmorphismBox;
