import React from "react";
import Star from "../__images/Group 66.png";
import ClientsIcon from "../__images/Group 67.png";
import Image from "next/image";
import ClientCard from "./ClientCard";
function Clients() {
  return (
    <div className="flex w-full h-screenxl items-start justify-center relative mt-22 bg-[url('https://scontent.fdvo1-2.fna.fbcdn.net/v/t1.15752-9/410964366_294667223138659_1905826809440103114_n.png?stp=dst-png_s2048x2048&_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEf7-WxjCNtFuNx6nm3xL0jtt7WzE1tWLu23tbMTW1Yu4QHta1exKjDKpO-cuwwTp39h552pIBwkMYeoZ_rB1pA&_nc_ohc=LMoaO_Ff3hcAX9SCWkL&_nc_oc=AQl7ApgUjn3hbeRmi0TfZ_JbU_baL2SjAoPz21BSRrTJCJStTneZ4iuqtV2FOtiz6Mo&_nc_ht=scontent.fdvo1-2.fna&oh=03_AdSwJY-cEhuR5wD_r5_g5NmTmx212u82qmj2PloBixH_ow&oe=65C48845')] bg-cover bg-no-repeat">
      <div className="flex justify-center h-6/12 w-6/12">
        <Image src={ClientsIcon} alt="clients" width={550} height={350} />{" "}
      </div>
      <div className="w-6/12">
        <ClientCard />
      </div>
    </div>
  );
}

export default Clients;
