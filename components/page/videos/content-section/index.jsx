import React from 'react'
// import VideoCardBox from '../../common/cards/video-box';
// import videoItem from '@/core/services/api/videos';
import { getPostsData } from '@/core/services/api/videos'; 
import VideoCardBox from '@/components/common/cards/video-box';


async function ContentSection() {
    const data = await getPostsData();
  return (
    <section className="w-full ">
        <div className="container max-w-none ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                {
                    data.map((item,i)=>(
                        <VideoCardBox key={i}  
                        parentClasses='border-gec bg-gec'
                        titleClasses='text-g4c'
                        descClasses='text-g8'
                        linkClasses='text-gDarkYellow'
                        dateClasses='text-g8'
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
        </div>
    </section>
  )
}

export default ContentSection