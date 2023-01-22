import Image from "next/image";
import React from "react";

export default function InicioVideo() {
  return (
    <>
      <video loop autoPlay muted className="absolute">
        <source
          src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1674424596/Zhm_Distribuidores/Pexels_Videos_2512876_rt2rkx.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
