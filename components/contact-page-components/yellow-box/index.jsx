import Link from 'next/link';
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail,HiOutlineLocationMarker } from 'react-icons/hi';
 

function YellowBox() {
  const items=[
    {id:1,icon:(<FiPhoneCall/>),title:'0911 411 225',link:'/'},
    {id:2,icon:(<HiOutlineMail/>),title:'sample@gmail.com',link:'/'},
    {id:3,icon:(<HiOutlineLocationMarker/>),title:'Mazandaran,Sari',link:'/'}
  ]
  return ( 
    <div className='w-full bg-gYellow py-0 lg:py-[1.8229166666666667vw] lg:min-h-[25vw] rounded-2xl lg:rounded-3xl flex flex-col justify-between items-start lg:h-[76%] lg:my-3' >
      
       <ul className=' py-[1.3rem] px-[2rem] lg:py-auto lg:px-auto flex flex-col justify-start items-start gap-6 lg:gap-[2.34375vw]'>
        {
          items.map((item,i)=>(

            <li key={i} className="">
              <Link className='flex items-center justify-center text-g21 gap-2 lg:gap-[0.78125vw]' href={item.link}>
                <span className='w-12 h-12 lg:w-[3.6458333333333335vw] lg:h-[3.6458333333333335vw] text-xl lg:text-[1.5625vw] rounded-full border-[1px] border-g21 inline-flex items-center justify-center ' >{item.icon}</span>
                <span className='text-[1.2rem] lg:text-[1.4583333333333333vw] font-PoppinsRegular' >{item.title}</span>
              </Link>
            </li>
          ))
        }
       </ul>

       <ul className=' py-3 lg:py-[0.625vw] rounded-b-2xl w-full flex justify-center items-center gap-4 lg:gap-[0.78125vw] bg-g21 lg:bg-transparent' >
        {
          items.map((item,i)=>(
            <li key={i} className="">
              <Link className='flex items-center justify-center gap-2' href={item.link}>
                <span className='w-9 h-9 lg:w-[2.6041666666666665vw] lg:h-[2.6041666666666665vw] bg-g21 text-gf rounded-full border-[1px] border-gf lg:border-g21 inline-flex items-center justify-center text-base lg:text-[1.171875vw] ' >{item.icon}</span>
              </Link>
            </li>
          ))
        }
       </ul>
    </div>
  )
}

export default YellowBox