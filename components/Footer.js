import React from 'react'
import { FaUser, FaTwitter} from 'react-icons/fa'
import { useSession, status} from "next-auth/react"


const Footer = () => {

  const { data: session, status } = useSession();
    console.log("footer session id: ", session);

    if(status === "loading"){
        return " ";
    }
  return (
    <div className={`bg-black p-6 text-white text-center`}>
        <p>Built With Love!</p>
    </div>
  )
}

export default Footer