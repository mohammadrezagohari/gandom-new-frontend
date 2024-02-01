import FilledButton from "@/components/common/buttons/filled";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import React from "react";
function AboutSection() {
  return (
    <section className="w-full mt-[30vh]">
      <div className="container max-w-none  gap-7 lg:gap-0 py-[3vw] grid grid-cols-12 lg:grid-cols-12 ">
        {/* <div claassName="w-full grid grid-cols-12 lg:grid-cols-12" > */}
          <div className=" col-span-12 lg:col-span-7 order-2 lg:order-1" >
              <div className="aboutSectionLeftColBg h-full w-full lg:w-[90%] flex flex-col items-start justify-center bg-aboutSectionGandomLogo bg-no-repeat bg-left" >
                  <SectionTitle classes="text-g21" title="About Us" />
                  <p className="text-justify text-g4c lg:text-[1.6927083333333333vw] lg:leading-[3.125vw] text-[16px] leading-[24px] font-PoppinsLight ">
                   df Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
                    purus viverra accumsan in nisl nisi. Arcu cursus vitae Egestas purus
                    viverra accumsan in nisl nisi. Arcu cursus vitae
                  </p>
                  <div className="py-4 lg:py-8">

                    <FilledButton link='/about-us' title='Read More' />
                  </div>
              </div>
          </div> 
          <div className=" col-span-12 lg:col-span-5 order-1 lg:order-2 flex items-end" >
            <div className="w-full h-[35vh] lg:h-[25vw] bg-gYellow rounded-3xl relative">
              <div className=" flex items-end justify-center absolute right-[5%] bottom-[5%] left-[5%] w-[90%]  h-[370px] lg:h-[35vw]  mx-auto">
                <Image
                  width={100}
                  height={100}
                  alt={'phone picture'}
                  src={'/landing/phoneLanding.svg'}
                  className="w-full h-full"
                /> 
              </div>
            </div>
          </div> 
        {/* </div> */}
      </div>
     
    </section>
  );
}

export default AboutSection;
