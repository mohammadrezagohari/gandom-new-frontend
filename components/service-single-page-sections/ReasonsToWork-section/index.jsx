import React from 'react'
import { CiLaptop } from 'react-icons/ci';
import { BsPhone } from 'react-icons/bs';
import { TbWorldSearch } from 'react-icons/tb';
import ReasonsToWorkSlider from '@/components/all-sliders-component/service-single-page-sliders/reasonsToWork-slider';

function ReasonsToWorkSection() {
  const reasons = [
    {
      id: 1,
      svg: (<CiLaptop />),
      title: "Web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 2,
      svg: (<BsPhone />),
      title: "App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 3,
      svg: (<TbWorldSearch /> ),
      title: "SEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 4,
      svg: (<CiLaptop />),
      title: "Graphic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
    },
    {
      id: 5,
      svg: (<BsPhone />),
      title: "Ui/Ux",
      desc: " Find the new source of income with the software as a service you will have made for your specific requirements. Find the new source of income with the software as a service you will have made for your specific requirements.",
    },
    {
      id: 6,
      svg: (<TbWorldSearch /> ),
      title: "Software",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .  ",
    },
    
  ];
  return (
    <section className="w-full py-10 lg:py-[2.6041666666666665vw] overflow-x-hidden">
      <div className="serviceCont">
          <div className=" grid grid-cols-12 gap-9 lg:gap-5">
            <ReasonsToWorkSlider reasons={reasons} /> 
          </div>
      </div>
    </section>
  )
}
export default ReasonsToWorkSection