import React from 'react'
import Link from "next/link";
import Image from "next/image";
function LgMenu({options}) {
  return (
    <ul className="hidden lg:flex items-center justify-center gap-[3.6458333333333335vw] order-2 lg:order-1">
        { 
            options.map((item,i)=>(

              <li key={i} >
                <Link href={item.link}>
                  <span className="mb-[2vw]  text-g70 text-xs lg:text-[1.25vw] lg:leading-[1.875vw] leading-[1.8rem]  text-justify font-PoppinsMedium ">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))
        }
            
    </ul>
  )
}

export default LgMenu