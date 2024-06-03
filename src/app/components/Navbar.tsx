// "use client";
// import React from "react";
// import Image from "next/image";
// import Logo from "../../../public/assets/Logo.svg";
// import User from "../../../public/assets/User.svg";
// import Menu from "../../../public/assets/Menu.svg";
// import Link from "next/link";
// import { useRouter } from "next/navigation";


// const navLinks = [
//   { name: "Servicio", link: "#servicio" },
//   { name: "Aplicaciones", link: "#aplicaciones" },
//   { name: "Quienes somos", link: "#quienes-somos" },
//   { name: "Contacto", link: "#contacto" },
// ];

// const Navbar = () => {
//   const router = useRouter();

//   const handleNavLinkClick = (link: string) => {
//     // Si el link es un ancla interna, evita el comportamiento predeterminado y realiza un desplazamiento suave
//     if (link.startsWith("#")) {
//       const element = document.querySelector(link);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // Si es una ruta normal, redirige usando Next.js Router
//       router.push(link);
//     }
//   };

//   return (
//     <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
//       <div className="flex items-center">
//         <Image src={Logo} alt="Logo" />

//         <div className="hidden lg:flex pl-[74px] gap-x-[56px] ">
//           {navLinks.map((item, index) => (
//             <p
//               className="text-[#4a47f3] font-medium"
//               key={index}
//               onClick={() => handleNavLinkClick(item.link)}
//             >
//               {item.name}
//             </p>
//           ))}
//         </div>
//       </div>

//       <div className="flex gap-x-5">
//         {/*         <Link href="/signup" >
//         <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] " >
//           Registrate
//         </p>
//         </Link> */}
//         <div className="flex items-center gap-x-2">
//           {/*          <div>
//            <Image src={User} alt="User Profile" />
//           </div> */}

//           {/* <Link href="/Login"> */}
//           <Link href="/signup">
//             <span className="hidden font-medium text-[#36485C]  lg:flex gap-x-4 flex-row-reverse">
//               <div>
//                 <Image src={User} alt="User Profile" />
//               </div>
//               <div>Registrate</div>
//             </span>
//           </Link>
//         </div>
//         <Image
//           src={Menu}
//           alt="Menu Button"
//           className="lg:hidden"
//           onClick={() => {
//             // Aquí se llama a la función handleNavLinkClick
//             // y se muestra el menú hamburguesa
//             const hamburguerMenu: HTMLElement | null = document.getElementById('hamburguerMenu');
//             hamburguerMenu?.classList.toggle('MOBILE-MENU--OPEN');
//           }} />
//       </div>
//     </nav>
//   );
// };
// export default Navbar;

//---------------------------------------------------------------------

'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "../../../public/assets/Logo.svg";
import User from "../../../public/assets/User.svg";
import Menu from "../../../public/assets/Menu.svg";
import CloseIcon from "../../../public/assets/CloseIcon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HamburguerMenu from "./HamburguerMenu";


const navLinks = [
  { name: "Servicio", link: "#servicio" },
  { name: "Aplicaciones", link: "#aplicaciones" },
  { name: "Quienes somos", link: "#quienes-somos" },
  { name: "Contacto", link: "#contacto" },
];

const Navbar = () => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const handleNavLinkClick = (link: string) => {
    if (link.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si es una ruta normal, redirige usando Next.js Router
      router.push(link);
    }
  };

  const handleMenuClick = () => {
    console.log("holaaaaaaaaaaaaaaaaaaaaaaaa");
    
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-20">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden lg:flex pl-[74px] gap-x-[56px] ">
          {navLinks.map((item, index) => (
            <p
              className="text-[#4a47f3] font-medium"
              key={index}
              onClick={() => handleNavLinkClick(item.link)}
            >
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        {/*         <Link href="/signup" >
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px] " >
          Registrate
        </p>
        </Link> */}
        <div className="flex items-center gap-x-2">
          {/*          <div>
           <Image src={User} alt="User Profile" />
          </div> */}

          {/* <Link href="/Login"> */}
          <Link href="/signup">
            <span className="hidden font-medium text-[#36485C]  lg:flex gap-x-4 flex-row-reverse">
              <div>
                <Image src={User} alt="User Profile" />
              </div>
              <div>Registrate</div>
            </span>
          </Link>
        </div>
        <Image
          src={showMenu ? CloseIcon : Menu} // Muestra la cruz de cierre cuando el menú está abierto
          alt={showMenu ? "Close Menu" : "Menu Button"}
          className="lg:hidden"
          onClick={handleMenuClick}
        />
      {/* </div> */}

      {showMenu && (
        console.log("Valor de showMenuuuuuuu:", showMenu),
       <HamburguerMenu
          showMenu={showMenu}
          handleNavLinkClick={handleNavLinkClick}
          setShowMenu={setShowMenu}
        />
      )}
      </div>
    </nav>
  );
};

export default Navbar;
