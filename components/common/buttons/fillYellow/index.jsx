import Link from 'next/link'
import React from 'react'

function FilledYellowButton({link,title,classes}) {
  return (
    <>
    <Link
       href={link}
       className={` border-[1px] text-center border-gYellow hover:border-gDarkYellow bg-gYellow hover:bg-gDarkYellow text-g21 text-md lg:text-base font-PoppinsSemiBold rounded-lg ${classes} py-2 px-12 lg:px-10`}
     >
      {title}
     </Link>
 </>
  )
}

export default FilledYellowButton