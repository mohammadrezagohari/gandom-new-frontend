import ReasonsToWorkSection from "@/src/components/page/service-single/ReasonsToWork-section";
import CommentsSection from "@/src/components/page/service-single/comments-section";
import HeaderSection from "@/src/components/page/service-single/header-section";
import MessageSection from "@/src/components/page/service-single/message-section";
import OurworkSection from "@/src/components/page/service-single/ourwork-section";
import ProcessSection from "@/src/components/page/service-single/process-section";
import SpecializeSection from "@/src/components/page/service-single/specialize-section";
import SupportSection from "@/src/components/page/service-single/support-section";
import TechnologiesSection from "@/src/components/page/service-single/technologies-section";
import { getTranslations } from "next-intl/server";
import { createPageMetadata } from "@/src/lib/seo";
import { notFound, permanentRedirect } from "next/navigation";

const serviceSlugs = ["software-development", "search-engine-optimization", "graphic-design", "web-development", "content-generate", "mobile-application"];
export async function generateMetadata({ params }: { params: Promise<{ id: string, locale: string, slug: string[] }> }) {
  const { id, locale, slug } = await params;
  const index = Number(id) - 1;
  if (!Number.isInteger(index) || index < 0 || index >= serviceSlugs.length) return createPageMetadata({ locale, pathname: `service/${id}`, title: locale === "fa" ? "خدمت یافت نشد" : "Service not found", noIndex: true });
  if ((slug || []).join("/") !== serviceSlugs[index]) permanentRedirect(`/${locale}/service/${id}/${serviceSlugs[index]}`);
  const t = await getTranslations({ locale, namespace: "services" });
  return createPageMetadata({ locale, pathname: `service/${id}/${serviceSlugs[index]}`, title: t(`items.${index}.title`), description: t(`items.${index}.description`) });
}


async function ServiceSinglePage({ params }: { params: Promise<{ id: string, locale: string, slug: string[] }> }) {
  const { id, locale, slug } = await params;
  const serviceIndex = Math.max(0, Number(id) - 1);
  if (!Number.isInteger(Number(id)) || serviceIndex < 0 || serviceIndex >= serviceSlugs.length) notFound();
  return (
      <div className="flex flex-col justify-start items-center gap-[3rem] ">
        <HeaderSection serviceIndex={serviceIndex} />
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
