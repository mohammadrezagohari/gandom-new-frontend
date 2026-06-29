"use client"
import { useEffect, useMemo, useState } from "react"

const groupLabels={landing:"صفحه اصلی",services:"خدمات",portfolio:"نمونه‌کارها",about:"درباره ما",contact:"تماس",navigation:"ناوبری",shared:"مشترک"}

export default function SiteContentManager(){
  const [items,setItems]=useState([])
  const [group,setGroup]=useState("all")
  const [query,setQuery]=useState("")
  const [saving,setSaving]=useState(null)
  const [message,setMessage]=useState("")
  useEffect(()=>{fetch("/api/admin/site-content",{cache:"no-store"}).then(async r=>{const d=await r.json();if(!r.ok)throw new Error(d.error||"خطا در دریافت محتوا");return d}).then(d=>setItems(d.contents||[])).catch(e=>setMessage(e.message))},[])
  const groups=useMemo(()=>[...new Set(items.map(item=>item.group))], [items])
  const visible=useMemo(()=>items.filter(item=>(group==="all"||item.group===group)&&(!query||item.key.toLowerCase().includes(query.toLowerCase())||item.translations.fa.includes(query)||item.translations.en.toLowerCase().includes(query.toLowerCase()))),[items,group,query])
  function update(id,locale,value){setItems(current=>current.map(item=>item.id===id?{...item,translations:{...item.translations,[locale]:value}}:item))}
  async function save(item){
    setSaving(item.id);setMessage("")
    try{const r=await fetch(`/api/admin/site-content/${item.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({translations:item.translations,isActive:item.isActive})});const d=await r.json();if(!r.ok)throw new Error(d.error||"ذخیره انجام نشد");setItems(current=>current.map(row=>row.id===item.id?d.content:row));setMessage("محتوا با موفقیت ذخیره شد.")}
    catch(e){setMessage(e.message)}finally{setSaving(null)}
  }
  return <section>
    <div className="mb-5 rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold">محتوای چندزبانه سایت</h2>
      <p className="mt-1 text-sm text-gray-500">متن فارسی و انگلیسی همه صفحه‌ها را از این بخش ویرایش کنید.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={()=>setGroup("all")} className={`rounded-full px-4 py-2 text-sm ${group==="all"?"bg-gray-900 text-white":"bg-gray-100"}`}>همه</button>
        {groups.map(value=><button key={value} onClick={()=>setGroup(value)} className={`rounded-full px-4 py-2 text-sm ${group===value?"bg-gray-900 text-white":"bg-gray-100"}`}>{groupLabels[value]||value}</button>)}
      </div>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="جست‌وجوی کلید یا متن..." className="mt-4 w-full rounded-xl border p-3 outline-none focus:border-amber-400"/>
    </div>
    {message&&<div className="mb-4 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">{message}</div>}
    <div className="grid gap-4">
      {visible.map(item=><article key={item.id} className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div><span className="rounded-full bg-gray-100 px-3 py-1 text-xs">{groupLabels[item.group]||item.group}</span><code dir="ltr" className="mr-3 text-xs text-gray-500">{item.key}</code></div>
          <button disabled={saving===item.id} onClick={()=>save(item)} className="rounded-xl bg-[#FFD101] px-5 py-2 text-sm font-medium disabled:opacity-50">{saving===item.id?"در حال ذخیره...":"ذخیره"}</button>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <label className="text-sm font-medium">فارسی<textarea dir="rtl" rows={item.translations.fa.length>120?5:2} value={item.translations.fa} onChange={e=>update(item.id,"fa",e.target.value)} className="mt-2 w-full rounded-xl border p-3 font-normal leading-7 outline-none focus:border-amber-400"/></label>
          <label className="text-sm font-medium">English<textarea dir="ltr" rows={item.translations.en.length>120?5:2} value={item.translations.en} onChange={e=>update(item.id,"en",e.target.value)} className="mt-2 w-full rounded-xl border p-3 font-normal leading-7 outline-none focus:border-amber-400"/></label>
        </div>
      </article>)}
    </div>
  </section>
}
