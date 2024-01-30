"use client"
import MassageBox from "@/components/common/massage-box-form";
import SectionTitle from "@/components/common/section-title";
import React from "react";
 
function MessageSection() {
  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <section className="w-full">

        <div className="container max-w-none bg-gf5 rounded-3xl py-[5%]">
          <div className="mx-auto text-center  mb-[2%]">
            
            <SectionTitle
              classes="text-g21 "
              title="Post Your Comment"
            />
          </div>
          
          <MassageBox
            title="Send Message"
            inputClasses=" placeholder-g21 "
            onSubmitForm={onSubmitForm}
            classes="border-[#21212199]"
            buttonStyle="text-gf bg-g21  "
          />
        </div>

    </section>
  );
}
export default MessageSection;
