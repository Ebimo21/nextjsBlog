import React from 'react'
import Link from 'next/link'

const BlogCard = ({title, subTitle, description, key, id}) => {
  return (
    <Link href={`/posts/2`}>
      <div key={key} className={`p-2 basis-5/12 basis-4/12 sm:basis-full `}>
      {/* <div className={"p-2"}> */}
        <div className="card  bg-base-100 shadow-xl">
          {/* <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure> */}
          <div className="card-body flex-wrap">
            <h2 className="card-title">{title}</h2>
            <p>{subTitle}</p>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div> 
              <div className="badge badge-outline">Products</div>
              {/* <button className="btn btn-primary">Buy Now</button> */}
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    </Link>

  )
}

export default BlogCard