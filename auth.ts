import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { connectToMongoDB } from "./lib/db"
import User from "./src/models/userModel"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
  clientId: process.env.AUTH_GITHUB_ID,
  clientSecret: process.env.AUTH_GITHUB_SECRET
 }), 
],
secret: process.env.AUTH_SECRET,
callbacks: {
  async signIn({account, profile}) {
  if(account?.provider === "github") {
    await connectToMongoDB();

    try {
      const user = await User.findOne({email: profile?.email});

      // signup the user if not found
      if(!user){
        const newUser = await User.create({
          username:profile?.login,
          email:profile?.email,
          fullName:profile?.name,
          avatar:profile?.avatar_url,
        })

        await newUser.save();
      } 
      return true;  // indicate successful sign-in

    } catch (error) {
      console.log(error)
      return false;  // indicate failed sign-in
    }
  }
  return false;  // indicate failed sign-in
}},
}
)




// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import { connectToMongoDB } from "./lib/db"
// import User from "./src/models/userModel"

// export const { handlers, auth } = NextAuth(req => {
//  if (req) {
//   console.log(req) // do something with the request
//  }
//  return { providers: [ GitHub({
//   clientId: process.env.AUTH_GITHUB_ID,
//   clientSecret: process.env.AUTH_GITHUB_SECRET
//  }) ],
// secret: process.env.AUTH_SECRET,
// callbacks: {
//   async signIn({account, profile,})
// {
//   if(account?.provider === "github"){
//     await connectToMongoDB();

//     try {
//       const user = await User.findOne({email: profile?.email});

//       // signup the user if not found
//       if(!user){
//         const newUser = await User.create({
//           username:profile?.login,
//           email:profile?.email,
//           fullName:profile?.name,
//           avatar:profile?.avatar_url,
//         })

//         await newUser.save();
//       } 
//       return true;  // indicate successful sign-in

//     } catch (error) {
//       console.log(error)
//       return false;  // indicate failed sign-in
//     }
//   }
//   return false;  // indicate failed sign-in
// }},
// }
// })