import Image from "next/image";
import  Navbar  from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Faq from "./components/Faq"; 
/* import { Footer } from "flowbite-react"; */
import { Footer } from "./components/Footer";
/* import Correo from "./components/Correo"; */
import CorreoContact from "./components/CorreoContact"; 
import AboutUs from "./components/AboutUs";

import Link from "next/link";
import HamburguerMenu from "./components/HamburguerMenu";



export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
        <div className="px-[20px] lg:container lg:px-20 mx-auto">
      <Features />
      <AboutUs />
      <Faq />
      <CorreoContact />
      {/* <HamburguerMenu /> */}
      <Footer />
    </div>
   </>
  );
}
