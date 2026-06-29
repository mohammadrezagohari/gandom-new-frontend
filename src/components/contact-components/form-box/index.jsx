"use client"

import React, { useState } from "react"
import { useTranslations } from "next-intl"
import SectionTitle from "@/src/components/common/section-title"
import { useFeedback } from "@/src/components/common/feedback-dialog"
import ContactForm from "../form"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function FormBox() {
  const t = useTranslations("forms")
  const shared = useTranslations("shared")
  const { showFeedback } = useFeedback()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  function validate() {
    const next = {}
    if (name.trim().length < 2) next.name = t("required")
    if (!phone || String(phone).replace(/\D/g, "").length < 8) next.phone = t("invalidPhone")
    if (!emailPattern.test(email.trim())) next.email = t("invalidEmail")
    if (content.trim().length < 10) next.content = t("contentShort")
    setErrors(next)
    if (Object.keys(next).length) {
      showFeedback({ type: "error", title: t("validationTitle"), message: [...new Set(Object.values(next))].join("\n") })
      return false
    }
    return true
  }

  async function onSubmitForm(event) {
    event.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "contact", name: name.trim(), phone, email: email.trim(), content: content.trim() }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || t("error"))
      showFeedback({ type: "success", title: t("successTitle"), message: t("success") })
      setName("")
      setPhone("")
      setEmail("")
      setContent("")
      setErrors({})
    } catch (error) {
      showFeedback({ type: "error", title: t("errorTitle"), message: error.message || t("error") })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full rounded-2xl border border-g21 px-4 py-4 lg:border-0 lg:pe-20 lg:ps-0">
      <SectionTitle classes="py-[3%] text-g21 lg:py-[1%]" title={t("getInTouch")} />
      <ContactForm
        title={shared("send_message")}
        inputClasses="placeholder-g21"
        onSubmitForm={onSubmitForm}
        classes="border-g21"
        buttonStyle="bg-g21 text-gf"
        {...{ name, setName, phone, setPhone, email, setEmail, content, setContent, errors, loading }}
      />
    </div>
  )
}
