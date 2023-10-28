import ContactUsSection from '@/components/aboutUs-page-sections/contactus-section'
import HeaderSection from '@/components/aboutUs-page-sections/header-section'
import JoinSection from '@/components/aboutUs-page-sections/join-section'
import PropertySection from '@/components/aboutUs-page-sections/property-section'
import TeamSection from '@/components/aboutUs-page-sections/team-section'
import React from 'react'

function AboutUs() {
  return (
    <main> 
      <div className="flex flex-col justify-start items-center gap-[3rem] ">

        <HeaderSection />
        <PropertySection />
        <TeamSection />
        <div className="">

          <JoinSection />
          <ContactUsSection />
        </div>
      </div>
    </main>
  )
}

export default AboutUs