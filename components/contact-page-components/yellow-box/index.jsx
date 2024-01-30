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
    <div className='w-full bg-gYellow py-0 lg:py-7 lg:h-[25vw] rounded-2xl lg:rounded-3xl flex flex-col justify-between items-start ' >
      
       <ul className=' py-[1.3rem] px-[2rem] lg:py-auto lg:px-auto flex flex-col justify-start items-start gap-6 lg:gap-9'>
        {
          items.map((item,i)=>(

            <li key={i} className="">
              <Link className='flex items-center justify-center text-g21 gap-3' href={item.link}>
                <span className='w-12 h-12 lg:w-14 lg:h-14 text-xl lg:text-2xl rounded-full border-[1px] border-g21 inline-flex items-center justify-center ' >{item.icon}</span>
                <span className='text-[1.2rem] lg:text-[1.4rem] font-PoppinsRegular' >{item.title}</span>
              </Link>
            </li>
          ))
        }
       </ul>

       <ul className=' py-[0.6rem] rounded-b-2xl w-full flex justify-center items-center gap-3 bg-g21 lg:bg-transparent' >
        {
          items.map((item,i)=>(
            <li key={i} className="">
              <Link className='flex items-center justify-center gap-2' href={item.link}>
                <span className='w-8 h-8 lg:w-10 lg:h-10 bg-g21 text-gf rounded-full border-[1px] border-gf lg:border-g21 inline-flex items-center justify-center text-sm lg:text-lg ' >{item.icon}</span>
              </Link>
            </li>
          ))
        }
       </ul>
    </div>
  )
}

export default YellowBox