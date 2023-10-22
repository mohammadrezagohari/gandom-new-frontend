"use client";

import MassageBox from '@/components/common/massage-box'
import SectionTitle from '@/components/common/section-title';
import React from 'react'

function MessageSection() {

  const onSubmitForm=(event)=>{
    event.preventDefault();
  }
  return (
    <section className="w-full">

    <div className="container">
      <div className="container bg-gf5 rounded-3xl py-[5%]">
        <div className="mx-auto text-center  mb-[2%]">  
           <SectionTitle classes="text-g21 hidden lg:block" title="Do you need help to grow your business?" />
           <SectionTitle classes="text-g21 lg:hidden block" title="Post Your Comment" />
        </div>
          <MassageBox title="Send Message" inputClasses=' placeholder-g21 ' onSubmitForm={onSubmitForm} classes="border-[#21212199]" buttonStyle="text-gf bg-g21  " />
      </div>
    </div>


   </section>
  )
}
export default MessageSection