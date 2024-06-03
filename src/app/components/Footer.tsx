import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/assets/Logo.svg'
import Facebook from '../../../public/assets/Facebook.svg'
import X2 from '../../../public/assets/X2.svg'
import Instagram from '../../../public/assets/Instagram.svg'
/* import Feed from '../../public/assets/Feed.svg' */
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className='pt-[80px] pb-[40px]'>
      <div className='flex items-center justify-center gap-x-[12px] '>
        <Image src={Logo} alt='Logo' />
        <p className='font-bold text-[#36485C] text-[17px]'>RTK-Argentina</p>
      </div>

      <ul className='flex flex-col items-center gap-y-[32px] pt-[56px] text-[#36485C] sm:flex-row sm:justify-center sm:gap-x-5 sm:pt-5'>
        <Link href="#servicio" >
          <li>Servicio</li>
        </Link>
        <Link href="#aplicaciones">
          <li>Aplicaciones</li>
        </Link>
        <Link href="#quienes-somos">
          <li>Quienes somos</li>
        </Link>
        <Link  href="#contacto">
        
        <li>Contacto</li>
        </Link>
      </ul>

      <p className='pt-[56px] text-center text-[14px] font-medium text[#5F7896] sm:pt-5'>© Copyright 2024. Your Site. All rights reserved.</p>
    
      <div className='flex items-center justify-center gap-x-[56px] pt-[40px] '>
        <Image src={Facebook} alt='Facebook' />
        <Image src={X2} alt='Twitter' width={32} height={42}/>
        <Image src={Instagram} alt='Instagram' width={20} height={21}/>
        {/* <Image src={Feed} alt='Feed' /> */}
      </div>
    </div>
  )
}
