import React from 'react'
import Link from 'next/link'

const BlogCard = ({title, subTitle, description, key, id}) => {
  return (
    <div key={key} className={` px-3 hover:border-green-500 mt-2 py-10 border-orange-400 border-solid border-2`}>
    <Link href={`/posts/2`}>
    
        <div className={`px-1`}>
          <h1 className={`text-xl font-semibold`}>{title}</h1>
          <p>{subTitle}</p>
          <p>{description}</p>
        </div>
    </Link>
    </div>
  )
}

export default BlogCard