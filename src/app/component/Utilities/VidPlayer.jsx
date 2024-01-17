"use client";

import React from "react";
import YouTube from "react-youtube";

const VidPlayer = (ytID) => {
  const opt = {
    widht: "300",
    height: "200",
  };

  return (
    <>
      <div>
        <YouTube
        videoId={ytID}
        onReady={(event) => event.target.pauseVideo()}
        opts={opt}
        />
      </div>
    </>
  );
};

export default VidPlayer;
