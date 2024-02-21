"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import LanguageButton from "../common/buttons/language";
import MenuItem from "../common/menu-item";
function Navbar() {
  const pathname = usePathname();
  const [keyWord, setKeyWord] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState(false);
  const openLangList = () => {
    // setIsOpen((prev) => !prev);
    setFade((prev) => !prev);
  };
  const closeMenu = () => {
    // setIsOpen(false);
    setFade(false);
  };
  // const [fade, setFade] = useState(false);
  // const handleClickMegaMenu = (event) => {
  //   setFade((prev) => !prev);
  // };
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = fade ? "hidden" : "auto";
    }
  }, [fade]); 

  const menuIt=[
    {id:1,title:"Our services",desc:"Current page",link:"/service",titleClass:"text-gf",classes:"transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px]  text-center rounded-lg col-span-1 lg:col-span-3"},
    {id:2,title:"Home",desc:"Current page",link:"/",titleClass:"text-gYellow",classes:"transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-4"},
    {id:3,title:"Contact Us",desc:"Current page",link:"/contact",titleClass:"text-gf lg:text-gYellow",classes:"transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gf lg:border-gYellow text-center rounded-lg col-span-1 lg:col-span-2"},
    {id:4,title:"Customers",desc:"Current page",link:"/",titleClass:"text-gYellow lg:text-gf",classes:"transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gYellow lg:border-gf text-center rounded-lg col-span-1 lg:col-span-3"},
    {id:5,title:"Weblog",desc:"Current page",link:"/weblog",titleClass:"text-gf",classes:"transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px] text-center rounded-lg col-span-1 lg:col-span-2"},
    {id:6,title:"Portfolio",desc:"Current page",link:"/portfolio",titleClass:"text-gYellow lg:text-gf",classes:"transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gYellow lg:border-gf text-center rounded-lg col-span-1 lg:col-span-4"},
    {id:7,title:"About Us",desc:"Current page",link:"/about-us",titleClass:"text-gf lg:text-gYellow",classes:"transition-all duration-300 lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gf lg:border-gYellow text-center rounded-lg col-span-1 lg:col-span-3"},
  ]

  return (
    <nav  className={`w-full  ${pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "bg-g21" : "bg-gf"} `}>
      <div className="relative transition ease-in-out delay-150 container max-w-none pt-[1.5%]">
        <div
          style={{zIndex:'5'}}
          className={`relative flex justify-between py-5 items-center border-b-[1.5px]  ${
            pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "border-gec" : "border-g70"
          }`}
        >
          
            <button onClick={openLangList}>
              <CgMenuLeft
                className={` ${
                  pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "text-gf" : "text-g21"
                } w-6 h-6 lg:w-9 lg:h-9`}
              />
            </button>


          {pathname == "/"|| pathname=="/service/seo"  || pathname=="/about-us"|| pathname=="/about-us" ? (
            <>
              <Image
                width={198}
                height={50}
                className=" hidden lg:inline-block"
                src={"/menugandomlogo.svg"}
                alt={"menu icon"}
              />
              <Image
                width={104}
                height={25}
                className="inline-block lg:hidden"
                src={"/menugandomlogosm.svg"}
                alt={"menu icon"}
              />
            </>
          ) : (
            <>
              <Image
                width={198}
                height={50}
                className=" hidden lg:inline-block"
                src={"/menugandomlogolightpage.svg"}
                alt={"menu icon"}
              />
              <Image
                width={104}
                height={25}
                className="inline-block lg:hidden"
                src={"/menugandomlogosmlightpage.svg"}
                alt={"menu icon"}
              />
            </>
          )}

          <div className="relative">
            <LanguageButton />
          </div>
        </div>

     
            <div
              className={`transition-all  ${fade ? "opacity-100 visible" : "opacity-0 invisible"}  overflow-y-scroll lg:overflow-hidden transition ease-in-out fixed z-40 top-[0] bottom-0 left-0 right-0  ${
                pathname == "/" || pathname=="/service/seo"  || pathname=="/about-us" ? "bg-g21" : "bg-gf"
              }  py-6 lg:py-10`}
            >
              <div className={`transition ease-in-out delay-150 container max-w-none `}>

                <div
                  className={` flex justify-between  items-center pb-5 lg:pb-[1.3020833333333333vw] border-b-[1.5px]  ${
                    pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "border-gec" : "border-g70"
                  } `}
                >
                  <button>
                    <CgClose
                      onClick={closeMenu}
                      className={`  ${
                        pathname == "/"|| pathname=="/service/seo" || pathname=="/about-us" ? "text-gf" : "text-g21"
                      }  w-6 h-6 lg:w-[2.34375vw] lg:h-[2.34375vw]`}
                    />
                  </button>
                  {pathname == "/" || pathname=="/service/seo" || pathname=="/about-us"? (
                    <>
                     <div className={`w-[12.890625vw] h-[3.2552083333333335vw]`}>

                      <Image
                        width={198}
                        height={50}
                        className="w-full h-full hidden lg:inline-block"
                        src={"/menugandomlogo.svg"}
                        alt={"menu icon"}
                      />
                     </div>
                      <Image
                        width={104}
                        height={25}
                        className="inline-block lg:hidden"
                        src={"/menugandomlogosm.svg"}
                        alt={"menu icon"}
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        width={198}
                        height={50}
                        className=" hidden lg:inline-block"
                        src={"/menugandomlogolightpage.svg"}
                        alt={"menu icon"}
                      />
                      <Image
                        width={104}
                        height={25}
                        className="inline-block lg:hidden"
                        src={"/menugandomlogosmlightpage.svg"}
                        alt={"menu icon"}
                      />
                    </>
                  )}
                  <div className="relative">
                    <LanguageButton />
                  </div>
                </div>
              </div>
              <div className="container max-w-none transition ease-in-out delay-150 pt-5 lg:pt-[1.3020833333333333vw] flex flex-col gap-[1.3020833333333333vw]">
                <div className={`${pathname == "/" || pathname=="/service/seo"  || pathname=="/about-us"?"border-gec ":" border-g8"} border-[1px] h-[2%]  p-2 rounded-lg flex items-center justify-start gap-2`} >
                  <CiSearch className={`${pathname == "/" || pathname=="/service/seo"  || pathname=="/about-us" ?"  text-gec":"   text-g8"} lg:text-3xl text-2xl`} />
                  <input
                    className={`${pathname == "/" || pathname=="/service/seo"  || pathname=="/about-us" ?"text-gf placeholder-gce":" text-g21 placeholder-g8"} w-full pr-3 py-1 rounded-lg  bg-transparent focus:outline-none  placeholder-opacity-100`} 
                    placeholder="search"
                    type="text"
                    value={keyWord}
                    onChange={(e) => setKeyWord(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-[1.5625vw]">
                  {
                    menuIt?.map((m,i)=>(

                      <MenuItem key={i} fun={closeMenu} title={m?.title} desc={m?.desc} link={m?.link} titleClass={m?.titleClass} classes={m?.classes} />
                    ))
                  }
                  
                </div>
              </div>
            </div>

      </div>
    </nav>
  );
}

export default Navbar;


