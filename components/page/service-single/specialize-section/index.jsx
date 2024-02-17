import SectionTitle from '@/components/common/section-title'
import SpecializeCard from '@/components/common/cards/service/specialize-card'
import React from 'react'

function SpecializeSection() {
  const specializeItems=[
    {id:1,title:"CRM/ERP",desc:"Boost sales with a bespoke customer relationship management system & efficiency of core activities with enterprise resource planning tools."},
    {id:2,title:"E-Commerce & Retail",desc:"Sell your goods online or promote your loyalty programs with our e-stores and customers’ personal accounts."},
    {id:3,title:"Marketplace",desc:"Realize your idea of creating a platform to unite different sellers and buyers in one place with us."},
    {id:4,title:"Software As a Service (SaaS)",desc:"Launch your new uber-type on-demand startup with our web development services. We will help you develop and boost the idea."},
    {id:5,title:"On-Demand Applications",desc:"Launch your new uber-type on-demand startup with our web development services. We will help you develop and boost the idea."},
    {id:6,title:"Other",desc:"Turn any of your startup ideas into reality with us."},
  ]
  return (
    <section className="w-full">
    <div className="container max-w-none py-[0.5rem] lg:py-[3.125rem]">
        <SectionTitle  classes="text-g21" title="We Specialize In"  />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:my-2">
          {
            specializeItems.map((item,i)=>(
              <SpecializeCard key={i} title={item.title} desc={item.desc} classes="col-span-1 md:col-span-1 lg:col-span-1" />
            ))
          }
        </div>
    </div>
   </section>
  )
}

export default SpecializeSection