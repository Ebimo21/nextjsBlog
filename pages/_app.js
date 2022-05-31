import Layout from '../components/Layout'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { useSession, signIn, signOut } from "next-auth/react"

function MyApp({ Component, pageProps: { ...pageProps } }) {

  return(
     <SessionProvider >
    <Layout>
      <Component {...pageProps} />
  </Layout>
    </SessionProvider>

  
  )
}

export default MyApp
