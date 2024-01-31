import Link from 'next/link'
import React from 'react'

function FilledButton({link,title}) {
  return (
    <>
    <Link
       href={link}
       className=" border-[1px] transform opacity-100 hover:opacity-80  transition duration-700 ease-in-out border-g31 bg-g31 text-gf text-md lg:text-base font-PoppinsLight rounded-lg py-2 px-8 lg:px-10"
     >
      {title}
     </Link>
 </>
  )
}

export default FilledButton