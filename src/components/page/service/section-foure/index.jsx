import PictureBox from "@/src/components/common/picture-box";
import React from "react";
import SectionTitle from "@/src/components/common/section-title";
import SectionCounter from "@/src/components/common/service-section-counter";
import Link from "next/link";

function SectionFoure() {
  return (
    <section className="w-full bg-g21 py-8 lg:py-[3.125vw]">
      <div className="serviceCont px-[1rem] md:px-[2rem] lg:px-0 gap-2 lg:gap-0 min-h-[505px] grid grid-cols-12 grid-rows-2 ">
        <div className="col-span-1 row-span-2   order-1">
          <SectionCounter
            writingMode="vertical-rl"
            classes="h-full text-gec"
            lineHeight="bg-gec h-[68%] lg:h-[64%]"
            title=" Web Design"
            count="04"
          />
        </div>
        <div className="col-span-11 lg:col-span-5 lg:row-span-2 row-span-1  order-3 lg:order-2">
          <Link href={`/service/4/web-development`}>
            <SectionTitle classes="text-gec" title="Web Design" />
          </Link>
          <p className="text-gec lg:text-gec lg:text-[1.34375vw] mt-[5%] lg:leading-[2.34375vw] text-justify text-base leading-6 font-bold font-PoppinsLight pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae
          </p>
        </div>
        <div className="col-span-11 lg:col-span-6 lg:row-span-2 row-span-1  order-2 lg:order-3">
          <div className="w-full flex items-start justify-end">
            <PictureBox
              href={`/service/4/web-development`}
              circleLgYellow="before:shadow-[53px_0px_0px_0px_#212121] after:shadow-[53px_14px_0px_0px_#212121]"
              circleSmYellow="before:shadow-[-7px_16px_0px_0px_#212121] after:shadow-[1px_16px_0px_0px_#212121]"
              circleClasses="bg-g21"
              classes="pictureBoxRtl bg-[url(/img/s_1.jpg)] rounded-l-lg rounded-r-lg lg:rounded-r-0 lg:rounded-l-lg w-full lg:w-[88%] lg:h-[30.92vw] h-[13.188rem]"
            />
          </div>
        </div>
      </div>
      {/*/services/pic4.png     /wimg.png */}
    </section>
  );
}

export default SectionFoure;
