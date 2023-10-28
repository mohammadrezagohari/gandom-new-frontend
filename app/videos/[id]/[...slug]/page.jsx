import React from 'react'
import videoItem from '@/core/services/api/videos';
import { getSinglePostData } from '@/core/services/api/videos';
async function VideoSinglePage({ params }) {
  const data = await getSinglePostData(params.id);
  return (
    <main className="">
      VideoSinglePage
      <p>

       {data.title}
      </p>
    </main>
  )
}

export default VideoSinglePage