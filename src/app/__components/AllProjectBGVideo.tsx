import React from "react";

function AllProjectBGVideo() {
  return (
    <div className="absolute top-2 left-0">
      <video
        className=""
        src={require("../__videos/image5.mp4")}
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default AllProjectBGVideo;
