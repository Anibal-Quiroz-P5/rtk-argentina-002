'use client'
import React from "react";
import Image from "next/image";
import Feature1 from "../../../public/assets/feature-1.svg";
import Feature2 from "../../../public/assets/feature-2.svg";
import Feature3 from "../../../public/assets/feature-3.svg";
import Check from "../../../public/assets/check.svg"
import bluebutton from "../../../public/assets/blue-button.svg"

import drone from "../../../public/assets/drone1.jpg";
import agrimensora from "../../../public/assets/agrimensores1.jpg";
import agricolas from "../../../public/assets/agricolas.webp";


const Features = () => {
  return (
    <div id="aplicaciones" className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        {/* <Image src={Feature1} alt="Feature 1 image" className="hidden w-1/2 sm:block"/> */}
        <Image src={agrimensora} alt="Feature 1 image" className="hidden w-1/2 sm:block"/>
        <div className="sm:w-1/2 lg:py-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]"> {/* Sales Monitoring */} Mediciones</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            {/* Simplify your sales monitoring */}
            Tareas de agrimensura
          </h1>
            {/* <Image src={Feature1} alt="feature 1 image" className="pt-[24px] sm:hidden"/> */}
            <Image src={agrimensora} alt="feature 1 image" className="pt-[24px] sm:hidden"/>
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a birds eye view with our customizable
              dashboard.
            </p>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
            </ul>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
              {/* Learn More */}  Mas información <span><Image src={bluebutton} alt="Learn more" /></span>
            </p>

            {/* <Image src={Feature2} alt="feature 2 image"/>
            <Image src={Feature3} alt="feature 3 image"/> */}
          </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        {/* <Image src={Feature1} alt="Feature 1 image" className="hidden w-1/2 sm:block"/> */}
        <Image src={agricolas} alt="Feature 1 image" className="hidden w-1/2 sm:block"/>
        <div className="sm:w-1/2 lg:py-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]"> {/* Sales Monitoring */} Agricultura</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            {/* Simplify your sales monitoring */}
            Máquinas agrícolas 
          </h1>
            {/* <Image src={Feature1} alt="feature 1 image" className="pt-[24px] sm:hidden"/> */}
            <Image src={agricolas} alt="feature 1 image" className="pt-[24px] sm:hidden"/>
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a birds eye view with our customizable
              dashboard.
            </p>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
            </ul>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
              {/* Learn More */}  Mas información  <span><Image src={bluebutton} alt="Learn more" /></span>
            </p>

            {/* <Image src={Feature2} alt="feature 2 image"/>
            <Image src={Feature3} alt="feature 3 image"/> */}
          </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        {/* <Image src={Feature1} alt="Feature 1 image" className="hidden w-1/2 sm:block"/> */}
        <Image src={drone} alt="Feature 1 image" className="hidden w-1/2 sm:block"/>
        <div className="sm:w-1/2 lg:py-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px]"> {/* Sales Monitoring */} Aterrizajes precisos</h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            {/* Simplify your sales monitoring */}
            Aterrizaje de drones
          </h1>
            {/* <Image src={Feature1} alt="feature 1 image" className="pt-[24px] sm:hidden"/> */}
            <Image src={drone} alt="feature 1 image" className="pt-[24px] sm:hidden"/>
            <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
              game-changing feature. Get a birds eye view with our customizable
              dashboard.
            </p>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="Checkmark" />
                </span>
                Lorem ipsum dolor sit amet 
              </li>
            </ul>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
              {/* Learn More */}  Mas información  <span><Image src={bluebutton} alt="Learn more" /></span>
            </p>

            {/* <Image src={Feature2} alt="feature 2 image"/>
            <Image src={Feature3} alt="feature 3 image"/> */}
          </div>
      </div>


    </div>
  );
};
export default Features;
