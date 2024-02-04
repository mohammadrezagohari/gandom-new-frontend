"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import LanguageButton from "../common/buttons/language";
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
                pathname == "/" || pathname=="/service/seo" || pathname=="/abocontainerpxut-us" ? "bg-g21" : "bg-gf"
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
                <div className="border-[1px] h-[2%] border-gec p-2 rounded-lg flex items-center justify-start gap-2 ">
                  <CiSearch className="text-gec lg:text-3xl text-2xl" />
                  <input
                    className="w-full pr-3 py-1 rounded-lg text-gf bg-transparent focus:outline-none placeholder-gce placeholder-opacity-100 "
                    placeholder="search"
                    type="text"
                    value={keyWord}
                    onChange={(e) => setKeyWord(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-[1.5625vw]">
                  <Link
                    onClick={closeMenu}
                    href="/service"
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem border-gec " : "menuItemWhiteBg border-g8"
                    }  lg:h-[9.440104166666666vw] h-[71px] border-[1px]  text-center rounded-lg col-span-1 lg:col-span-3`}
                  >
                    <h4 className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "text-gec " : "text-g8"
                    } lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay`} >
                      Our services
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem" : "menuItemWhiteBg"
                    } lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-4`}
                  >
                    <h4 className="text-gYellow lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay ">
                      Home
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/contact"
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem" : "menuItemWhiteBg"
                    } lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-2`}
                  >
                    <h4 className="text-gYellow lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay ">
                      Contact Us
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem border-gec " : "menuItemWhiteBg border-g8"
                    } lg:h-[9.440104166666666vw] h-[71px] border-[1px] text-center rounded-lg col-span-1 lg:col-span-3`}
                  >
                    <h4 className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "text-gec " : "text-g8"
                    } lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay`}>
                      Customers
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/weblog"
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem border-gec " : "menuItemWhiteBg border-g8"
                    } lg:h-[9.440104166666666vw] h-[71px] border-[1px] text-center rounded-lg col-span-1 lg:col-span-2`}
                  >
                    <h4 className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "text-gec " : "text-g8"
                    } lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay`}>
                      Weblog
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/portfolio"
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem border-gec " : "menuItemWhiteBg border-g8"
                    } lg:h-[9.440104166666666vw] h-[71px] border-[1px] text-center rounded-lg col-span-1 lg:col-span-4`}
                  >
                    <h4 className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "text-gec " : "text-g8"
                    } lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay`} >
                      Portfolio
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/about-us"
                    className={`${
                      pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "menuItem" : "menuItemWhiteBg"
                    } lg:h-[9.440104166666666vw] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-3`}
                  >
                    <h4 className="text-gYellow lg:text-[4.361979166666667vw] lg:leading-[5.517578125vw] text-[38px] leading-[40.68px] font-Holispay ">
                      About Us
                    </h4>
                    <span className="text-gDarkYellow lg:text-[1.5625vw] lg:leading-[1.8313802083333333vw] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                </div>
              </div>
            </div>

      </div>
    </nav>
  );
}

export default Navbar;


