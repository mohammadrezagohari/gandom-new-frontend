import React from 'react'
// import PictureBox from "@/components/common/picture-box";
import PictureBox from '@/components/common/picture-box-weblog';
import Link from "next/link";

function RecentArticleBox({href,cardTitle,cardDesc,date,author}) {
  return (
    <div className='recentArticleBox grid grid-cols-12 lg:grid-cols-12 gap-5 lg:gap-0'>
       <div className='pictureBox col-span-12 lg:col-span-6'>
       {/* wimg.png */}
         <PictureBox href={href} circleLgYellow="" circleSmYellow="" circleClasses="bg-gf"  classes={`bg-[url(/wimg.png)] rounded-l-lg rounded-r-lg lg:rounded-l-0 lg:rounded-r-lg w-[87%] lg:w-[88%] lg:h-[21.549479166666668vw] h-[13.188rem]`} />
       </div>
       <div className='textBox col-span-12 lg:col-span-6 flex flex-col items-start justify-center gap-2 lg:gap-[1.0416666666666667vw]'>
          <div className="divide-x divide-gb8"> 
            <span className="pe-2 lg:px-2 text-[0.95rem] lg:text-[1.25vw] lg:leading-[2.0833333333333335vw] font-PoppinsRegular text-gDarkYellow">{author}</span>
            <span className="px-2 text-[0.95rem] lg:text-[1.25vw] lg:leading-[2.0833333333333335vw] font-PoppinsRegular text-gb8">{date}</span>
          </div>
          <Link href={href}>
          <h3 className="text-[0.95rem] lg:text-[1.775vw] lg:leading-[2.34375vw] font-normal tracking-wide font-PoppinsMedium line-clamp-3 text-g21">
            {cardTitle}
          </h3>
          </Link>
          <p className="text-[0.95rem] lg:text-[1.3541666666666667vw] lg:leading-[2.0833333333333335vw] font-normal tracking-wide font-PoppinsRegular line-clamp-3 text-g8">
            {cardDesc}
          </p>
       </div>
    </div>
  )
}

export default RecentArticleBox