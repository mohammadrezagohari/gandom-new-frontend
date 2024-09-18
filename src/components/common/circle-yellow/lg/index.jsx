"use client"
import { GoArrowDownLeft } from "react-icons/go";
function CircleLgYellow({deg}) {
    const text = "see-more-";
  const rotatedText = text.split("").map((char, i) => (
    <span key={i} style={{ transform: `rotate(${i * 40}deg)` }}>
      {char}
    </span>
  ));
  return (
      <>
      {/* <div className='w-[7.349rem] h-[7.349rem] rounded-full bg-gYellow'>CircleYellow</div> */}
      <div className="circle relative w-[6rem] h-[6rem] rounded-full bg-gYellow flex justify-center items-center">
        <div className="logo absolute w-[6.349rem] h-[6.349rem] rounded-full  flex items-center justify-center">
        <GoArrowDownLeft className="transform rotate-180 text-g21 lg:text-3xl text-xl" />
        </div>
        <div className="circleLgText absolute w-full h-full">
          <p>{rotatedText}</p>
        </div>
      </div>
    
    
    </>
  )
}

export default CircleLgYellow