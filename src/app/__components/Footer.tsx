import Image from "next/image";
import Link from "next/link";
import React from "react";
import InstagramIcon from "../__images/Group 68.png";
import FacebookIcon from "../__images/Group 69.png";
import LinkedInIcon from "../__images/Group 70.png";
import TwitterIcon from "../__images/Group 71.png";
import YoutubeIcon from "../__images/Group 72.png";
function Footer() {
  return (
    <div className="flex flex-col w-full z-40 text-sm text-white font-Urbanist bg-gradient-to-b from-black to-[#153049] ">
      <div className="flex flex-col gap-10 justify-center items-center text-center w-full p-20">
        <p className="w-full font-Michroma text-3xl">TRIA</p>
        <div className="flex justify-around items-center w-4/12">
          <Link href="/about">Works</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Careers</Link>
        </div>
        <div className="flex flex-row justify-around w-4/12 ">
          <Link href="#">
            <Image src={InstagramIcon} alt="instagram" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src={FacebookIcon} alt="facebook" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src={LinkedInIcon} alt="LinkedIn" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src={TwitterIcon} alt="Twitter" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src={YoutubeIcon} alt="Youtube" height={50} width={50} />
          </Link>
        </div>
        <div className="flex text-white opacity-50 w-5/12 justify-around text-xs">
          <p>© Copyright 2023, All Rights Reserved.</p>
          <div className="flex gap-3 ">
            <button>Terms & and Condition</button>
            <button>Privacy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
