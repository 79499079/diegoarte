import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import React from "react";

export default function Tarjetas() {
  return (
    <div className="text-white">
      <Navegacion />
      <Layout title="Tarjetas">
        <div className="relative mt-16 lg:mt-24 text-black ">Tarjetas</div>
      </Layout>
    </div>
  );
}
