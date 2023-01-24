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
          className="grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4"
        >
          <div className="grid border rounded-xl tarjeta1 rotate-6 hover:rotate-0" />
          <div className="grid border rounded-xl tarjeta1 rotate-6 hover:rotate-0" />
          <div className="grid border rounded-xl tarjeta1 rotate-6 hover:rotate-0" />
        </div>
      </Layout>
    </>
  );
}
