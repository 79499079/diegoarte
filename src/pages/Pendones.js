import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import React from "react";

export default function Pendones() {
  return (
    <div className="text-white">
      <Navegacion />
      <Layout title="Pendones">
        <div className="relative mt-16 lg:mt-24 text-black ">Pendones</div>
      </Layout>
    </div>
  );
}
