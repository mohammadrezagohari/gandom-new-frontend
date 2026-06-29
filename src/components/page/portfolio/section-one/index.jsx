"use client";
import React from "react";
import SectionTitle from "@/src/components/common/section-title";
import Link from "next/link";
import Image from "next/image";
import OutlinedButton from "@/src/components/common/buttons/outlined";
import { useTranslations } from "next-intl";

function SectionOne() {
  const t = useTranslations("portfolio");
  const shared = useTranslations("shared");
  return (
    <section className="w-full bg-gf5 py-12 lg:py-24 ">
      <div className="container max-w-none  ">
        <div className="grid grid-cols-12 lg:grid-cols-12 gap-5 lg:gap-0 ">
          <div className="z-10 order-2 lg:order-1 col-span-12 lg:col-span-5 flex flex-col justify-center items-start ">
            <SectionTitle classes="text-g21" title={t("items.0.title")} />
            <h3 className="text-lg lg:text-[1.58rem] inline-block text-gDarkYellow font-Holispay">
              {t("items.0.subtitle")}
            </h3>
            <p className="py-5 text-[0.95rem] lg:text-[1.3rem] lg:leading-8 font-PoppinsRegular text-justify text-g4c">
              {t("items.0.description")}
            </p>
            <div className="py-4 flex justify-start items-center">
              <OutlinedButton
                classes="border-g21 text-g21"
                title={shared("see_details")}
                link="/"
              />
            </div>
          </div>
          <div className="z-0 order-1 lg:order-2 col-span-12 lg:col-span-7 flex justify-center items-center  ">
            <div className=" w-full lg:w-[65rem]  ">
              <Image
                width={100}
                height={100}
                className=" w-full h-full object-cover  "
                src={"/portfolio/sec1.svg"}
                alt={"picture"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
