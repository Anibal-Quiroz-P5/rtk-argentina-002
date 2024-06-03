"use client";

import React from "react";
import Arrow from "../../../public/assets/Arrow.svg";
import Image from "next/image";
import Gradient from "../../../public/assets/Gradient.svg";
import HeroImage from "../../public/assets/Image.svg";

import Google from "../../../public/assets/Google.svg";
import Slack from "../../../public/assets/Slack.svg";
import Trustpilot from "../../../public/assets/Trustpilot.svg";
import Cnn from "../../../public/assets/CNN.svg";
import Clutch from "../../../public/assets/Clutch.svg";
import Tablero from "../../../public/assets/Tablero.png";
import carousela from "../../public/assets/carousel-1.svg";

import carousel1 from "../../../public/assets/carousel-1.svg";
import carousel2 from "../../../public/assets/drone1.jpg";
import carousel3 from "../../../public/assets/agrimensores1.jpg";
import carousel4 from "../../../public/assets/agricolas.webp";
import carousel5 from "../../../public/assets/drone2.jpg";
import carousel6 from "../../../public/assets/circulo.jpg";

import { Carousel } from "flowbite-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="servicio" className="pt-4 lg:pt-10 2xl">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          {/* Start monitoring your website like a pro */}
          Máxima precisión en tu posicionamiento con RTK-Argentina!
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          {/* Get a bird's eye view with our customizable dashboard. Stay on top of
          things! Revamp your work process with our game-changing feature. Boost
          productivity and efficiency! */}
          Con nuestro servicio de entrega de mensajes de corrección RTK 
          con RTCM a través de internet, vas a tener tu posicionamiento
          con un error menor a 5 centímetros.
        </p>

         {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pt-6"> */}
        <Carousel className="h-56  2xl:h-[800px]">
          <Image src={Tablero} alt="..." />
          <Image src={carousel2} alt="..." />
          <Image src={carousel3} alt="..." />
          <Image src={carousel4} alt="..." />
          <Image src={carousel5} alt="..." />
          <Image src={carousel6} alt="..." />
        </Carousel>
      {/* </div> */}

        <div className="flex w-full pt-8 justify-center gap-x-6">
          <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
          <Link href="/signup">
           <span className=" font-medium text-white lg:block">
           RTK gratis 
          </span>
          </Link>
            
          </button>
          <button className="w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
            Ver precios.
            <span>
              <Image src={Arrow} alt="Learn more" />
            </span>
          </button>
        </div>
      </div>

{/*       <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 pt-6">
        <Carousel className="2xl:h-[800px]">
          <Image src={Tablero} alt="..." />
          <Image src={carousel2} alt="..." />
          <Image src={carousel3} alt="..." />
          <Image src={carousel4} alt="..." />
          <Image src={carousel5} alt="..." />
          <Image src={carousel6} alt="..." />
        </Carousel>
      </div> */}

      <div className="relative flex h-full w-full justify-center">
        <Image
          src={Gradient}
          alt="Gradient"
          className="min-h-[500px] w-full object-cover lg:h-auto"
        />

        <div className="absolute bottom-5 flex w-full flex-col items-center">
         {/*  <Image src={HeroImage} alt="Hero image" className="-ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-auto xl:w-[70%]" /> */}
          



          <div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
            <p className="text-[#FFFFFF] text-center lg:text-[18px]">
              Avalados por las siguientes empresas {/* Trusted by these companies */}
            </p>
            <div className="grid grid-cols-3 items-center justify-center justify-items-center px-[20px] align-middle lg:grid-cols-5">
              <Image src={Google} alt=""/>
              <Image src={Slack} alt=""/>
              <Image src={Trustpilot} alt=""/>
              <Image src={Cnn} alt=""/>
              <Image src={Clutch} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;