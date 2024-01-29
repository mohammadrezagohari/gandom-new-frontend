import SectionFive from '@/components/service-page-sections/section-five'
import SectionFoure from '@/components/service-page-sections/section-foure'
import SectionOne from '@/components/service-page-sections/section-one'
import SectionSix from '@/components/service-page-sections/section-six'
import SectionThree from '@/components/service-page-sections/section-three'
import SectionTwo from '@/components/service-page-sections/section-two'
import React from 'react'

function Services() {
  return (
    <main className="">
        <h1 className="text-g21 lg:text-[6.8em] text-center text-[3.125em]  font-Holispay container">
           Services
        </h1>

        {/* <div style={{transform:' rotateY(180deg)',}} className="min-h-screen border-2 grid grid-cols-12 grid-rows-2 ">
          <div style={{transform:' rotateY(180deg)',}} className="col-span-1 row-span-2  p-2 border-2 border-red-500 order-1">3</div> 
          <div style={{transform:' rotateY(180deg)',}} className="col-span-11 lg:col-span-5 lg:row-span-2 row-span-1 p-2 border-2 border-red-500 order-3 lg:order-2">2</div>
          <div style={{transform:' rotateY(180deg)',}} className="col-span-11 lg:col-span-6 lg:row-span-2 row-span-1 p-2 border-2 border-red-500 order-2 lg:order-3">1</div>
        </div> */}
        
        <div className="flex flex-col justify-start items-center gap-[2.6rem] mb-[2.6rem]">

        <SectionOne />
        <SectionTwo />
        <div className="w-full">
           <SectionThree />
           <SectionFoure />
        </div>
        <SectionFive />
        <SectionSix />
        </div>

    </main>
  )
}

export default Services