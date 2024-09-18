import React from "react";
import videoItem from "@/src/core/services/api/videos";
import { getSinglePostData } from "@/src/core/services/api/videos";
import VideoPlayerSection from "@/src/components/page/videos-single/video-player-section";
import VideoContent from "@/src/components/page/videos-single/video-content";
import CommentSection from "@/src/components/page/videos-single/comment-section";
import RelatedPostSection from "@/src/components/page/videos-single/related-post-section";

async function VideoSinglePage({ params }) {
  const data = await getSinglePostData(params.id);
  return (
    <main className="">
      {/* VideoSinglePage
      <p>

        {data.title} 
      </p> */}
      <VideoPlayerSection />
      <VideoContent>
        <h1
          className={`text-g25 lg:text-[3.7541666666666665vw] text-start lg:leading-[5.517578125vw] text-[1.7rem] leading-[40.68px] font-Holispay`}
        >
          {data.title}
          {/* We are a leader in the field of web and mobile software services */}
        </h1>

        <p className="text-g8 lg:text-[1.23vw] text-justify lg:leading-[1.95vw] text-base leading-6 tracking-wide font-normal font-PoppinsRegular py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore.
        </p>

        <CommentSection />

        <RelatedPostSection />
      </VideoContent>
    </main>
  );
}

export default VideoSinglePage;
