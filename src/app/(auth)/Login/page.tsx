// import React from "react";
// import Link from "next/link";
// /* import Logo from '../../public/assets/Logo.svg' */
// import Logo from "../../../../public/assets/Logo.svg";
// import Image from "next/image";
// import LoginCard from "./login-card";

// // const LoginPage = () => {
// //   return (
// //     <div>LoginPage</div>
// //   )
// // }

// // export default LoginPage

// export default async function Login() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <div className="p-8 bg-white rounded-lg shadow-md min-w-80">
//         <h1>Ir al HOME</h1>
//         <Link href={"/"} className="flex justify-center mb-4">
//           <Image src={Logo} width={40} height={40} alt="Logo" />
//         </Link>
//         <h1 className="text-2xl font-bold text-center mb-4"> Registrate en la aplicacion</h1>
//         <LoginCard />
//       </div>
//     </div>
//   );
// }

"use client"
import React, {useState} from "react";
import Image from 'next/image'
import Feature from '../../../../public/assets/Feature.svg'
import Link from 'next/link'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  /* const session = useSession(); */
  
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    /* console.log(email, password); */
    if (!isValidEmail(email)) {
      setError("This email is not valid")
      return;
    }

    if(!password || password.length < 8) {
      setError("Password is invalid, must be at least 8 characters long")
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password
    })
    
    if (res?.error) {
      setError("Invalid email or password");
      if(res?.url) router.replace("/")
    }else {
      setError("");
    }
};

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Image className="mx-auto h-10 w-auto" src={Feature} alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login{/* Sign in to your account */}</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
      <div>
        <label form="email" className="block text-sm font-medium leading-6 text-gray-900"> Dirección de email{/* Email address */}</label>
        <div className="mt-2">
          <input id="email" name="email" type="email" autoComplete ="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label form="password" className="block text-sm font-medium leading-6 text-gray-900">Contraseña{/* Password */}</label>
          <div className="text-sm">
            <Link href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">¿ Olvidaste tu contraseña ?{/* Forgot password? */}</Link>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <button 
        type="submit" 
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        > 
        {" "}
        Sign in 
        </button>        
      </div>

    </form>

    <p className="mt-10 text-center text-sm text-gray-500">
      Todavía no sos miembro ? {/* Not a member? */}
      <Link href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"> Registrate aquí{/* Comenzá una prueba gratuita de 14 días. */}{/* Start a 14 day free trial */}</Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default Login