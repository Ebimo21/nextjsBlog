import React from 'react'
import {useRouter} from 'next/router'


const Post = ({props}) => {
    const router = useRouter();
    const { id } = router.query;

  return (
    <div>
        ji
    </div>
  )
}

// export async function getStaticPaths() {
//     // Return a list of possible value for id
//   }


  export async function getServerSideProps(context) {
    // Fetch necessary data for the blog post using params.id

    // const res = await fetch(`http://localhost:3001/posts?id=${id}`)
    // const post = await res.json();
    console.log(context)

    return{

    
        props: {}
    }
  }
export default Post