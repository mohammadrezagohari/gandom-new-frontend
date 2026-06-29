"use client"
import React from "react"
import { CiLaptop } from "react-icons/ci"
import { BsPhone } from "react-icons/bs"
import { TbWorldSearch } from "react-icons/tb"
import { useLocale, useTranslations } from "next-intl"
import SectionTitle from "../../../common/section-title"
import ServiceSlider from "../../../all-sliders-component/landing-sliders/service-slider"

const serviceMeta = [
  {number:"01",svg:<CiLaptop />,link:"service/1/software-development"},
  {number:"02",svg:<TbWorldSearch />,link:"service/2/search-engine-optimization"},
  {number:"03",svg:<BsPhone />,link:"service/3/graphic-design"},
  {number:"04",svg:<CiLaptop />,link:"service/4/web-development"},
  {number:"05",svg:<TbWorldSearch />,link:"service/5/content-generate"},
  {number:"06",svg:<BsPhone />,link:"service/6/mobile-application"}
]

export default function ServiceSection(){
  const locale=useLocale()
  const landing=useTranslations("landing.our_services")
  const services=useTranslations("services")
  const service=serviceMeta.map((item,index)=>({...item,id:index+1,title:services(`items.${index}.title`),desc:services(`items.${index}.description`),shortDesc:services(`items.${index}.title`),alt:services(`items.${index}.title`)}))
  return <section className="w-full bg-gf5 relative">
    <div className="serviceCont py-7 lg:py-0">
      <div className="hidden lg:grid lg:grid-cols-12 min-h-[42.31vw] mid:gap-9 lg:gap-7">
        <ServiceSlider service={service} title={landing("title")} context={landing("context")} lang={locale}/>
      </div>
      <div className="container lg:hidden">
        <SectionTitle classes="text-g21" title={landing("title")} lang={locale}/>
        <p className={`text-g8 text-justify text-base leading-6 ${locale==="fa"?"yekan-bakh-font":"font-PoppinsLight"} pb-6`}>{landing("context")}</p>
        <div className="grid grid-cols-2 gap-3">
          {service.map(item=><div key={item.id} className="flex flex-col justify-between items-start gap-5 border border-g6f rounded-lg p-4">
            <h5 className="text-[26px] leading-[30px] inline-block text-ge4 pb-[5%] border-b-[1.5px] border-gYellow">{item.number}</h5>
            <div className="w-[62px] text-g21 h-[62px] rounded-full border border-ge4 flex justify-center items-center">{item.svg}</div>
            <h4 className={`text-[30px] leading-[34px] ${locale==="fa"?"rokh-font-bold":"font-Holispay"}`}>{item.title}</h4>
            <h3 className={`text-gDarkYellow text-xs ${locale==="fa"?"yekan-bakh-font":"font-PoppinsLight"}`}>{item.shortDesc}</h3>
          </div>)}
        </div>
      </div>
    </div>
  </section>
}
