"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { GoArrowDownLeft } from "react-icons/go";
import Image from "next/image";

function CommentSlider() {
  const navigationCommentPrevRef = useRef(null);
  const navigationCommentNextRef = useRef(null);
  return (
    <div className="flex flex-col justify-start items-center ">
      <div className="w-full  min-h-[80px]">
        <Swiper
          spaceBetween={30}
          className="mySwiper commentSlider !h-full !px-5 "
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: navigationCommentPrevRef.current,
            nextEl: navigationCommentNextRef.current,
          }}
        >
          <SwiperSlide className="cursor-grab active:cursor-grabbing !flex !flex-col !items-center !justify-center !text-center !w-full gap-3 !h-full">
            <div className="w-[5rem] h-[5rem] lg:w-[7.421875vw] lg:h-[7.421875vw] rounded-full border-2 mb-[3%]">
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src={"/usercomment.svg"}
                alt={"user pic"}
              />
            </div> 
            <p className="tracking-wide text-g4c text-[0.72rem] lg:text-[1.1458333333333335vw] lg:leading-[2.34375vw] text-base text-justify leading-6 font-normal font-PoppinsLight lg:font-PoppinsRegular pb-6 line-clamp-4 ">            
               
             2.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna eiusmod tempor incididunt ut labore et dolore aliqua.
               
            </p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-gDarkYellow text-[0.8rem] lg:text-[0.90625vw] text-justify font-PoppinsMedium ">Ali Asadpuor </span>
              <span className="text-g21 text-[0.62rem] lg:text-[0.7291666666666666vw] text-justify font-PoppinsLight ">CEO of Testato</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="cursor-grab active:cursor-grabbing !flex !flex-col !items-center !justify-center !text-center !w-full gap-3 !h-full">
            <div className="w-[5rem] h-[5rem] lg:w-[7.421875vw] lg:h-[7.421875vw] rounded-full border-2 mb-[3%]">
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src={"/usercomment.svg"}
                alt={"user pic"}
              />
            </div> 
            <p className="tracking-wide text-g4c text-[0.72rem] lg:text-[1.1458333333333335vw] lg:leading-[2.34375vw] text-base text-justify leading-6 font-normal font-PoppinsLight lg:font-PoppinsRegular pb-6 line-clamp-4 ">            
               
             2.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna eiusmod tempor incididunt ut labore et dolore aliqua.
               
            </p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-gDarkYellow text-[0.8rem] lg:text-[0.90625vw] text-justify font-PoppinsMedium ">Ali Asadpuor </span>
              <span className="text-g21 text-[0.62rem] lg:text-[0.7291666666666666vw] text-justify font-PoppinsLight ">CEO of Testato</span>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
      <div className="flex items-center justify-start  gap-8 mt-[6%] ">
        <button
          className="w-[40px] h-[40px] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center border-[1px] border-g21 "
          ref={navigationCommentPrevRef}
          >
          <GoArrowDownLeft className="lg:text-2xl text-xl" />
        </button>
        <button
          className="w-[40px] h-[40px] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center  bg-gYellow"
          ref={navigationCommentNextRef}
        >
          <GoArrowDownLeft className="transform rotate-180 lg:text-[1.5625vw] text-xl" />
        </button>
      </div>
    </div>
  );
}

export default CommentSlider;
