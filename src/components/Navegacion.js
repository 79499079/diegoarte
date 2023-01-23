import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navegacion() {
  return (
    <header className="absolute z-30 bg-gradient-to-b from-black to-transparent w-full">
      <nav className="columns-2 justify-between">
        <div className="w-28 md:w-56">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674436209/Zhm_Distribuidores/Logo_Diego_wi1p7e.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div className="mr-4 pt-2 text-sm lg:text-xl">
          <ul className="flex gap-2 justify-end lg:gap-8">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="#portafolio">Portafolio</Link>
            </li>
            <li>
              <Link href="/">Contacto</Link>
            </li>

            <li>
              <Link href="/">Usuario</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
