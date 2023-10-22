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
          src: "/landing/company2.svg",
          alt: "company picture",
          width: "92",
          height: "120",
        },
        {
          id: 2,
          src: "/landing/company1.svg",
          alt: "company picture",
          width: "110",
          height: "122",
        },
        {
          id: 3,
          src: "/landing/company2.svg",
          alt: "company picture",
          width: "92",
          height: "120",
        },
        {
          id: 4,
          src: "/landing/company1.svg",
          alt: "company picture",
          width: "110",
          height: "122",
        },
        {
          id: 5,
          src: "/landing/company2.svg",
          alt: "company picture",
          width: "92",
          height: "120",
        },
        {
          id: 6,
          src: "/landing/company1.svg",
          alt: "company picture",
          width: "110",
          height: "122",
        },
        {
          id: 7,
          src: "/landing/company2.svg",
          alt: "company picture",
          width: "92",
          height: "120",
        },
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
          <SwiperSlide key={i}>
             <Image
              key={i}
              width={item.width}
              height={item.height}
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