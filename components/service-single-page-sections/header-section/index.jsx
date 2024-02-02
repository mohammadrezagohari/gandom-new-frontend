import React from "react";
import FilledButton from "@/components/common/buttons/filled";
import FilledYellowButton from "@/components/common/buttons/fillYellow";
import Image from "next/image";
import ServiceSinglePictureBox from "@/components/common/service-single-picture-box";

function HeaderSection() {
  return (
    <section className="w-full bg-g21">
      <div className="container max-w-none grid lg:grid-cols-12 gap-8 lg:gap-0 py-[2.5rem] pb-[3.5rem] lg:py-[3.5rem]">
        <div className="col-span-1 lg:col-span-7 order-2 lg:order-1">
          <div className="">
                 <ServiceSinglePictureBox  circleLgYellow="before:shadow-[53px_0px_0px_0px_#212121] after:shadow-[53px_14px_0px_0px_#212121]" circleSmYellow="before:shadow-[-7px_16px_0px_0px_#212121] after:shadow-[1px_16px_0px_0px_#212121]" circleClasses="bg-g21"  classes="bg-[url(/wimg.png)] rounded-l-lg rounded-r-lg lg:rounded-l-0 lg:rounded-r-lg w-full lg:w-[85%] "  />
                {/* <Link href={`/service/seo`}>
                </Link>ServiceSinglePictureBox */}
            </div>
        </div>
        <div className="col-span-1 lg:col-span-5 order-1 lg:order-2">
          <div className=" h-full flex flex-col items-start justify-center">
            <h1 className="text-gYellow lg:text-[3.9583333333333335vw]  text-[2.3em]  font-Holispay ">
              Web Development
            </h1>
            <h2 className="text-gf lg:text-[3.6458333333333335vw]  text-[2em]  font-Holispay ">
              Services
            </h2>
            <p className="text-gf lg:text-xl text-justify lg:leading-9 text-base leading-6 font-PoppinsLight pb-6">
              Increase the profitability, availability, and efficiency of your
              business via the relevant web development solutions with the
              scalable architecture using the latest technologies and
              trends.Increase the profitability, availability, and efficiency of
              your business via the relevant web development solutions with the
              scalable architecture using the latest technologies and trends.
            </p>
            <div className="flex items-center lg:justify-start justify-between gap-3">
              <FilledButton link="/" title="Join Us" />
              <FilledYellowButton
                classes="w-auto"
                link={"/"}
                title="Portfolio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
