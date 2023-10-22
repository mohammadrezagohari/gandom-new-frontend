import Link from 'next/link'
import React from 'react'

function OutlinedButton({link,title}) {
  return (
    <>
       <Link
          href={link}
          className=" border-[1px] border-g8 text-g8 text-md lg:text-base font-PoppinsLight rounded-lg py-2 px-8 lg:px-10"
        >
          {title}
        </Link>
    </>
  )
}

export default OutlinedButton