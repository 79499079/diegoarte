import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import React from "react";

export default function Carpetas() {
  return (
    <div className="text-white">
      <Navegacion />
      <Layout title="Carpetas">
        <div className="relative mt-16 lg:mt-24 text-black ">Carpetas</div>
      </Layout>
    </div>
  );
}
