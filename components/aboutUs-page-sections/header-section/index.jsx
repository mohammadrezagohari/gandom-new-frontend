import React from "react";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";

function HeaderSection() {
  return (
    <section className="w-full bg-g21 relative  flex flex-col items-center justify-start">
      {/* <div style={{backgroundImage:'radial-gradient(#212121,#D9D9D903)'}} className=" z-0 parentCircle absolute -top-[0%]  rounded-full border-2 border-red-400 h-[95rem] flex items-center justify-center">
        <div style={{backgroundImage:'radial-gradient(#212121,#D9D9D903)'}} className=" border-2  rounded-full w-full h-full flex items-center justify-center">
          <div style={{backgroundImage:'radial-gradient(#212121,#D9D9D903)'}} className=" border-2  rounded-full w-full h-full flex items-center justify-center">
            <div className=" border-2 bg-[#FFD101] blur-[300px] w-full h-full flex items-center justify-center"></div>
          </div>
        </div>
      </div> */}
      {/* <div className="parentCircle absolute left-0 right-0 -top-[25%] bg-[#D9D9D905] rounded-full border-2 w-full h-[95rem] flex items-center justify-center">
        <div className=" border-2 bg-[#D9D9D903] rounded-full w-[75rem] h-[75rem] flex items-center justify-center">
          <div className=" border-2 bg-[#D9D9D903] rounded-full w-[56.125rem] h-[56.125rem] flex items-center justify-center">
            <div className=" border-2 bg-[#FFD101] blur-[100px] w-[27.563rem] h-[27.563rem] flex items-center justify-center"></div>
          </div>
        </div>
      </div> */}

      <div className="z-10 container flex flex-col items-center justify-center">
        <div className="relative before:content-[''] before:absolute before:bg-[#FFD101] before:blur-[250px] before:w-[200px] before:h-[200px] before:lg:w-[300px] before:lg:h-[300px] before:rounded-full before:border-2 before:border-red-400 border-2 w-[6rem] h-[6rem] lg:w-[10rem] lg:h-[10rem] flex items-center justify-center">
          <Image
            width={100}
            height={100}
            alt={"logo picture"}
            src={"/about/logoo.svg"}
            className="w-full h-full"
          />
        </div>

        <div className=" border-2 lg:w-[60%] text-center flex flex-col items-center justify-center">
          <h1
            className={`text-gf lg:text-[3.7rem] text-center lg:leading-[84.75px] text-[1.7rem] leading-[40.68px] font-Holispay`}
          >
            We are a leader in the field of web and mobile software services
          </h1>

          <p className="text-gbc lg:text-[1.19rem] text-center lg:leading-9 text-sx leading-6 font-PoppinsRegular pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet,
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
