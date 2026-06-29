"use client"

import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import { AiOutlineClose } from "react-icons/ai"
import { useTranslations } from "next-intl"
import OutlinedYellowButton from "@/src/components/common/buttons/outlinedYellow"
import SectionTitle from "@/src/components/common/section-title"
import JoinUsBox from "@/src/components/joinus-box-form"
import { useFeedback } from "@/src/components/common/feedback-dialog"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function JoinSection() {
  const t = useTranslations("about.join")
  const shared = useTranslations("shared")
  const forms = useTranslations("forms")
  const { showFeedback } = useFeedback()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "auto"
    return () => { document.documentElement.style.overflow = "auto" }
  }, [open])

  async function submit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget).entries())
    const errors = []
    if (String(data.name || "").trim().length < 2) errors.push(forms("required"))
    if (!emailPattern.test(String(data.email || "").trim())) errors.push(forms("invalidEmail"))
    if (!String(data.cv || "").trim()) errors.push(forms("required"))
    if (String(data.content || "").trim().length < 10) errors.push(forms("contentShort"))

    if (errors.length) {
      showFeedback({ type: "error", title: forms("validationTitle"), message: [...new Set(errors)].join("\n") })
      return
    }

    setLoading(true)
    try {
      const response = await fetch("/api/forms/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "join" }),
      })
      const result = await response.json()
      if (!response.ok || !result.success) throw new Error(result.error || forms("error"))
      setOpen(false)
      showFeedback({ type: "success", title: forms("successTitle"), message: forms("success") })
    } catch (error) {
      showFeedback({ type: "error", title: forms("errorTitle"), message: error.message || forms("error") })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full bg-g21 py-[5%]">
      <div className="container max-w-none">
        <div className="max-w-3xl text-gf">
          <SectionTitle classes="text-gYellow" title={t("title")} />
          <p className="mb-7 text-justify text-base leading-8 text-gb0">{t("description")}</p>
          <OutlinedYellowButton handleOpen={() => setOpen(true)} title={t("action")} />
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} className="modalBoxContainerBg">
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(92%, 1000px)", maxHeight: "90vh", overflowY: "auto", bgcolor: "background.paper", boxShadow: 24, p: { xs: 3, md: 5 }, borderRadius: "24px" }}>
          <div className="flex items-center justify-between gap-4">
            <SectionTitle classes="text-gDarkYellow" title={t("title")} />
            <button aria-label="Close" type="button" onClick={() => setOpen(false)} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gd9"><AiOutlineClose /></button>
          </div>
          <JoinUsBox title={shared("send_message")} inputClasses="placeholder-g21" onSubmitForm={submit} classes="border-[#21212199]" buttonStyle="bg-g21 text-gf" loading={loading} />
        </Box>
      </Modal>
    </section>
  )
}
