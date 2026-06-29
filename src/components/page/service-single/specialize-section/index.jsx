"use client"
import React from "react"
import {useTranslations} from "next-intl"
import SectionTitle from "@/src/components/common/section-title"
import SpecializeCard from "@/src/components/common/cards/service/specialize-card"
export default function SpecializeSection(){const t=useTranslations("serviceDetail.specialize"),items=Array.from({length:6},(_,i)=>({title:t(`${i}.title`),desc:t(`${i}.description`)}));return <section className="w-full"><div className="container max-w-none py-2 lg:py-12"><SectionTitle classes="text-g21" title={t("title")}/><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:my-2">{items.map((item,i)=><SpecializeCard key={i} title={item.title} desc={item.desc} classes="col-span-1"/>)}</div></div></section>}