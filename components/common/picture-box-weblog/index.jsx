import React from 'react'
// import CircleLgYellow from '../circle-yellow/lg'
// import CircleSmYellow from '../circle-yellow/sm'
import Link from "next/link";
import CircleLgYellow from '../circle-yellow-weblog-page/lg';
import CircleSmYellow from '../circle-yellow-weblog-page/sm';
import Image from 'next/image';

function PictureBox({classes,circleClasses,circleLgYellow,circleSmYellow,href}) {
  return (
     
      <div 
        
        className={` relative bg-no-repeat bg-center bg-cover  ${classes} `}>
       

        {/*weblogCircleLgContainer CircleYellow for lg size */}
        <Link href={`${href}`}>
          <div className={`hidden weblogCircleLgContainer absolute -right-[61px] bottom-[38.01px] w-[5.625rem] h-[5.625rem] lg:flex items-center justify-center rounded-full ${circleClasses} ${circleLgYellow}`} >
            <CircleLgYellow />
          </div> 
          
        </Link>
        {/* CircleYellow for sm and md size */}
        <Link href={`${href}`}>
          <div className={`lg:hidden weblogCircleSmContainer absolute -right-[42px] bottom-[38.01px] w-[4rem] h-[4rem] flex items-center justify-center rounded-full ${circleClasses} ${circleSmYellow}`}>
            <CircleSmYellow />
          </div>
        </Link>

      </div>
  )
}

export default PictureBox