"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CgMenuLeft, CgClose } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import LanguageButton from "../common/buttons/language";
import MenuItem from "../common/menu-item";
import { useLocale, useTranslations } from "next-intl";
import { CurrentMenu } from "@/src/lib/share";
function Navbar() {
  const pathname = usePathname();
  const [keyWord, setKeyWord] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [fade, setFade] = useState(false);
  //g21 equals to black
  const [isDarkMode, setIsDarkMode] = useState(true);
  const openLangList = () => {
    // setIsOpen((prev) => !prev);
    setFade((prev) => !prev);
  };

  const closeMenu = () => {
    // setIsOpen(false);
    setFade(false);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = fade ? "hidden" : "auto";
    }
  }, [fade]);

  const localActive = useLocale();
  const shareTranslate = useTranslations("share");
  const navigationTranslate = useTranslations("navigation");

  useEffect(() => {
    setIsDarkMode(
      pathname == `/${localActive}` ||
        pathname == `/${localActive}/service/seo` ||
        pathname == `/${localActive}/about-us`
    );
  }, [pathname, localActive]);

  const menuMeta = localActive == "fa" ? CurrentMenu.fa : CurrentMenu.en;
  const menuIt = menuMeta.map((item, index) => ({...item, title: navigationTranslate(`items.${index}.title`), desc: navigationTranslate("current")}));
  return (
    <nav className={`w-full  ${isDarkMode ? "bg-g21" : "bg-gf"} `}>
      <div className="relative transition ease-in-out delay-150 container max-w-none pt-[1.5%]">
        <div
          style={{ zIndex: "5" }}
          className={`relative flex justify-between py-5 items-center border-b-[1.5px]  ${
            isDarkMode ? "border-gec" : "border-g70"
          }`}
        >
          <button onClick={openLangList}>
            <CgMenuLeft
              className={` ${
                isDarkMode ? "text-gf" : "text-g21"
              } w-6 h-6 lg:w-9 lg:h-9`}
            />
          </button>

          {isDarkMode ? (
            <Link href={`/${localActive}`}>
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
            </Link>
          ) : (
            <Link href={`/${localActive}`}>
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
            </Link>
          )}

          <div className="relative">
            <LanguageButton isDark={isDarkMode} />
          </div>
        </div>

        <div
          className={`transition-all  ${
            fade ? "opacity-100 visible" : "opacity-0 invisible"
          }  overflow-y-scroll lg:overflow-hidden transition ease-in-out fixed z-40 top-[0] bottom-0 left-0 right-0  ${
            isDarkMode ? "bg-g21" : "bg-gf"
          }  py-6 lg:py-10`}
        >
          <div
            className={`transition ease-in-out delay-150 container max-w-none `}
          >
            <div
              className={` flex justify-between  items-center pb-5 lg:pb-[1.3020833333333333vw] border-b-[1.5px]  ${
                isDarkMode ? "border-gec" : "border-g70"
              } `}
            >
              <button>
                <CgClose
                  onClick={closeMenu}
                  className={`  ${
                    isDarkMode ? "text-gf" : "text-g21"
                  }  w-6 h-6 lg:w-[2.34375vw] lg:h-[2.34375vw]`}
                />
              </button>
              {isDarkMode ? (
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
                <LanguageButton isDark={isDarkMode} />
              </div>
            </div>
          </div>
          <div className="container max-w-none transition ease-in-out delay-150 pt-5 lg:pt-[1.3020833333333333vw] flex flex-col gap-[1.3020833333333333vw]">
            <div
              className={`${
                isDarkMode ? "border-gec " : " border-g8"
              } border-[1px] h-[2%]  p-2 rounded-lg flex items-center justify-start gap-2`}
            >
              <CiSearch
                className={`${
                  isDarkMode ? "  text-gec" : "   text-g8"
                } lg:text-3xl text-2xl`}
              />
              <input
                className={`${
                  isDarkMode
                    ? "text-gf placeholder-gce"
                    : " text-g21 placeholder-g8"
                } w-full pr-3 py-1 rounded-lg  bg-transparent focus:outline-none  placeholder-opacity-100`}
                placeholder={navigationTranslate("search")}
                type="text"
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-[1.5625vw]">
              {menuIt?.map((m, i) => (
                <MenuItem
                  localActive={localActive}
                  key={i}
                  fun={closeMenu}
                  title={m.title}
                  desc={m.desc}
                  descClass={m.descClass}
                  link={`/${localActive}${m.link}`} // اضافه کردن زبان به ابتدای لینک
                  titleClass={m.titleClass}
                  classes={m.classes}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
