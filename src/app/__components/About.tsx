import Image from "next/image";
import React from "react";

import DixIcon from "../__images/Rectangle 8.png";
import Link from "next/link";

function About() {
  return (
    <div className="flex flex-col justify-center items-center text-white font-Urbanist w-full relative ">
      <div className="flex w-full items-center justify-around">
        <div className="flex justify-center w-49% p-10">
          <p className="w-8/12 text-left  text-3xl">
            We're a lean creative team that uses{" "}
            <span className="text-[#FACC07]">design</span> and{" "}
            <span className="text-[#6BA2D3]">code</span> to create.
          </p>
        </div>

        <div className=" h-36 w-0.5 bg-[#E2E2E2]"></div>
        <div className="w-49% px-20 py-8 ">
          <p className=" w-86% text-left  text-sm">
            Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt
            nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo,
            adipiscing augue. Est, in in pretium at libero morbi. Euismod
            viverra arcu nisi eu sit.
            <br></br>
            <span>
              Praesent diam non imperdiet imperdiet potenti tristique et. Amet
              nec.
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-around w-9/12 border-b-2 border-white p-20">
        <div className="flex justify-end items-center w-5/12">
          <Image src={DixIcon} alt="DexIcon" height={380} />
        </div>
        <div className="flex flex-col gap-7 p-10 justify-center w-55%">
          <p className="text-3xl w-8/12 font-semibold">
            Designed and built by an astonishing creative team.
          </p>
          <p className="text-sm w-11/12%">
            Et eleifend consectetur tellus consectetur nibh non urna lobortis.
            Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et
            leo. Varius praesent tinc.
          </p>
          <div className="">
            <Link
              href="#"
              className="border border-[##6BA2D3] border-solid px-9 py-2 rounded-lg"
            >
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
