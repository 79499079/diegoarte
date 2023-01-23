import Image from "next/image";
import React from "react";

export default function InicioVideo() {
  return (
    <div>
      <video loop autoPlay muted className="absolute">
        <source
          src="https://res.cloudinary.com/zhamat-tecnologia/video/upload/v1674424596/Zhm_Distribuidores/Pexels_Videos_2512876_rt2rkx.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute flex mt-[22%] ml-[11%] font-bold text-yellow-700 text-xl">
        <div>Hola</div>
      </div>
      <div className="absolute w-32 ml-[30%] mt-[38%] md:w-32 md:mt-[3%] md:ml-[45%] lg:w-36">
        <img
          src="https://res.cloudinary.com/dt1t9p91q/image/upload/v1673837706/img_pagina/Logo_heliopolis_p6xejs.png"
          alt="logo"
        />
      </div>
    </div>
  );
}
