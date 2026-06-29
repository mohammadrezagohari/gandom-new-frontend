"use client";
import React from "react";
import SectionTitle from "@/src/components/common/section-title";
import MassageBox from "@/src/components/common/massage-box-form";
import { useTranslations } from "next-intl";

function ContactUsSection() {
  const t = useTranslations("about.contact");
  const shared = useTranslations("shared");
  return (
    <section className="w-full bg-g21 py-[5%]">
      <div className=" container max-w-none">
        <SectionTitle
          classes="text-gYellow"
          title={t("title")}
        />
        <p className="mb-[2vw]  text-gb0 text-xs lg:text-[1.1458333333333335vw] leading-[1.8rem] lg:leading-[1.95vw]  text-justify font-PoppinsRegular ">
          {t("description")}
        </p>

        <div className=" rounded-3xl">
          <MassageBox
            formType="contract"
            title={shared("send_message")}
            inputClasses=" placeholder-gf "
            classes="border-[#D9D9D999]"
            buttonStyle="text-g21 bg-gd9  "
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
