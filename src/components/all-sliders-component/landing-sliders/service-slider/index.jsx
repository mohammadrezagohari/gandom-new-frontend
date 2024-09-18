"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowDownLeft } from "react-icons/go";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// import { Pagination, Navigation } from "swiper";
import Image from "next/image";
import FilledYellowButton from "../../../../components/common/buttons/fillYellow";
import SectionTitle from "../../../../components/common/section-title";
import { Pagination, Navigation } from "swiper/modules";
// mod
function ServiceSlider({ service, title, context, lang }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <div className="container h-full col-span-4">
        <div
          className={`flex flex-col justify-center gap-5 lg:gap-[1.3020833333333333vw] h-full`}
        >
          <SectionTitle title={title} lang={lang} />

          <p
            className={`text-g8 lg:text-[1.3vw] lg:leading-[2.34375vw] text-justify text-base leading-6 ${
              lang == "fa" ? "yekan-bakh-font" : "font-PoppinsLight"
            } pb-6`}
          >
            {context}
          </p>

          <div className="flex items-center justify-start  gap-8 mt-[4.166666666666667vw] ">
            <button className="servise_land_prev_btn w-[1.953125vw] h-[1.953125vw] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center border-[1px] border-g21 ">
              <GoArrowDownLeft className="lg:text-[1.9vw] text-xl" />
            </button>
            <button className="servise_land_next_btn w-[1.953125vw] h-[1.953125vw] lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] rounded-full flex justify-center items-center  bg-gYellow">
              <GoArrowDownLeft className="transform rotate-180 lg:text-[1.9vw] text-xl" />
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
            prevEl: ".servise_land_prev_btn",
            nextEl: ".servise_land_next_btn",
          }}
        >
          {service.map((item, i) => (
            <SwiperSlide
              className="serviceSliderItem cursor-grab active:cursor-grabbing border-s-[1px] border-g6f transition-all duration-300 transform ease-linear  hover:bg-g21 p-6 pt-[8%] !flex !flex-col !justify-between !items-start"
              key={i}
            >
              {/* {i} */}
              <div className=" !flex !flex-col !justify-between !items-start !gap-10 ">
                <h5 className="text-[26px] leading-[30.47px] lg:text-[2.6vw] lg:leading-[3.6vw] inline-block text-ge4 pb-[5%] border-b-[1.5px] border-gYellow">
                  {item.number}
                </h5>
                <div className="text-[2.9296875vw] w-[5.533854166666667vw] h-[5.533854166666667vw] text-g21 rounded-full border-[1px] border-ge4 flex justify-center items-center ">
                  {item.svg}
                </div>
                <h4
                  className={`lg:text-[3.2552083333333335vw] lg:leading-[1.8313802083333333vw] text-[30px] leading-[33.9px] ${
                    lang == "fa" ? "rokh-font-bold" : "font-Holispay"
                  } `}
                >
                  {item.title}
                </h4>
                <h3
                  className={`text-gDarkYellow lg:text-[1.171875vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-PoppinsLight ${
                    lang == "fa" ? "yekan-bakh-font" : "font-PoppinsLight"
                  }`}
                >
                  {item.shortDesc}
                </h3>
              </div>

              <div className=" h-[45%] flex flex-col justify-between items-center">
                <p
                  className={` mt-3 text-g8 text-justify lg:text-[0.9765625vw] lg:leading-[1.7578125vw] text-[12px] leading-[14.06px] ${
                    lang == "fa" ? "yekan-bakh-font" : "font-PoppinsLight"
                  } `}
                >
                  {item.desc}
                </p>

                <FilledYellowButton
                  classes="w-full px-3"
                  link={item.link}
                  title="Read More"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ServiceSlider;
