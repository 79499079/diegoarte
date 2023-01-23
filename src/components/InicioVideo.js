import Image from "next/image";
import React from "react";

export default function InicioVideo() {
  return (
    <>
      <div className="w-full">
        <video loop autoPlay muted>
          <source
            src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1674424596/Zhm_Distribuidores/Pexels_Videos_2512876_rt2rkx.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}
