import React from "react";
import SectionTitle from "@/components/common/section-title";
import Link from "next/link";
import Image from "next/image";
import OutlinedButton from "@/components/common/buttons/outlined";

function SectionOne() {
  return (
    <section className="w-full bg-gf5 py-12 lg:py-24 ">
      <div className="container max-w-none  ">
        <div className="grid grid-cols-12 lg:grid-cols-12 gap-5 lg:gap-0 ">
          <div className="z-10 order-2 lg:order-1 col-span-12 lg:col-span-5 flex flex-col justify-center items-start ">
            <SectionTitle classes="text-g21" title="Online Style" />
            <h3 className="text-lg lg:text-[1.58rem] inline-block text-gDarkYellow font-Holispay">
              Teaching and testing application for students
            </h3> 
            <p className="py-5 text-[0.95rem] lg:text-[1.3rem] lg:leading-8 font-PoppinsRegular text-justify text-g4c">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="py-4 flex justify-start items-center">

              <OutlinedButton classes="border-g21 text-g21"  title=' See More Detail ' link='/' />
            </div>
          </div>
          <div className="z-0 order-1 lg:order-2 col-span-12 lg:col-span-7 flex justify-center items-center  ">
            <div className=" w-full lg:w-[65rem]  ">
              <Image
                width={100}
                height={100}
                className=" w-full h-full object-cover  "
                src={"/portfolio/sec1.svg"}
                alt={"picture"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
