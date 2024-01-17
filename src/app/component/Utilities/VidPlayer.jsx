"use client";

import React from "react";
import YouTube from "react-youtube";

const VidPlayer = ({ ytID }) => {
  const opt = {
    height: '270',
    width: '480',
  };  

  return (
    <>
      <div className="w-full p-4 min-h-56 flex items-center mx-auto justify-center ">
        <YouTube
        videoId={ytID}
        onReady={(event) => event.target.pauseVideo()}
        opts={opt}
        onError={()=> alert("Trailer video not found :\")")}
        className="flex justify-center rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-700"
        />
      </div>
    </>
  );
};

export default VidPlayer;
