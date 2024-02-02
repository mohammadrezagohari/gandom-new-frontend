"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";


function CompanySlider() {
  const company = [
    {
      id: 1,
      src: "/img/compony_1.png",
      alt: "company picture",
      width: "92",
      // height: "120",
    },
    {
      id: 2,
      src: "/img/compony_2.png",
      alt: "company picture",
      width: "146",
      // height: "122",
    },
    {
      id: 3,
      src: "/img/compony_3.png",
      alt: "company picture",
      width: "92",
      // height: "120",
    },
    {
      id: 4,
      src: "/img/compony_4.png",
      alt: "company picture",
      width: "110",
      // height: "122",
    },
    {
      id: 5,
      src: "/img/compony_5.png",
      alt: "company picture",
      width: "215",
      // height: "120",
    },
    {
      id: 6,
      src: "/img/compony_6.png",
      alt: "company picture",
      width: "110",
      // height: "122",
    },
    // {
    //   id: 7,
    //   src: "/img/compony_7.png",
    //   alt: "company picture",
    //   width: "92",
    //   height: "120",
    // },
    ,
  ];
  return (
    <>
      <Swiper
      
        slidesPerView={2.1}
        breakpoints={{
           
            768: {
              slidesPerView: 5,
              // spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              // spaceBetween: 50,
            },
        }}
        //   loop={true}
        //   spaceBetween={2}
        //   pagination={{
        //     clickable: true,
        //   }}
        //   modules={[Pagination]}
        className="mySwiper socialSilder"
      >
        {company.map((item, i) => (
          <SwiperSlide key={i} className="cursor-grab active:cursor-grabbing !flex !items-center !justify-center">
             <Image
              key={i}
              width={item.width}
              height={100}
              alt={item.alt}
              src={item.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default CompanySlider