import React from "react";
import SectionTitle from "@/components/common/section-title";
import { CiLaptop } from 'react-icons/ci';
import { BsPhone } from 'react-icons/bs';
import { TbWorldSearch } from 'react-icons/tb';
import OurWorkSlider from "@/components/all-sliders-component/service-single-page-sliders/ourwork-slider";
import { Parallax } from "@/components/service-single-page-parallax";
import ParallaxPart from "@/components/landing-parallax-section";
function OurworkSection() {
  const service = [
    {
      id: 1,
      bgImg:'/pic1.png',
      number: "01",
      svg: (<CiLaptop />),
      title: "Web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 2,
      bgImg:'/pic2.png',
      number: "02",
      svg: (<BsPhone />),
      title: "App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 3,
      bgImg:'/pic3.png',
      number: "03",
      svg: (<TbWorldSearch /> ),
      title: "SEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 4,
      bgImg:'/pic1.png',
      number: "04",
      svg: (<CiLaptop />),
      title: "Graphic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 5,
      bgImg:'/pic2.png',
      number: "05",
      svg: (<BsPhone />),
      title: "Ui/Ux",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 6,
      bgImg:'/pic3.png',
      number: "06",
      svg: (<TbWorldSearch /> ),
      title: "Softwar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    
  ];
 
  return (
    <section className="w-full pb-10 ">
      <div className="serviceCont">

          <div className="hidden lg:grid lg:grid-cols-12   mid:gap-9 lg:gap-5">

             <OurWorkSlider service={service} />
          </div>
          {/* <div className="containerServiceSection hidden lg:flex lg:items-start  lg:justify-center lg:flex-wrap h-[730px] mid:gap-9 lg:gap-5">
            
          </div> */}
          <div className="container lg:hidden">
            <SectionTitle classes="text-g21" title="Our Work" />

            <p className="text-g8 lg:text-2xl lg:leading-9 text-justify text-base leading-6 font-PoppinsLight pb-6">
              Examples of our work in the field of website design
            </p>
            
           {/* <Parallax />  */}
           <ParallaxPart  />
          </div>
      </div>
    </section>
  )
}
export default OurworkSection