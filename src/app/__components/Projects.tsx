import React from "react";
import Image from "next/image";
import DadiIcon from "../__images/368564212_1282616072399735_2020590053490797594_n 1.png";
import NathanIcon from "../__images/368508961_6815521971801423_7869975852443325104_n 2.png";
import LaloydIcon from "../__images/368508961_6815521971801423_7869975852443325104_n 1.png";
import BlurredBG from "../__images/Annotation 2023-08-21 034315 1.png";
import Link from "next/link";
function Projects() {
  const projects = [
    { url: DadiIcon, alt: "Project" },
    { url: NathanIcon, alt: "Project" },
    { url: LaloydIcon, alt: "Project" },
  ];

  return (
    <div className="flex flex-col gap-22 items-center justify-center font-Urbanist text-white w-full relative bottom-52 h-screenxl px-5 bg-cover bg-[url('https://scontent.fmnl7-2.fna.fbcdn.net/v/t1.15752-9/410857247_406502148383546_4785773840904618769_n.png?stp=dst-png_s2048x2048&_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGvNlLULHJqAuwZZZHz3XaPAwxql6AQNFEDDGqXoBA0Ua9cKvIycODI2Q4MV4E0i1ONZmoGfQn4UV-OjfMpBOe4&_nc_ohc=dZ8MiWZaBtYAX_dRCdv&_nc_ht=scontent.fmnl7-2.fna&oh=03_AdRqzODBUz8uyOKUA4aKDuBRv8t4yrNDu97m-mRyl0UqsQ&oe=65C4A55E')]">
      <div className="flex flex-col text-center items-center gap-7">
        <p className="text-6xl font-semibold">See Our Work</p>
        <p className="w-5/12">
          Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum
          diam quam. Scelerisque mus vel egestas justo, purus consequat nibh
          eget. Non risus feugiat porta integer.
        </p>
      </div>
      <div className="flex justify-around w-9/12">
        {projects.map((project, index) => (
          <Image
            key={index}
            src={project.url}
            alt={project.alt}
            className=" mobile-max:max-w-[100px] 1xl:w-[300px] 4xl:[300px]"
          />
        ))}
      </div>
      <div className="">
        <Link
          href="/AllProjects"
          className=" rounded-xl border-2 border-solid border-white py-2 px-3"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}

export default Projects;
