import Link from "next/link";
import React from "react";
import Image from "next/image";

import { GoArrowDownLeft } from "react-icons/go";

function ContactSection() {
  return (
    <section className="w-full  my-24">
      <div className="container max-w-none flex  lg:flex-row flex-col items-center justify-between gap-6 lg:gap-0">
        <div className="w-full h-[210px] lg:h-[237px] lg:w-[60%] flex items-center justify-start overflow-hidden bg-g21 rounded-xl border-2  px-6 relative ">
          <h2 className="text-gYellow lg:text-[55px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
            You Can Contact Us For Advice And Guidance
          </h2>

            {/* <Image
              width={10}
              height={10}
              alt={'phone picture'}
              src={'/VectorGandom.svg'}
              className="absolute -top-5 right-0 inline-block h-[356.02px] w-[430px]  "
            />  */}
        </div>
        <div className="w-full h-[210px] lg:h-[237px] lg:w-[17%] p-7  lg:p-5 bg-gYellow rounded-xl text-center lg:text-start border-2  ">
          <Link
            className="inline-flex flex-col gap-8 lg:gap-0 justify-between items-center w-full h-full  "
            href={"/"}
          >
            <h3 className="text-g21 lg:text-[36px] lg:leading-[49.72px] text-[36px] leading-[40.68px] font-Holispay ">
              Click Here To Start
            </h3>
            <div className=" w-[68px] h-[68px] lg:w-[70px] lg:h-[70px] rounded-full border-[1px] border-g21 flex justify-center items-center text-3xl">
              <GoArrowDownLeft className="transform rotate-180" />
            </div>
          </Link>
        </div>
        <div className="w-full h-[210px] lg:h-[237px] lg:w-[21%] lg:col-span-2 p-5 py-6 rounded-xl border-2 gap-5 lg:text-start text-center inline-flex flex-col lg:justify-start justify-between items-center">
          <div className="flex -space-x-4 overflow-hidden">
            <Image
              width={10}
              height={10}
              alt={'phone picture'}
              src={'/avatar1.png'}
              className="inline-block h-[67px] w-[67px] rounded-full ring-2 ring-white"
            /> 
            <Image
              width={10}
              height={10}
              alt={'phone picture'}
              src={'/avatar2.png'}
              className="inline-block h-[67px] w-[67px] rounded-full ring-2 ring-white"
            /> 
            <Image
              width={10}
              height={10}
              alt={'phone picture'}
              src={'/avatar3.png'}
              className="inline-block h-[67px] w-[67px] rounded-full ring-2 ring-white"
            /> 
           <Image
              width={10}
              height={10}
              alt={'phone picture'}
              src={'/avatar1.png'}
              className="inline-block h-[67px] w-[67px] rounded-full ring-2 ring-white"
            /> 
          
          </div>
          <span className="text-g21 text-2xl lg:text-lg leading-[36px] font-PoppinsMedium  px-5 ">+5 support ready to answer</span>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
{/* <section className="w-full ">
<div className="container grid grid-cols-1 lg:grid-cols-12 gap-3 ">
  <div className="col-span-1 lg:col-span-8 overflow-hidden bg-g21 rounded-xl border-2 p-12 px-6 relative lg:p-16">
    <h2 className="text-gYellow lg:text-[55px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
      You Can Contact Us For Advice And Guidance
    </h2>

    
  </div>
  <div className="col-span-1 lg:col-span-2 bg-gYellow rounded-xl text-center lg:text-start border-2 p-8 ">
    <Link
      className="inline-flex flex-col gap-8 lg:gap-0 justify-between items-center w-full h-full  "
      href={"/"}
    >
      <h3 className="text-g21 lg:text-[36px] lg:leading-[49.72px] text-[36px] leading-[40.68px] font-Holispay ">
        Click Here To Start
      </h3>
      <div className=" w-[68px] h-[68px] lg:w-[70px] lg:h-[70px] rounded-full border-[1px] border-g21 flex justify-center items-center text-3xl">
        <GoArrowDownLeft className="transform rotate-180" />
      </div>
    </Link>
  </div>
  <div className="col-span-1 lg:col-span-2 py-5 rounded-xl border-2 gap-5 lg:text-start text-center inline-flex flex-col lg:justify-start justify-between items-center">
    <div className="flex -space-x-4 overflow-hidden">
      <Image
        width={10}
        height={10}
        alt={'phone picture'}
        src={'/avatar1.png'}
        className="inline-block h-[76px] w-[76px] rounded-full ring-2 ring-white"
      /> 
      <Image
        width={10}
        height={10}
        alt={'phone picture'}
        src={'/avatar2.png'}
        className="inline-block h-[76px] w-[76px] rounded-full ring-2 ring-white"
      /> 
      <Image
        width={10}
        height={10}
        alt={'phone picture'}
        src={'/avatar3.png'}
        className="inline-block h-[76px] w-[76px] rounded-full ring-2 ring-white"
      /> 
     <Image
        width={10}
        height={10}
        alt={'phone picture'}
        src={'/avatar1.png'}
        className="inline-block h-[76px] w-[76px] rounded-full ring-2 ring-white"
      /> 
    
    </div>
    <span className="text-g21 text-lg leading-[36px] font-PoppinsMedium  px-5 ">+5 support ready to answer</span>
  </div>
</div>
</section> */}