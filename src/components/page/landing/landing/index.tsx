"use client";
import React, { useEffect, useRef } from "react";
import ScrollIndicator from "../../../../components/common/scroll-indicator";
import HeadSection from "../header-section";
import ServiceSection from "../service-section";
import OurworkSection from "../ourwork-section";
import ContactSection from "../contact-section";
import AboutSection from "../about-section";
import CompanySection from "../company-section";

const Landing = () => {
    const aboutSec = useRef();
    const scrollProgress = useRef();

    let scrollPercentage = () => {
        // scrollProgress.current
        let pos = document.documentElement.scrollTop;
        let pageHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / pageHeight);
        // scrollProgress.current.style.background = `conic-gradient(#212121 ${scrollValue}%,#ffd101 ${scrollValue}%) `;
        // console.log('scrollValue',scrollValue)
    };
    if (typeof window !== "undefined") {
        // const {innerHeight} = window;
        window.onscroll = scrollPercentage;
        window.onload = scrollPercentage;
    }
    // useEffect(() => {
    //     scrollPercentage()
    // }, []);
    return (
        <main className=" !overflow-x-hidden">
            <ScrollIndicator scrollProgress={scrollProgress} />
            <HeadSection />
            <ServiceSection />
            <OurworkSection />
            <ContactSection />
            <AboutSection aboutSec={aboutSec} />
            <CompanySection />
        </main>
    );
};

export default Landing;
