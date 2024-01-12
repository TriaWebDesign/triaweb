import React from "react";
import AmedaLogo from "../__images/AMEDA LOGO 2.png";
import RectaBot from "../__images/Frame 25.png";
import Recta from "../__images/Frame 26.png";
import Image from "next/image";
function OurPartners() {
  return (
    <div className="flex flex-col gap-64 items-center font-Urbarnist text-white w-full h-screen ">
      <div className="absolute h-screen1xl w-full bg-top bg-gradient-radial from-[#262626] to-[#00000000] rounded-full shadow-md blur-2xl">
        <div className="absolute inset-0 w-full h-full bg-black opacity-25 rounded-full"></div>
      </div>
      <div className="absolute h-screen w-full">
        <Image src={Recta} alt="recta" objectFit="fill" layout="cover" />
      </div>
      <div className="absolute h-screen2xl w-full bg-gradient-to-t from-black via-[#00000000] to-[#00000000]  text-white"></div>
      <div className="flex flex-col justify-center items-center text-center w-full gap-2 z-10">
        <p className="text-6xl w-full font-medium">Our Partners</p>
        <p className="text-xs w-5/12">
          Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum
          diam quam. Scelerisque mus vel egestas justo, purus consequat nibh
          eget. Non risus feugiat porta integer.
        </p>
      </div>
      <div className="flex flex-col w-6/12 text-center z-10 gap-10">
        <div className="">
          <Image src={AmedaLogo} alt="ameda logo" />
        </div>
        <p className="text-[#ffffffb7]">
          <span className="text-white">Ameda Visuals</span> is a dynamic
          creative studio that breathes life into digital art. Our passion lies
          in transforming ideas and concepts into visually stunning experiences.
          Through a seamless blend of{" "}
          <span className="text-white">
            Graphic designs, 3D animations, Motion graphics, Visual effects, and
            more
          </span>
          , we redefine visual storytelling.
        </p>
      </div>
      <div className=""></div>
    </div>
  );
}

export default OurPartners;
