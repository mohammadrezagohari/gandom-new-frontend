import React from "react";
import Image from "next/image";
import SectionTitle from "@/components/common/section-title";
import CardBox from "@/components/common/cards/card-box";
import { CiLaptop } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";
import Accordion from "@/components/accordion";


// document
function PropertySection() {
  const reasons = [
    {
      id: 1,
      svg: <CiLaptop />,
      title: "Web",
      desc: "We put our best effort into each unique project knowing that the more we put into it, the more we get out of it. ",
    },
    {
      id: 2,
      svg: <BsPhone />,
      title: "App",
      desc: "We put our best effort into each unique project knowing that the more we put into it, the more we get out of it. ",
    },
    {
      id: 3,
      svg: <TbWorldSearch />,
      title: "SEO",
      desc: "We put our best effort into each unique project knowing that the more we put into it, the more we get out of it. ",
    },
    {
      id: 4,
      svg: <CiLaptop />,
      title: "Graphic",
      desc: "We put our best effort into each unique project knowing that the more we put into it, the more we get out of it. ",
    },
  ];
  const accordionItems=[
    {
      id: 1,
      title: "Web",
      desc: "We put our best effort into each unique project knowing that the more we put into it, the more we get out of it. ",
    },
    {
      id: 2,
      title: "Our Approach ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
      id: 3,
      title: "SEO",
      desc: "We put our best effort into each unique project knowing that the more we put into it, the more we get out of it. ",
    },
  ]
  return (
    <section className="w-full bg-g21">
      <div className="container flex flex-col justify-start items-start">
        <div>
          <SectionTitle
            classes="text-gYellow"
            title="What we care about makes us who we are"
          />
          <div className="my-[10%] lg:my-[2%] grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {reasons.map((item, i) => (
              <div key={i} className="col-span-1">
                <CardBox
                  parentClasses="cardBoxHover cursor-pointer hover:bg-g30 hover:border-g30 border-g4c gap-3 lg:gap-5 p-4 lg:p-6 lg:py-9"
                  circleClasses="w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] bg-g30 text-gYellow hover:bg-gYellow text-2xl lg:text-3xl"
                  titleClasses="text-gf lg:text-2xl  text-justify font-Holispay"
                  descClasses="text-gb0 text-xs lg:text-[0.813rem] leading-5 text-justify font-PoppinsLight line-clamp-5"
                  icon={item.svg}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full grid grid-cols-12 lg:grid-cols-12 ">
          <div className="col-span-12 lg:col-span-5 text-red-300">
            <div className="w-[98%]">

              <Image
                width={100}
                height={100}
                alt={"logo picture"}
                src={"/about/aboutlogo.svg"}
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 text-gf py-[10%]">
            {
              accordionItems.map((item,i)=>(

                <Accordion key={i} title={item.title} desc={item.desc} />
              ))
            }
              
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertySection;
