import Image from "next/image";
// import AboutSection from "@/src/components/page/landing/about-section";
// import CompanySection from "@/src/components/page/landing/company-section";
// import ContactSection from "@/src/components/page/landing/contact-section";
// import HeadSection from "@/src/components/page/landing/header-section";
// import OurworkSection from "@/src/components/page/landing/ourwork-section";
// import ServiceSection from "@/src/components/page/landing/service-section";
// import ScrollIndicator from "@/src/components/common/scroll-indicator";
// import Landing from "@/src/components/page/landing/landing";
// app/page.js
import { redirect } from "next/navigation";

export default function RootPage() {
    redirect("/en")
}
