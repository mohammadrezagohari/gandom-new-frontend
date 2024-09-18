"use client"
import React, { useState } from "react";

function MassageBox({
  title,
  onSubmitForm,
  classes,
  buttonStyle,
  inputClasses,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  return (
    <form
      onSubmit={onSubmitForm}
      action=""
      className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-11 lg:gap-[2.8645833333333335vw]"
    >
      <div
        className={`col-span-1 md:col-span-1 lg:col-span-1 border-b-2 ${classes}`}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div
        className={`col-span-1 md:col-span-1 lg:col-span-1 border-b-2 ${classes}`}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div
        className={`col-span-1 md:col-span-2 lg:col-span-2 border-b-2 ${classes}`}
      >
        <textarea
          type="text"
          name="content"
          placeholder="Message"
          required
          className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] pt-2 lg:pt-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* <textarea name="content" placeholder="Message" className={`bg-transparent placeholder-opacity-100 text-[1.2rem] lg:text-[1.4583333333333333vw] py-2 lg:py-3 font-PoppinsRegular focus:outline-none w-full ${inputClasses}`} value={content} onChange={(e) => setContent(e.target.value)} rows={4} cols={40} /> */}
      </div>
      <div
        className={` mt-[1%] col-span-1 md:col-span-2 lg:col-span-2 flex justify-center items-cnter `}
      >
        <button
          type="submit"
          className={`rounded-xl text-lg lg:text-[1.3020833333333333vw] font-PoppinsMedium py-3 lg:py-[1.2vw] w-full lg:w-[51%] ${buttonStyle} `}
        >
          {title}
        </button>
      </div>
    </form>
  );
}

export default MassageBox;
