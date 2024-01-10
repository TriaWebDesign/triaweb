import React from "react";

function WhatsTria() {
  return (
    <div className="flex flex-col font-Urbanist relative bottom-100">
      <div className="flex flex-col justify-center items-center text-white gap-20">
        <p className="text-6xl">What's Tria?</p>
        <iframe
          width="860"
          height="615"
          src="https://www.youtube.com/embed/Ilc4i9T0lMg?si=KR3u7N-UdfwOBTf4"
          title="Whats Tria"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
        ></iframe>
      </div>
    </div>
  );
}

export default WhatsTria;
