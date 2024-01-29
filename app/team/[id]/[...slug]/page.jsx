import React from 'react'
import { getSinglePostData } from '@/core/services/api/videos';
import { IoLogoInstagram } from "react-icons/io";
import Image from 'next/image'
import Link from "next/link";

async function TeamSinglePage({ params }) {
  const data = await getSinglePostData(params.id);
  // const socialItems=[
  //   {id:1,icon:,link:""}
  // ]

  const skills=[
    {id:1,title:"Futter Developer"},
    {id:2,title:"Mobile Developer"},
    {id:3,title:"Flutter"},
    {id:4,title:"Html"},
    {id:5,title:"CSS"},
    {id:6,title:"Test"},
    {id:7,title:"Futter Developer"},
    {id:8,title:"Mobile Developer"},
    {id:9,title:"Flutter"},
  ]
  return (
    <main className="container h-auto  overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-8">
      {/* {data.id} */}
      <div className="relative order-2 lg:order-1 border-2 camma">
        {/* <div className="z-0 absolute top-0 left-0 h-[12rem] lg:h-[21vw]">
          <Image className="w-full h-full " width={'100'} height={'100'} alt={''} src={`/img/commatwo.png`} />
        </div> */}

        <h1 className="z-10 font-Holispay flex flex-col" >
          <span className="text-gb0 text-[2.25rem] lg:text-[5.625rem] " >Kasra</span>
          <span className="text-g21 text-[3.125rem] lg:text-[8.75rem] " >Yaseri </span>
        </h1>

        <h2 className="text-gDarkYellow text-[1.25rem] lg:text-[2rem] font-PoppinsLight ">Futter Developer</h2>
        <div className="z-10 font-PoppinsLight flex gap-2" >
          <span className="text-gb0 text-[0.75rem] lg:text-[1.5rem] " >joined us :</span>
          <span className="text-g70 text-[0.75rem] lg:text-[1.5rem] " >December , 2022 </span>
        </div>
        <p className="text-g70 text-justify text-[0.75rem] lg:text-[1.5rem] font-PoppinsLight" >
          Lorem ipsum dolor sit amet, consectetur adipiscing  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing  sed
        </p>
        <h3 className="text-gDarkYellow text-[1.25rem] lg:text-[2rem] font-PoppinsLight ">Skills :</h3>
        <ul className="flex flex-wrap gap-4" >
          {
            skills.map((sk,i)=>(
              <li key={i} className='border border-gd9 rounded-[0.9375rem] text-g70 text-[0.75rem] lg:text-[1.25rem] py-1 px-2 lg:py-2 lg:px-3' >{sk.title}</li>
            ))
          }
        </ul>

      </div>

      <div className="order-1 lg:order-2 relative flex items-end justify-between lg:ps-5 h-[80vh] lg:h-screen lg:mt-1 mt-2">
        <div className="z-10 absolute top-0 right-0 h-[12rem] lg:h-[21vw]">
          <Image className="w-full h-full " width={'100'} height={'100'} alt={''} src={`/img/commaone.png`} />
        </div>
        <div className="relative z-0 w-[85%] h-[60vh] lg:h-[34vw] bg-gYellow ">
          <div className="z-10 absolute right-6 bottom-0 lg:w-[27rem] w-[17rem] ">
            <Image className="w-full h-full " width={'100'} height={'100'} alt={''} src={`/img/preson1.png`} />
          </div>
        </div>
        <ul className="w-[15%] flex flex-col gap-3 ps-2 lg:ps-5  mb-[15%] " >
          <li>
            <Link href={`/`} className='border-2 border-gDarkYellow bg-transparent hover:bg-gDarkYellow rounded-full flex items-center justify-center tranisition-all lg:w-[60px] lg:h-[60px] w-12 h-12 ' >
              <Image width={32} height={32} alt="" src={"/img/instagram.png"}/>
            </Link>
          </li>
          <li>
            <Link href={`/`} className='border-2 border-gDarkYellow bg-transparent hover:bg-gDarkYellow rounded-full flex items-center justify-center tranisition-all lg:w-[60px] lg:h-[60px] w-12 h-12 ' >
              <Image width={24} height={24} alt="" src={"/img/linkdin.png"}/>
            </Link>
          </li>
          <li>
            <Link href={`/`} className='border-2 border-gDarkYellow bg-transparent hover:bg-gDarkYellow rounded-full flex items-center justify-center tranisition-all lg:w-[60px] lg:h-[60px] w-12 h-12 ' >
              <Image width={24} height={24} alt="" src={"/img/dirrible.png"}/>
            </Link>
          </li>
        </ul>

        
      </div>
      
    </main>
  )
}

export default TeamSinglePage