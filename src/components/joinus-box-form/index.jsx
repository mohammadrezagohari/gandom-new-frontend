"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"

export default function JoinUsBox({ title, onSubmitForm, classes, buttonStyle, inputClasses, loading = false }) {
  const t = useTranslations("forms")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cv, setCv] = useState("")
  const [content, setContent] = useState("")
  const fieldClass = `w-full bg-transparent py-3 text-[1.1rem] outline-none lg:text-[1.2rem] ${inputClasses}`

  return (
    <form noValidate onSubmit={onSubmitForm} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className={`border-b-2 ${classes}`}><input name="name" placeholder={t("name") + " *"} className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} /></div>
      <div className={`border-b-2 ${classes}`}><input type="email" name="email" placeholder={t("email") + " *"} className={fieldClass} value={email} onChange={(event) => setEmail(event.target.value)} /></div>
      <div className={`border-b-2 ${classes}`}><input name="cv" placeholder={t("cv") + " *"} className={fieldClass} value={cv} onChange={(event) => setCv(event.target.value)} /></div>
      <div className={`border-b-2 lg:col-span-3 ${classes}`}><textarea rows={3} name="content" placeholder={t("message") + " *"} className={fieldClass} value={content} onChange={(event) => setContent(event.target.value)} /></div>
      <div className="flex justify-center lg:col-span-3"><button disabled={loading} type="submit" className={`w-full rounded-xl py-3 text-lg disabled:opacity-60 lg:w-[41%] ${buttonStyle}`}>{loading ? t("sending") : title}</button></div>
    </form>
  )
}
