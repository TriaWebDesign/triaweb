import React from "react";
import Image from "next/image";

import ServicesCircle from "../__images/Frame 24.png";
import WebdevIcon from "../__images/Group 58.png";
import WebdesignIcon from "../__images/Group 59.png";
import GraphicDesignIcon from "../__images/Group 60.png";
import DigitalMarketingIcon from "../__images/Group 61.png";

function Services() {
  return (
    <div className="flex flex-col z-10 w-full justify-center items-center p-32 text-white font-Urbanist overflow-auto  bg-cover bg-top bg-no-repeat bg-[url('https://scontent.xx.fbcdn.net/v/t1.15752-9/418025023_912223373895316_6882642441593892234_n.png?_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_eui2=AeFMyIrbA6dh3qAeSagRSwjT143Y2AyhVaLXjdjYDKFVorxz3pzVlYh9aESNiDtQOx857Y9CSTazoU4_0U8S2ZN3&_nc_ohc=xjbLLHXo-IcAX-3WPWF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSmAENqFs99zvuDWg4-3WeMNKTvl1dvkzBPwbmxgZDwZA&oe=65C48933')] relative 1xl:bottom-100 4xl:bottom-102">
      <div className="h-screenxs"></div>
      <div className="flex flex-col items-center gap-10 justify-center h-screen w-full z-40">
        <div className="flex flex-col items-center gap-10 text-center w-full">
          <p className="text-3xl">
            Services that lead the way to better business
          </p>
          <p className="text-sm w-8/12 ">
            Faucibus fringilla sed integer cursus tellus et, quis ultricies.
            Aliquam, faucibus arcu in laoreet ac elementum in eget. Massa urna
            viverra vulputate euismod pulvinar nibh in vel. Laoreet blandit
            etiam orci est in vel lacus neque pretium.
          </p>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-row justify-center gap-10 flex-wrap 4xl:w-5/12 1xl:w-9/12">
            <div className="flex flex-col text-center items-center">
              <Image className="pb-2" src={WebdevIcon} alt="" height={100} />
              <p className="text-[#6BA2D3]">Website Development</p>
              <p className="w-80 text-sm font-thin">
                Justo, amet nisl velit quam. Turpis nulla morbi vestibulum morbi
                cum et.{" "}
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <Image className="pb-2" src={WebdesignIcon} alt="" height={100} />
              <p className="text-[#6BA2D3]">Website Designing</p>
              <p className="w-80 text-sm font-thin">
                Eu aliquam libero vehicula posuere. Orci viverra id pharetra
                adipiscing. Convallis.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <Image
                className="pb-2"
                src={GraphicDesignIcon}
                alt=""
                height={100}
              />
              <p className="text-[#6BA2D3]">Graphic Designing</p>
              <p className="w-80 text-sm font-thin">
                Aliquam ut sapien viverra blandit nisi. Nam fames suscipit erat
                sed id. Risus.
              </p>
            </div>
            <div className="flex flex-col text-center items-center">
              <Image
                className="pb-2"
                src={DigitalMarketingIcon}
                alt=""
                height={100}
              />
              <p className="text-[#6BA2D3]">Digital Marketing</p>
              <p className="w-80 text-sm font-thin">
                Pulvinar amet ac potenti quam feugiat praesent maecenas. Platea
                id egestas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screenxs1"></div>
    </div>
  );
}

export default Services;
