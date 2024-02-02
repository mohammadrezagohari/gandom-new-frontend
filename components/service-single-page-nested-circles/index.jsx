import React from 'react'
import Image from "next/image";
function NestedCircles({technologiesItems}) {
  return ( 
    
    <div className="relative w-[46.875vw] h-[46.875vw] rounded-full border-[1.59px] border-[#FFD10126]  flex items-center justify-center" >
      <div className="w-[39.583333333333336vw] h-[39.583333333333336vw] rounded-full border-[1.59px] border-[#FFD10159]  flex items-center justify-center" >
        <div className="w-[33.333333333333336vw] h-[33.333333333333336vw] rounded-full border-[1.59px] border-[#FFD101B2]  flex items-center justify-center" >
            <div className="w-[28.125vw] h-[28.125vw] rounded-full bg-g3  flex items-center justify-center relative " >
              <div className=" w-[31.25vw] absolute left-1 flex items-center justify-center" >
              {/* animate-bounce duration-1000 */}
                    <Image
                      width={100}
                      height={100}
                      alt={"head picture"}
                      src={'/موکاپ-لپ-تاپ 1.svg'}
                      className="w-full h-full"
                    />
              </div>

            </div>

        </div>

      </div>

      <ul className="tech socialIconDownSmUl  text-center p-2 absolute left-0  flex justify-center items-center gap-7">
        {
          technologiesItems.slice(0,5).map((tec,i)=>(

            <li  key={i} className={` bg-transparent text-gf text-2xl w-[62px] h-[62px] border-[2.39px] border-[#D9B66A]  flex justify-center items-center rounded-full hover:cursor-pointer `}>
              {tec.icon}
              <span className="">
                {tec.title}
              </span>
            </li>
          ))
        }
      </ul>

      <ul className="tech socialIconUpSmUl text-center p-2 absolute right-0   flex justify-center items-center gap-7">
        {
          technologiesItems.slice(5,10).map((tec,i)=>(

            <li key={i} className={`  bg-transparent text-gf text-2xl w-[62px] h-[62px] border-[2.39px] border-[#D9B66A]  flex justify-center items-center rounded-full hover:cursor-pointer `}>
              {tec.icon}
              <span className="">
                {tec.title}
              </span>
            </li>
          ))
        }
      </ul>

  </div>
  )
}

export default NestedCircles