import Layout from "@/components/Layout";
/* import Navegacion from "@/components/Navegacion";
import Image from "next/image";
import InicioVideo from "../components/InicioVideo"; */

export default function Home() {
  return (
    <>
      <Layout title="Inicio">
        <div className="text-center my-4 text-2xl">Nuestro Portafolio</div>
        <div
          id="portafolio"
          className="grid grid-flow-row md:grid-flow-col gap-2"
        >
          <div className="flex gap-2">
            <div className="grid border border-red-800 rounded-xl tarjeta1  hover:rotate-0" />
            <div className="grid border border-red-800 rounded-xl tarjeta1  hover:rotate-0" />
          </div>

          <div className="flex gap-2">
            <div className="grid border border-red-800 rounded-xl tarjeta1  hover:rotate-0" />
            <div className="grid border border-red-800 rounded-xl tarjeta1  hover:rotate-0" />
          </div>

          <div className="flex gap-2">
            <div className="grid border border-red-800 rounded-xl tarjeta1  hover:rotate-0" />
            <div className="grid border border-red-800 rounded-xl tarjeta1  hover:rotate-0" />
          </div>
        </div>
      </Layout>
    </>
  );
}
