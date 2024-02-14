import ContactUsSection from '@/components/page/about/contactus-section'
import HeaderSection from '@/components/page/about/header-section'
import JoinSection from '@/components/page/about/join-section'
import PropertySection from '@/components/page/about/property-section'
import TeamSection from '@/components/page/about/team-section'
import React from 'react'

function AboutUs() {
  return (
    <main>  
      <div className="flex flex-col justify-start items-center gap-[3rem] ">
        <div className="w-full">
          <HeaderSection />
          <PropertySection />
        </div>
        <TeamSection />
        <div className="w-full">

          <JoinSection />
          <ContactUsSection />
        </div>
      </div>
    </main>
  )
}

export default AboutUs