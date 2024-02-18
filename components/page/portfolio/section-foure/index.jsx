import React from "react";
import SectionTitle from "@/components/common/section-title";
import Link from "next/link";
import Image from "next/image";
import OutlinedButton from "@/components/common/buttons/outlined";
function SectionFoure() {
  return (
    <section className="w-full  bg-g21 ">
      <div className="container max-w-none overflow-hidden ">
        <div className="grid grid-cols-12 lg:grid-cols-12 lg:min-h-[70vh] ">
          <div className="order-2 lg:order-1 h-[10rem] lg:h-auto relative col-span-12 lg:col-span-7 flex justify-center items-center ">
            <div className="absolute lg:-left-32 bottom-0 w-[120%] lg:w-[56.5vw] ">
              {/* w-[56rem] */}
              <Image
                width={100}
                height={100}
                className=" w-full h-full object-cover  "
                src={"/portfolio/sec4.svg"}
                alt={"picture"}
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 pt-0 pb-28 lg:pt-24 lg:pb-24  col-span-12 lg:col-span-5 flex flex-col justify-center items-start ">
            <SectionTitle classes="text-gf" title="Arefset " />
            <h3 className="lg:text-[1.58rem] inline-block text-gDarkYellow font-Holispay">
              Teaching and testing application for students
            </h3>
            <p className="py-5 text-[0.95rem] lg:text-[1.3rem] lg:leading-8 text-justify font-PoppinsRegular text-gb8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="py-4 flex justify-start items-center">
              <OutlinedButton
                classes="border-gf text-gf hover:text-g21"
                title=" See More Detail "
                link="/https://arefset.com"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFoure;
