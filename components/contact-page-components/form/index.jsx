"use client";
import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function ContactForm({
  title,
  onSubmitForm,
  classes,
  buttonStyle,
  inputClasses,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  content,
  setContent,
}) {
  return (
    <form
      onSubmit={onSubmitForm}
      action=""
      className="grid grid-cols-1 gap-10 lg:gap-[2.8645833333333335vw]"
    >
      <div className={`col-span-1  border-b-2 ${classes}`}>
        <input
          type="text"
          name="name"
          placeholder="Name &#42;"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] py-2 lg:py-[0.78125vw] font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={`col-span-1  border-b-2 ${classes}`}>
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="RU"
          value={phone}
          onChange={setPhone}
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] py-2 lg:py-[0.78125vw] font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
        />
      </div>

      <div className={`col-span-1 border-b-2 ${classes}`}>
        <input
          type="email"
          name="email"
          placeholder="Email &#42;"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] py-2 lg:py-[0.78125vw] font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className={`col-span-1  border-b-2 ${classes}`}>
        <textarea
          type="text"
          name="content"
          placeholder="Message &#42;"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] pt-2 lg:pt-[0.78125vw] font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* <textarea name="content" placeholder="Message" className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4rem] py-2 lg:py-[0.78125vw] font-PoppinsRegular focus:outline-none w-full ${inputClasses}`} value={content} onChange={(e) => setContent(e.target.value)} rows={4} cols={40} /> */}
      </div>

      <div className={` mt-[1%] col-span-1 flex justify-center items-cnter `}>
        <button
          type="submit"
          className={`opacity-100 hover:opacity-80  transition duration-700 ease-in-out rounded-xl text-lg lg:text-[1.3020833333333333vw] font-PoppinsRegular py-3 lg:py-[1.3vw] w-full lg:w-[51%] ${buttonStyle} `}
        >
          {title}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
