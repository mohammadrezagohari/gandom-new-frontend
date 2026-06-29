"use client"

import React from "react"
import { useTranslations } from "next-intl"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export default function ContactForm({ title, onSubmitForm, classes, buttonStyle, inputClasses, name, setName, phone, setPhone, email, setEmail, content, setContent, errors, loading }) {
  const t = useTranslations("forms")
  const fieldClass = `w-full bg-transparent py-3 text-[1.1rem] placeholder-opacity-100 outline-none lg:text-[1.25rem] ${inputClasses}`

  return (
    <form noValidate onSubmit={onSubmitForm} className="grid grid-cols-1 gap-8">
      <FieldShell error={errors.name} classes={classes}>
        <input aria-invalid={Boolean(errors.name)} type="text" name="name" placeholder={t("name") + " *"} className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} />
      </FieldShell>
      <FieldShell error={errors.phone} classes={classes}>
        <PhoneInput aria-invalid={Boolean(errors.phone)} international countryCallingCodeEditable={false} defaultCountry="IR" placeholder={t("phone") + " *"} value={phone} onChange={setPhone} className={fieldClass} />
      </FieldShell>
      <FieldShell error={errors.email} classes={classes}>
        <input aria-invalid={Boolean(errors.email)} type="email" name="email" placeholder={t("email") + " *"} className={fieldClass} value={email} onChange={(event) => setEmail(event.target.value)} />
      </FieldShell>
      <FieldShell error={errors.content} classes={classes}>
        <textarea aria-invalid={Boolean(errors.content)} rows={4} name="content" placeholder={t("message") + " *"} className={fieldClass} value={content} onChange={(event) => setContent(event.target.value)} />
      </FieldShell>
      <div className="flex justify-center">
        <button type="submit" disabled={loading} className={`w-full rounded-xl py-3 text-lg transition hover:opacity-80 disabled:opacity-60 lg:w-[51%] ${buttonStyle}`}>
          {loading ? t("sending") : title}
        </button>
      </div>
    </form>
  )
}

function FieldShell({ children, error, classes }) {
  return (
    <div className={`border-b-2 ${error ? "border-red-500" : classes}`}>
      {children}
      {error && <p role="alert" className="pb-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}
