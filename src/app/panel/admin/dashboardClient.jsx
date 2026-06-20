"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"

const typeLabels = {
  contact: "تماس با ما",
  join: "درخواست همکاری",
  "article-comment": "نظر مقاله",
  contract: "درخواست قرارداد و خدمات",
  other: "سایر",
}

export default function DashboardClient({ username }) {
  const [submissions, setSubmissions] = useState([])
  const [filter, setFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetch("/api/admin/submissions", { cache: "no-store" })
      .then(async (response) => {
        if (response.status === 401) {
          router.replace("/panel/admin/login")
          return { submissions: [] }
        }
        const data = await response.json()
        if (!response.ok) throw new Error(data.error || "دریافت اطلاعات انجام نشد.")
        return data
      })
      .then((data) => setSubmissions(data.submissions || []))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [router])

  const visible = useMemo(
    () => filter === "all" ? submissions : submissions.filter((item) => item.formType === filter),
    [filter, submissions]
  )

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" })
    router.replace("/panel/admin/login")
    router.refresh()
  }

  return (
    <main dir="rtl" className="min-h-screen bg-gray-100 p-4 text-gray-900 md:p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-col gap-4 rounded-2xl bg-gray-900 p-5 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">صندوق پیام‌های گندم</h1>
            <p className="mt-1 text-sm text-gray-300">خوش آمدید، {username}</p>
          </div>
          <button onClick={logout} className="rounded-xl border border-gray-600 px-5 py-2 text-sm hover:bg-gray-800">خروج امن</button>
        </header>

        <section className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-sm"><div className="text-sm text-gray-500">همه پیام‌ها</div><div className="mt-1 text-2xl font-bold">{submissions.length}</div></div>
          {["contact", "join", "contract"].map((type) => (
            <div key={type} className="rounded-xl bg-white p-4 shadow-sm"><div className="text-sm text-gray-500">{typeLabels[type]}</div><div className="mt-1 text-2xl font-bold">{submissions.filter((item) => item.formType === type).length}</div></div>
          ))}
        </section>

        <div className="mb-5 flex flex-wrap gap-2">
          <button onClick={() => setFilter("all")} className={`rounded-full px-4 py-2 text-sm ${filter === "all" ? "bg-[#FFD101] text-gray-900" : "bg-white"}`}>همه</button>
          {Object.entries(typeLabels).map(([type, label]) => (
            <button key={type} onClick={() => setFilter(type)} className={`rounded-full px-4 py-2 text-sm ${filter === type ? "bg-[#FFD101] text-gray-900" : "bg-white"}`}>{label}</button>
          ))}
        </div>

        {loading && <div className="rounded-xl bg-white p-8 text-center">در حال بارگذاری...</div>}
        {error && <div className="rounded-xl bg-red-50 p-5 text-red-700">{error}</div>}
        {!loading && !error && visible.length === 0 && <div className="rounded-xl bg-white p-8 text-center text-gray-500">پیامی در این بخش وجود ندارد.</div>}
        <div className="grid gap-4 lg:grid-cols-2">
          {visible.map((item) => (
            <article key={item.id} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-3 border-b pb-3">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium">{typeLabels[item.formType] || item.formType}</span>
                <time className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString("fa-IR")}</time>
              </div>
              <dl className="space-y-2 text-sm">
                <div><dt className="inline text-gray-500">نام: </dt><dd className="inline font-medium">{item.name || "—"}</dd></div>
                {item.phone && <div><dt className="inline text-gray-500">تلفن: </dt><dd dir="ltr" className="inline">{item.phone}</dd></div>}
                {item.email && <div><dt className="inline text-gray-500">ایمیل: </dt><dd dir="ltr" className="inline break-all"><a className="text-blue-700" href={`mailto:${item.email}`}>{item.email}</a></dd></div>}
                {item.cv && <div><dt className="inline text-gray-500">رزومه: </dt><dd className="inline break-all">{item.cv}</dd></div>}
                <div className="pt-2"><dt className="mb-1 text-gray-500">متن پیام:</dt><dd className="whitespace-pre-wrap rounded-xl bg-gray-50 p-3 leading-7">{item.content || "—"}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
