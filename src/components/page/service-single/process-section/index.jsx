import React from "react";
import SectionTitle from "@/src/components/common/section-title";
import ProcessCard from "@/src/components/common/cards/service/process-card";
function ProcessSection() {
  const process = [
    {
      id: 1,
      number: "01",
      title: "Web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 2,
      number: "02",
      title: "App",
      desc: "Boost sales with a bespoke customer relationship management system & efficiency of core activities with enterprise resource planning tools.",
    },
    {
      id: 3,
      number: "03",
      title: "SEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 4,
      number: "04",
      title: "Graphic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 5,
      number: "05",
      title: "Ui/Ux",
      desc: " Find the new source of income with the software as a service you will have made for your specific requirements. Find the new source of income with the software as a service you will have made for your specific requirements.",
    },
    {
      id: 6,
      number: "06",
      title: "Software",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .  ",
    },
  ];
  return (
    <section className="w-full">
      <div className="container max-w-none">
        <SectionTitle classes="text-g21" title="Our Process" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-[1.3020833333333333vw] ">
          {process.map((item, i) => (
            <ProcessCard
              parentClasses="p-2 pb-7 lg:p-[0.78125vw] lg:pb-[2.0833333333333335vw] gap-3 lg:gap-[1.0416666666666667vw]"
              circleClasses="w-[4.5rem] h-[4.5rem]  lg:w-[5.729166666666667vw] lg:h-[5.729166666666667vw] bg-transparent border-[1px] border-g21 text-[2.5rem] lg:text-[3.6458333333333335vw]"
              number={item.number}
              titleClasses="text-gDarkYellow lg:text-[1.5625vw]  text-xl text-justify font-Holispay"
              title={item.title}
              descClasses="text-g8 text-[0.813rem] lg:text-[0.8468749999999999vw] lg:text-justify font-PoppinsLight line-clamp-4 tracking-wide"
              desc={item.desc}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProcessSection;
