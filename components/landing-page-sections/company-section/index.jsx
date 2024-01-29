import CompanySlider from "@/components/all-sliders-component/landing-sliders/company-slider";
import OutlinedButton from "@/components/common/buttons/outlined";
import SectionTitle from "@/components/common/section-title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CompanySection() {
  const company = [
    {
      id: 1,
      src: "/img/compony_1.png",
      alt: "company picture",
      width: "92",
      // height: "120",
    },
    {
      id: 2,
      src: "/img/compony_2.png",
      alt: "company picture",
      width: "146",
      // height: "122",
    },
    {
      id: 3,
      src: "/img/compony_3.png",
      alt: "company picture",
      width: "92",
      // height: "120",
    },
    {
      id: 4,
      src: "/img/compony_4.png",
      alt: "company picture",
      width: "110",
      // height: "122",
    },
    {
      id: 5,
      src: "/img/compony_5.png",
      alt: "company picture",
      width: "215",
      // height: "120",
    },
    {
      id: 6,
      src: "/img/compony_6.png",
      alt: "company picture",
      width: "110",
      // height: "122",
    },
    // {
    //   id: 7,
    //   src: "/img/compony_7.png",
    //   alt: "company picture",
    //   width: "92",
    //   height: "120",
    // },
    ,
  ];
  return (
    <section className="w-full bg-gf5 py-8 lg:py-24">
      <div className="container flex justify-between items-center">
       <SectionTitle classes="text-g21" title='trusted by +50 company worldwide' />
        <div className="hidden lg:inline-block">
          <OutlinedButton classes="border-g8 text-g8" title='See More' link='/' />
        </div>
      </div>

      <div className="container">
        <div className="hidden lg:flex items-center justify-between text-g8   mt-12 lg:mt-16">
          {company.map((item, i) => (
            <Image
              key={i}
              width={item.width}
              height={100}
              alt={item.alt}
              src={item.src}
            />
          ))}
        </div>
        <div className=" block lg:hidden   my-12 lg:mb-16">
          <CompanySlider />
        </div>
      </div>

      <div className=" flex items-center justify-center lg:hidden">
        <OutlinedButton classes="border-g8 text-g8" title='See More' link='/' />
      </div>
    </section>
  );
}

export default CompanySection;
