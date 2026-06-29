"use client"
import React from "react"
import {CiLaptop} from "react-icons/ci"
import {BsPhone} from "react-icons/bs"
import {TbWorldSearch} from "react-icons/tb"
import {useTranslations} from "next-intl"
import ReasonsToWorkSlider from "@/src/components/all-sliders-component/service-single-page-sliders/reasonsToWork-slider"
export default function ReasonsToWorkSection(){const t=useTranslations("serviceDetail.reasons"),icons=[<CiLaptop key="0"/>,<BsPhone key="1"/>,<TbWorldSearch key="2"/>,<CiLaptop key="3"/>,<BsPhone key="4"/>,<TbWorldSearch key="5"/>],reasons=icons.map((svg,i)=>({id:i+1,svg,title:t(`${i}.title`),desc:t(`${i}.description`)}));return <section className="w-full py-10 overflow-x-hidden"><div className="serviceCont"><div className="grid grid-cols-12 gap-9 lg:gap-5"><ReasonsToWorkSlider reasons={reasons} title={t("title")}/></div></div></section>}