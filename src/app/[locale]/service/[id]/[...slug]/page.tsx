import ReasonsToWorkSection from "@/src/components/page/service-single/ReasonsToWork-section";
import CommentsSection from "@/src/components/page/service-single/comments-section";
import HeaderSection from "@/src/components/page/service-single/header-section";
import MessageSection from "@/src/components/page/service-single/message-section";
import OurworkSection from "@/src/components/page/service-single/ourwork-section";
import ProcessSection from "@/src/components/page/service-single/process-section";
import SpecializeSection from "@/src/components/page/service-single/specialize-section";
import SupportSection from "@/src/components/page/service-single/support-section";
import TechnologiesSection from "@/src/components/page/service-single/technologies-section";


function ServiceSinglePage() {
  return (
      <div className="flex flex-col justify-start items-center gap-[3rem] ">
        <HeaderSection sectionId={1} />
        <SpecializeSection />
        <OurworkSection />
        <TechnologiesSection />
        <ReasonsToWorkSection />
        <MessageSection />
        <SupportSection />
        <ProcessSection />
        <CommentsSection />
      </div>
  );
}

export default ServiceSinglePage;
