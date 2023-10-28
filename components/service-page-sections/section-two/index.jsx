import PictureBox from "@/components/common/picture-box";
import React from "react";
import SectionTitle from "@/components/common/section-title";
import SectionCounter from "@/components/common/service-section-counter";
import Link from "next/link";

function SectionTwo() {
  return (
    <section className="w-full bg-gec py-8 lg:py-12">

        <div className="serviceCont px-[1rem] md:px-[2rem] lg:px-0 gap-2 lg:gap-0 h-[505px]  grid grid-cols-12 grid-rows-2 ">
          <div className="col-span-1 row-span-2   order-1">
            <SectionCounter  writingMode="vertical-rl" classes="h-full" lineHeight="bg-g4c h-[88%] lg:h-[84%]" title=" Seo" count="01" />
          </div> 
          <div className="col-span-11 lg:col-span-5 lg:row-span-2 row-span-1  order-3 lg:order-2">
            <Link href={`/service/seo`}>
              <SectionTitle classes="text-g21" title="Seo" />      
            </Link>       
            <p className="text-g8 lg:text-g4c lg:text-[1.29rem] mt-[5%] lg:leading-9 text-justify text-base leading-6 font-bold font-PoppinsLight pb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
            </p>
          </div>
          <div className="col-span-11 lg:col-span-6 lg:row-span-2 row-span-1  order-2 lg:order-3">
            <div className="w-full flex items-start justify-end">
                 <PictureBox href="/service/seo" circleLgYellow="before:shadow-[53px_0px_0px_0px_#ececec] after:shadow-[53px_14px_0px_0px_#ececec]" circleSmYellow="before:shadow-[-7px_16px_0px_0px_#ececec] after:shadow-[1px_16px_0px_0px_#ececec]" circleClasses="bg-gec " classes="pictureBoxRtl bg-[url(/wimg.png)] rounded-l-lg rounded-r-lg lg:rounded-r-0 lg:rounded-l-lg w-full lg:w-[88%] lg:h-[29.67rem] h-[13.188rem]" />
                {/* <Link href={`/service/seo`}>
                </Link> */}
            </div>
          </div>
        </div>
        {/*/services/pic4.png     /wimg.png */}
    
    </section>
  )
}

export default SectionTwo