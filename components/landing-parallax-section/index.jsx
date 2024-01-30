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
                    className="bg absolute top-0 left-0 w-full h-full"
                    style={{
                        filter: "brightness(0.68)",
                        zIndex: "-1",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(/img/land_1.png)`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                
                <GlassmorphismBox
                    title="Online appointment application"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae "
                />
            </section>
            <section
                className="relative h-screen  flex justify-center items-start lg:justify-start lg:items-end pt-[15%] lg:pb-28 lg:pl-14">
                <div
                    className="bg absolute top-0 left-0 w-full h-full"
                    style={{
                        filter: "brightness(0.68)",
                        zIndex: "-1",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(/img/land_2.png)`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <GlassmorphismBox
                    title="Online appointment application"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae "
                />
            </section>
            <section
                className="relative h-screen  flex justify-center items-start lg:justify-end lg:items-end pt-[15%] lg:pb-28 lg:pr-14">
                <div
                    className="bg absolute top-0 left-0 w-full h-full"
                    style={{
                        filter: "brightness(0.68)",
                        zIndex: "-1",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: `url(/img/land_3.png)`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <GlassmorphismBox
                    title="Online appointment application"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae "
                />
            </section>
        </div>
    )
}

export default ParallaxPart


{/* <div className="">
<section
    className="relative h-screen flex justify-center items-start lg:justify-end lg:items-end pt-[15%] lg:pb-28 lg:pr-14">
    <div
        className="bg absolute top-0 left-0 w-full h-full"
        style={{
            filter: "brightness(0.68)",
            zIndex: "-1",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(landing/ourwork1.svg)`,
        }}
    />
    
    <GlassmorphismBox
        title="Online appointment application"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae "
    />
</section>
<section
    className="relative h-screen  flex justify-center items-start lg:justify-start lg:items-end pt-[15%] lg:pb-28 lg:pl-14">
    <div
        className="bg absolute top-0 left-0 w-full h-full"
        style={{
            filter: "brightness(0.68)",
            zIndex: "-1",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(landing/ourwork2.svg)`,
        }}
    />
    <GlassmorphismBox
        title="Online appointment application"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae "
    />
</section>
<section
    className="relative h-screen  flex justify-center items-start lg:justify-end lg:items-end pt-[15%] lg:pb-28 lg:pr-14">
    <div
        className="bg absolute top-0 left-0 w-full h-full"
        style={{
            filter: "brightness(0.68)",
            zIndex: "-1",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(landing/ourwork3.svg)`,
        }}
    />
    <GlassmorphismBox
        title="Online appointment application"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae "
    />
</section>
</div> */}