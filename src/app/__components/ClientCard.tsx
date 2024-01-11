import React from "react";
import Image from "next/image";
import Star from "../__images/Group 66.png";
import ArrowLeft from "../__images/VectorLeft.png";
import ArrowRight from "../__images/VectorRight.png";
import KeymarIcon from "../__images/Rectangle 45.png";
import BlurredBG from "../__images/Rectangle 145.png";
function ClientCard() {
  return (
    <div className=" text-white 1xl:w-full px-8 py-12 bg-contain bg-no-repeat font-Urbanist bg-[url('https://scontent.fdvo1-1.fna.fbcdn.net/v/t1.15752-9/410919042_405222448521416_4623666915804519756_n.png?_nc_cat=109&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeED9NSbOkQpyckzQcwdjGjeT4Q5zpEZ1AxPhDnOkRnUDKgZUzCE-u_eHmw6s5LuunQjNGDi11oUkfimtY4feCLU&_nc_ohc=f82aUxs6byQAX_7mGZW&_nc_ht=scontent.fdvo1-1.fna&oh=03_AdSGOJF4eXVdPncXrcjEd-Yhp1br1Pkt_AZ-GYETO9VJ_Q&oe=65C4BE3E')]">
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
            <Image src={ArrowLeft} alt="arrow left" height={15} />
            <Image src={ArrowRight} alt="arow right" height={15} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientCard;
