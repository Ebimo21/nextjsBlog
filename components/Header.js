import Link from 'next/link'
import React from 'react'
import {FaUser, FaCircle, } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useSession, status, signOut, signIn} from "next-auth/react"

const Header = () => {
    const router = useRouter();
    const path = router.asPath // /posts/ebimo
    
    console.log(path);
    const { data: session, status } = useSession();
    console.log("head session id: ", session);

    if(status === "loading"){
        return " ";
    }


    
  return (

    <div className={`px-3 py-2 my-2 `}>
        <div className='p-1 flex justify-between'>

            <div className={`grow`}>
                <Link href={'/'}>
                    <a className={`font-extrabold text-xl`} >Crowdr<span><FaCircle className={`inline text-xs text-orange-600`} /></span> </a>
                </Link>

            </div>

            <div className={` flex justify-around grow   font-normal text-base leading-8`}>
            
                <Link href={`/about`} ><a className={`text-orange-600`}>About</a></Link>

                <Link href={`/posts`}><a>Posts</a></Link>

                <Link href={`/news`}><a>News</a></Link>
                
                { !session? 
                (<Link href={`/register`}>
                    <a><button className={`rounded-full bg-[#0a2343] px-2 text-white`}>
                    <svg className={`inline`} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="18px" viewBox="0 0 20 20" width="18px" fill="#ffff"><g><rect fill="#ffffff00" height="20" width="20"/></g><g><path d="M10,4v1h6v10h-6v1h6c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H10z"/><polygon points="9.5,6.5 8.79,7.21 11.09,9.5 3,9.5 3,10.5 11.09,10.5 8.79,12.79 9.5,13.5 13,10"/></g></svg>
                        Register
                    </button>
                    </a>
                </Link>)
                 : ""}

                {/* <button onClick={() => signIn()}>Sign in</button> */}
      {session ? <button onClick={signOut}>Log out</button> : <button onClick={signIn}> Log in  </button>}

            </div>
        </div>
    </div>
  )
}

export default Header