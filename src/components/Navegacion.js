import Image from "next/image";
import React from "react";

export default function Navegacion() {
  return (
    <header className="absolute bg-gradient-to-b from-black-500 to-transparent w-full">
      <nav className="columns-2 justify-between">
        <div className="w-28 md:w-56">
          <Image
            src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674436209/Zhm_Distribuidores/Logo_Diego_wi1p7e.png"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <div className="mr-4 pt-2">
          <ul class="flex gap-2 justify-end">
            <li>
              <a class="text-blue-200 hover:text-blue-500" href="#">
                Active
              </a>
            </li>
            <li>
              <a class="text-blue-200 hover:text-blue-500" href="#">
                Link
              </a>
            </li>
            <li>
              <a class="text-blue-200 hover:text-blue-500" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
