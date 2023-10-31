import React from 'react'

function VideoContent({ children,classes }) {
  return (
    <section className="w-full">
        <div className={`container ${classes}`} > 
          { children }
        </div>
    </section>
  )
}

export default VideoContent