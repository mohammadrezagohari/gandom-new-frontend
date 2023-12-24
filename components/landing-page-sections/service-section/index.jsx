
import React from "react";
import SectionTitle from "@/components/common/section-title";
import ServiceSlider from "@/components/all-sliders-component/landing-sliders/service-slider";
import { CiLaptop } from 'react-icons/ci';
import { BsPhone } from 'react-icons/bs';
import { TbWorldSearch } from 'react-icons/tb';



function ServiceSection() {

  const service = [
    {
      id: 1,
      number: "01",
      svg: (<CiLaptop />),
      alt: "company picture",
      title: "Web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Web Design Services",
      link:'/'
    },
    {
      id: 2,
      number: "02",
      svg: (<BsPhone />),
      alt: "company picture",
      title: "App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "App Design Services",
      link:'/'
    },
    {
      id: 3,
      number: "03",
      svg: (<TbWorldSearch /> ),
      alt: "company picture",
      title: "SEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "SEO keywords",
      link:'/service/seo'
    },
    {
      id: 4,
      number: "04",
      svg: (<CiLaptop />),
      alt: "company picture",
      title: "Graphic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Graphic Design Services",
      link:'/'
    },
    {
      id: 5,
      number: "05",
      svg: (<BsPhone />),
      alt: "company picture",
      title: "Ui/Ux",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Ui/Ux Design Services",
      link:'/'
    },
    {
      id: 6,
      number: "06",
      svg: (<TbWorldSearch /> ),
      alt: "company picture",
      title: "Software",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Software Services",
      link:'/'
    },
    
  ];
 
  return (
    <section className="w-full  bg-gf5  ">
      <div className="serviceCont py-7 lg:py-0">

          <div className="hidden lg:grid lg:grid-cols-12 h-[650px] divide-x divide-g6f mid:gap-9 lg:gap-5">

          <ServiceSlider service={service} />
          </div>
          {/* <div className="containerServiceSection hidden lg:flex lg:items-start  lg:justify-center lg:flex-wrap h-[730px] mid:gap-9 lg:gap-5">
            
          </div> */}
          <div className="container lg:hidden">
              <SectionTitle classes="text-g21" title="Our services" />

              <p className="text-g8 lg:text-2xl lg:leading-9 text-justify text-base leading-6 font-PoppinsLight pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
                purus viverra accumsan in nisl nisi. Arcu cursus vitae
              </p>
            
              <div className="  grid grid-cols-2  gap-3 ">
                {service.map((item, i) => (

                  <div  key={i} className=" !flex !flex-col !justify-between !items-start !gap-5  border-[1px] border-g6f  rounded-lg p-4 ">

                    <h5 className="text-[26px] leading-[30.47px] lg:text-[48px] lg:leading-[56.25px] inline-block text-ge4 pb-[5%] border-b-[1.5px] border-gYellow">
                      {item.number}
                    </h5>
                    <div className="w-[62px] text-g21 h-[62px] rounded-full border-[1px] border-ge4 flex justify-center items-center ">
                      {item.svg}
                    </div>
                    <h4 className="lg:text-[64px] lg:leading-[28.13px] text-[30px] leading-[33.9px] font-Holispay ">
                      {item.title}
                    </h4>
                    <h3 className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-PoppinsLight ">
                      {item.shortDesc}
                    </h3>
                  </div>
                ))}

              </div>
          </div>
      </div>
    </section>
  );
}

export default ServiceSection;
