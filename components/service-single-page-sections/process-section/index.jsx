import React from 'react'
import SectionTitle from '@/components/common/section-title';
import ProcessCard from "@/components/common/cards/service/process-card";
function ProcessSection() {
  const process = [
    {
      id: 1,
      number: "01",
      title: "Web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 2,
      number: "02",
      title: "App",
      desc: "Boost sales with a bespoke customer relationship management system & efficiency of core activities with enterprise resource planning tools.",
    },
    {
      id: 3,
      number: "03",
      title: "SEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 4,
      number: "04",
      title: "Graphic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 5,
      number: "05",
      title: "Ui/Ux",
      desc: " Find the new source of income with the software as a service you will have made for your specific requirements. Find the new source of income with the software as a service you will have made for your specific requirements.",
    },
    {
      id: 6,
      number: "06",
      title: "Softwar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .  ",
    },
    
  ];
  return (
    <section className="w-full">

    <div className="container">
      <SectionTitle classes="text-g21" title="Our Process" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-5 ">
        {
          process.map((item,i)=>(
            <ProcessCard parentClasses="p-3 pb-8 gap-3 lg:gap-4" circleClasses="w-[4.5rem] h-[4.5rem]  lg:w-[5.5rem] lg:h-[5.5rem] bg-transparent border-[1px] border-g21 text-[3rem] lg:text-[3.5rem]" number={item.number} titleClasses="text-gDarkYellow lg:text-2xl  text-xl text-justify font-Holispay" title={item.title} descClasses="text-g8 text-[0.813rem] text-justify font-PoppinsLight line-clamp-5" desc={item.desc} key={i} />
          ))
        }
      </div>

    </div>


   </section>
  )
}
export default ProcessSection