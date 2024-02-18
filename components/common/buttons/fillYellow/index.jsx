import Link from 'next/link'
import React from 'react'

function FilledYellowButton({link,title,classes}) {
  return (
    <>
    <Link
       href={link}
       className={` border-[1px] text-center transition-all duration-500 border-gYellow hover:border-gDarkYellow bg-gYellow hover:bg-gDarkYellow text-g21 text-md lg:text-[1.0416666666666667vw] font-PoppinsSemiBold rounded-lg py-2 lg:px-[2.6041666666666665vw] ${classes}`}
     >
      {title}
     </Link>
 </>
  )
}

export default FilledYellowButton