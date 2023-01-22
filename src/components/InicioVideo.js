import Image from "next/image";
import React from "react";

export default function InicioVideo() {
  return (
    <>
      <video loop autoPlay muted className="absolute">
        <source
          src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1674423462/Zhm_Distribuidores/video_2_mkj90b.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
