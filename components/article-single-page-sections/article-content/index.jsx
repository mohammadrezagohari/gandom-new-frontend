import React from 'react'

function ArticleContent({ children,classes }) {
  return (
    <main className={`${classes}`} >
    { children }
    </main>
  )
}

export default ArticleContent