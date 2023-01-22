import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + " Arte & Publicidad" : "Arte & Publicidad"}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="columns-2">
        <div className="relative w-32 lg:w-full">
          <Image
            src="https://res.cloudinary.com/helioplois/image/upload/v1674355826/Imag_Pagina/Productos/Logo_Diego_zpkl6z.png"
            alt="logo diego"
            width={200}
            height={200}
          />
        </div>
        <div className="pt-2">
          <nav>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex justify-end text-white">
                <div className="ml-2 ">Inicio</div>
                <div className="ml-2 ">Nosotros</div>
                <div className="ml-2 ">Portafolio</div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
