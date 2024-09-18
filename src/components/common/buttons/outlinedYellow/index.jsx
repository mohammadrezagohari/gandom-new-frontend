import Link from 'next/link'
import React from 'react'

function OutlinedYellowButton({handleOpen,title}) {
  return (
    <>
        <button
          onClick={handleOpen}
          className=" border-[1px] border-gYellow text-gf text-md lg:text-[1.0416666666666667vw] font-PoppinsLight rounded-lg py-2 px-8 lg:px-[2.6041666666666665vw]"
        >
          {title}
        </button>
    </>
  )
}

export default OutlinedYellowButton