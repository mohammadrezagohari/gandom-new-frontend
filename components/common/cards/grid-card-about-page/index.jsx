import React from 'react'
import Link from 'next/link'
import Image from "next/image";

function GridCard({parentClasses,hoverClasses,position,name,link,img}) {
  return (
    <div className={`${parentClasses} gridItem overflow-hidden relative w-full `} >
        <div className={` ${hoverClasses} bg-g21 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center lg:gap-2 w-full `} >
            <h5 className={`text-gf text-sm lg:text-xl  text-justify font-Holispay `} >{name}</h5>
            <span className={`text-g8  text-xs lg:text-sm  text-justify font-PoppinsLight line-clamp-5 `} >{position}</span>
            <Link
              href={link}
              className=" mt-3 border-[1px] border-gbc text-gbc text-xs lg:text-sm font-PoppinsLight rounded-xl  py-1 px-4 lg:px-8 lg:py-2"
            >
              See More
            </Link>
        </div>

        <Image src={img} width={100} height={100} alt=" team | تیم | article | img | مقاله | گندم | سایت | طراحی | وبسایت | موبایل | نرم افزار | دیزای| شرکت نرم افزاری گندم  " className="w-full h-full object-cover" />

    </div>
  )
}

export default GridCard