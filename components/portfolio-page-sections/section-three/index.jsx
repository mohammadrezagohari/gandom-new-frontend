import SectionTitle from "@/components/common/section-title";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import OutlinedButton from "@/components/common/buttons/outlined";
function SectionThree() {
  return (
    <section className="w-full bg-gf5   ">
      <div className="container max-w-none overflow-x-hidden lg:overflow-y-hidden ">
        <div className=" relative grid grid-cols-12 lg:grid-cols-12 lg:h-[70vh]">

          <div className="order-2 lg:order-1 py-12 lg:py-24 col-span-12 lg:col-span-5 flex flex-col justify-center items-start ">
            <SectionTitle classes="text-g21" title="Beauty Salon Rezarv " />
            <h3 className=" lg:text-[1.58rem] inline-block text-gDarkYellow font-Holispay">
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
          {/* w-[61.5rem] */}
          <div className="order-1 lg:order-2  lg:h-auto h-64 lg:absolute  lg:left-auto lg:-right-24 lg:top-0 lg:bottom-0  col-span-12 lg:col-span-7 flex justify-center items-center ">
            <div
            style={{boxShadow: 'inset 0px -60px 83px -6px #f5f5f5'}}
            className=" absolute -top-32 -right-10 -left-4 lg:relative lg:top-1 lg:right-auto lg:left-auto w-[110%] lg:w-[62vw]  ">
              <Image
                width={100}
                height={100}
                className=" lg:inline-block hidden w-full h-full object-cover  "
                src={"/portfolio/sec3.svg"}
                alt={"picture"}
              />
              <Image
                
                width={100}
                height={100}
                className="block lg:hidden w-full h-full object-cover  "
                src={"/portfolio/secSm3.svg"}
                alt={"picture"}
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SectionThree;
