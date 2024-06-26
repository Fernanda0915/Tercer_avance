import React from "react";
import Mision from "../components/Mision";
import jose from "../assets/jose.jpg";
import fer from "../assets/fer.jpg";
import huma from "../assets/huma.jpg";
import felix from "../assets/felix.jpg";
import video from "../Videos/Comercial MX Discovery.mp4";


const Nosotros = () => {



  return (
    <>
      <br />
      <br />
      <br />

      <div className="container mx-auto">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">

          {/* Perfil 1 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DOCUMENTADORA</h3>
              <p className="my-4">Responsable de la parte de documentación.
                Garantizó una documentación completa y precisa para el proyecto, proporcionando una guía detallada que facilitó la comprensión,colaboración y una mejor
                autonomia y funcionamiento general del equipo.</p>
            </blockquote>

            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={fer} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Sánchez Cuevas Fernanda</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Documentación</div>
              </div>
            </figcaption>
          </figure>

          {/* Perfil 2 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MODELADOR 3D</h3>
              <p className="my-4">
                Con una sólida experiencia en el uso de software especializado y una comprensión profunda de los principios fundamentales del diseño 3D.
                Tiene la capacidad de transformar conceptos abstractos en modelos digitales realistas y visualmente impactantes.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={huma} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Saul Alejandro Humaran Beltrán</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Modelador</div>
              </div>
            </figcaption>
          </figure>

          {/* Perfil 3 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">DESARROLLADOR WEB</h3>
              <p className="my-4">Encargado del desarrollo tanto en el backend como en el frontend.
                Desarrolló eficientemente las funciones del backend para garantizar un rendimiento óptimo del sistema.
                Diseñó y creó interfaces de usuario atractivas y funcionales en el frontend, proporcionando una experiencia de usuario fluida.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={felix} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Félix Verdugo José Javier</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Desarrollador Frontend</div>
              </div>
            </figcaption>
          </figure>

          {/* Perfil 4 */}
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">LIDER DEL PROYECTO</h3>
              <p className="my-4">
                Líder general del proyecto general encargado de gestionar, coordinar, asignar y verificar los entregables del proyecto.
                Supervisó y coordinó el equipo de desarrollo, asegurando la coherencia y eficiencia en todas las fases del proyecto.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <img className="rounded-full w-20 h-20" src={jose} alt="profile picture" />
              <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Cruz Arredondo José David</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Director del proyecto</div>
              </div>
            </figcaption>
          </figure>
        </div>

        <Mision />

        <div className="flex justify-center items-center">
              <video className="max-w-full max-h-full w-auto h-auto rounded-lg" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        

      </div>
    </>
  );
};

export default Nosotros;
