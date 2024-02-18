import React from 'react'
import { getSinglePostData } from '@/core/services/api/videos';
import { IoLogoInstagram } from "react-icons/io";
import Image from 'next/image'
import Link from "next/link";
import TeamDB from '../../../../public/json/team.json'


async function TeamSinglePage({params}) {
  const team=TeamDB.data.find((c)=>c.id==params.id)
  // const data = await getSinglePostData(params.id)
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
    <main className=" container max-w-none h-auto  overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-8 ">
      {/* {data.id} */}
      <div className="relative order-2 lg:order-1  camma ">
        {/* <div className="z-0 absolute top-0 left-0 h-[12rem] lg:h-[21vw]">
          <Image className="w-full h-full " width={'100'} height={'100'} alt={''} src={`/img/commatwo.png`} />
        </div> */}

        <h1 className="z-10 font-Holispay flex flex-col" >
          <span className="text-gb0 text-[2.25rem] lg:text-[4.166666666666667vw] " >{team.name}</span>
          <span className="text-g21 text-[3.125rem] lg:text-[6.25vw] " >{team.family} </span>
        </h1>

        <h2 className="text-gDarkYellow text-[1.25rem] lg:text-[2.0833333333333335vw] font-PoppinsLight">{team.position}</h2>
        <div className="z-10  my-3 lg:my-6 font-PoppinsLight flex gap-2" >
          <span className="text-gb0 text-[0.75rem] lg:text-[1.5625vw] " >joined us :</span>
          <span className="text-g70 text-[0.75rem] lg:text-[1.5625vw] " >December , 2022 </span>
        </div>
        <p className="text-g70 text-justify text-[0.75rem] lg:text-[1.5625vw] font-PoppinsLight" >
          Lorem ipsum dolor sit amet, consectetur adipiscing  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing  sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing  sed
        </p>
        <h3 className="text-gDarkYellow text-[1.25rem] lg:text-[2.0833333333333335vw] font-PoppinsLight  mb-2 mt-6 lg:mb-3 ">Skills :</h3>
        <ul className="flex flex-wrap gap-2 lg:gap-4" >
          {
            team?.skills?.map((sk,i)=>(
              <li key={i} className='border border-gd9 rounded-[0.9375rem] text-g70 text-[0.75rem] lg:text-[1.3020833333333333vw] py-1 px-2 lg:py-2 lg:px-3' >{sk}</li>
            ))
          }
        </ul>

      </div>

      <div className="order-1 lg:order-2  relative flex items-end justify-between lg:ps-5 h-[25.875rem] lg:min-h-full lg:mt-1 mt-2">
        <div className="z-10 absolute top-0 right-0 h-[12rem] lg:h-[21vw]">
          <Image className="w-full h-full " width={'100'} height={'100'} alt={''} src={`/img/commaone.png`} />
        </div>
        <div className="relative z-0 w-[80%] h-[17.973rem] lg:h-[34vw] bg-gYellow ">
          <div className="z-10 absolute right-2 bottom-0 lg:w-[28.125vw] w-[15.326rem] ">
            <Image className="w-full h-full " width={'100'} height={'100'} alt={''} src={`/img/preson1.png`} />
          </div>
        </div>
        <ul className="w-[15%] flex flex-col gap-3 ps-2 lg:ps-5  mb-[15%] " >
          <li>
            <Link href={team.instagram} className='transition-all duration-500 border-2 border-gDarkYellow bg-transparent hover:bg-gDarkYellow rounded-full flex items-center justify-center tranisition-all lg:w-[60px] lg:h-[60px] w-12 h-12 ' >
              <Image width={32} height={32} alt="" src={"/img/instagram.png"}/>
            </Link>
          </li>
          <li>
            <Link href={team.linkdin} className='transition-all duration-500 border-2 border-gDarkYellow bg-transparent hover:bg-gDarkYellow rounded-full flex items-center justify-center tranisition-all lg:w-[60px] lg:h-[60px] w-12 h-12 ' >
              <Image width={24} height={24} alt="" src={"/img/linkdin.png"}/>
            </Link>
          </li>
          {/* <li>
            <Link href={`/`} className='transition-all duration-500 border-2 border-gDarkYellow bg-transparent hover:bg-gDarkYellow rounded-full flex items-center justify-center tranisition-all lg:w-[60px] lg:h-[60px] w-12 h-12 ' >
              <Image width={24} height={24} alt="" src={"/img/dirrible.png"}/>
            </Link>
          </li> */}
        </ul>

        
      </div>
      
    </main>
  )
}

export default TeamSinglePage