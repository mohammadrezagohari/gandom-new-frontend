import React from 'react'
import SectionTitle from "@/components/common/section-title";
import RecentArticleBox from '@/components/common/cards/recent-article-box';
import { getPostsData } from '@/core/services/api/videos';
import OutlinedButton from "@/components/common/buttons/outlined";


async function ArticleSection() {
  const data = await getPostsData()
  return (
    <section className="w-full ">
      <div className="container max-w-none ">
         
        <SectionTitle
          classes="text-g21 py-[3%] lg:py-[1%]"
          title="Recent Articles"
        />

       <div className='recentArticleBoxContainer flex flex-col justify-start items-center gap-8'>
        {
          data.slice(0,3).map((item,i)=>(
            <RecentArticleBox 
            // img="/wimg.png"
            key={i} author="Lorem ipsum" date="29 July"  href={`/article/${item.id}/${item.title}`} cardTitle={item.title} cardDesc={item.body} />

          ))
        }
         {/* <RecentArticleBox  />
         <RecentArticleBox  />
         <RecentArticleBox  /> */}
       </div>

       <div className="my-8 lg:mt-14 flex items-center justify-center">

        <OutlinedButton classes="border-g21 text-g21"  title='See More' link='/article' />
       </div>
      
      </div>
     
    </section>
  )
}

export default ArticleSection