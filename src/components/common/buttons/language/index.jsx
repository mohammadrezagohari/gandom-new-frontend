"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
function LanguageButton({ isDark }) {
  //   const pathname = usePathname();
  //   const [isOpen, setIsOpen] = useState(false);
  //   const openLangList = () => {
  //     setIsOpen((prev) => !prev);
  //   };

  const router = useRouter();
  const localActive = useLocale();

  const onChangeSelect = (event) => {
    const nextLocal = event.target.value;
    router.replace(`/${nextLocal}`);
  };
  const [isDarkMode, setIsDarkMode] = useState(isDark ? { color: "#D9D9D9" } : { color: "#070000", });

  return (
    <label
      id="language-select"
      className={`rounded border-language-box ${localActive == "fa" ? "rtl" : "ltr"
        }`}
    >
      <select
        style={isDarkMode}
        className="bg-transparent p-2  text-white outline-none"
        name="change-language"
        defaultValue={localActive}
        onChange={onChangeSelect}
      >
        <option value="en">
          EN
        </option>
        <option value="fa">
          FA
        </option>
      </select>
    </label>
  );
}

export default LanguageButton;
