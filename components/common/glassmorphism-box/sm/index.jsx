import React from 'react'
import { GoArrowDownLeft } from "react-icons/go";
function GlassmorphismSmBox({title,desc}) {
  return (

      <div className="glassBox w-[278.92px] min-h-[160.01px]  p-4 pb-[15%] rounded-md relative">
          <h3 className="text-gf mb-[1%] text-xl leading-[30px] font-Holispay ">{title}</h3>
          <p className="text-gf text-justify  text-[14px] leading-[21px] font-PoppinsLight ">{desc}</p>
        {/* <div className="absolute -bottom-5 right-4 lg:border-4 border-4 boreder-g21 w-[30.64px] h-[30.64px] lg:w-[63px] lg:h-[63px] rounded-full  border-g21 flex justify-center items-center bg-gYellow lg:text-2xl text-xl">
              <GoArrowDownLeft className="transform rotate-180" />
        </div> */}
        <div style={{border:'1px solid rgba(199, 199, 199, 0.68)',}} className=" absolute bottom-7 -right-7 w-[45.64px] h-[45.64px] bg-transparent rounded-full flex justify-center items-center">
          <div className="w-[30.64px] h-[30.64px] rounded-full flex justify-center items-center  bg-gYellow">
            <GoArrowDownLeft className="transform rotate-180 lg:text-2xl text-xl" />
          </div>
        </div>
      </div>
  )
}

export default GlassmorphismSmBox