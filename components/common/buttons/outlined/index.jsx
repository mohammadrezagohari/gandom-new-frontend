import Link from 'next/link'
import React from 'react'

function OutlinedButton({link,title,classes}) {
  return (
    <>
       <Link
          href={link}
          className= {`${classes} border-[1px]  text-md lg:text-[1.0416666666666667vw] font-PoppinsLight rounded-lg py-2 px-8 lg:px-[2.6041666666666665vw] transition-all duration-500 bg-transparent hover:bg-gd9`}
        >
          {title}
        </Link>
    </>
  )
}

export default OutlinedButton