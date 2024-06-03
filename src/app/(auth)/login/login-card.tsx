import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../../public/assets/Logo.svg'
/* import { Button } from '@components/ui/button' */


export default function LoginCard() {
  return (
    <>
    <form className='space-y-4'>
      <LoginButton />
    </form>
    <div>
      <span>Nuevo en la página ?</span>
      <Link className="text-blue-500 hover:underline text-[13px] mr-1" href="/signup" >
       Registrarse
      </Link>
    </div>
    </>
  )
}

function LoginButton() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Image src={Logo} alt="Logo" /> Logueate con Github
    </button>
  )
}

