import React from "react";
import Image from "next/image";
import Star from "../__images/Group 66.png";
import KeymarIcon from "../__images/Rectangle 45.png";
import BlurredBG from "../__images/Rectangle 145.png";
import arrowR from '../__images/Arrow-Icon.png'
import arrowL from '../__images/Arrow-Icon1.png'

function ClientCard() {
  return (
    <div className=" text-white w-10/12 px-8 py-12 bg-contain bg-no-repeat font-Urbanist bg-[#FFFFFF08] rounded-3xl">
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-10">
          <p className="text-3xl semi-backend w-8/12 capitalize">
            Meet Client Satisfaction after working with us
          </p>
          <div className="flex flex-col gap-2">
            <p>Mga burikat ang ga trabaho</p>
            <Image src={Star} alt="Star" height={15} />
            <p className="text-sm w-10/12">
              Ultricies amet vulputate nulla in elit elit orci vitae tortor.
              Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi
              sapien aliquet augue. Nulla nulla integer pellentesque neque cum
              amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt
              blandi.
            </p>
          </div>
        </div>
        <div className="flex justify-between w-10/12">
          <div className="flex gap-5 text-xs items-center">
            <Image src={KeymarIcon} alt="Client PFP" height={50} />
            <div className="flex flex-col gap-3">
              <p>Jack Cole</p>
              <p>Cloudexter</p>
            </div>
          </div>
          <div className="flex w-4/12 justify-between">
            <div className="bg-[#C4C4C44D] rounded-full p-4">
              <Image src={arrowL} alt="arrow left" height={25} width={25} />
            </div>
            <div className="bg-[#C4C4C44D] rounded-full p-4">
              <Image src={arrowR} alt="arow right" height={25} width={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
