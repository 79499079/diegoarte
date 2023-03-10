import InicioVideo from "@/components/InicioVideo";
import Layout from "@/components/Layout";
import Navegacion from "@/components/Navegacion";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative text-white">
        <Navegacion />
      </div>
      <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div className="absolute text-white text-xl sm:mt-40 sm:ml-28 sm:text-2xl mt-20 ml-10 md:ml-20 bg-gray-600/30 p-2 md:text-4xl md:mt-24 lg:text-6xl lg:mt-72 lg:ml-40">
          ¡Tus ideas las llevamos al papel!
        </div>
      </motion.div>

      <InicioVideo />

      <Layout title="Inicio">
        <div
          id="portafolio"
          className="text-center my-6 text-2xl text-green-800"
        >
          Nuestro Portafolio
          <div className="h-0.5 w-72 bg-green-800 mx-auto mt-2 mb-8" />
        </div>

        <div className="grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 hover:border-transparent hover:text-teal-500 hover:bg-white">
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674496475/Zhm_Distribuidores/modelo_tarjeta_iauqsj.jpg"
              alt="image"
              className="imagenportafolio"
            />
            <div className="grid justify-items-stretch -mt-8">
              <div className="justify-self-center">
                <Link href="/Tarjetas">
                  <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                    Tarjetas
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674524803/Zhm_Distribuidores/pendones_aiqjpg.jpg"
              alt="Pendones"
            />
            <div className="grid justify-items-stretch -mt-8">
              <div className="justify-self-center">
                <Link href="/Pendones">
                  <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                    Pendones
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674524985/Zhm_Distribuidores/carpetas_yhrznm.jpg"
              alt="image"
            />
            <div className="grid justify-items-stretch -mt-8">
              <div className="justify-self-center">
                <Link href="/Carpetas">
                  <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                    Carpetas
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 hover:border-transparent hover:text-teal-500 hover:bg-white mt-8">
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674572641/Zhm_Distribuidores/facturero_is5wyy.jpg"
              alt="image"
            />
            <div className="grid justify-items-stretch -mt-8">
              <div className="justify-self-center">
                <Link href="/Factureros">
                  <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                    Factureros
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674572356/Zhm_Distribuidores/Calendarios_k8jr4r.jpg"
              alt="Pendones"
            />
            <div className="grid justify-items-stretch -mt-8">
              <div className="justify-self-center">
                <Link href="/Calendarios">
                  <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                    Calendarios
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674573103/Zhm_Distribuidores/impresos_twkar1.jpg"
              alt="image"
            />
            <div className="grid justify-items-stretch -mt-8">
              <div className="justify-self-center">
                <Link href="/Impresos">
                  <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                    Impresos
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
