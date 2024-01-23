import AboutSection from '@/components/landing-page-sections/about-section'
import CompanySection from '@/components/landing-page-sections/company-section'
import ContactSection from '@/components/landing-page-sections/contact-section'
import HeadSection from '@/components/landing-page-sections/header-section'
import OurworkSection from '@/components/landing-page-sections/ourwork-section'
import ServiceSection from '@/components/landing-page-sections/service-section'
import React from 'react'

function Landing() {
    
  return (
    <main className="">
      <HeadSection />
      <ServiceSection />
      <OurworkSection />
      <ContactSection />
      <AboutSection />
      <CompanySection />
    </main>
  )
}

export default Landing