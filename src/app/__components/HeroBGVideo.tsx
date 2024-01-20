import React from "react";

function BGVideo() {
  return (
    <div className="absolute mobile-max:top-0 mobile-max:left-0 4xl:top-5 4xl:right-0 1xl:left-0 1xl:top-0">
      <video
        className="1xl:h-screenxl 4xl:h-screenxl  w-full "
        src={require("../__videos/TRIA.mp4")}
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default BGVideo;
