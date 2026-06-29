"use client";
import React from "react";
import SectionTitle from "@/src/components/common/section-title";
import Link from "next/link";
import Image from "next/image";
import OutlinedButton from "@/src/components/common/buttons/outlined";
import { useTranslations } from "next-intl";

function SectionTwo() {
  const t = useTranslations("portfolio");
  const shared = useTranslations("shared");
  return (
    <section className="w-full bg-g21  ">
      <div className="container max-w-none ">
        <div className="grid grid-cols-12 lg:grid-cols-12 lg:gap-0 ">
          <div className="relative h-[450px] lg:h-auto order-2 lg:order-1 col-span-12 lg:col-span-7 flex justify-center items-center ">
            <div className="h-full lg:h-auto lg:absolute lg:-bottom-4 w-[120%] lg:w-[68rem] ">
              <Image
                width={100}
                height={100}
                className=" w-full h-full object-cover "
                src={"/portfolio/sec2.svg"}
                alt={"picture"}
              />
            </div>
          </div>
          <div className="py-10 lg:py-20 order-1 lg:order-2 col-span-12 lg:col-span-5 flex flex-col justify-center items-start ">
            <SectionTitle classes="text-gf" title={t("items.1.title")} />
            <h3 className="text-lg lg:text-[1.58rem] inline-block text-gDarkYellow font-Holispay">
              {t("items.1.subtitle")}
            </h3>
            <p className="py-5 text-[0.95rem] lg:text-[1.3rem] lg:leading-8 text-justify font-PoppinsRegular text-gb8">
              {t("items.1.description")}
            </p>
            <div className="py-4 flex justify-start items-center">
              <OutlinedButton
                classes="border-gf text-gf hover:text-g21"
                title={shared("see_details")}
                link="/https://testato.ir"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
