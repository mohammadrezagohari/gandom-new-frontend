import Link from 'next/link'
import React from 'react'

function OutlinedYellowButton({handleOpen,title}) {
  return (
    <>
        <button
          onClick={handleOpen}
          className=" border-[1px] border-gYellow text-gf text-md lg:text-base font-PoppinsLight rounded-lg py-2 px-8 lg:px-10"
        >
          {title}
        </button>
    </>
  )
}

export default OutlinedYellowButton