"use client"
/* eslint-disable @next/next/no-img-element */

import { useCallback, useEffect, useState } from "react"
import { useFeedback } from "@/src/components/common/feedback-dialog"

const emptyForm = {
  slug: "",
  titleEn: "",
  titleFa: "",
  excerptEn: "",
  excerptFa: "",
  contentEn: "",
  contentFa: "",
  authorEn: "Gandom Team",
  authorFa: "تیم گندم",
  coverImage: "/wimg.png",
  publishedAt: new Date().toISOString().slice(0, 10),
  readingMinutes: 5,
  sortOrder: 0,
  isActive: true,
}

export default function ArticleManager() {
  const { showFeedback } = useFeedback()
  const [articles, setArticles] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  const loadArticles = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/admin/articles", { cache: "no-store" })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "دریافت مقالات انجام نشد.")
      setArticles(data.articles || [])
    } catch (error) {
      setMessage(error.message)
      showFeedback({ type: "error", title: "خطا در دریافت اطلاعات", message: error.message })
    } finally {
      setLoading(false)
    }
  }, [showFeedback])

  useEffect(() => {
    loadArticles()
  }, [loadArticles])

  function change(key, value) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function edit(article) {
    setEditingId(article.id)
    setForm({
      slug: article.slug,
      titleEn: article.titleTranslations?.en || "",
      titleFa: article.titleTranslations?.fa || "",
      excerptEn: article.excerptTranslations?.en || "",
      excerptFa: article.excerptTranslations?.fa || "",
      contentEn: article.contentTranslations?.en || "",
      contentFa: article.contentTranslations?.fa || "",
      authorEn: article.authorTranslations?.en || "Gandom Team",
      authorFa: article.authorTranslations?.fa || "تیم گندم",
      coverImage: article.coverImage || "/wimg.png",
      publishedAt: article.publishedAt || new Date().toISOString().slice(0, 10),
      readingMinutes: article.readingMinutes || 5,
      sortOrder: article.sortOrder || 0,
      isActive: article.isActive !== false,
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
    const requiredValues = [form.slug, form.titleFa, form.titleEn, form.contentFa, form.contentEn]
    if (requiredValues.some((value) => !String(value || "").trim())) {
      showFeedback({ type: "error", title: "اطلاعات ناقص", message: "اسلاگ، عنوان و متن مقاله در هر دو زبان ضروری هستند." })
      return
    }
    setSaving(true)
    setMessage("")
    const payload = {
      slug: form.slug,
      titleTranslations: { en: form.titleEn, fa: form.titleFa },
      excerptTranslations: { en: form.excerptEn, fa: form.excerptFa },
      contentTranslations: { en: form.contentEn, fa: form.contentFa },
      authorTranslations: { en: form.authorEn, fa: form.authorFa },
      coverImage: form.coverImage,
      publishedAt: form.publishedAt,
      readingMinutes: Number(form.readingMinutes),
      sortOrder: Number(form.sortOrder),
      isActive: form.isActive,
    }

    try {
      const url = editingId ? `/api/admin/articles/${editingId}` : "/api/admin/articles"
      const response = await fetch(url, {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "ذخیره مقاله انجام نشد.")
      const successMessage = editingId ? "مقاله ویرایش شد." : "مقاله جدید ثبت شد."
      setMessage(successMessage)
      showFeedback({ type: "success", title: "ذخیره موفق", message: successMessage })
      setEditingId(null)
      setForm(emptyForm)
      await loadArticles()
    } catch (error) {
      setMessage(error.message)
      showFeedback({ type: "error", title: "ذخیره ناموفق", message: error.message })
    } finally {
      setSaving(false)
    }
  }

  async function remove(article) {
    if (!window.confirm(`مقاله «${article.titleTranslations?.fa || article.title}» حذف شود؟`)) return
    const response = await fetch(`/api/admin/articles/${article.id}`, { method: "DELETE" })
    const data = await response.json()
    if (!response.ok) {
      setMessage(data.error || "حذف مقاله انجام نشد.")
      return
    }
    if (editingId === article.id) reset()
    await loadArticles()
  }

  const inputClass = "mt-1 w-full rounded-xl border border-gray-300 px-3 py-2.5 outline-none focus:border-amber-400"
  const textareaClass = `${inputClass} min-h-[120px]`

  return (
    <section>
      <form onSubmit={submit} className="mb-7 rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold">{editingId ? "ویرایش مقاله" : "ثبت مقاله جدید"}</h2>
          {editingId && <button type="button" onClick={reset} className="text-sm text-gray-500">انصراف از ویرایش</button>}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm md:col-span-2">Slug<input value={form.slug} onChange={(e) => change("slug", e.target.value)} dir="ltr" className={inputClass} /></label>
          <label className="text-sm">عنوان انگلیسی<input required value={form.titleEn} onChange={(e) => change("titleEn", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">عنوان فارسی<input required value={form.titleFa} onChange={(e) => change("titleFa", e.target.value)} className={inputClass} /></label>
          <label className="text-sm md:col-span-2">خلاصه انگلیسی<textarea value={form.excerptEn} onChange={(e) => change("excerptEn", e.target.value)} className={textareaClass} /></label>
          <label className="text-sm md:col-span-2">خلاصه فارسی<textarea value={form.excerptFa} onChange={(e) => change("excerptFa", e.target.value)} className={textareaClass} /></label>
          <label className="text-sm md:col-span-2">متن انگلیسی<textarea required value={form.contentEn} onChange={(e) => change("contentEn", e.target.value)} className={`${textareaClass} min-h-[220px]`} /></label>
          <label className="text-sm md:col-span-2">متن فارسی<textarea required value={form.contentFa} onChange={(e) => change("contentFa", e.target.value)} className={`${textareaClass} min-h-[220px]`} /></label>
          <label className="text-sm">نویسنده انگلیسی<input value={form.authorEn} onChange={(e) => change("authorEn", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">نویسنده فارسی<input value={form.authorFa} onChange={(e) => change("authorFa", e.target.value)} className={inputClass} /></label>
          <label className="text-sm md:col-span-2">تصویر کاور<input value={form.coverImage} onChange={(e) => change("coverImage", e.target.value)} dir="ltr" className={inputClass} /></label>
          <label className="text-sm">تاریخ انتشار<input value={form.publishedAt} onChange={(e) => change("publishedAt", e.target.value)} dir="ltr" className={inputClass} /></label>
          <label className="text-sm">زمان مطالعه<input type="number" min={1} value={form.readingMinutes} onChange={(e) => change("readingMinutes", e.target.value)} className={inputClass} /></label>
          <label className="text-sm">ترتیب نمایش<input type="number" value={form.sortOrder} onChange={(e) => change("sortOrder", e.target.value)} className={inputClass} /></label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={form.isActive} onChange={(e) => change("isActive", e.target.checked)} />نمایش در سایت</label>
        </div>

        {message && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-sm">{message}</p>}
        <button disabled={saving} className="mt-5 rounded-xl bg-gray-900 px-7 py-3 font-bold text-white disabled:opacity-50">{saving ? "در حال ذخیره..." : editingId ? "ذخیره تغییرات" : "ثبت مقاله"}</button>
      </form>

      {loading ? <div className="rounded-xl bg-white p-6 text-center">در حال بارگذاری...</div> : (
        <div className="grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <article key={article.id} className="rounded-2xl bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-bold">{article.titleTranslations?.fa || article.title}</h3>
                  <p className="text-sm text-gray-500" dir="ltr">/{article.slug}</p>
                </div>
                <span className="text-xs text-gray-400">{article.isActive ? "فعال" : "مخفی"}</span>
              </div>
              <p className="line-clamp-3 text-sm text-gray-600">{article.excerptTranslations?.fa || article.excerpt || "بدون خلاصه"}</p>
              <div className="mt-3 flex gap-2">
                <button onClick={() => edit(article)} className="rounded-lg bg-amber-100 px-3 py-1.5 text-sm">ویرایش</button>
                <button onClick={() => remove(article)} className="rounded-lg bg-red-50 px-3 py-1.5 text-sm text-red-700">حذف</button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
