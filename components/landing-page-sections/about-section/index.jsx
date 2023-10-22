import FilledButton from "@/components/common/buttons/filled";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import React from "react";
function AboutSection() {
  return (
    <section className="w-full ">
      <div className="container py-[3vw] grid grid-cols-12 lg:grid-cols-12 border-2 ">
        {/* <div claassName="w-full grid grid-cols-12 lg:grid-cols-12" > */}
          <div className=" border-2 col-span-12 lg:col-span-7 order-2 lg:order-1" >
              <div className="w-full aboutSectionLeftColBg h-full p-3 flex flex-col items-start justify-center bg-aboutSectionGandomLogo bg-no-repeat bg-left" >
                  <SectionTitle classes="text-g21" title="About Us" />
                  <p className="text-justify text-g4c lg:text-[26px] lg:leading-[48px] text-[16px] leading-[24px] font-PoppinsLight ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
                    purus viverra accumsan in nisl nisi. Arcu cursus vitae Egestas purus
                    viverra accumsan in nisl nisi. Arcu cursus vitae
                  </p>
                  <div className="py-4 lg:py-8">

                    <FilledButton link='/' title='Read More' />
                  </div>
              </div>
          </div> 
          <div className="border-2 col-span-12 lg:col-span-5 order-1 lg:order-2" >2</div> 
        {/* </div> */}
      </div>
      {/* <div className="my-[10%] mt-[40%] lg:my-[7%] container min-h-[800px] max-h-[800px] gap-5 flex lg:flex-row flex-col-reverse items-center justify-between">
        <div className="aboutSectionLeftColBg w-full h-full lg:w-[56.5%] p-3 flex flex-col items-start justify-center bg-aboutSectionGandomLogo bg-no-repeat bg-left">
          <SectionTitle classes="text-g21" title="About Us" />
          <p className="text-justify text-g4c lg:text-[26px] lg:leading-[48px] text-[16px] leading-[24px] font-PoppinsLight ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae Egestas purus
            viverra accumsan in nisl nisi. Arcu cursus vitae
          </p>
          <div className="py-4 lg:py-8">

            <FilledButton link='/' title='Read More' />
          </div>
        </div>
        <div className="w-full h-full lg:w-[43.5%] mx-auto lg:mt-[5rem] flex items-center justify-center">


          <div className="w-full h-[16rem] lg:h-[26.875rem]  bg-gYellow rounded-3xl relative flex items-end">
            <div className=" flex items-end justify-center absolute right-[5%] bottom-[10%] left-[5%] w-[90%] h-[340px] lg:h-[700px]  mx-auto">

            <Image
              width={100}
              height={100}
              alt={'phone picture'}
              src={'/landing/phoneLanding.svg'}
              className="w-[90%]"
            /> 
            </div>
          </div>
         
        </div>
      </div> */}
      {/* <div className="container py-12 lg:py-36 gap-5 flex flex-wrap lg:flex-row flex-col-reverse items-center justify-between">
        <div className="aboutSectionLeftColBg lg:min-h-[635px] w-full lg:w-[55%] bg-aboutSectionGandomLogo bg-no-repeat bg-left ">
          <SectionTitle classes="text-g21" title="About Us" />
          <p className="text-justify text-g4c lg:text-[26px] lg:leading-[48px] text-[16px] leading-[24px] font-PoppinsLight ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae Egestas purus
            viverra accumsan in nisl nisi. Arcu cursus vitae
          </p>
          <div className="py-4 lg:py-8">

          <FilledButton link='/' title='Read More' />
          </div>
        </div>
        <div className=" w-full lg:w-[42%] h-[380px] lg:min-h-[700px]  flex items-end">
          <div className="w-full h-[60%] bg-gYellow rounded-3xl relative flex items-end">
            <div className=" flex items-end justify-center absolute right-[5%] bottom-[10%] left-[5%] w-[90%] h-[340px] lg:h-[700px]  mx-auto">

            <Image
              width={100}
              height={100}
              alt={'phone picture'}
              src={'/landing/phoneLanding.svg'}
              className="w-[90%]"
            /> 
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default AboutSection;
