
import Image from 'next/image'
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi';


function VideoCardBox({
  parentClasses,
titleClasses,
descClasses,
linkClasses,
dateClasses,
img,
title,
desc,
link,
href,
date
}) {
  return (
    <div className={`border-[1px] gap-2 rounded-lg flex flex-col items-start justify-between p-2 lg:p-5 ${parentClasses}`}>
        <div className={``} >               
          <Image className="w-full h-full rounded-lg" width={'100'} height={'100'} alt={''} src={img} />
        </div>
        <Link href={href} >
          <h5 className={`text-xs lg:text-[1.3rem] lg:leading-8 font-PoppinsMedium line-clamp-2 ${titleClasses} `} >{title}</h5>
        </Link>
        <p className={`text-[0.55rem] lg:text-[0.843rem] lg:leading-5 font-PoppinsLight line-clamp-3 ${descClasses}`} >{desc}</p>
        <div className="w-full flex items-center justify-between">
          <span className={`text-[0.55rem] lg:text-[0.813rem] leading-5 text-justify font-PoppinsLight ${dateClasses} `}>{date}</span>
          
          <Link className="flex items-center justify-center gap-1" href={href} >
            <span className={`text-[0.55rem] lg:text-[0.813rem] leading-5 text-justify font-PoppinsLight ${linkClasses} `}>{link}</span>
            <span className={`text-[0.55rem] lg:text-[0.813rem] leading-5 text-justify font-PoppinsLight ${linkClasses} `}><HiArrowRight /></span>
          </Link>
        </div>
    </div>
  )
}

export default VideoCardBox