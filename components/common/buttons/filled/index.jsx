import Link from 'next/link'
import React from 'react'

function FilledButton({link,title,classes}) {
  return (
    <>
    <Link
       href={link}
       className={`text-center border-[1px] transform opacity-100 hover:opacity-80  transition duration-700 ease-in-out border-g31 bg-g31 text-gf text-md lg:text-[1.0416666666666667vw] font-PoppinsLight rounded-lg py-2 lg:px-[2.6041666666666665vw] ${classes}`}
     >
      {title}
     </Link>
 </>
  )
}

export default FilledButton