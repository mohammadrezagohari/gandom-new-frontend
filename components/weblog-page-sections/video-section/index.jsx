import React from 'react'
import SectionTitle from "@/components/common/section-title";
import VideoCardBox from '../../common/cards/video-box';
// import videoItem from '@/core/services/api/videos';
import { getPostsData } from '@/core/services/api/videos';
import OutlinedButton from "@/components/common/buttons/outlined";

async function VideoSection() {
  const data = await getPostsData();
  return ( 
    <section className="w-full bg-g21">
      <div className="container ">
        <SectionTitle
          classes="text-gYellow py-[3%] lg:py-[1%]"
          title="Recent Videos"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
            {
              data.slice(0,4).map((item,i)=>(
                <VideoCardBox key={i}  
                  parentClasses='border-g3c bg-g3c'
                  titleClasses='text-gf'
                  descClasses='text-gb8'
                  linkClasses='text-gDarkYellow'
                  dateClasses='text-gb8'
                  img="/vImg.svg"
                  title={item.title}
                  desc={item.body}
                  link="see more"
                  date="29 July"
                  href={`/videos/${item.id}/${item.title}`}
                /> 
              ))
            }
        </div>
        
        <div className="my-8 flex items-center justify-center">

          <OutlinedButton classes="border-gec text-gec"  title='See More' link='/videos' />
        </div>
      </div>
     
    </section>
  )
}

export default VideoSection