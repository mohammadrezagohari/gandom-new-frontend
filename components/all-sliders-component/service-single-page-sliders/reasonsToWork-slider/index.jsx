"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowDownLeft } from "react-icons/go";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import FilledYellowButton from "@/components/common/buttons/fillYellow";
import SectionTitle from "@/components/common/section-title";
import { Pagination,Navigation } from 'swiper/modules';
import CardBox from "@/components/common/cards/card-box";
// mod
function ReasonsToWorkSlider({reasons}) {
  const navigationReasonsPrevRef = useRef(null);
  const navigationReasonsNextRef = useRef(null);

  
  return (
    <>
      <div className="container col-span-12 lg:col-span-4">

        <div className="flex flex-col justify-center gap-5 lg:gap-[1.3020833333333333vw] h-full">
          
          <SectionTitle title="Reasons To Work With Us" />

    
          <div className="hidden lg:flex items-center justify-start  gap-[2.0833333333333335vw] mt-[1.3020833333333333vw] ">

            <button
            className="w-[30px] h-[30px] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center border-[1px] border-g21 "
            ref={navigationReasonsPrevRef}
            >
              <GoArrowDownLeft className="lg:text-[1.5625vw] text-xl" />
            </button>
            <button
              className="w-[30px] h-[30px] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center  bg-gYellow"
              ref={navigationReasonsNextRef}
            >
              <GoArrowDownLeft className="transform rotate-180 lg:text-[1.5625vw] text-xl" />
            </button>
        
          </div>
        </div>
      </div>
      <div className=" w-full !min-h-[19.4375vw] font-PoppinsSemiBold col-span-12 lg:col-span-8 ">
        <Swiper
          effect= "slider"
          slidesPerView={1.3}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            640: {
              centeredSlides:false,
              loop:false,
              slidesPerView: 1.3,
              spaceBetween: 10,
            },
            768: {
              centeredSlides:false,
              loop:false,
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              centeredSlides:false,
              loop:false,
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
          className="mySwiper !h-full "
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: navigationReasonsPrevRef.current,
            nextEl: navigationReasonsNextRef.current,
          }}
        >
          {reasons.map((item, i) => (
            <SwiperSlide
              className=" !h-full cursor-grab active:cursor-grabbing"
              key={i}
            >
             <CardBox parentClasses="!h-full !w-full border-g70 gap-5 lg:gap-[1.3020833333333333vw] p-5 py-8 lg:p-[1.5625vw] lg:py-[2.34375vw] lg:w-auto" circleClasses="w-[6rem] h-[6rem] lg:w-[6.25vw] lg:h-[6.25vw] bg-gYellow text-3xl" titleClasses="text-g21 text-2xl lg:text-[1.6vw]  text-justify font-Holispay" descClasses="text-g8 text-justify text-base tracking-wide leading-7 lg:text-[0.88125vw] lg:leading-[1.5vw] text-justify font-PoppinsLight line-clamp-5" icon={item.svg}title={item.title}desc={item.desc}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ReasonsToWorkSlider;

{/* <Swiper
effect= "slider"
slidesPerView='auto'
breakpoints={{
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2.2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3.2,
    spaceBetween: 20,
  },
}}
centeredSlides={true}
spaceBetween={10}
loop={true}
className="mySwiper !h-full "
modules={[Pagination, Navigation]}
navigation={{
  prevEl: navigationPrevRef.current,
  nextEl: navigationNextRef.current,
}}
>
{reasons.map((item, i) => (
  <SwiperSlide
    className="!h-full  !w-[300px] "
    key={i}
  >
   <CardBox parentClasses="!h-full !w-full gap-5 p-6 py-9 lg:w-auto" circleClasses="w-[6rem] h-[6rem] bg-gYellow text-3xl" titleClasses="text-g21 lg:text-2xl  text-justify font-Holispay" descClasses="text-g8 text-xs  text-justify font-PoppinsLight line-clamp-5" icon={item.svg}title={item.title}desc={item.desc}/>
  </SwiperSlide>
))}
</Swiper> */}