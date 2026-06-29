"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { GoArrowDownLeft } from "react-icons/go"
import "swiper/css"
import "swiper/css/bundle"
import { useLocale, useTranslations } from "next-intl"
import FilledYellowButton from "../../../../components/common/buttons/fillYellow"
import SectionTitle from "../../../../components/common/section-title"
import { Navigation } from "swiper/modules"

export default function ServiceSlider({ service, title, context, lang }) {
  const locale = useLocale()
  const buttons = useTranslations("share.button")
  const isFa = locale === "fa"

  return (
    <>
      <div className="container h-full col-span-4">
        <div className="flex h-full flex-col justify-center gap-5">
          <SectionTitle title={title} lang={lang} />
          <p className={`pb-6 text-justify text-base leading-8 text-g8 lg:text-[1.3vw] lg:leading-[2.35vw] ${isFa ? "yekan-bakh-font" : "font-PoppinsLight"}`}>
            {context}
          </p>
          <div className="mt-8 flex items-center justify-start gap-8">
            <button aria-label="Previous service" className="servise_land_prev_btn flex h-12 w-12 items-center justify-center rounded-full border border-g21 lg:h-14 lg:w-14">
              <GoArrowDownLeft className={`text-xl lg:text-3xl ${isFa ? "rotate-180" : ""}`} />
            </button>
            <button aria-label="Next service" className="servise_land_next_btn flex h-12 w-12 items-center justify-center rounded-full bg-gYellow lg:h-14 lg:w-14">
              <GoArrowDownLeft className={`text-xl lg:text-3xl ${isFa ? "" : "rotate-180"}`} />
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-8 h-full min-w-0">
        <Swiper
          slidesPerView={isFa ? 2.65 : 3.2}
          spaceBetween={0}
          className="serviceSlider h-full"
          modules={[Navigation]}
          navigation={{ prevEl: ".servise_land_prev_btn", nextEl: ".servise_land_next_btn" }}
          breakpoints={{
            1024: { slidesPerView: isFa ? 2.65 : 3.2 },
            1280: { slidesPerView: isFa ? 2.85 : 3.35 },
          }}
        >
          {service.map((item) => (
            <SwiperSlide
              className={`serviceSliderItem !flex !h-auto min-h-[42rem] cursor-grab flex-col justify-between gap-7 border-s border-g6f px-5 py-10 transition-colors hover:bg-g21 xl:px-7 ${isFa ? "text-right" : "text-left"}`}
              key={item.id}
            >
              <div className="flex flex-col items-start gap-7">
                <h5 className="inline-block border-b-[1.5px] border-gYellow pb-2 text-3xl leading-none text-ge4 lg:text-[2.4vw]">
                  {item.number}
                </h5>
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-ge4 text-4xl text-g21">
                  {item.svg}
                </div>
                <div className="flex min-h-[9rem] w-full flex-col gap-3">
                  <h4 className={`break-words text-[1.8rem] leading-[1.35] text-g21 xl:text-[2.15rem] ${isFa ? "rokh-font-bold" : "font-Holispay"}`}>
                    {item.title}
                  </h4>
                  <h3 className={`text-sm leading-6 text-gDarkYellow ${isFa ? "yekan-bakh-font" : "font-PoppinsLight"}`}>
                    {item.shortDesc}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-7">
                <p className={`line-clamp-7 text-justify text-sm leading-7 text-g8 ${isFa ? "yekan-bakh-font" : "font-PoppinsLight"}`}>
                  {item.desc}
                </p>
                <FilledYellowButton classes="w-full px-3" link={item.link} title={buttons("see_more")} locale={locale} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
