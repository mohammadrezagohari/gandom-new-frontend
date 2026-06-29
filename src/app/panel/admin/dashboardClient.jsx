"use client"

import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import {
  HiOutlineChatAlt2,
  HiOutlineDocumentText,
  HiOutlineLogout,
  HiOutlinePencilAlt,
  HiOutlineUsers,
} from "react-icons/hi"
import TeamManager from "./teamManager"
import ArticleManager from "./articleManager"
import SiteContentManager from "./siteContentManager"

const typeLabels = {
  contact: "تماس با ما",
  join: "درخواست همکاری",
  "article-comment": "نظر مقاله",
  contract: "درخواست قرارداد و خدمات",
  other: "سایر",
}

const navigation = [
  { id: "messages", label: "پیام‌ها و فرم‌ها", description: "درخواست‌ها و پیام‌های دریافتی", icon: HiOutlineChatAlt2 },
  { id: "content", label: "محتوای سایت", description: "متن‌های فارسی و انگلیسی", icon: HiOutlinePencilAlt },
  { id: "articles", label: "مقالات", description: "ثبت و ویرایش وبلاگ", icon: HiOutlineDocumentText },
  { id: "team", label: "اعضای تیم", description: "پروفایل و رزومه اعضا", icon: HiOutlineUsers },
]

export default function DashboardClient({ username }) {
  const [submissions, setSubmissions] = useState([])
  const [filter, setFilter] = useState("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [tab, setTab] = useState("messages")
  const router = useRouter()
  const activeNavigation = navigation.find((item) => item.id === tab) || navigation[0]

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
      .catch((fetchError) => setError(fetchError.message))
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
    <main dir="rtl" className="min-h-screen bg-[#f4f5f7] text-gray-900">
      <aside className="fixed inset-y-0 right-0 z-40 hidden w-72 flex-col bg-[#17191d] p-5 text-white shadow-2xl lg:flex">
        <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FFD101] text-xl font-black text-gray-900">گ</div>
          <div>
            <h1 className="font-bold">مدیریت گندم</h1>
            <p className="mt-1 text-xs text-gray-400">{username}</p>
          </div>
        </div>

        <nav className="flex flex-1 flex-col gap-2">
          {navigation.map((item) => {
            const Icon = item.icon
            const active = tab === item.id
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-right transition ${active ? "bg-[#FFD101] text-gray-950" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              >
                <Icon className="shrink-0 text-2xl" />
                <span>
                  <strong className="block text-sm">{item.label}</strong>
                  <small className={`mt-1 block text-[11px] ${active ? "text-gray-700" : "text-gray-500"}`}>{item.description}</small>
                </span>
              </button>
            )
          })}
        </nav>

        <button type="button" onClick={logout} className="mt-6 flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white">
          <HiOutlineLogout className="text-xl" />
          خروج امن
        </button>
      </aside>

      <div className="min-h-screen lg:mr-72">
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 px-4 py-4 backdrop-blur-xl md:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold md:text-2xl">{activeNavigation.label}</h2>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">{activeNavigation.description}</p>
            </div>
            <button type="button" onClick={logout} className="rounded-xl border border-gray-200 px-4 py-2 text-sm text-gray-600 lg:hidden">خروج</button>
          </div>
        </header>

        <nav className="flex gap-2 overflow-x-auto border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
          {navigation.map((item) => (
            <button key={item.id} type="button" onClick={() => setTab(item.id)} className={`shrink-0 rounded-xl px-4 py-2 text-sm ${tab === item.id ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"}`}>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mx-auto max-w-7xl p-4 md:p-8 lg:p-10">
          {tab === "messages" && (
            <MessagesView
              submissions={submissions}
              visible={visible}
              filter={filter}
              setFilter={setFilter}
              loading={loading}
              error={error}
            />
          )}
          {tab === "team" && <TeamManager />}
          {tab === "articles" && <ArticleManager />}
          {tab === "content" && <SiteContentManager />}
        </div>
      </div>
    </main>
  )
}

function MessagesView({ submissions, visible, filter, setFilter, loading, error }) {
  return (
    <>
      <section className="mb-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard label="همه پیام‌ها" value={submissions.length} />
        {["contact", "join", "contract"].map((type) => (
          <StatCard key={type} label={typeLabels[type]} value={submissions.filter((item) => item.formType === type).length} />
        ))}
      </section>

      <div className="mb-5 flex flex-wrap gap-2">
        <FilterButton active={filter === "all"} onClick={() => setFilter("all")}>همه</FilterButton>
        {Object.entries(typeLabels).map(([type, label]) => (
          <FilterButton key={type} active={filter === type} onClick={() => setFilter(type)}>{label}</FilterButton>
        ))}
      </div>

      {loading && <div className="rounded-2xl bg-white p-8 text-center shadow-sm">در حال بارگذاری...</div>}
      {error && <div className="rounded-2xl bg-red-50 p-5 text-red-700">{error}</div>}
      {!loading && !error && visible.length === 0 && <div className="rounded-2xl bg-white p-8 text-center text-gray-500 shadow-sm">پیامی در این بخش وجود ندارد.</div>}

      <div className="grid gap-4 xl:grid-cols-2">
        {visible.map((item) => (
          <article key={item.id} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3 border-b pb-3">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium">{typeLabels[item.formType] || item.formType}</span>
              <time className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString("fa-IR")}</time>
            </div>
            <dl className="space-y-2 text-sm">
              <div><dt className="inline text-gray-500">نام: </dt><dd className="inline font-medium">{item.name || "-"}</dd></div>
              {item.phone && <div><dt className="inline text-gray-500">تلفن: </dt><dd dir="ltr" className="inline">{item.phone}</dd></div>}
              {item.email && <div><dt className="inline text-gray-500">ایمیل: </dt><dd dir="ltr" className="inline break-all"><a className="text-blue-700" href={`mailto:${item.email}`}>{item.email}</a></dd></div>}
              {item.cv && <div><dt className="inline text-gray-500">رزومه: </dt><dd className="inline break-all">{item.cv}</dd></div>}
              <div className="pt-2"><dt className="mb-1 text-gray-500">متن پیام:</dt><dd className="whitespace-pre-wrap rounded-xl bg-gray-50 p-3 leading-7">{item.content || "-"}</dd></div>
            </dl>
          </article>
        ))}
      </div>
    </>
  )
}

function StatCard({ label, value }) {
  return <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"><div className="text-sm text-gray-500">{label}</div><div className="mt-2 text-3xl font-bold">{value}</div></div>
}

function FilterButton({ active, onClick, children }) {
  return <button type="button" onClick={onClick} className={`rounded-full px-4 py-2 text-sm transition ${active ? "bg-[#FFD101] text-gray-900" : "bg-white text-gray-600 shadow-sm"}`}>{children}</button>
}
