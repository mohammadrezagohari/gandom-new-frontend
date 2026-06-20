"use client";

import React, { useState } from "react";
import SectionTitle from "@/src/components/common/section-title";
import ContactForm from "../form";

function FormBox() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", name, phone, email, content }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "ارسال پیام انجام نشد.");
      alert("پیام شما با موفقیت ثبت شد.");
      setName("");
      setPhone("");
      setEmail("");
      setContent("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full border-[1px] border-g21 rounded-2xl lg:border-0 ps-4 pe-4 py-4 lg:ps-0 lg:pe-20 lg:py-4">
      <SectionTitle classes="text-g21 py-[3%] lg:py-[1%]" title="Get In Touch " />
      <ContactForm
        title="Send Message"
        inputClasses=" placeholder-g21 "
        onSubmitForm={onSubmitForm}
        classes="border-g21"
        buttonStyle="text-gf bg-g21"
        name={name}
        setName={setName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        content={content}
        setContent={setContent}
        loading={loading}
      />
    </div>
  );
}

export default FormBox;
