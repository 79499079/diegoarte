import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import React from "react";

export default function Impresos() {
  return (
    <div className="text-white">
      <Navegacion />
      <Layout title="Impresos">
        <div className="relative mt-16 lg:mt-24 text-black ">Impresos</div>
      </Layout>
    </div>
  );
}
