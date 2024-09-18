import React from 'react'

function VideoContent({ children,classes }) {
  return (
    <section className="w-full">
        <div className={`container max-w-none ${classes}`} > 
          { children }
        </div>
    </section>
  )
}

export default VideoContent