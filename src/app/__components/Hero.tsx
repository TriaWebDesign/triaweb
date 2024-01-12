import Link from "next/link";
import React from "react";
import TriaText from "../__images/Frame 22.png";
import Motto from "../__images/Frame 23.png";

import Image from "next/image";
import BGVideo from "./HeroBGVideo";
function Hero() {
  return (
    <div className="flex flex-wrap relative bottom-20 font-Urbanist text-white p-20  w-full h-screenxl 4xl:102 1xl:100">
      <BGVideo />
      <div className="absolute 1xl:left-0 1xl:top-0 h-screenxl 4xl:top-5 4xl:right-0 w-full bg-gradient-to-t from-black via-[#00000000] to-[#00000000"></div>
      <div className="w-6/12 flex  items-center ">
        <Image
          className="relative 4xl:top-40 4xl:left-40 4xl:h-96 4xl:w-96 1xl:w-64 1xl:top-24 1xl:left-28 "
          src={TriaText}
          alt="heroText"
        />
      </div>
      <div className="w-6/12 flex justify-end  ">
        <Image
          className="relative 4xl:top-44 4xl:right-16 h-auto 4xl:w-8/12 1xl:w-98 1xl:top-28 1xl:right-5"
          src={Motto}
          alt="heroText"
        />
      </div>
      <div className="flex text-[#6BA2D3] relative 4xl:bottom-0 1xl:bottom-4 text-base text-center w-full items-center justify-center">
        <p>D E S I G N {"_"} S T U D I O</p>
      </div>
      <div className="flex w-full text-xs1 relative 4xl:bottom-10 1xl:bottom-8 justify-center">
        <div className="flex justify-around 4xl:w-2/12 1xl:w-3/12">
          <p>UI/UX</p>
          <p>WEB DEVELOPMENT</p>
          <p>LANDING PAGES</p>
          <p>PORTFOLIO</p>
        </div>
      </div>
      <div className="flex text-white relative z-30 4xl:bottom-36 1xl:bottom-20 w-full items-center justify-center">
        <Link
          href="youtube.com"
          className="flex items-center justify-center bg-[#0B0B0B] 1xl:rounded-xl 4xl:rounded-3xl 1xl:w-40 1xl:h-7 4xl:w-64 4xl:text-2xl 4xl:h-12 text-center border border-solid border-white shadow hover:shadow-tinn hover:cursor-pointer"
        >
          Hire Us
        </Link>
      </div>
    </div>
  );
}

export default Hero;
