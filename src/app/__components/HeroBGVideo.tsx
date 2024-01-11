import React from "react";

function BGVideo() {
  return (
    <div className="absolute 4xl:top-5 4xl:right-0">
      <video
        className="h-screenxl w-full "
        src={require("../__videos/TRIA.mp4")}
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default BGVideo;
