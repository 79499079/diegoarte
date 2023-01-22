import React from "react";

export default function Video() {
  return (
    <>
      <video loop autoPlay muted className="absolute">
        <source
          src="https://res.cloudinary.com/helioplois/video/upload/v1674348647/Imag_Pagina/video_1_mjdmzr.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <div className="relative mx-auto w-46">
          <img
            src="https://res.cloudinary.com/helioplois/image/upload/v1674355826/Imag_Pagina/Productos/Logo_Diego_zpkl6z.png"
            alt="logo"
            className="pt-4"
          />
        </div>
      </div>
    </>
  );
}
