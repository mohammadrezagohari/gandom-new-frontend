"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import { useFeedback } from "@/src/components/common/feedback-dialog"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function MassageBox({ title, formType = "other", classes, buttonStyle, inputClasses }) {
  const t = useTranslations("forms")
  const { showFeedback } = useFeedback()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const fieldClass = `w-full bg-transparent py-3 text-[1.1rem] outline-none lg:text-[1.25rem] ${inputClasses}`

  async function submit(event) {
    event.preventDefault()
    const next = {}
    if (name.trim().length < 2) next.name = t("required")
    if (!emailPattern.test(email.trim())) next.email = t("invalidEmail")
    if (content.trim().length < 10) next.content = t("contentShort")
    setErrors(next)
    if (Object.keys(next).length) {
      showFeedback({ type: "error", title: t("validationTitle"), message: [...new Set(Object.values(next))].join("\n") })
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, name: name.trim(), email: email.trim(), content: content.trim() }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || t("error"))
      setName("")
      setEmail("")
      setContent("")
      setErrors({})
      showFeedback({ type: "success", title: t("successTitle"), message: t("success") })
    } catch (error) {
      showFeedback({ type: "error", title: t("errorTitle"), message: error.message || t("error") })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form noValidate onSubmit={submit} className="grid grid-cols-1 gap-9 lg:grid-cols-2">
      <Field error={errors.name} classes={classes}><input aria-invalid={Boolean(errors.name)} name="name" placeholder={t("name") + " *"} className={fieldClass} value={name} onChange={(event) => setName(event.target.value)} /></Field>
      <Field error={errors.email} classes={classes}><input aria-invalid={Boolean(errors.email)} type="email" name="email" placeholder={t("email") + " *"} className={fieldClass} value={email} onChange={(event) => setEmail(event.target.value)} /></Field>
      <Field error={errors.content} classes={`lg:col-span-2 ${classes}`}><textarea aria-invalid={Boolean(errors.content)} rows={4} name="content" placeholder={t("message") + " *"} className={fieldClass} value={content} onChange={(event) => setContent(event.target.value)} /></Field>
      <div className="flex justify-center lg:col-span-2"><button type="submit" disabled={loading} className={`w-full rounded-xl py-3 text-lg disabled:opacity-60 lg:w-[51%] ${buttonStyle}`}>{loading ? t("sending") : title}</button></div>
    </form>
  )
}

function Field({ children, error, classes }) {
  return <div className={`border-b-2 ${error ? "border-red-500" : classes}`}>{children}{error && <p role="alert" className="pb-2 text-sm text-red-500">{error}</p>}</div>
}
