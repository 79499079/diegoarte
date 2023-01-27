import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import React from "react";

export default function Factureros() {
  return (
    <div className="text-white">
      <Navegacion />
      <Layout title="Factureros">
        <div className="relative mt-16 lg:mt-24 text-black ">Factureros</div>
      </Layout>
    </div>
  );
}
