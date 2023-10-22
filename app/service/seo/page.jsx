import ReasonsToWorkSection from '@/components/service-single-page-sections/ReasonsToWork-section'
import CommentsSection from '@/components/service-single-page-sections/comments-section'
import HeaderSection from '@/components/service-single-page-sections/header-section'
import MessageSection from '@/components/service-single-page-sections/message-section'
import OurworkSection from '@/components/service-single-page-sections/ourwork-section'
import ProcessSection from '@/components/service-single-page-sections/process-section'
import SpecializeSection from '@/components/service-single-page-sections/specialize-section'
import SupportSection from '@/components/service-single-page-sections/support-section'
import TechnologiesSection from '@/components/service-single-page-sections/technologies-section'

import React from 'react'

function Seo() {
  return (
    <main> 
      <div className="flex flex-col justify-start items-center gap-[3rem] ">

          <HeaderSection />
          <SpecializeSection />
          <OurworkSection />
          <TechnologiesSection />
          <ReasonsToWorkSection />
          <MessageSection />
          <SupportSection />
          <ProcessSection />
          <CommentsSection />

      </div>
    </main>
  )
}

export default Seo