import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Layout title="Inicio">
        <div className="text-center my-6 text-2xl">Nuestro Portafolio</div>
        <div
          id="portafolio"
          className="grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 hover:border-transparent hover:text-teal-500 hover:bg-white"
        >
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674496475/Zhm_Distribuidores/modelo_tarjeta_iauqsj.jpg"
              alt="image"
              className="imagenportafolio"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                  Tarjetas
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674524803/Zhm_Distribuidores/pendones_aiqjpg.jpg"
              alt="Pendones"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                  Pendones
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674524985/Zhm_Distribuidores/carpetas_yhrznm.jpg"
              alt="image"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                  Carpetas
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-flow-row md:grid-flow-col lg:grid-flow-col gap-4 hover:border-transparent hover:text-teal-500 hover:bg-white mt-8">
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674496475/Zhm_Distribuidores/modelo_tarjeta_iauqsj.jpg"
              alt="image"
              className="imagenportafolio"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                  Tarjetas
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674524803/Zhm_Distribuidores/pendones_aiqjpg.jpg"
              alt="Pendones"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                  Pendones
                </button>
              </div>
            </div>
          </div>
          <div className="w-full rounded justify-center items-center">
            <img
              src="https://res.cloudinary.com/zhamat-tecnologia/image/upload/v1674524985/Zhm_Distribuidores/carpetas_yhrznm.jpg"
              alt="image"
            />
            <div class="grid justify-items-stretch -mt-8">
              <div class="justify-self-center">
                <button className="w-36 h-10 px-6 m-2 text-lg text-indigo-100 duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 shadow-[0_5px_0_rgb(110,110,114)] hover:shadow-[0_2px_0px_rgb(110,110,114)] ease-out hover:translate-y-1 transition-all ">
                  Carpetas
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
