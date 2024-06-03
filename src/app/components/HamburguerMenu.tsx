'use client';
import React from 'react';
import { useRouter } from "next/navigation";

interface HamburguerMenuProps {
  handleNavLinkClick: (link: string) => void;
  setShowMenu: (show: boolean) => void;
  showMenu: boolean;
}

const HamburguerMenu: React.FC<HamburguerMenuProps> = ({
  showMenu,
  handleNavLinkClick,
  setShowMenu,
}) => {

  console.log("Ejecutando HamburguerMenu...");

  const router = useRouter();

  const handleMenuLinkClick = (link: string) => {
    handleNavLinkClick(link); // Realiza la acción del enlace
    setShowMenu(false); // Cierra el menú después de hacer clic en un enlace
  };

  return (
    <div
      id="hamburguerMenu"
      className={`MOBILE-MENU fixed top-0 left-0 w-full h-full bg-white z-50 ${showMenu ? 'block' : 'hidden'}`}
    >
      <div className="flex items-center justify-end py-4 pr-4">
        <div className="HAMBURGER-ICON" onClick={() => setShowMenu(false)}>
          <span className="block h-0.5 w-8 bg-gray-600 mb-1"></span>
          <span className="block h-0.5 w-8 bg-gray-600 mb-1"></span>
          <span className="block h-0.5 w-8 bg-gray-600"></span>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
      <ul className="text-center">
  <li 
    onClick={() => handleMenuLinkClick("#servicio")} 
    className="text-[#4a47f3] font-medium cursor-pointer text-lg mb-4 hover:text-[#36485C] transition duration-300"
  >
    Servicio
  </li>
  <li 
    onClick={() => handleMenuLinkClick("#aplicaciones")} 
    className="text-[#4a47f3] font-medium cursor-pointer text-lg mb-4 hover:text-[#36485C] transition duration-300"
  >
    Aplicaciones
  </li>
  <li 
    onClick={() => handleMenuLinkClick("#quienes-somos")} 
    className="text-[#4a47f3] font-medium cursor-pointer text-lg mb-4 hover:text-[#36485C] transition duration-300"
  >
    Quienes somos
  </li>
  <li 
    onClick={() => handleMenuLinkClick("#contacto")} 
    className="text-[#4a47f3] font-medium cursor-pointer text-lg mb-4 hover:text-[#36485C] transition duration-300"
  >
    Contacto
  </li>
</ul>
      </div>
    </div>
  );
};

export default HamburguerMenu;