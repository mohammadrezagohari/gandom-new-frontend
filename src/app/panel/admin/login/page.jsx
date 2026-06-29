"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useFeedback } from "@/src/components/common/feedback-dialog"

export default function AdminLogin() {
  const { showFeedback } = useFeedback()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function submit(event) {
    event.preventDefault()
    setError("")
    if (!username.trim() || password.length < 8) {
      showFeedback({ type: "error", title: "اطلاعات ورود ناقص است", message: "نام کاربری و رمز عبور حداقل ۸ کاراکتری را وارد کنید." })
      return
    }
    setLoading(true)
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "ورود انجام نشد.")
      router.replace("/panel/admin")
      router.refresh()
    } catch (error) {
      setError(error.message)
      showFeedback({ type: "error", title: "ورود ناموفق", message: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#111827] flex items-center justify-center p-4 font-sans">
      <form onSubmit={submit} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD101] text-2xl font-bold">گ</div>
          <h1 className="text-2xl font-bold text-gray-900">ورود به پنل مدیریت</h1>
          <p className="mt-2 text-sm text-gray-500">برای مشاهده پیام‌ها وارد حساب ادمین شوید.</p>
        </div>
        <label className="mb-2 block text-sm font-medium text-gray-700">نام کاربری</label>
        <input required autoComplete="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-5 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
        <label className="mb-2 block text-sm font-medium text-gray-700">رمز عبور</label>
        <input required minLength={8} type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100" />
        {error && <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <button disabled={loading} type="submit" className="w-full rounded-xl bg-gray-900 px-4 py-3 font-bold text-white transition hover:bg-gray-800 disabled:opacity-60">
          {loading ? "در حال بررسی..." : "ورود"}
        </button>
      </form>
    </main>
  )
}
