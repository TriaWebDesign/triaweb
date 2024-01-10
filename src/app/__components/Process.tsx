import Image from "next/image";
import React from "react";

import Laloyd from "../__images/Rectangle 6.png";
import DiscoveryIcon from "../__images/Group 62.png";
import PlanIcon from "../__images/Group 63.png";
import ExecuteIcon from "../__images/Group 64.png";
import DeliverIcon from "../__images/Group 65.png";
function Process() {
  return (
    <div className="flex flex-col gap-24 font-Urbanist z-10 w-full text-white  relative bottom-64">
      <div className="w-full flex flex-col items-center justify-center text-center gap-7">
        <p className="text-white text-6xl font-semibold">Our Process</p>
        <p className="text-white w-4/12">
          Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada.
          Tristique est tellus non maecenas in egestas aliquam. Eget dolor
          pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
        </p>
      </div>
      <div className="flex justify-around items-center w-full h-screen ">
        <div className="flex w-6/12 justify-center items-center">
          <Image src={Laloyd} alt="" height={600} />
        </div>
        <div className="flex flex-col gap-8  w-6/12">
          <div className="flex gap-3">
            <div className="">
              <Image src={DiscoveryIcon} alt="discovery icon" height={100} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold ">Discovery</p>
              <p className="text-left text-sm w-10/12">
                Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut
                nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam.
                Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="">
              <Image src={PlanIcon} alt="plan icon" height={140} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Plan</p>
              <p className="text-left text-sm w-10/12">
                Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat
                cras tempus vitae. Ipsum consectetur quis diam hendrerit
                pharetra amet scelerisque. Elementum risus aliquam quam etiam.
                Eget eu risus dui lacus, orci. Cras ultricies posuere adipiscing
                faucibu.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <Image src={ExecuteIcon} alt="execute icon" height={100} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Execute</p>
              <p className="text-left text-sm w-10/12">
                Congue ridiculus at tortor mattis turpis bibendum at pulvinar
                viverra. Ultrices morbi amet quam nisl risus libero, sodales
                nibh faucibus. Sed gravida elementum auctor fermentum id sem
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="">
              <Image src={DeliverIcon} alt="deliver icon" height={150} />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Deliver</p>
              <p className="text-left text-sm w-10/12">
                Pellentesque id pharetra, semper neque purus. Ante lacinia in ut
                sagittis sed sapien. In facilisi in a diam. Pellentesque arcu
                faucibus vel ornare pulvinar sollicitudin eu. Tempus nisi
                malesuada convallis velit viverra odio. Senectus consectetur
                fames in sed velit, ornare. Sed arcu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
