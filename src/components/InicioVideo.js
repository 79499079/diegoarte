import Image from "next/image";
import React from "react";

export default function InicioVideo() {
  return (
    <>
      <video loop autoPlay muted className="absolute">
        <source
          src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1674419782/Zhm_Distribuidores/Pexels_Videos_3524_dmq78r.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
