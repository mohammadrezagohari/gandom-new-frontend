"use client";
import React from "react";
import Image from "next/image";
import SectionTitle from "@/src/components/common/section-title";
import CardBox from "@/src/components/common/cards/card-box";
import { CiLaptop } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";
import Accordion from "@/src/components/accordion";
import { useTranslations } from "next-intl";

// document
function PropertySection() {
  const t = useTranslations("about.values");
  const reasons = [
    {id:1,svg:<CiLaptop />,title:t("0.title"),desc:t("0.description")},
    {id:2,svg:<BsPhone />,title:t("1.title"),desc:t("1.description")},
    {id:3,svg:<TbWorldSearch />,title:t("2.title"),desc:t("2.description")},
    {id:4,svg:<CiLaptop />,title:t("3.title"),desc:t("3.description")}
  ];
  const accordionItems = reasons.slice(0, 3);
  return (
    <section className="w-full bg-g21">
      <div className=" container max-w-none flex flex-col justify-start items-start">
        <div style={{ zIndex: "10" }}>
          <SectionTitle
            classes="text-gYellow"
            title={t("title")}
          />
          <div className="my-[10%] lg:my-[2%] grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {reasons.map((item, i) => (
              <div key={i} className="col-span-1">
                <CardBox
                  parentClasses="cardBoxHover cursor-pointer bg-g21 hover:bg-g30 hover:border-g30 border-g4c gap-3 lg:gap-5 p-4 lg:p-6 lg:py-9"
                  circleClasses="w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] bg-g30 text-gYellow hover:bg-gYellow text-2xl lg:text-3xl"
                  titleClasses="text-gf lg:text-[1.5625vw]  text-justify font-Holispay"
                  descClasses="text-gb0 text-xs lg:text-[0.8468749999999999vw] leading-5 lg:leading-[1.3020833333333333vw] text-justify font-PoppinsLight line-clamp-5"
                  icon={item.svg}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{ zIndex: "10" }}
          className="w-full grid grid-cols-12 lg:grid-cols-12 "
        >
          <div className="col-span-12 lg:col-span-5 text-red-300">
            <div className="w-[98%]">
              <Image
                width={100}
                height={100}
                alt={
                  "logo picture | img | لوگو | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم | لوگوی گندم"
                }
                src={"/about/aboutlogo.svg"}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 text-gf py-[10%]">
            {accordionItems.map((item, i) => (
              <Accordion key={i} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertySection;
