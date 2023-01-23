import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import InicioVideo from "../components/InicioVideo";

export default function Home() {
  return (
    <>
      <div className="text-white">
        <Navegacion />
      </div>
      <InicioVideo />
      <Layout title="Inicio">
        <div className="relative text-2xl bg-red-500">Portafolio</div>
      </Layout>
    </>
  );
}
