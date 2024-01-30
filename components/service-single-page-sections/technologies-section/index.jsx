import React from 'react'

import { SiNextdotjs,SiFlutter,SiLaravel,SiTailwindcss,SiJavascript,SiTypescript,SiMongodb } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import SectionTitle from "@/components/common/section-title";
import NestedCircles from '@/components/service-single-page-nested-circles';

function TechnologiesSection() {
  const technologiesItems=[
    {id:1,icon:(<SiNextdotjs />),title:"Next"},
    {id:2,icon:(<SiFlutter />),title:"Flutter"},
    {id:3,icon:(<SiLaravel />),title:"Laravel"},
    {id:4,icon:(<SiTailwindcss />),title:"Tailwindcss"},
    {id:5,icon:(<SiJavascript />),title:"Javascript"},
    {id:6,icon:(<SiTypescript />),title:"Typescript"},
    {id:7,icon:(<SiMongodb />),title:"Mongodb"},
    {id:8,icon:(<FaReact />),title:"React"},
    {id:9,icon:(<FaReact />),title:"React"},
    {id:10,icon:(<FaReact />),title:"React"},
  ]
  return (
    <section className="w-full bg-g21 py-10">

    <div className="container max-w-none relative flex flex-col items-center justify-start p-8">
       
       <div className="lg:absolute lg:top-0 text-center w-[17rem] lg:w-[25.625rem]" >

        <SectionTitle classes="text-gf" title="The technologies we use" />
       </div>
       <div className="lg:hidden  flex items-center justify-center divide-x">
       {/* flex flex-col justify-start gap-1 */}
          <ul className="transition ease-in-out delay-150 flex flex-col justify-start gap-2">
            {
              technologiesItems.slice(0,5).map((item,i)=>(
                <li key={i} className="p-2 mr-3 technologiesItems text-gf hover:text-g21 rounded-xl hover:bg-gradient-to-r from-[#FFFFFFF2] to-[#FFFFFF4D] flex items-center justify-end gap-3 relative hover:cursor-pointer" >
                  <span className=" text-xl" >{item.title}</span>
                  <div className="bg-transparent  text-2xl w-[44px] h-[44px] flex justify-center items-center rounded-full">{item.icon}</div>
                </li>
              ))
            }
          
          </ul>  
          <ul className="transition ease-in-out delay-150 flex flex-col justify-end gap-2">
            {
              technologiesItems.slice(5,10).map((item,i)=>(
                <li key={i} className="p-2 ml-3 technologiesItems text-gf hover:text-g21 rounded-xl hover:bg-gradient-to-r from-[#FFFFFF4D] to-[#FFFFFFF2] flex items-center justify-start gap-3 relative hover:cursor-pointer" >
                  <div className="bg-transparent text-2xl w-[44px] h-[44px] flex justify-center items-center rounded-full">{item.icon}</div>
                  <span className=" text-xl" >{item.title}</span>
                </li>
              ))
            }
          
          </ul>  
          
       </div>

       <div className="hidden lg:block">
          <NestedCircles technologiesItems={technologiesItems} />

       </div>

    </div>


   </section>
  )
}
export default TechnologiesSection
// Reasons To
// Work With Us