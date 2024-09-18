
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
    <div className={`border-[1px] gap-1 lg:gap-[0.5208333333333334vw] rounded-lg flex flex-col items-start justify-between p-2 lg:p-[1.3020833333333333vw] ${parentClasses}`}>
        <div className={``} >               
          <Image className="w-full h-full rounded-lg" width={'100'} height={'100'} alt={''} src={img} />
        </div>
        <Link href={href} >
          <h5 className={`tracking-wide text-sm lg:text-[1.2vw] lg:leading-[2.0833333333333335vw] font-normal font-PoppinsMedium line-clamp-2 ${titleClasses} `} >{title}</h5>
        </Link>
        <p className={`tracking-wide text-[0.75rem] lg:text-[0.8781249999999999vw] lg:leading-[1.3020833333333333vw] font-PoppinsLight line-clamp-3 ${descClasses}`} >{desc}</p>
        <div className="w-full flex items-center justify-between">
          <span className={`text-[0.55rem] lg:text-[0.8468749999999999vw] leading-5 text-justify font-PoppinsLight ${dateClasses} `}>{date}</span>
          
          <Link className="flex items-center justify-center gap-1" href={href} >
            <span className={`text-[0.65rem] lg:text-[0.8468749999999999vw] leading-4 lg:leading-[1.3020833333333333vw] text-justify font-PoppinsLight ${linkClasses} `}>{link}</span>
            <span className={`text-[0.65rem] lg:text-[0.8468749999999999vw] leading-4 lg:leading-[1.3020833333333333vw] text-justify font-PoppinsLight ${linkClasses} `}><HiArrowRight /></span>
          </Link>
        </div>
    </div>
  )
}

export default VideoCardBox