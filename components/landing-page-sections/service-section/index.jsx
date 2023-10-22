
import React from "react";
import SectionTitle from "@/components/common/section-title";
import ServiceSlider from "@/components/all-sliders-component/landing-sliders/service-slider";
import { CiLaptop } from 'react-icons/ci';
import { BsPhone } from 'react-icons/bs';
import { TbWorldSearch } from 'react-icons/tb';



function ServiceSection() {
  // const service = [
  //   {
  //     id: 1,
  //     number: "01",
  //     svg: (
  //       <svg
  //         width="52"
  //         height="46"
  //         viewBox="0 0 52 46"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M39.3981 1.62891C42.9867 1.62891 45.8925 4.53483 45.8925 8.12315V29.4694L49.6949 37.744C50.8728 40.9587 48.4936 44.3654 45.0688 44.3654H6.93101C3.50877 44.3654 1.12696 40.9614 2.30488 37.744L6.10979 29.4694V8.12315C6.10979 4.53483 9.01829 1.62891 12.604 1.62891H39.3981Z"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //     ),
  //     alt: "company picture",
  //     title: "Web",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
  //     shortDesc: "Web Design Services",
  //   },
  //   {
  //     id: 2,
  //     number: "02",
  //     svg: (
  //       <svg
  //         width="64"
  //         height="64"
  //         viewBox="0 0 64 64"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M49.0021 17.6467L49.0047 46.3507C49.0047 51.68 44.6847 56 39.3554 56H24.6493C19.3226 56 15.0026 51.68 15.0026 46.3533L15 17.6493C15 12.32 19.32 8 24.6467 8H39.3554C44.6821 8 49.0021 12.32 49.0021 17.6467Z"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M28.2891 17.8359H35.7123"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M32.0031 46.2136V46.0851M32.0031 45.4102C31.6346 45.4102 31.3359 45.7088 31.3359 46.0763C31.3359 46.4448 31.6346 46.7435 32.0031 46.7435C32.3719 46.7435 32.6706 46.4448 32.6706 46.0763C32.6706 45.7088 32.3719 45.4102 32.0031 45.4102Z"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //     ),
  //     alt: "company picture",
  //     title: "App",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
  //     shortDesc: "App Design Services",
  //   },
  //   {
  //     id: 3,
  //     number: "03",
  //     svg: (
  //       <svg
  //         width="64"
  //         height="64"
  //         viewBox="0 0 64 64"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M30.1478 55.9723C17.7806 54.9731 8.08594 44.6299 8.08594 32.0107C8.08594 18.7689 18.8289 8 32.0966 8C44.3654 8 54.4571 17.1964 55.9075 29.0629"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M40.9886 29.5611C40.9131 27.5112 40.7393 25.539 40.4643 23.6655C39.2137 14.521 35.9414 8 32.0931 8C28.2707 8 24.9727 14.521 23.7245 23.6655C23.3483 26.263 23.1484 29.0603 23.1484 32.0107C23.1484 34.9587 23.3483 37.7819 23.7245 40.3795C24.599 46.7264 27.2977 52.848 30.1443 55.9696"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M8.08594 32.0391H31.0121"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           fill-rule="evenodd"
  //           clipRule="evenodd"
  //           d="M51.3563 51.4932C48.1101 54.7393 42.8451 54.7393 39.5987 51.4932C36.3525 48.2468 36.3525 42.9817 39.5987 39.7356C42.8451 36.4892 48.1101 36.4892 51.3563 39.7356C54.6027 42.9817 54.6027 48.2468 51.3563 51.4932Z"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M55.8642 56.0048L51.3594 51.5"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //     ),
  //     alt: "company picture",
  //     title: "SEO",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
  //     shortDesc: "SEO keywords",
  //   },
  //   {
  //     id: 4,
  //     number: "04",
  //     svg: (
  //       <svg
  //         width="52"
  //         height="46"
  //         viewBox="0 0 52 46"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M39.3981 1.62891C42.9867 1.62891 45.8925 4.53483 45.8925 8.12315V29.4694L49.6949 37.744C50.8728 40.9587 48.4936 44.3654 45.0688 44.3654H6.93101C3.50877 44.3654 1.12696 40.9614 2.30488 37.744L6.10979 29.4694V8.12315C6.10979 4.53483 9.01829 1.62891 12.604 1.62891H39.3981Z"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //     ),
  //     alt: "company picture",
  //     title: "Graphic",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
  //     shortDesc: "Graphic Design Services",
  //   },
  //   {
  //     id: 5,
  //     number: "05",
  //     svg: (
  //       <svg
  //         width="64"
  //         height="64"
  //         viewBox="0 0 64 64"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M30.1478 55.9723C17.7806 54.9731 8.08594 44.6299 8.08594 32.0107C8.08594 18.7689 18.8289 8 32.0966 8C44.3654 8 54.4571 17.1964 55.9075 29.0629"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M40.9886 29.5611C40.9131 27.5112 40.7393 25.539 40.4643 23.6655C39.2137 14.521 35.9414 8 32.0931 8C28.2707 8 24.9727 14.521 23.7245 23.6655C23.3483 26.263 23.1484 29.0603 23.1484 32.0107C23.1484 34.9587 23.3483 37.7819 23.7245 40.3795C24.599 46.7264 27.2977 52.848 30.1443 55.9696"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M8.08594 32.0391H31.0121"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           fill-rule="evenodd"
  //           clipRule="evenodd"
  //           d="M51.3563 51.4932C48.1101 54.7393 42.8451 54.7393 39.5987 51.4932C36.3525 48.2468 36.3525 42.9817 39.5987 39.7356C42.8451 36.4892 48.1101 36.4892 51.3563 39.7356C54.6027 42.9817 54.6027 48.2468 51.3563 51.4932Z"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M55.8642 56.0048L51.3594 51.5"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //     ),
  //     alt: "company picture",
  //     title: "Ui/Ux",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
  //     shortDesc: "Ui/Ux Design Services",
  //   },
  //   {
  //     id: 6,
  //     number: "06",
  //     svg: (
  //       <svg
  //         width="64"
  //         height="64"
  //         viewBox="0 0 64 64"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M30.1478 55.9723C17.7806 54.9731 8.08594 44.6299 8.08594 32.0107C8.08594 18.7689 18.8289 8 32.0966 8C44.3654 8 54.4571 17.1964 55.9075 29.0629"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M40.9886 29.5611C40.9131 27.5112 40.7393 25.539 40.4643 23.6655C39.2137 14.521 35.9414 8 32.0931 8C28.2707 8 24.9727 14.521 23.7245 23.6655C23.3483 26.263 23.1484 29.0603 23.1484 32.0107C23.1484 34.9587 23.3483 37.7819 23.7245 40.3795C24.599 46.7264 27.2977 52.848 30.1443 55.9696"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M8.08594 32.0391H31.0121"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           fill-rule="evenodd"
  //           clipRule="evenodd"
  //           d="M51.3563 51.4932C48.1101 54.7393 42.8451 54.7393 39.5987 51.4932C36.3525 48.2468 36.3525 42.9817 39.5987 39.7356C42.8451 36.4892 48.1101 36.4892 51.3563 39.7356C54.6027 42.9817 54.6027 48.2468 51.3563 51.4932Z"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //         <path
  //           d="M55.8642 56.0048L51.3594 51.5"
  //           stroke="currentColor"
  //           strokeWidth="2.5"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //         />
  //       </svg>
  //     ),
  //     alt: "company picture",
  //     title: "Softwar",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
  //     shortDesc: "Softwar Services",
  //   },
    
  // ];
 
 
  const service = [
    {
      id: 1,
      number: "01",
      svg: (<CiLaptop />),
      alt: "company picture",
      title: "Web",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Web Design Services",
    },
    {
      id: 2,
      number: "02",
      svg: (<BsPhone />),
      alt: "company picture",
      title: "App",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "App Design Services",
    },
    {
      id: 3,
      number: "03",
      svg: (<TbWorldSearch /> ),
      alt: "company picture",
      title: "SEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "SEO keywords",
    },
    {
      id: 4,
      number: "04",
      svg: (<CiLaptop />),
      alt: "company picture",
      title: "Graphic",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Graphic Design Services",
    },
    {
      id: 5,
      number: "05",
      svg: (<BsPhone />),
      alt: "company picture",
      title: "Ui/Ux",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Ui/Ux Design Services",
    },
    {
      id: 6,
      number: "06",
      svg: (<TbWorldSearch /> ),
      alt: "company picture",
      title: "Softwar",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  ",
      shortDesc: "Softwar Services",
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
