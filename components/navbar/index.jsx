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
  const openLangList = () => {
    setIsOpen((prev) => !prev);
    // setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
    // setIsOpen(true);
  };
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOpen ? "hidden" : "auto";
    }
  }, [isOpen]);

  return (
    <nav className={`w-full ${pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "bg-g21" : "bg-gf"} `}>
      <div className="relative transition ease-in-out delay-150 container pt-[1.5%]">
        <div
          className={`relative flex justify-between py-5 items-center border-b-[1.5px] border-gec`}
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

        {isOpen ? (
          <>
            <div
              className={`overflow-y-scroll lg:overflow-hidden transition ease-in-out delay-150  fixed z-40 top-[0] bottom-0 left-0 right-0  ${
                pathname == "/" || pathname=="/service/seo" || pathname=="/about-us" ? "bg-g21" : "bg-gf"
              }  py-6 lg:py-10`}
            >
              <div className={`transition ease-in-out delay-150 container `}>

                <div
                className={` flex justify-between  items-center pb-5 border-b-[1.5px] border-gec`}
              >

                  <button>
                    <CgClose
                      onClick={closeMenu}
                      className={`  ${
                        pathname == "/"|| pathname=="/service/seo" || pathname=="/about-us" ? "text-gf" : "text-g21"
                      }  w-6 h-6 lg:w-9 lg:h-9`}
                    />
                  </button>

                {pathname == "/" || pathname=="/service/seo" || pathname=="/about-us"? (
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
              </div>
              <div className="container transition ease-in-out delay-150 pt-5 flex flex-col gap-5">
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

                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6">
                  <Link
                    onClick={closeMenu}
                    href="/service"
                    className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-3"
                  >
                    <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
                      Our services
                    </h4>
                    <span className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-4"
                  >
                    <h4 className="text-gYellow lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
                      Home
                    </h4>
                    <span className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-2"
                  >
                    <h4 className="text-gYellow lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
                      Contact Us
                    </h4>
                    <span className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-3"
                  >
                    <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
                      Customers
                    </h4>
                    <span className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-2"
                  >
                    <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
                      Weblog
                    </h4>
                    <span className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-4"
                  >
                    <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
                      Our Work
                    </h4>
                    <span className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/about-us"
                    className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-3"
                  >
                    <h4 className="text-gYellow lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">
                      About Us
                    </h4>
                    <span className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">
                      Current page
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

// <nav className={`w-full  ${pathname == "/" ? "bg-g21" : "bg-gf"} `}>
// <div className=" container pt-[1.5%]">
//   <div
//     className={` flex justify-between py-5 items-center border-b-[1.5px] border-gec`}
//   >
//     <div   className="relative">

//       <button onClick={openLangList} >
//       {isOpen ? (
//         <>
//           <CgClose className={`  ${pathname == "/" ? "text-gf" : "text-g21"}  w-6 h-6 lg:w-9 lg:h-9`} />
//         </>
//       ) : (
//         <>
//           <CgMenuLeft className={` ${pathname == "/" ? "text-gf" : "text-g21"} w-6 h-6 lg:w-9 lg:h-9`} />
//         </>
//       )}
//       </button>
//       {isOpen ? (
//         <>
//           <div className={`overflow-y-scroll lg:overflow-hidden fixed z-40 top-[14%] lg:top-[120px] bottom-0 left-0 right-0  ${pathname == "/" ? "bg-g21" : "bg-gf"}  py-6 lg:py-10`}>

//             <div className="container flex flex-col gap-5" >

//               <div className="border-[1px] h-[2%] border-gec p-2 rounded-lg flex items-center justify-start gap-2 " >
//                  <CiSearch className="text-gec lg:text-3xl text-2xl" />
//                  <input className="w-full pr-3 py-1 rounded-lg text-gf bg-transparent focus:outline-none placeholder-gce placeholder-opacity-100 " placeholder="search" type="text"  value={keyWord} onChange={(e)=>setKeyWord(e.target.value)} />
//               </div>

//               <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6">
//                 <Link  onClick={closeMenu} href="/service"  className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-3">
//                     <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">Our services</h4>
//                     <span  className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">Current page</span>

//                 </Link>
//                 <Link onClick={closeMenu} href="/"  className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-4">
//                   <h4 className="text-gYellow lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">Home</h4>
//                   <span  className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">Current page</span>
//                 </Link>
//                 <Link onClick={closeMenu} href="/"  className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-2">
//                   <h4 className="text-gYellow lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">Contact Us</h4>
//                   <span  className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">Current page</span>
//                 </Link>
//                 <Link onClick={closeMenu} href="/"  className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-3">
//                   <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">Customers</h4>
//                   <span  className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">Current page</span>
//                 </Link>
//                 <Link onClick={closeMenu} href="/"  className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-2">
//                   <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">Weblog</h4>
//                   <span  className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">Current page</span>
//                 </Link>
//                 <Link onClick={closeMenu} href="/" className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gec text-center rounded-lg col-span-1 lg:col-span-4">
//                   <h4 className="text-gec lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">Our Work</h4>
//                   <span  className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">Current page</span>
//                 </Link>
//                 <Link onClick={closeMenu} href="/"  className="menuItem lg:h-[145px] h-[71px] border-[1px] border-gYellow text-center rounded-lg col-span-1 lg:col-span-3">
//                   <h4 className="text-gYellow lg:text-[67px] lg:leading-[84.75px] text-[38px] leading-[40.68px] font-Holispay ">About Us</h4>
//                   <span  className="text-gDarkYellow lg:text-2xl lg:leading-[28.13px] text-[12px] leading-[14.06px] font-Holispay ">Current page</span>
//                 </Link>
//               </div>

//             </div>

//           </div>
//         </>
//       ) : (
//         <>

//         </>
//       )}
//     </div>
//     {/* <Image width={40} height={40} className="border-2" src={'/Hamburger menu 1.svg'} alt={'menu icon'}  /> */}

//     {pathname == "/" ? (
//       <>
//       <Image
//       width={198}
//       height={50}
//       className=" hidden lg:inline-block"
//       src={"/menugandomlogo.svg"}
//       alt={"menu icon"}
//     />
//      <Image
//       width={104}
//       height={25}
//       className="inline-block lg:hidden"
//       src={"/menugandomlogosm.svg"}
//       alt={"menu icon"}
//     />
//       </>
//     ) : (
//       <>
//       <Image
//       width={198}
//       height={50}
//       className=" hidden lg:inline-block"
//       src={"/menugandomlogolightpage.svg"}
//       alt={"menu icon"}
//     />
//      <Image
//       width={104}
//       height={25}
//       className="inline-block lg:hidden"
//       src={"/menugandomlogosmlightpage.svg"}
//       alt={"menu icon"}
//     />
//       </>
//     )}

//     {/* <Image
//       width={198}
//       height={50}
//       className=" hidden lg:inline-block"
//       src={"/menugandomlogo.svg"}
//       alt={"menu icon"}
//     />
//      <Image
//       width={104}
//       height={25}
//       className="inline-block lg:hidden"
//       src={"/menugandomlogosm.svg"}
//       alt={"menu icon"}
//     /> */}
//     <div className="relative">
//       <LanguageButton />
//     </div>
//   </div>
// </div>
// </nav>
