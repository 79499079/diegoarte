import Image from "next/image";
import React from "react";

export default function Navegacion() {
  return (
    <header className="relative bg-gradient-to-b from-black to-gray-500">
      <nav className="columns-2">
        <div className="w-28 md:w-56">
          <Image
            src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674436209/Zhm_Distribuidores/Logo_Diego_wi1p7e.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="columns-2">
          <div>Hola</div>
          <div>Hola</div>
        </div>
      </nav>
    </header>
  );
}
