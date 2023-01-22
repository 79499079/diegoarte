import Layout from "@/components/Layout";
import InicioVideo from "../components/InicioVideo";

export default function Home() {
  return (
    <>
      <InicioVideo />
      <Layout title="Inicio">
        <div className="absolute mt-16 -ml-40 text-xl text-white">
          ¡Tus ideas la ponemos en papel!
        </div>
      </Layout>
    </>
  );
}
