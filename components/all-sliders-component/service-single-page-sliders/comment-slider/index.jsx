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
          spaceBetween={20}
          className="mySwiper commentSlider !h-full !px-5 "
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: navigationCommentPrevRef.current,
            nextEl: navigationCommentNextRef.current,
          }}
        >
          <SwiperSlide className="!flex !flex-col !items-center !justify-center !text-center !w-full  !h-full">
            <div className="w-[4.5rem] h-[4.5rem] lg:w-[7.125rem] lg:h-[7.125rem] rounded-full border-2 mb-[3%]">
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src={"/usercomment.svg"}
                alt={"user pic"}
              />
            </div>
            <p className="tracking-wide text-g4c text-[0.72rem] lg:text-[1.1rem] lg:leading-9 text-base text-justify leading-6 font-bold font-PoppinsLight lg:font-PoppinsRegular pb-6 line-clamp-4 ">            
               
             1.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna eiusmod tempor incididunt ut labore et dolore aliqua.
               
            </p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-gDarkYellow text-[0.7rem] lg:text-[0.87rem] text-justify font-PoppinsMedium ">Ali Asadpuor </span>
              <span className="text-g21 text-[0.52rem] lg:text-[0.7rem] text-justify font-PoppinsLight ">CEO of Testato</span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!flex !flex-col !items-center !justify-center !text-center !w-full  !h-full">
            <div className="w-[4.5rem] h-[4.5rem] lg:w-[7.125rem] lg:h-[7.125rem] rounded-full border-2 mb-[3%]">
              <Image
                width={100}
                height={100}
                className="w-full h-full object-cover"
                src={"/usercomment.svg"}
                alt={"user pic"}
              />
            </div>
            <p className="tracking-wide text-g4c text-[0.72rem] lg:text-[1.1rem] lg:leading-9 text-base text-justify leading-6 font-bold font-PoppinsLight lg:font-PoppinsRegular pb-6 line-clamp-4 ">            
               
             2.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna eiusmod tempor incididunt ut labore et dolore aliqua.
               
            </p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-gDarkYellow text-[0.7rem] lg:text-[0.87rem] text-justify font-PoppinsMedium ">Ali Asadpuor </span>
              <span className="text-g21 text-[0.52rem] lg:text-[0.7rem] text-justify font-PoppinsLight ">CEO of Testato</span>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
      <div className="flex items-center justify-start  gap-8 mt-[6%] ">
        <button
          className="w-[30px] h-[30px] lg:w-[56px] lg:h-[56px] rounded-full flex justify-center items-center border-[1px] border-g21 "
          ref={navigationCommentNextRef}
        >
          <GoArrowDownLeft className="lg:text-2xl text-xl" />
        </button>
        <button
          className="w-[30px] h-[30px] lg:w-[56px] lg:h-[56px] rounded-full flex justify-center items-center  bg-gYellow"
          ref={navigationCommentPrevRef}
        >
          <GoArrowDownLeft className="transform rotate-180 lg:text-2xl text-xl" />
        </button>
      </div>
    </div>
  );
}

export default CommentSlider;
