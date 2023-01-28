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
          <div className="flex items-center">
            <Redes />
          </div>
          <div className="flex items-center">
            Carrera 22 No 12B - 32. Bogotá <>Cel.32010000000</>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.2244837548825!2d-74.09096450139715!3d4.612284330209046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f996e75c592a7%3A0x95801a2e4ed44a54!2zQ3JhLiAyOCAjMTJCLTQ0LCBMb3MgTcOhcnRpcmVzLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1674872870172!5m2!1ses!2sco"
              width="450"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
