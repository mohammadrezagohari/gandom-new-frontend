"use client"
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from "react"
import { useFeedback } from "@/src/components/common/feedback-dialog"

const emptyForm = {
  nameEn: "",
  nameFa: "",
  familyEn: "",
  familyFa: "",
  positionEn: "",
  positionFa: "",
  aboutEn: "",
  aboutFa: "",
  skillsEnText: "",
  skillsFaText: "",
  joinedAtEn: "",
  joinedAtFa: "",
  image: "",
  singlePageImage: "",
  linkedin: "",
  instagram: "",
  sortOrder: 0,
  isActive: true,
}

export default function TeamManager() {
  const { showFeedback } = useFeedback()
  const [members, setMembers] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState("")
  const [message, setMessage] = useState("")

  const loadMembers = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/team", { cache: "no-store" })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "دریافت اعضا انجام نشد.")
      setMembers(data.members || [])
    } catch (error) {
      setMessage(error.message)
      showFeedback({ type: "error", title: "خطا در دریافت اطلاعات", message: error.message })
    } finally {
      setLoading(false)
    }
  }, [showFeedback])

  useEffect(() => {
    loadMembers()
  }, [loadMembers])

  function change(key, value) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function uploadImage(file, field) {
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setMessage("حجم تصویر باید کمتر از ۵ مگابایت باشد.")
      return
    }
    setUploading(field)
    setMessage("")
    try {
      const body = new FormData()
      body.append("image", file)
      const response = await fetch("/api/admin/team/upload", { method: "POST", body })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "آپلود تصویر انجام نشد.")
      change(field, data.path)
      setMessage("تصویر آپلود شد؛ برای نهایی شدن تغییرات، ذخیره را بزنید.")
    } catch (error) {
      setMessage(error.message)
    } finally {
      setUploading("")
    }
  }

  function edit(member) {
    setEditingId(member.id)
    setForm({
      nameEn: member.nameTranslations?.en || member.name || "",
      nameFa: member.nameTranslations?.fa || member.name || "",
      familyEn: member.familyTranslations?.en || member.family || "",
      familyFa: member.familyTranslations?.fa || member.family || "",
      positionEn: member.positionTranslations?.en || member.position || "",
      positionFa: member.positionTranslations?.fa || member.position || "",
      aboutEn: member.aboutTranslations?.en || member.about || "",
      aboutFa: member.aboutTranslations?.fa || member.about || "",
      skillsEnText: (member.skillsTranslations?.en || member.skills || []).join("\n"),
      skillsFaText: (member.skillsTranslations?.fa || member.skills || []).join("\n"),
      joinedAtEn: member.joinedAtTranslations?.en || member.joinedAt || "",
      joinedAtFa: member.joinedAtTranslations?.fa || member.joinedAt || "",
      image: member.image,
      singlePageImage: member.singlePageImage,
      linkedin: member.linkedin || "",
      instagram: member.instagram || "",
      sortOrder: member.sortOrder,
      isActive: member.isActive,
    })
    setMessage("")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  function reset() {
    setEditingId(null)
    setForm(emptyForm)
    setMessage("")
  }

  async function submit(event) {
    event.preventDefault()
    const requiredValues = [form.nameFa, form.nameEn, form.familyFa, form.familyEn, form.positionFa, form.positionEn, form.aboutFa, form.aboutEn, form.image, form.singlePageImage]
    if (requiredValues.some((value) => !String(value || "").trim())) {
      showFeedback({ type: "error", title: "اطلاعات ناقص", message: "لطفاً تمام فیلدهای ضروری فارسی، انگلیسی و تصاویر عضو را کامل کنید." })
      return
    }
    setSaving(true)
    setMessage("")
    const payload = {
      nameTranslations: { en: form.nameEn, fa: form.nameFa },
      familyTranslations: { en: form.familyEn, fa: form.familyFa },
      positionTranslations: { en: form.positionEn, fa: form.positionFa },
      aboutTranslations: { en: form.aboutEn, fa: form.aboutFa },
      skillsTranslations: {
        en: form.skillsEnText.split(/\n|,/).map((item) => item.trim()).filter(Boolean),
        fa: form.skillsFaText.split(/\n|,/).map((item) => item.trim()).filter(Boolean),
      },
      joinedAtTranslations: { en: form.joinedAtEn, fa: form.joinedAtFa },
      image: form.image,
      singlePageImage: form.singlePageImage,
      linkedin: form.linkedin,
      instagram: form.instagram,
      sortOrder: Number(form.sortOrder),
      isActive: form.isActive,
    }

    try {
      const url = editingId ? `/api/admin/team/${editingId}` : "/api/admin/team"
      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "ذخیره عضو انجام نشد.")
      const successMessage = editingId ? "اطلاعات عضو ویرایش شد." : "عضو جدید ثبت شد."
      setMessage(successMessage)
      showFeedback({ type: "success", title: "ذخیره موفق", message: successMessage })
      setEditingId(null)
      setForm(emptyForm)
      await loadMembers()
    } catch (error) {
      setMessage(error.message)
      showFeedback({ type: "error", title: "ذخیره ناموفق", message: error.message })
    } finally {
      setSaving(false)
    }
  }

  async function remove(member) {
    if (!window.confirm(`«${member.name} ${member.family}» حذف شود؟`)) return
    const response = await fetch(`/api/admin/team/${member.id}`, { method: "DELETE" })
    const data = await response.json()
    if (!response.ok) {
      setMessage(data.error || "حذف عضو انجام نشد.")
      return
    }
    if (editingId === member.id) reset()
    await loadMembers()
  }

  const inputClass = "mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-400"

  return (
    <section>
      <form onSubmit={submit} className="mb-7 rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">{editingId ? "ویرایش عضو تیم" : "ثبت عضو جدید"}</h2>
          {editingId && <button type="button" onClick={reset} className="text-sm text-gray-500">انصراف از ویرایش</button>}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">نام انگلیسی<input required value={form.nameEn} onChange={(e) => change("nameEn", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">نام فارسی<input required value={form.nameFa} onChange={(e) => change("nameFa", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">نام خانوادگی انگلیسی<input required value={form.familyEn} onChange={(e) => change("familyEn", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">نام خانوادگی فارسی<input required value={form.familyFa} onChange={(e) => change("familyFa", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">سمت انگلیسی<input required value={form.positionEn} onChange={(e) => change("positionEn", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">سمت فارسی<input required value={form.positionFa} onChange={(e) => change("positionFa", e.target.value)} className={inputClass} /></label>
          <label className="text-sm md:col-span-2">درباره انگلیسی<textarea required rows={4} value={form.aboutEn} onChange={(e) => change("aboutEn", e.target.value)} className={inputClass} /></label>
          <label className="text-sm md:col-span-2">درباره فارسی<textarea required rows={4} value={form.aboutFa} onChange={(e) => change("aboutFa", e.target.value)} className={inputClass} /></label>
          <label className="text-sm md:col-span-2">مهارت‌ها انگلیسی؛ هر مهارت در یک خط<textarea required rows={5} value={form.skillsEnText} onChange={(e) => change("skillsEnText", e.target.value)} className={`${inputClass} font-mono`} /></label>
          <label className="text-sm md:col-span-2">مهارت‌ها فارسی؛ هر مهارت در یک خط<textarea required rows={5} value={form.skillsFaText} onChange={(e) => change("skillsFaText", e.target.value)} className={`${inputClass} font-mono`} /></label>
          <label className="text-sm">تاریخ پیوستن انگلیسی<input value={form.joinedAtEn} onChange={(e) => change("joinedAtEn", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">تاریخ پیوستن فارسی<input value={form.joinedAtFa} onChange={(e) => change("joinedAtFa", e.target.value)} className={inputClass} /></label>
          <div className="text-sm">
            <label>تصویر کارت<input required dir="ltr" value={form.image} onChange={(e) => change("image", e.target.value)} className={inputClass} /></label>
            <label className="mt-2 flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-amber-400 bg-amber-50 px-3 py-2.5">
              {uploading === "image" ? "در حال آپلود..." : "انتخاب و آپلود تصویر کارت"}
              <input disabled={Boolean(uploading)} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => uploadImage(e.target.files?.[0], "image")} />
            </label>
          </div>
          <div className="text-sm">
            <label>تصویر صفحه عضو<input required dir="ltr" value={form.singlePageImage} onChange={(e) => change("singlePageImage", e.target.value)} className={inputClass} /></label>
            <label className="mt-2 flex cursor-pointer items-center justify-center rounded-xl border border-dashed border-amber-400 bg-amber-50 px-3 py-2.5">
              {uploading === "singlePageImage" ? "در حال آپلود..." : "انتخاب و آپلود تصویر صفحه"}
              <input disabled={Boolean(uploading)} type="file" accept="image/jpeg,image/png,image/webp" className="hidden" onChange={(e) => uploadImage(e.target.files?.[0], "singlePageImage")} />
            </label>
          </div>
          <label className="text-sm">LinkedIn<input dir="ltr" value={form.linkedin} onChange={(e) => change("linkedin", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">Instagram<input dir="ltr" value={form.instagram} onChange={(e) => change("instagram", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">ترتیب نمایش<input type="number" value={form.sortOrder} onChange={(e) => change("sortOrder", e.target.value)} className={inputClass} /></label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isActive} onChange={(e) => change("isActive", e.target.checked)} />نمایش در سایت</label>
        </div>
        {message && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm">{message}</p>}
        <button disabled={saving || Boolean(uploading)} className="mt-5 rounded-xl bg-gray-900 px-7 py-3 font-bold text-white disabled:opacity-50">{saving ? "در حال ذخیره..." : editingId ? "ذخیره تغییرات" : "ثبت عضو"}</button>
      </form>

      {loading ? <div className="rounded-xl bg-white p-6 text-center">در حال بارگذاری...</div> : (
        <div className="grid gap-4 md:grid-cols-2">
          {members.map((member) => (
            <article key={member.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <img src={member.image} alt="" className="h-24 w-24 rounded-xl object-cover" />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold">{member.nameTranslations?.fa || member.name} / {member.nameTranslations?.en || member.name}</h3>
                <p className="text-sm text-gray-500">{member.positionTranslations?.fa || member.position}</p>
                <p className="mt-1 text-xs text-gray-400">{member.isActive ? "فعال" : "مخفی"} · ترتیب {member.sortOrder}</p>
                <div className="mt-3 flex gap-2">
                  <button onClick={() => edit(member)} className="rounded-lg bg-amber-100 px-3 py-1.5 text-sm">ویرایش</button>
                  <button onClick={() => remove(member)} className="rounded-lg bg-red-50 px-3 py-1.5 text-sm text-red-700">حذف</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

