
import React from 'react'
import { getPostsData } from '@/core/services/api/videos'; 
import TeamCard from '@/components/common/cards/team';
import TeamDB from '../../../../public/json/team.json'

async function ContentSection() {
    const data = await getPostsData();
  return (
    <section className="w-full ">
        <div className=" container max-w-none ">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
                {
                    TeamDB.data.map((item,i)=>( 
                        <TeamCard 
                            key={i}
                            img={item.image}
                            // href={`/team/${encodeURIComponent(item.id)}/${encodeURIComponent(item.name)}`}
                            href={`/team/${encodeURIComponent(item.id)}/${encodeURIComponent(item.name)} ${encodeURIComponent(item.family)}`}
                            name={item.name}
                            family={item.family}
                            position={item.position}
                            link="see more"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ContentSection

{/* <VideoCardBox key={i}  
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
                        />  */}