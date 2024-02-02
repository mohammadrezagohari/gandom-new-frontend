import PictureBox from "@/components/common/picture-box";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionCounter from "@/components/common/service-section-counter";


function SectionOne() {
  return (
    <section className="w-full py-8 lg:py-12">
        <div style={{transform:' rotateY(180deg)',}} className="serviceCont px-[1rem] md:px-[2rem] lg:px-0 gap-2 lg:gap-0 min-h-[505px] grid grid-cols-12 grid-rows-2 ">
          <div style={{transform:' rotateY(180deg)',}} className="col-span-1 row-span-2  order-1">
              <SectionCounter writingMode="vertical-lr" classes="h-full" lineHeight="bg-g4c h-[64%] lg:h-[49%]" title=" Software Development" count="02" />
          </div> 
          <div style={{transform:' rotateY(180deg)',}} className="col-span-11 lg:col-span-5 lg:row-span-2 row-span-1 order-3 lg:order-2">
            <SectionTitle classes="text-g21" title="Software Development" />
            <p className="text-g8 lg:text-g4c lg:text-[1.34375vw] mt-[5%] lg:leading-[2.34375vw] text-justify text-base leading-6 font-bold font-PoppinsLight pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
            </p>
          </div> 
          <div style={{transform:' rotateY(180deg)',}} className="col-span-11 lg:col-span-6 lg:row-span-2 row-span-1 order-2 lg:order-3">
             <PictureBox  circleLgYellow="before:shadow-[53px_0px_0px_0px_#fff] after:shadow-[53px_14px_0px_0px_#fff]" circleSmYellow="before:shadow-[-7px_16px_0px_0px_#fff] after:shadow-[1px_16px_0px_0px_#fff]" circleClasses="bg-gf"  classes="bg-[url(/wimg.png)] rounded-l-lg rounded-r-lg lg:rounded-l-0 lg:rounded-r-lg w-full lg:w-[88%] lg:h-[30.92vw] h-[13.188rem]" />
          </div>
        </div>
        {/*/services/pic4.png     /wimg.png */}
    
    </section>
  );
}

export default SectionOne;
