import React from 'react'

function SpecializeCard({title,desc,classes}) {
  return (
    <div className={`border-[1px] border-g70 rounded-xl lg:p-5 p-3 min-h-[9vw] ${classes}`}>
        <span className="text-gDarkYellow lg:text-[1.7708333333333333vw] text-[1.08rem] lg:leading-[2.26rem] font-Holispay ">
           {title}
        </span>
        <p className="text-g8 lg:text-[1.0416666666666667vw] text-[0.85rem] text-justify mt-2 lg:mt-4 ">
           {desc}
        </p>
    </div>
  )
}

export default SpecializeCard