"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowDownLeft } from "react-icons/go";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import FilledYellowButton from "@/src/components/common/buttons/fillYellow";
import SectionTitle from "@/src/components/common/section-title";
import { Pagination, Navigation } from "swiper/modules";
import GlassmorphismSmBox from "@/src/components/common/glassmorphism-box/sm";
// mod
function OurWorkSlider({ service }) {
  const navigationOurWorkPrevRef = useRef(null);
  const navigationOurWorkNextRef = useRef(null);

  return (
    <>
      <div className="container col-span-4">
        <div className="flex flex-col justify-center gap-5 lg:gap-[1.3020833333333333vw] h-full">
          <SectionTitle title="Our Work" />

          <p className="text-g8 lg:text-[1.3020833333333333vw] lg:leading-[2.34375vw] text-justify text-base leading-6 font-PoppinsLight pb-6 lg:pb-[1.5625vw]">
            Examples of our work in the field of website design
          </p>

          <div className="flex items-center justify-start  gap-[2.0833333333333335vw] mt-[1.3020833333333333vw]  ">
            <button
              className="w-[30px] h-[30px] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center border-[1px] border-g21 "
              ref={navigationOurWorkPrevRef}
            >
              <GoArrowDownLeft className="lg:text-[1.5625vw] text-xl" />
            </button>
            <button
              className="w-[30px] h-[30px] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center  bg-gYellow"
              ref={navigationOurWorkNextRef}
            >
              <GoArrowDownLeft className="transform rotate-180 lg:text-[1.5625vw] text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full !h-full font-PoppinsSemiBold col-span-8">
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          className="mySwiper h-full "
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: navigationOurWorkPrevRef.current,
            nextEl: navigationOurWorkNextRef.current,
          }}
        >
          {service.map((item, i) => (
            <SwiperSlide
              className=" cursor-grab active:cursor-grabbing transition-all duration-300 transform ease-linear !flex !flex-col !justify-between !items-start"
              key={i}
            >
              <div
                style={{ backgroundImage: `url(${item.bgImg})` }}
                className={`w-full h-[24.479166666666668vw] relative bg-no-repeat bg-center bg-cover rounded-xl border-[1px] flex items-end justify-end`}
              >
                {/* <Image
                  width={100}
                  height={100}
                  alt={"picture"}
                  src={item.bgImg}
                  className="w-full h-full object-cover rounded-xl z-10"
                />  */}
                {/* <div className="absolute m-10">
                  <GlassmorphismSmBox title="Online appointment application" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ." />
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
{
  /* <Image
width={100}
height={100}
alt={"picture"}
src={item.bgImg}
className="w-full h-full object-cover"
/> */
}
export default OurWorkSlider;
