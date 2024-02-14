"use client";

import React, {useEffect, useRef} from "react";
import gsap from "gsap";
import {ScrollSmoother, ScrollTrigger} from "gsap/all";
import GlassmorphismBox from "@/components/common/glassmorphism-box/lg";
import Image from "next/image";

function ParallaxPart() {


    // if (typeof window !== "undefined") {
    //     const {innerHeight} = window;
    // }
    // const getRatio = (el) => innerHeight / (innerHeight + el.offsetHeight);

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.utils.toArray("section").forEach((section, i) => {
    //         section.bg = section.querySelector(".bg");

    //         gsap.fromTo(
    //             section.bg,
    //             {
    //                 backgroundPosition: () =>
    //                     i ? `50% ${-innerHeight * getRatio(section)}px` : "50% 0px",
    //             },
    //             {
    //                 backgroundPosition: () =>
    //                     `50% ${innerHeight * (1 - getRatio(section))}px`,
    //                 ease: "none",
    //                 scrollTrigger: {
    //                     trigger: section,
    //                     start: () => (i ? "top bottom" : "top top"),
    //                     end: "bottom top",
    //                     scrub: true,
    //                 },
    //             }
    //         );
    //     });
    // }, []); 



    return (
        <div className="">
            <section
                className="relative h-screen flex justify-center items-start lg:justify-end lg:items-end pt-[15%] lg:pb-28 lg:pr-14">
                <div
                    className="bg-[url(/img/freecancer.jpg)] lg:bg-[url(/img/para1.webp)] absolute top-0 left-0 w-full h-full"
                    style={{
                        filter: "brightness(0.68)",
                        zIndex: "-1",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // backgroundImage: `url(/img/para1.webp)`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                 <GlassmorphismBox
                    title="ّFree Cancer Website learning"
                    link={"https://freecancer.ir/"}
                    desc="A dedicated medical institution's website on cancer treatment features comprehensive educational resources, treatment options, and support services. It emphasizes patient stories, clinical expertise, and community engagement, providing a holistic approach to empower individuals facing cancer."
                />
                
            </section>
            <section
                className="relative h-screen  flex justify-center items-start lg:justify-start lg:items-end pt-[15%] lg:pb-28 lg:pl-14">
                <div
                    className="bg-[url(/img/Tetato-banner.jpg)] lg:bg-[url(/img/para3.webp)] absolute top-0 left-0 w-full h-full"
                    style={{
                        filter: "brightness(0.68)",
                        zIndex: "-1",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // backgroundImage: `url(/img/para3.webp)`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <GlassmorphismBox
                    title="Mobile application Testato"
                    link={"https://testato.ir"}
                    desc="Testato is a mobile app designed to aid students in preparing for university entrance exams by offering study materials and practice exams. It aims to streamline exam readiness and enhance academic performance."
                />
            </section>
            <section
                className="relative h-screen  flex justify-center items-start lg:justify-end lg:items-end pt-[15%] lg:pb-28 lg:pr-14">
                <div
                    className="bg-[url(/img/Arefset.jpg)] lg:bg-[url(/img/para2.jpg)] absolute top-0 left-0 w-full h-full"
                    style={{
                        filter: "brightness(0.68)",
                        zIndex: "-1",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        // backgroundImage: `url(/img/para2.jpg)`,
                        backgroundAttachment: 'fixed'
                    }}
                />
               <GlassmorphismBox
                    title="The clothing brand AREF"
                    link="https://arefset.com"
                    desc="To learn more about the AREF clothing brand that combines sport and classic styles, I recommend checking their official website, social media pages, or reputable fashion retail platforms for the latest information on their collections, design philosophy, and available products."
                />
            </section>
        </div>
    )
}

export default ParallaxPart