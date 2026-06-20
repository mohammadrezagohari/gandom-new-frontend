"use client";

import MassageBox from "@/src/components/common/massage-box-form";
import SectionTitle from "@/src/components/common/section-title";
import React from "react";

function MessageSection() {
  return (
    <section className="w-full">
      <div className="container max-w-none">
        <div className="container max-w-none bg-gf5 rounded-3xl py-[5%]">
          <div className="mx-auto text-center  mb-[2%]">
            <SectionTitle
              classes="text-g21 hidden lg:block"
              title="Do you need help to grow your business?"
            />
            <SectionTitle
              classes="text-g21 lg:hidden block"
              title="Post Your Comment"
            />
          </div>
          <MassageBox
            formType="contract"
            title="Send Message"
            inputClasses=" placeholder-g21 "
            classes="border-[#21212199]"
            buttonStyle="text-gf bg-g21  "
          />
        </div>
      </div>
    </section>
  );
}
export default MessageSection;
