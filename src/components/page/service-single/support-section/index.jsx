"use client"
import React from "react"
import {useTranslations} from "next-intl"
import SectionTitle from "@/src/components/common/section-title"
export default function SupportSection(){const t=useTranslations("serviceDetail.support");return <section className="w-full"><div className="container max-w-none"><SectionTitle classes="text-g21" title={t("title")}/><p className="text-g8 lg:text-g4c lg:text-[1.25vw] lg:leading-[2.34vw] text-justify text-lg tracking-wide leading-7 font-PoppinsLight pb-6">{t("description")}</p></div></section>}