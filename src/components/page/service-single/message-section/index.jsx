"use client"
import React from "react"
import {useTranslations} from "next-intl"
import MassageBox from "@/src/components/common/massage-box-form"
import SectionTitle from "@/src/components/common/section-title"
export default function MessageSection(){const t=useTranslations("serviceDetail.message"),shared=useTranslations("shared");return <section className="w-full"><div className="container max-w-none"><div className="container max-w-none bg-gf5 rounded-3xl py-[5%]"><div className="mx-auto text-center mb-[2%]"><SectionTitle classes="text-g21 hidden lg:block" title={t("title")}/><SectionTitle classes="text-g21 lg:hidden block" title={t("mobileTitle")}/></div><MassageBox formType="contract" title={shared("send_message")} inputClasses="placeholder-g21" classes="border-[#21212199]" buttonStyle="text-gf bg-g21"/></div></div></section>}