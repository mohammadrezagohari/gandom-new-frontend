import React from "react";
import SectionTitle from "@/src/components/common/section-title";
import VideoCardBox from "@/src/components/common/cards/video-box";
// import videoItem from '@/core/services/api/videos';
import { getPostsData } from "@/src/core/services/api/videos";

const RelatedPostSection = async () => {
  const data = await getPostsData();
  return (
    <section className={` my-[5%]`}>
      <SectionTitle classes="text-g21 " title="Related" />

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
        {data.slice(0, 3).map((item, i) => (
          <VideoCardBox
            key={i}
            parentClasses="border-gec bg-gec"
            titleClasses="text-g4c"
            descClasses="text-g8"
            linkClasses="text-gDarkYellow"
            dateClasses="text-g8"
            img="/vImg.svg"
            title={item.title}
            desc={item.body}
            link="see more"
            date="29 July"
            href={`/article/${item.id}/${item.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedPostSection;
