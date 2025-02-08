"use client";

import { datosEdiciones } from "@/datos/datosGenerales";
import ComparadorImagenes from "@/components/ComparadorImagenes";
import FormatosExplicacion from "@/components/FormatosExplicacion";
import LineaDeTiempo from "@/components/LineaDeTiempo";
import { motion } from "framer-motion";

export default function PaginaEdiciones() {
  return (
    <main className="min-h-screen flex flex-col px-6 py-10 text-textoClaro dark:text-textoOscuro">
      {/* Encabezado */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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

    </main>
  );
}
