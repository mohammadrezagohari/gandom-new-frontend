"use client"

import { useCallback, useEffect, useState } from "react"
import { useLocale, useTranslations } from "next-intl"
import { PiUserLight } from "react-icons/pi"
import SectionTitle from "@/src/components/common/section-title"
import { useFeedback } from "@/src/components/common/feedback-dialog"

const copy = {
  fa: {
    name: "نام شما *", email: "ایمیل (نمایش داده نمی‌شود)", comment: "نظر خود را بنویسید *", reply: "پاسخ خود را بنویسید *",
    saving: "در حال ثبت...", saveComment: "ثبت نظر", saveReply: "ثبت پاسخ", cancel: "انصراف", closeReply: "بستن پاسخ",
    replyAction: "پاسخ دادن", yourComment: "نظر شما", comments: "نظرات", unit: "نظر و پاسخ",
    loading: "در حال دریافت نظرات...", empty: "هنوز نظری ثبت نشده؛ اولین نفر باشید.", loadError: "دریافت نظرات انجام نشد.",
    saveError: "ثبت نظر انجام نشد.", success: "نظر شما با موفقیت ثبت شد.",
  },
  en: {
    name: "Your name *", email: "Email (will not be shown)", comment: "Write your comment *", reply: "Write your reply *",
    saving: "Submitting...", saveComment: "Submit comment", saveReply: "Submit reply", cancel: "Cancel", closeReply: "Close reply",
    replyAction: "Reply", yourComment: "Your comment", comments: "Comments", unit: "comments and replies",
    loading: "Loading comments...", empty: "No comments yet. Be the first to comment.", loadError: "Comments could not be loaded.",
    saveError: "The comment could not be submitted.", success: "Your comment was submitted successfully.",
  },
}

function CommentForm({ articleId, parentId = null, onSaved, onCancel }) {
  const locale = useLocale()
  const t = copy[locale] || copy.en
  const forms = useTranslations("forms")
  const { showFeedback } = useFeedback()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  async function submit(event) {
    event.preventDefault()
    const next = {}
    if (name.trim().length < 2) next.name = forms("required")
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) next.email = forms("invalidEmail")
    if (content.trim().length < 3) next.content = forms("required")
    setErrors(next)
    if (Object.keys(next).length) {
      showFeedback({ type: "error", title: forms("validationTitle"), message: [...new Set(Object.values(next))].join("\n") })
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`/api/articles/${encodeURIComponent(articleId)}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), content: content.trim(), parentId }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || t.saveError)
      setName("")
      setEmail("")
      setContent("")
      setErrors({})
      await onSaved()
      showFeedback({ type: "success", title: forms("successTitle"), message: t.success })
    } catch (error) {
      showFeedback({ type: "error", title: forms("errorTitle"), message: error.message || t.saveError })
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full rounded-xl border bg-white px-4 py-3 outline-none focus:border-gDarkYellow"
  return (
    <form noValidate onSubmit={submit} className={`grid gap-4 rounded-2xl ${parentId ? "bg-gray-50 p-4" : "bg-gf5 p-5 md:p-7"}`}>
      <div className="grid gap-4 md:grid-cols-2">
        <div><input aria-invalid={Boolean(errors.name)} maxLength={100} value={name} onChange={(event) => setName(event.target.value)} placeholder={t.name} className={`${inputClass} ${errors.name ? "border-red-500" : "border-gray-300"}`} />{errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}</div>
        <div><input aria-invalid={Boolean(errors.email)} type="email" maxLength={254} value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t.email} className={`${inputClass} ${errors.email ? "border-red-500" : "border-gray-300"}`} />{errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}</div>
      </div>
      <div><textarea aria-invalid={Boolean(errors.content)} maxLength={3000} rows={parentId ? 3 : 5} value={content} onChange={(event) => setContent(event.target.value)} placeholder={parentId ? t.reply : t.comment} className={`${inputClass} resize-y ${errors.content ? "border-red-500" : "border-gray-300"}`} />{errors.content && <p className="mt-1 text-sm text-red-600">{errors.content}</p>}</div>
      <div className="flex flex-wrap gap-2">
        <button disabled={loading} type="submit" className="rounded-xl bg-g21 px-6 py-3 text-white transition hover:opacity-85 disabled:opacity-50">{loading ? t.saving : parentId ? t.saveReply : t.saveComment}</button>
        {onCancel && <button type="button" onClick={onCancel} className="rounded-xl border border-gray-300 px-5 py-3">{t.cancel}</button>}
      </div>
    </form>
  )
}

function CommentCard({ comment, articleId, onSaved }) {
  const locale = useLocale()
  const t = copy[locale] || copy.en
  const [replying, setReplying] = useState(false)
  async function saved() { setReplying(false); await onSaved() }

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5">
      <header className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-100"><PiUserLight className="text-xl text-gray-600" /></div><div><h3 className="font-bold text-g21">{comment.name}</h3><time className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString(locale === "fa" ? "fa-IR" : "en-US")}</time></div></header>
      <p className="whitespace-pre-wrap py-4 leading-7 text-gray-700">{comment.content}</p>
      <button type="button" onClick={() => setReplying((value) => !value)} className="text-sm font-medium text-gDarkYellow">{replying ? t.closeReply : t.replyAction}</button>
      {replying && <div className="mt-4"><CommentForm articleId={articleId} parentId={comment.id} onSaved={saved} onCancel={() => setReplying(false)} /></div>}
      {comment.replies?.length > 0 && <div className="mt-5 space-y-3 border-s-2 border-amber-300 ps-4">{comment.replies.map((reply) => <div key={reply.id} className="rounded-xl bg-gray-50 p-4"><div className="flex items-center justify-between gap-3"><strong className="text-sm text-g21">{reply.name}</strong><time className="text-xs text-gray-500">{new Date(reply.createdAt).toLocaleString(locale === "fa" ? "fa-IR" : "en-US")}</time></div><p className="mt-2 whitespace-pre-wrap leading-7 text-gray-700">{reply.content}</p></div>)}</div>}
    </article>
  )
}

export default function CommentSection({ articleId }) {
  const locale = useLocale()
  const t = copy[locale] || copy.en
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  const loadComments = useCallback(async () => {
    try {
      setError("")
      const response = await fetch(`/api/articles/${encodeURIComponent(articleId)}/comments`, { cache: "no-store" })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || t.loadError)
      setComments(data.comments || [])
    } catch (loadError) {
      setError(loadError.message)
    } finally {
      setLoading(false)
    }
  }, [articleId, t.loadError])

  useEffect(() => { loadComments() }, [loadComments])
  const count = comments.reduce((total, comment) => total + 1 + (comment.replies?.length || 0), 0)

  return (
    <section className="my-[5%]">
      <div className="mb-8"><SectionTitle classes="text-g21" title={t.yourComment} /><CommentForm articleId={articleId} onSaved={loadComments} /></div>
      <div className="mb-5 flex items-center justify-between"><SectionTitle classes="text-g21" title={t.comments} /><span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{count} {t.unit}</span></div>
      {loading && <div className="rounded-xl bg-gray-50 p-6 text-center">{t.loading}</div>}
      {error && <div className="rounded-xl bg-red-50 p-4 text-red-700">{error}</div>}
      {!loading && !error && comments.length === 0 && <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-500">{t.empty}</div>}
      <div className="space-y-4">{comments.map((comment) => <CommentCard key={comment.id} comment={comment} articleId={articleId} onSaved={loadComments} />)}</div>
    </section>
  )
}
