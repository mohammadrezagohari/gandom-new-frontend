"use client";
import React from "react"; 
import SectionTitle from "@/components/common/section-title";
import MassageBox from "@/components/common/massage-box-form";

function ContactUsSection() {
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <section className="w-full bg-g21 py-[5%]">
      <div className=" container max-w-none">
        <SectionTitle
          classes="text-gYellow"
          title="Let's talk about what we can build together"
        />
        <p className="mb-[2vw]  text-gb0 text-xs lg:text-[1.1rem] leading-[1.8rem]  text-justify font-PoppinsRegular ">
          Whatever may be your requirement - be it a simple website design, a
          complex data driven web application development, an ecommerce website,
          a native or cross platform mobile app development, a logo and brand
          identity design, a video production or a full fledged digital
          marketing campaign - we have a solution for you.
        </p>

        <div className=" rounded-3xl">
          <MassageBox
            title="Send Message"
            inputClasses=" placeholder-gf "
            onSubmitForm={onSubmitForm}
            classes="border-[#D9D9D999]"
            buttonStyle="text-g21 bg-gd9  "
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
