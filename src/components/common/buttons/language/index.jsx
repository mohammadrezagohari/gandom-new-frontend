"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
function LanguageButton() {
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

  return (
    <label
      className={`rounded border-language-box ${
        localActive == "fa" ? "rtl" : "ltr"
      }`}
    >
      <p className="sr-only">change language</p>
      <select
        className="bg-transparent p-2  text-white outline-none"
        name="change-language"
        defaultValue={localActive}
        onChange={onChangeSelect}
      >
        <option className="bg-[#212121]" value="en">
          EN
        </option>
        <option className="bg-[#212121]" value="fa">
          FA
        </option>
      </select>
    </label>
  );
}

export default LanguageButton;
