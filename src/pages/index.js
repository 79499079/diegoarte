import Layout from "@/components/Layout";
import InicioVideo from "../components/InicioVideo";

export default function Home() {
  return (
    <>
      <InicioVideo />
      <Layout title="Inicio">
        <div className="relative text-2xl mb-8 text-white">Hola</div>
      </Layout>
    </>
  );
}
