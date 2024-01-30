"use client"
import React, { useState } from "react";
import 'react-phone-number-input/style.css'
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
  setContent 
}) {
 
  return (
    <form
      onSubmit={onSubmitForm}
      action=""
      className="grid grid-cols-1 gap-11"
    >
      <div
        className={`col-span-1  border-b-2 ${classes}`}
      >
        <input
          type="text"
          name="name"
          placeholder="Name &#42;"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4rem] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div
        className={`col-span-1  border-b-2 ${classes}`}
      >
        <PhoneInput
          international
          countryCallingCodeEditable={false}
          defaultCountry="RU"
          value={phone}
          onChange={setPhone}
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4rem] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          />
          {/* onChange={(e) => setPhone(e.target.value)} */}
        {/* <input
          type="text"
          name="phone"
          placeholder="Phone"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4rem] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        /> */}
      </div>

      <div
        className={`col-span-1 border-b-2 ${classes}`}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4rem] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div
        className={`col-span-1  border-b-2 ${classes}`}
      >
        <input
          type="text"
          name="content"
          placeholder="Message"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4rem] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* <textarea name="content" placeholder="Message" className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4rem] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`} value={content} onChange={(e) => setContent(e.target.value)} rows={4} cols={40} /> */}
      </div>

      <div
        className={` mt-[1%] col-span-1 flex justify-center items-cnter `}
      >
        <button
          type="submit"
          className={`rounded-xl text-lg lg:text-xl font-PoppinsMedium py-3 lg:py-5 w-full lg:w-[41%] ${buttonStyle} `}
        >
          {title}
        </button>
      </div>

    </form>
  );
}

export default ContactForm;
