import Head from "next/head";
import React from "react";
import InicioVideo from "./InicioVideo";
import Navegacion from "./Navegacion";
import Redes from "./Redes";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title ? title + " - Arte & Publicidad" : "- Arte & Publicidad"}
        </title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between ">
        <main className="container m-auto mt-4 px-4">{children}</main>
      </div>

      <footer className="bg-gradient-to-b from-transparent to-black text-center py-8 text-white">
        <div class="flex gap-8 md:columns-3 p-4">
          <div className="flex items-center p-4">
            <Redes />
          </div>
          <div className="flex items-center">
            Carrera 22 No 12B - 32. Bogotá <>Cel.32010000000</>
          </div>
        </div>
      </footer>
    </>
  );
}
