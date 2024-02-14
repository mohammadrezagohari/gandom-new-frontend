import ReasonsToWorkSection from '@/components/page/service-single/ReasonsToWork-section'
import CommentsSection from '@/components/page/service-single/comments-section'
import HeaderSection from '@/components/page/service-single/header-section'
import MessageSection from '@/components/page/service-single/message-section'
import OurworkSection from '@/components/page/service-single/ourwork-section'
import ProcessSection from '@/components/page/service-single/process-section'
import SpecializeSection from '@/components/page/service-single/specialize-section'
import SupportSection from '@/components/page/service-single/support-section'
import TechnologiesSection from '@/components/page/service-single/technologies-section'

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