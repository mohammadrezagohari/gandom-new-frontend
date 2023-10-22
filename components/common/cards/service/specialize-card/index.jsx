import React from 'react'

function SpecializeCard({title,desc,classes}) {
  return (
    <div className={`border-[1px] border-g70 rounded-xl p-5  ${classes}`}>
        <span className="text-gDarkYellow lg:text-[1.7rem] text-[1rem] leading-[2.26rem] font-Holispay">
           {title}
        </span>
        <p className="text-g8 lg:text-[1rem] text-[0.75rem] text-justify ">
           {desc}
        </p>
    </div>
  )
}

export default SpecializeCard