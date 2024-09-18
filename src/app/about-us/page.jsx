import ContactUsSection from "@/src/components/page/about/contactus-section";
import HeaderSection from "@/src/components/page/about/header-section";
import JoinSection from "@/src/components/page/about/join-section";
import PropertySection from "@/src/components/page/about/property-section";
import TeamSection from "@/src/components/page/about/team-section";
import React from "react";

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
  );
}

export default AboutUs;
