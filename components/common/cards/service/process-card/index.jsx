import React from 'react'
 
function ProcessCard({parentClasses,circleClasses,number,titleClasses,title,descClasses,desc}) {
  return (
        <div className={`border-[1px] border-g70 rounded-xl flex flex-col items-start justify-start ${parentClasses}`}>
            <div className={` rounded-full flex items-center justify-center font-Holispay text-gbc ${circleClasses} `} ><span className="">{number}</span></div>
            <h5 className={`${titleClasses} `} >{title}</h5>
            <p className={`${descClasses} `} >{desc}</p>
        </div>
  )
}

export default ProcessCard
    // <div className={` `}>
    // </div>