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
// mod
function ServiceSlider({service}) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  
  return (
    <>
      <div className="container col-span-4">

        <div className="flex flex-col justify-center gap-5 h-full">
          
       <SectionTitle title="Our services" />

        <p className="text-g8 lg:text-[1.3vw] lg:leading-9 text-justify text-base leading-6 font-PoppinsLight pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae
        </p>

        <div className="flex items-center justify-start  gap-8 mt-16 ">

          <button
           className="servise_land_next_btn w-[30px] h-[30px] lg:w-[56px] lg:h-[56px] rounded-full flex justify-center items-center border-[1px] border-g21 "
          >
             <GoArrowDownLeft className="lg:text-2xl text-xl" />
          </button>
          <button
            className="servise_land_prev_btn w-[30px] h-[30px] lg:w-[56px] lg:h-[56px] rounded-full flex justify-center items-center  bg-gYellow"
          >
            <GoArrowDownLeft className="transform rotate-180 lg:text-2xl text-xl" />
          </button>
       
        </div>
        </div>
      </div>
      <div className=" w-full !h-full font-PoppinsSemiBold col-span-8">
        <Swiper
          slidesPerView={3.5}
          className="mySwiper h-full serviceSlider  "
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: '.servise_land_prev_btn',
            nextEl: '.servise_land_next_btn',
          }}
        >
          {service.map((item, i) => (
            <SwiperSlide
              className="serviceSliderItem border-e-[1px] border-g6f transition-all duration-300 transform ease-linear  hover:bg-g21 p-6 pt-[8%] !flex !flex-col !justify-between !items-start"
              key={i}
            >
              {/* {i} */}
             <div className=" !flex !flex-col !justify-between !items-start !gap-10 ">

              <h5 className="text-[26px] leading-[30.47px] lg:text-[2.6vw] lg:leading-[3.6vw] inline-block text-ge4 pb-[5%] border-b-[1.5px] border-gYellow">
                {item.number}
              </h5>
              <div className="text-[45px] w-[85px] h-[85px] text-g21 rounded-full border-[1px] border-ge4 flex justify-center items-center ">
                {item.svg}
              </div>
              <h4 className="lg:text-[50px] lg:leading-[28.13px] text-[30px] leading-[33.9px] font-Holispay ">
                {item.title}
              </h4>
              <h3 className="text-gDarkYellow lg:text-lg lg:leading-[28.13px] text-[12px] leading-[14.06px] font-PoppinsLight ">
                {item.shortDesc}
              </h3>
              </div>

              <div className=" h-[45%] flex flex-col justify-between items-center">
                <p className=" mt-3 text-g8 text-justify lg:text-[0.9765625vw] lg:leading-[1.7578125vw] text-[12px] leading-[14.06px] font-PoppinsLight ">
                  {item.desc}
                </p>

                <FilledYellowButton classes="w-full" link={item.link} title="Read More" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ServiceSlider;
