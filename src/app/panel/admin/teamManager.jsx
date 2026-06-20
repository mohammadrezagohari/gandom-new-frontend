"use client"

import { useEffect, useState } from "react"

const emptyForm = {
  name: "", family: "", position: "", about: "", skillsText: "",
  image: "", singlePageImage: "", linkedin: "", instagram: "",
  joinedAt: "", sortOrder: 0, isActive: true,
}

export default function TeamManager() {
  const [members, setMembers] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  async function loadMembers() {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/team", { cache: "no-store" })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "دریافت اعضا انجام نشد.")
      setMembers(data.members || [])
    } catch (error) {
      setMessage(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadMembers()
  }, [])

  function change(key, value) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function edit(member) {
    setEditingId(member.id)
    setForm({
      name: member.name,
      family: member.family,
      position: member.position,
      about: member.about,
      skillsText: member.skills.join("\n"),
      image: member.image,
      singlePageImage: member.singlePageImage,
      linkedin: member.linkedin || "",
      instagram: member.instagram || "",
      joinedAt: member.joinedAt || "",
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
    setSaving(true)
    setMessage("")
    const skills = form.skillsText.split(/[\n,]+/).map((item) => item.trim()).filter(Boolean)
    const url = editingId ? `/api/admin/team/${editingId}` : "/api/admin/team"
    try {
      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, skills }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "ذخیره عضو انجام نشد.")
      setMessage(editingId ? "اطلاعات عضو ویرایش شد." : "عضو جدید ثبت شد.")
      setEditingId(null)
      setForm(emptyForm)
      await loadMembers()
    } catch (error) {
      setMessage(error.message)
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

  const inputClass = "w-full rounded-xl border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-400"

  return (
    <section>
      <form onSubmit={submit} className="mb-7 rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">{editingId ? "ویرایش عضو تیم" : "ثبت عضو جدید"}</h2>
          {editingId && <button type="button" onClick={reset} className="text-sm text-gray-500">انصراف از ویرایش</button>}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm">نام<input required maxLength={100} value={form.name} onChange={(e) => change("name", e.target.value)} className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm">نام خانوادگی<input required maxLength={100} value={form.family} onChange={(e) => change("family", e.target.value)} className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm md:col-span-2">سمت<input required maxLength={150} value={form.position} onChange={(e) => change("position", e.target.value)} className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm md:col-span-2">درباره عضو<textarea required rows={4} maxLength={3000} value={form.about} onChange={(e) => change("about", e.target.value)} className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm md:col-span-2">مهارت‌ها؛ هر مهارت در یک خط<textarea required rows={5} value={form.skillsText} onChange={(e) => change("skillsText", e.target.value)} className={`mt-1 font-mono ${inputClass}`} /></label>
          <label className="text-sm">مسیر تصویر کارت<input required dir="ltr" value={form.image} onChange={(e) => change("image", e.target.value)} placeholder="/webp/person.webp" className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm">مسیر تصویر صفحه عضو<input required dir="ltr" value={form.singlePageImage} onChange={(e) => change("singlePageImage", e.target.value)} placeholder="/webp/person.png" className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm">LinkedIn<input dir="ltr" value={form.linkedin} onChange={(e) => change("linkedin", e.target.value)} className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm">Instagram<input dir="ltr" value={form.instagram} onChange={(e) => change("instagram", e.target.value)} className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm">تاریخ پیوستن<input value={form.joinedAt} onChange={(e) => change("joinedAt", e.target.value)} className={`mt-1 ${inputClass}`} /></label>
          <label className="text-sm">ترتیب نمایش<input type="number" value={form.sortOrder} onChange={(e) => change("sortOrder", Number(e.target.value))} className={`mt-1 ${inputClass}`} /></label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isActive} onChange={(e) => change("isActive", e.target.checked)} />نمایش در سایت</label>
        </div>
        {form.image && <div className="mt-4 flex items-center gap-3 text-sm text-gray-500"><img src={form.image} alt="" className="h-16 w-16 rounded-xl object-cover" />پیش‌نمایش تصویر کارت</div>}
        {message && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm">{message}</p>}
        <button disabled={saving} className="mt-5 rounded-xl bg-gray-900 px-7 py-3 font-bold text-white disabled:opacity-50">{saving ? "در حال ذخیره..." : editingId ? "ذخیره تغییرات" : "ثبت عضو"}</button>
      </form>

      {loading ? <div className="rounded-xl bg-white p-6 text-center">در حال بارگذاری...</div> : (
        <div className="grid gap-4 md:grid-cols-2">
          {members.map((member) => (
            <article key={member.id} className="flex gap-4 rounded-2xl bg-white p-4 shadow-sm">
              <img src={member.image} alt="" className="h-24 w-24 rounded-xl object-cover" />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold">{member.name} {member.family}</h3>
                <p className="text-sm text-gray-500">{member.position}</p>
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
