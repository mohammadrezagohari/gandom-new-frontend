import Link from 'next/link'
import React from 'react'

function OutlinedButton({link,title,classes}) {
  return (
    <>
       <Link
          href={link}
          className= {`${classes} border-[1px]  text-md lg:text-base font-PoppinsLight rounded-lg py-2 px-8 lg:px-10`}
        >
          {title}
        </Link>
    </>
  )
}

export default OutlinedButton