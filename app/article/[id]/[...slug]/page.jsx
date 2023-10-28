import React from 'react'
import { getSinglePostData } from '@/core/services/api/videos';
async function ServiceSinglePage({ params }) {
  const data = await getSinglePostData(params.id);
  return (
    <main className="">
      ServiceSinglePage

      <p>

{data.title}
</p>
    </main>
  )
}

export default ServiceSinglePage