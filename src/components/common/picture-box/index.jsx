import React from 'react'
import CircleLgYellow from '../circle-yellow/lg'
import CircleSmYellow from '../circle-yellow/sm'
import Link from "next/link";
function PictureBox({classes,circleClasses,circleLgYellow,circleSmYellow,href}) {
  return (
     
      <div 
        
        className={` relative bg-no-repeat bg-center bg-cover  ${classes} `}>
        {/* PictureBox */}


        {/* CircleYellow for lg size */}
        <Link href={`${href}`}>
          <div className={`hidden circleLgContainer absolute lg:-right-[80px]  bottom-[71px] w-[8rem] h-[8rem] lg:flex items-center justify-center rounded-full ${circleClasses} ${circleLgYellow}`} >
            <CircleLgYellow />
          </div>
        </Link>

        {/* CircleYellow for sm and md size */}
        <Link href={`${href}`}>
          <div className={`lg:hidden circleSmContainer absolute right-[58.5px]  bottom-[-44.5px] w-[4.438rem] h-[4.438rem] flex items-center justify-center rounded-full ${circleClasses} ${circleSmYellow}`}>
            <CircleSmYellow />
          </div>
        </Link>

      </div>
  )
}

export default PictureBox