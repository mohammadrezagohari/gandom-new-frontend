"use client"
import React,{useState } from 'react'
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from 'react-icons/io';
function LanguageButton() {
  const pathname = usePathname();
  const [isOpen,setIsOpen]=useState(false)
  const openLangList=()=>{
    setIsOpen(prev=>!prev)
  } 
  return (
    <div onClick={openLangList} className={`border-[1px] border-gYellow relative rounded-lg p-1 lg:px-3 lg:text-lg flex justify-center items-center gap-2 ${
      pathname == "/"|| pathname=="/service/seo"  || pathname=="/about-us"? "text-gf" : "text-g21"
    } `}>
      <IoIosArrowDown />
      EN

      {
        isOpen?(
          <div className={`z-50 absolute top-11 left-0 right-0 border-[1px] border-gYellow  rounded-lg  ${pathname == "/"|| pathname=="/service/seo" || pathname=="/about-us"? "bg-g21" : "bg-gf"} `}>
            <ul className='divide-y divide-gYellow p-1 text-center'>
              <li>EN</li>
              <li>FA</li>
            </ul>
          </div>
        ):(
          <></>
        )
      }
    </div>
  )
}

export default LanguageButton