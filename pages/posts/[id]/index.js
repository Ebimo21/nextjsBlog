import {useRouter} from 'next/router'
import React from 'react'

function Index ({blog}){
    const router = useRouter();
    const { id } = router.query;
  return (
    <div>
      hello page {blog.title}
    </div>
  )
}

export const getServerSideProps= async(context) =>{

    // const response = await fetch(`http://localhost:3000/api/blogdetailapi/${context.params.id}`)
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const blog = await response.json();

    return {
        props: {
            blog
        }
    }
}

export default Index


// import React from 'react'




// const Post = ({props}) => {
// console.log(id);

//   return (
//     <div>
//         ji
//     </div>
//   )
// }

// // export async function getStaticPaths() {
// //     // Return a list of possible value for id
// //   }


//   export async function getServerSideProps() {
//     // Fetch necessary data for the blog post using params.id

//     const res = await fetch(`http://localhost:3001/postsapi`, {
//       method: "GET",
//       headers:{
//         content: "application/json"
//       },
//       body: {id: "1"}
//     })
//     const post = await res.json();
//     // console.log(context)

//     return{

    
//         props: "post"
//     }
//   }
// export default Post