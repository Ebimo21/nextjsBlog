import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { useSession} from "next-auth/react"


const Layout = ({children}) => {

  const { data: session, status } = useSession();
    // console.log("Layout session id: ", session);

    if(status === "loading"){
        return <p>Loadin</p>;
    }

  return (
      <>
          <Header>

          </Header>
          {children}

           <Footer>
               
           </Footer>

      </>
  )
}

export default Layout