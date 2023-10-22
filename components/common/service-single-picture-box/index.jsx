import React from 'react'
import Link from "next/link";
import CircleLgYellowOutline from '../circle-yellow-outline/lg';
import CircleSmYellowOutline from '../circle-yellow-outline/sm';
function ServiceSinglePictureBox({classes,circleClasses,circleLgYellow,circleSmYellow,href}) {
  return (
    
      <div 
        
        className={`lg:h-[32rem] h-[14.75rem] relative bg-no-repeat bg-center bg-cover  ${classes} `}>
        {/* PictureBox */}


        {/* CircleYellow for lg size */}
        <Link href={`${href}`}>
          <div className={`hidden circleLgContainer absolute lg:-right-[80px]  bottom-[71px] w-[8rem] h-[8rem] lg:flex items-center justify-center rounded-full ${circleClasses} ${circleLgYellow}`} >
            <CircleLgYellowOutline />
          </div>
        </Link>

        {/* CircleYellow for sm and md size */}
        <Link href={`${href}`}>
          <div className={`lg:hidden circleSmContainer absolute right-[58.5px]  bottom-[-44.5px] w-[4.438rem] h-[4.438rem] flex items-center justify-center rounded-full ${circleClasses} ${circleSmYellow}`}>
            <CircleSmYellowOutline />
          </div>
        </Link>

      </div>
  )
}

export default ServiceSinglePictureBox

// bottom: 72px;
//     right: -109px;
//     width: 167px;
//     height: 167px;