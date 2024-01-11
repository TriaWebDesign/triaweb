import Link from "next/link";
import React from "react";
import TriaText from "../__images/Frame 22.png";
import Motto from "../__images/Frame 23.png";

import Image from "next/image";
function Hero() {
  return (
    <div className="flex flex-wrap relative -z-0 bottom-20 font-Urbanist text-white p-20 bg-[url('https://scontent.fcgy2-2.fna.fbcdn.net/v/t1.15752-9/413386161_1576365379803955_1660606470693317641_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEKQtv-VHW_G8bnzB1dUsOrIFvF1bLkwfUgW8XVsuTB9cPbhHdqnEIMNs1_f7gkW21s3uy65SRyFxL2d2dypP53&_nc_ohc=tp58xMIhARsAX-iF7jo&_nc_ht=scontent.fcgy2-2.fna&oh=03_AdROJryMMSiVBne2h-cdoSdaLakHurPKYycCOYWPpUFNPA&oe=65C46499')] bg-contain w-full h-screenxl">
      <div className="w-6/12 flex  items-center ">
        <Image
          className="mt-24 ml-24"
          src={TriaText}
          alt="heroText"
          height={280}
        />
      </div>
      <div className="w-6/12 flex justify-end  ">
        <Image className="mt-28" src={Motto} alt="heroText" width={435} />
      </div>
      <div className="flex text-[#6BA2D3] relative text-base text-center w-full items-center justify-center">
        <p>D E S I G N {"_"} S T U D I O</p>
      </div>
      <div className="flex w-full text-xs1 relative bottom-10 justify-center">
        <div className="flex justify-around w-2/12">
          <p>UI/UX</p>
          <p>LANDING PAGES</p>
          <p>PORTFOLIO</p>
        </div>
      </div>
      <div className="flex text-white relative bottom-40 w-full items-center justify-center">
        <Link
          href="#"
          className="bg-[#0B0B0B] rounded-xl w-40 h-7 text-center border border-solid border-white"
        >
          Hire Us
        </Link>
      </div>
    </div>
  );
}

export default Hero;
