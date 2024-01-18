"use client";

import { HelperText } from "@windmill/react-ui";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VidPlayer = ({ ytID }) => {

  const [flag, setFlag] = useState(false);

  const opt = {
    height: '270',
    width: '480',
  };  

  return (
    <>
      <div className="w-full px-4 pt-4 pb-2 min-h-56 flex items-center mx-auto justify-center ">
        <YouTube
        videoId={ytID}
        onReady={(event) => event.target.pauseVideo()}
        opts={opt}
        onError={()=> setFlag(true)}
        className="flex justify-center rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-700"
        />
      </div>
      { flag ? <HelperText valid={false} className="flex justify-center pt-2 font-medium italic text-danger">*We are sorry, trailer not found!</HelperText> : null }
    </>
  );
};

export default VidPlayer;
