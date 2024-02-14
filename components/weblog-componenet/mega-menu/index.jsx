"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function MegaMenu({ options }) {
  const [fade, setFade] = useState(false);
  const handleClickMegaMenu = (event) => {
    setFade((prev) => !prev);
  };
  return (
    <>
      <div className="relative">
        <button
          onClick={handleClickMegaMenu}
          className="w-[1.5rem] lg:hidden inline-block"
        >
          <Image
            width={50}
            height={50}
            className="w-full"
            src={"/filter.svg"}
            alt={"filter icon"}
          />
        </button>
      </div>

      <ul
        style={{ transition: "all 0.2s ease" }}
        className={`bg-gf mt-[1rem] shadow left-0 right-0 p-2 absolute transition-all duration-200 ${
          fade ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {options.map((item, i) => (
          <li key={i} className="py-3">
            <Link href={item.link}>
              <span className="mb-[2vw] text-g70 text-xs lg:text-[1.2rem] leading-[1.8rem]  text-justify font-PoppinsMedium ">
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MegaMenu;
