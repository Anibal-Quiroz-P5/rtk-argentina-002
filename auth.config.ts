import { sign } from "crypto";
import { pages } from "next/dist/build/templates/app-page";
import {NextRequest} from "next/server";
import {Session} from "next-auth";

export const authConfig = {
  pages: { 
    signIn: '/login',
  },
  providers:[],
  callbacks: {
    async authorized({auth, request}:{auth:Session | null, request:NextRequest}){
      const user = auth?.user;

      const isVisitingChatPage = request.nextUrl.pathname.startsWith("/chat");

      const isVisitingAuthPage = request.nextUrl.pathname.startsWith("/login") || request.nextUrl.pathname.startsWith("/signup")

      if(!user && isVisitingChatPage){
        return false
        }

        if(user && isVisitingAuthPage){
          return Response.redirect(new URL("/chat", request.nextUrl));          
      }
       
      return true;
     },
    },
  };
