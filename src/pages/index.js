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
          className="grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 hover:border-transparent hover:text-teal-500 hover:bg-white"
        >
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  Tarjetas
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  Tarjetas
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
                  Tarjetas
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
