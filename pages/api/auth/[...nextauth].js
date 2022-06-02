import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    //add more providers here

    CredentialsProvider({
 
      name: "Email",
     
      credentials: {
        fname: { label: "fname", type: "text", placeholder: "jsmith" },
        password: {  label: "password", type: "password" }
      },
      async authorize (credentials) {

       const use = await prisma.user.findUnique({
            where: {
              email: credentials.fname,
              
            },
  
            // fname: fname,
            // email: email,
          })
        
        if (use) {
          return use;
          // return { id: 1, name: "xxxebimo", email: "ebi4jah15@gmail.comxxx" };
          
        }else{
        // return { id: 1, name: "ebimoxx", email: "xxebi4jah15@gmail.com" };
        return null;
        }
      },
    }),
  
  ],

  callbacks: {

    async signIn() {
      const isAllowedToSignIn = true
      if (isAllowedToSignIn) {
        return true
      } else {
        // Return false to display a default error message
        return false
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },

    jwt: ({token, user})=> {
      if(user){
        token.id = user.id;
      }
      return token;
    },
    

    session: ({session, token}) => {
      
      if(token){
        session.id =token.id;
      }
      return session;
    },
    
  
  }
  ,

  secret: 'test',

  jwt: {
    secret: 'test',
    encryption: true,
  },

  session : {
    strategy: "jwt",
    maxAge: 60 * 60,
    // maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

});