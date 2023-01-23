import Head from "next/head";
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

      <div className="flex min-h-screen flex-col justify-between ">
        <header>Hola</header>
        <main className="container m-auto mt-4 px-4">{children}</main>
      </div>
    </>
  );
}
