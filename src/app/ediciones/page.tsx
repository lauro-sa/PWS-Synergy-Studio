"use client";

// Seccion generiaca
import Seccion from "@/components/Seccion";

// Compnnetes
import ComparadorImagenes from "@/components/ComparadorImagenes";
import FormatosExplicacion from "@/components/FormatosExplicacion";
import LineaDeTiempo from "@/components/LineaDeTiempo";

// Utilidades
import { motion } from "framer-motion";
import { animacionDesdeArriba } from "@/utils/animaciones"; 

// Datos
import { datosEdiciones } from "@/datos/datosGenerales";

export default function PaginaEdiciones() {
  return (
    <Seccion className="">
      {/* Encabezado con animación centralizada */}
      <motion.h1
           className="text-xl md:text-2xl font-bold text-center mt-4 mb-4"
        variants={animacionDesdeArriba}
        initial="inicial"
        animate="visible"
      >
        {datosEdiciones.titulo}
      </motion.h1>

      {/* Contenedor Principal */}
      <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl gap-10">
        {/* Línea de Procesos de Edición */}
        <section className="md:w-1/3 space-y-6">
          <LineaDeTiempo />
        </section>

        {/* Comparador de Imágenes */}
        <section className="md:w-2/3">
          <ComparadorImagenes />
        </section>
      </div>

      {/* Información de Formatos */}
      <section className="w-full max-w-5xl mt-10 ml-auto text-right">
        <FormatosExplicacion />
      </section>
    </Seccion>
  );
}
