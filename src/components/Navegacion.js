import Image from "next/image";
import React from "react";

export default function Navegacion() {
  return (
    <header className="bg-gradient-to-r from-black to-gray-400">
      <nav className="columns-2">
        <Image
          src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674436209/Zhm_Distribuidores/Logo_Diego_wi1p7e.png"
          alt="Logo"
          width={300}
          height={300}
        />
        <div className="columns-2">
          <div>Hola</div>
          <div>Hola</div>
        </div>
      </nav>
    </header>
  );
}
