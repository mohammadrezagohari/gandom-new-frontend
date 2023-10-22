import React from 'react'

function CardBox({parentClasses,circleClasses,titleClasses,descClasses,icon,title,desc}) {
  return (
    <div className={`border-[1px] rounded-xl flex flex-col items-start justify-start ${parentClasses}`}>
        <div className={` rounded-full flex items-center justify-center ${circleClasses} `} >{icon}</div>
        <h5 className={`${titleClasses} `} >{title}</h5>
        <p className={`${descClasses} `} >{desc}</p>
    </div>
  )
}

export default CardBox