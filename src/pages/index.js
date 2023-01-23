import Layout from "@/components/Layout";
import InicioVideo from "../components/InicioVideo";

export default function Home() {
  return (
    <>
      <InicioVideo />
      <Layout title="Inicio">
        <div className="relative text-2xl mt-14 mb-8">Portafolio</div>
      </Layout>
    </>
  );
}
