import Link from 'next/link'
import React from 'react'
import {FaUser, FaCircle, } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useSession, status, signOut, signIn} from "next-auth/react"

const Header = () => {
    const router = useRouter();
    const path = router.asPath // /posts/ebimo
    
    const { data: session, status } = useSession();


    function navToggle(){
      let btn = document.getElementById("btn-nav")
      let menu = document.getElementById("nav-menu");
      
      
      if(menu.classList.contains("sm:hidden")){
        menu.classList.remove("sm:hidden")
        console.log("if true")

        if(btn.classList.contains("text-black")){
          btn.classList.remove("text-black")
          btn.classList.add("text-orange-500")
        }
        
      }else{
        menu.classList.add("sm:hidden")
        console.log("else false")

        if(btn.classList.contains("text-orange-500")){
          btn.classList.remove("text-orange-500")
          btn.classList.add("text-black")
        }

      }
    }


    
  return (

    
    <>
      <header className="transparent  ">        
        <nav className="flex justify-between py-2 px-4 items-center">
          <div >
            <Link href={'/'}>
              <div>
                <a className="btn btn-ghost normal-case text-xl">Crowdr<span><FaCircle className={`inline text-xs text-orange-600`} /></span></a>
              </div>
            </Link>
          </div>


          <ul id='nav-menu' className={` sm:justify-center gap-20  flex items-center
           sm:hidden active  sm:flex-col sm:fixed sm:top-0 sm:left-0 sm:w-full sm:h-screen sm:gap-5 sm:text-2xl sm:font-semibold   sm:bg-black sm:z-10 sm:text-white    `}>
            <li>
              <Link href={`/about`}>
              <a onClick={navToggle}>About</a>
              </Link>
              </li>
            <li><a onClick={navToggle}>News</a></li>
            <li><a onClick={navToggle}>News</a></li>
            <li><a onClick={navToggle}>News</a></li>
            <li>
              <ul className={`sm:flex-col flex justify-between items-center gap-4 `}>
                <li className={`md:hidden`}>
                {!session?
            <Link href={'/register'}>
              <a> 
                <button className="btn btn-sm mx-2 gap-2">
                  <svg className={`h-6 w-6`} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="18px" viewBox="0 0 20 20" width="18px" fill="#ffff"><g><rect fill="#ffffff00" height="20" width="20"/></g><g><path d="M10,4v1h6v10h-6v1h6c0.55,0,1-0.45,1-1V5c0-0.55-0.45-1-1-1H10z"/><polygon points="9.5,6.5 8.79,7.21 11.09,9.5 3,9.5 3,10.5 11.09,10.5 8.79,12.79 9.5,13.5 13,10"/></g></svg>
                  Register
                </button>
              </a>
            </Link>
              :
              ""
          }

          </li>
          <li>


{session ?
            <button onClick={signOut } className="btn btn-sm ">Log Out</button> 
            :
            <button onClick={signIn} className="btn btn-sm ">Sign In</button>
          }
                </li>
              </ul>
            </li>

          

          

</ul>

          {/* Hamburger button implementation  */}
          <label id='btn-nav'  className="hidden z-20 sm:inline-grid btn bg-transparent hover:bg-transparent border-none text-black sm:float-right btn-circle btn-sm dropdown dropdown-left swap swap-rotate">
            <input type="checkbox" />          
            <svg onClick={navToggle} className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
            <svg onClick={navToggle} className="swap-on scale-150 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
          </label>
          
        </nav>

  
</header>
      
          
    </>
  )
}

export default Header