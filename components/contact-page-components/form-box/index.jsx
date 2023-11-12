"use client";
import React, { useState } from "react";
import SectionTitle from "@/components/common/section-title";
import ContactForm from '../form';

function FormBox() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
    const onSubmitForm = (event) => {
      event.preventDefault();
      // const formData = new FormData();
      // // formData.append("title", title);
      // formData.append("name", name);
      // formData.append("phone", phone);
      // formData.append("email", email);
      // formData.append("content", content);
      // console.log("formData result : ", formData);

      };
  return (
    <div className="w-full border-[1px] border-g21 rounded-2xl lg:border-0  p-4  " >
         <SectionTitle
          classes="text-g21 py-[3%] lg:py-[1%]"
          title="Get In Touch "
        />
         <ContactForm
            title="Send Message"
            inputClasses=" placeholder-g21 "
            onSubmitForm={onSubmitForm}
            classes="border-g21"
            buttonStyle="text-gf bg-g21  "
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            content={content}
            setContent={setContent}
          />
    </div>
  )
}

export default FormBox