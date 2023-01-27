import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import React from "react";

export default function Calendarios() {
  return (
    <div className="text-white">
      <Navegacion />
      <Layout title="Calendarios">
        <div className="relative mt-16 lg:mt-24 text-black ">Calendarios</div>
      </Layout>
    </div>
  );
}
