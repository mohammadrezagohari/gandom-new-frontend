import React from "react";
import Image from "next/image";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FilledButton from "@/components/common/buttons/filled";
import SectionTitle from "@/components/common/section-title";

gsap.registerPlugin(useGSAP, ScrollTrigger);


function AboutSection({aboutSec}) {

  // useGSAP(
  //   () => {
  //     // const boxes = gsap.utils.toArray('.box');
  //     boxes.forEach((box) => {
  //       gsap.to(box, {
  //         x: 150,
  //         scrollTrigger: {
  //           trigger: box,
  //           start: 'bottom bottom',
  //           end: 'top 20%',
  //           scrub: true,
  //           // markers: true,
  //         },
  //       });
  //     });
  //   },
  //   { scope: aboutSec }
  // );

  //-----------------------------------------------------

  // useGSAP(
  //   () => {
  //     const tl1 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mob1,
  //         start: 'top bottom',
  //         end: 'bottom bottom',
  //         // end: () => "+=" + aboutSec.current.offsetWidth,
  //         scrub: true,
  //         markers: true,
  //       },
  //     })
  //     tl1.fromTo(mob1, {scale:5, x: -200}, {scale:1, x: 700})
  //     // tl1.fromTo(mob1, {rotate:360, x: -200}, {rotate:0, x: 700})
  //     // tl1.from(mob1, {scale:5})

  //     const tl2 = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: mob2,
  //         start: 'top bottom',
  //         end: 'bottom 80%',
  //         // end: () => "+=" + aboutSec.current.offsetWidth,
  //         scrub: true,
  //         markers: true,
  //       },
  //     })
  //     tl2.fromTo(mob2, {scale:5,x: 1500}, {scale:1,x: '900px'})
  //     // tl2.fromTo(mob2, {rotate:360,x: 1500}, {rotate:0,x: '900px'})
  //     // tl2.from(mob2, {scale:5})
  //     // tl.from(mob1, { x: 0,scale: 12.18999, })
  //     // tl.to(mob1, { x: 650,scale: 1, })
  //   },
  //   { scope: aboutSec }
  // );
  return (
    <>
    <section ref={aboutSec} className="w-full   lg:h-screen !overflow-x-hidden">
      {/*<div id='mob1' className="z-40 flex items-end justify-center absolute   h-[370px] lg:h-[35vw]  mx-auto">
          <Image
                  width={100}
                  height={100}
                  alt={'phone picture'}
                  src={'/img/1.png'}
                  className="w-full h-full"
          /> 
      </div>
      <div id='mob2' className="z-30 flex items-end justify-center absolute   h-[370px] lg:h-[35vw]  mx-auto">
          <Image
                  width={100}
                  height={100}
                  alt={'phone picture'}
                  src={'/img/2psd.png'}
                  className="w-full h-full"
          /> 
      </div> */}


      <div className="container relative max-w-none  gap-7 lg:gap-0 py-[3vw] grid grid-cols-12 lg:grid-cols-12 lg:h-full ">
        {/* <div claassName="w-full grid grid-cols-12 lg:grid-cols-12" > */}
          <div className=" col-span-12 lg:col-span-7 order-2 lg:order-1 flex items-center lg:h-full" >
              <div className="aboutSectionLeftColBg h-full w-full lg:w-[90%] flex flex-col items-start justify-center bg-aboutSectionGandomLogo bg-no-repeat bg-left" >
                  <SectionTitle classes="text-g21" title="About Us" />
                  <p className="text-justify text-g4c lg:text-[1.6927083333333333vw] lg:leading-[3.125vw] text-[16px] leading-[24px] font-PoppinsLight ">
                   df Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
                    purus viverra accumsan in nisl nisi. Arcu cursus vitae Egestas purus
                    viverra accumsan in nisl nisi. Arcu cursus vitae
                  </p>
                  <div className="py-4 lg:py-8">

                    <FilledButton link='/about-us' title='Read More' classes={` px-3`} />
                  </div>
              </div>
          </div> 
          <div className=" col-span-12 lg:col-span-5 order-1 lg:order-2 flex items-center lg:h-full" >
            <div className="w-full h-[35vh] lg:h-[25vw] bg-gYellow rounded-3xl relative">
              <div className=" flex items-end justify-center absolute right-[5%] bottom-[5%] left-[5%] w-[90%]  h-[370px] lg:h-[35vw]  mx-auto">
                <Image
                  width={100}
                  height={100}
                  alt={'phone picture'}
                  src={'/landing/phoneLanding.svg'}
                  className="w-full h-full"
                /> 
              </div>
            </div>
          </div> 
        {/* </div> */}
      </div>
     
    </section>
    </>
  );
}

export default AboutSection;
