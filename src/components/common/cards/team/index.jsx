import Image from 'next/image'
import Link from "next/link";
import { HiArrowRight } from 'react-icons/hi';

const TeamCard = ({img,href,name,family,position,link}) => {
    return (
        <div className={`bg-gec rounded-lg lg:rounded-xl p-2 lg:p-5 `} >
            <div className={`mb-2`} >               
              <Image className="w-full h-full rounded-lg lg:rounded-xl" width={'100'} height={'100'} alt={''} src={img} />
            </div>
            <Link href={href}>
               <h5 className={`text-xs lg:text-[1.3541666666666667vw] lg:leading-[2.0833333333333335vw] font-PoppinsRegular line-clamp-2 text-g4c `} >{name} {family}</h5>
            </Link>
            <div className="flex items-center mt-1" >
                <div className="lg:w-4 lg:h-4 w-2 h-2 bg-gDarkYellow rounded-full" ></div> 
                <h6 className={`  text-[10px] lg:text-[1.0416666666666667vw] lg:leading-[2.0833333333333335vw]font-PoppinsRegular line-clamp-2 text-g8 ms-1 lg:ms-2`} >{position}</h6>
            </div>
            <Link className="flex items-center justify-end gap-1 mt-3 lg:mt-4" href={href} >
                <span className={`text-[0.55rem] lg:text-[0.8468749999999999vw] leading-5 lg:leading-[1.3020833333333333vw] text-justify font-PoppinsLight text-gDarkYellow`}>{link}</span>
                <span className={`text-[0.55rem] lg:text-[0.8468749999999999vw] leading-5 lg:leading-[1.3020833333333333vw] text-justify font-PoppinsLight text-gDarkYellow`}><HiArrowRight /></span>
           </Link>
        </div>
    );
}

export default TeamCard;