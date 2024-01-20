import React from "react";

function WhatsTria() {
  return (
    <div className="flex flex-col font-Urbanist relative bottom-100">
      <div className="flex flex-col justify-center items-center text-white gap-20">
        <p className="text-6xl">What's Tria?</p>
        <iframe
          width="860"
          height="615"
          className="1xl:w-[860px] 1xl:h-[615px] mobile-max: w-[100%] mobile-max:h-auto"
          src="https://www.youtube.com/embed/DTCxg8VX41I?si=Fa6Wy54uckw9j6F0"
          title="Whats Tria"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        ></iframe>
      </div>
    </div>
  );
}

export default WhatsTria;
