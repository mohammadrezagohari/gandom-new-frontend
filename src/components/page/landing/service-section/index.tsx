"use client"

import React from "react"
import { CiLaptop } from "react-icons/ci"
import { BsPhone } from "react-icons/bs"
import { TbWorldSearch } from "react-icons/tb"
import { useLocale, useTranslations } from "next-intl"
import SectionTitle from "../../../common/section-title"
import ServiceSlider from "../../../all-sliders-component/landing-sliders/service-slider"
import FilledYellowButton from "../../../common/buttons/fillYellow"

const serviceMeta = [
  { number: "01", svg: <CiLaptop />, link: "service/1/software-development" },
  { number: "02", svg: <TbWorldSearch />, link: "service/2/search-engine-optimization" },
  { number: "03", svg: <BsPhone />, link: "service/3/graphic-design" },
  { number: "04", svg: <CiLaptop />, link: "service/4/web-development" },
  { number: "05", svg: <TbWorldSearch />, link: "service/5/content-generate" },
  { number: "06", svg: <BsPhone />, link: "service/6/mobile-application" },
]

export default function ServiceSection() {
  const locale = useLocale()
  const landing = useTranslations("landing.our_services")
  const services = useTranslations("services")
  const buttons = useTranslations("share.button")
  const isFa = locale === "fa"
  const service = serviceMeta.map((item, index) => ({
    ...item,
    id: index + 1,
    title: services(`items.${index}.title`),
    desc: services(`items.${index}.description`),
    shortDesc: services(`items.${index}.title`),
    alt: services(`items.${index}.title`),
  }))

  return (
    <section className="w-full bg-gf5">
      <div className="serviceCont py-10 lg:py-0">
        <div className="hidden min-h-[48rem] grid-cols-12 gap-7 lg:grid">
          <ServiceSlider service={service} title={landing("title")} context={landing("context")} lang={locale} />
        </div>

        <div className="container lg:hidden">
          <SectionTitle classes="text-g21" title={landing("title")} lang={locale} />
          <p className={`pb-7 text-justify text-base leading-8 text-g8 ${isFa ? "yekan-bakh-font" : "font-PoppinsLight"}`}>
            {landing("context")}
          </p>
          <div className={`grid gap-4 ${isFa ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
            {service.map((item) => (
              <article key={item.id} className="flex min-h-[30rem] flex-col items-start justify-between gap-5 rounded-2xl border border-g6f bg-white p-5">
                <div className="flex w-full flex-col items-start gap-5">
                  <h5 className="border-b-2 border-gYellow pb-2 text-3xl text-ge4">{item.number}</h5>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-ge4 text-3xl text-g21">{item.svg}</div>
                  <h4 className={`break-words text-2xl leading-9 ${isFa ? "rokh-font-bold" : "font-Holispay"}`}>{item.title}</h4>
                  <p className={`line-clamp-6 text-justify text-sm leading-7 text-g8 ${isFa ? "yekan-bakh-font" : "font-PoppinsLight"}`}>{item.desc}</p>
                </div>
                <FilledYellowButton classes="w-full px-3" link={item.link} title={buttons("see_more")} locale={locale} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
