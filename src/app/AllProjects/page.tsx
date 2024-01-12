import Image from "next/image";
import React from "react";
import Shapes from "../__images/Frame 27.png";
import AllProjectBGVideo from "../__components/AllProjectBGVideo";
import Vector1 from "../__images/Vector.png";
import Vector from "../__images/Vector-1.png";
import Neatlist from "../__images/neatlist.png";
import Group2372 from "../__images/Group 2372.png";
import Group2377 from "../__images/Group 2377.png";
function page() {
  return (
    <div className="w-full font-Urbanist ">
      <div className=" w-full flex flex-col justify-center items-center  text-white text-center h-screenxss">
        <AllProjectBGVideo />

        <p className="text-5xl font-semibold ">/*Video Animation*/</p>
      </div>
      <div className="flex flex-col justify-between items-center w-full z-auto  bg-white h-screen relative ">
        <div className="flex bg-white rounded-[45px] w-8/12 shadow-all relative bottom-[33%] p-10">
          <div className="flex flex-col w-5/12 h-10/12 gap-5">
            <p className="text-5xl font-semibold h-20">Neat List</p>
            <p className="w-10/12">
              Neatlist represents a comprehensive full-stack project developed
              as part of our final examination requirements. It secured the top
              position among the 16 students who successfully completed the
              project. Demonstrating a transition from intricate back-end
              functionalities to an elegant front-end design, the project was
              crafted by Nathaniel A. Lucero.
              <br></br>
              <span className="font-semibold">At your Service.</span>
            </p>
            <div className="flex items-center text-xs gap-2">
              <Image src={Vector} alt="asd" height={25} />
              <p>
                Commissioned on:<br></br> 1/21/2021
              </p>
              <Image src={Vector1} alt="asd" height={25} />
              <p>
                Completed on: <br></br>2/21/2021
              </p>
            </div>
          </div>
          <div className="flex items-center w/7/12">
            <Image className="w-[550px]" src={Neatlist} alt="SS" />
          </div>
        </div>
      </div>
      {/* */}
      <div className="flex flex-col  items-center w-full z-auto  bg-white h-screen relative ">
        <div className="flex bg-white rounded-[45px] w-8/12  shadow-all relative bottom-[33%] p-5">
          <div className="flex items-center w-full">
            <Image className="w-[100%]" src={Group2372} alt="SS" />
          </div>

          <div className="flex items-center text-xs1 gap-2 relative top-[35%] right-[22%]">
            <Image src={Vector} alt="asd" height={25} />
            <p>
              Commissioned on:<br></br> 1/21/2021
            </p>
            <Image src={Vector1} alt="asd" height={25} />
            <p>
              Completed on: <br></br>2/21/2021
            </p>
          </div>

          <div className="flex flex-col w-5/12 h-10/12 gap-5 relative">
            <p className="text-5xl font-semibold h-20">Neat List</p>
            <p className="w-full">
              Neatlist represents a comprehensive full-stack project developed
              as part of our final examination requirements. It secured the top
              position among the 16 students who successfully completed the
              project. Demonstrating a transition from intricate back-end
              functionalities to an elegant front-end design.
              <br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center w-full z-auto  bg-white h-screen relative ">
        <div className="flex flex-row bg-white rounded-[45px] w-8/12  shadow-all relative bottom-[33%] p-10">
          <div className="flex w-5/12 h-10/12 items-center gap-5 relative">
            <div className="flex items-center w-10/12 h-auto relative">
              <Image className=" w-[full] " src={Group2377} alt="SS" />
            </div>
            <div className="flex items-center text-xs gap-2 relative">
              <Image src={Vector} alt="asd" height={25} />
              <p>
                Commissioned on:<br></br> 1/21/2021
              </p>
              <Image src={Vector1} alt="asd" height={25} />
              <p>
                Completed on: <br></br>2/21/2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
