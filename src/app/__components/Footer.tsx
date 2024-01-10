import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-b from-black to-#153049">
      <div className="flex-col justify-center items-center text-center w-full">
        <p className="w-full">TRIA</p>
        <div className="flex justify-center items-center">
          <Link href="/about">Works</Link>
          <Link href="#">Services</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">Careers</Link>
        </div>
        <div className="flex flex-row justify-center">
          <Link href="#">
            <Image src="" alt="instagram" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src="" alt="Services" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src="" alt="LinkedIn" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src="" alt="Twitter" height={50} width={50} />
          </Link>
          <Link href="#">
            <Image src="" alt="Youtube" height={50} width={50} />
          </Link>
        </div>
        <div className="">
          <p>Copyright 2021</p>
          <button>Terms & and Condition</button>
          <button>Privacy</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
