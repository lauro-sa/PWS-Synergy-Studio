"use client";

import { datosEdiciones } from "@/datos/datosGenerales";
import { motion } from "framer-motion";
import { Sliders, Crop, Settings } from "lucide-react"; // Íconos
import { animacionGaleria } from "@/utils/animaciones";
import React from "react";

const iconosProcesos: Record<string, React.ReactNode> = {
  "Corrección de Color": <Settings size={40} className="text-acento" />, 
  "Ajuste de Contraste": <Sliders size={40} className="text-acento" />, 
  "Recorte y Enfoque": <Crop size={40} className="text-acento" />,
};

export default function LineaDeTiempo() {
  if (!datosEdiciones?.procesosEdicion) return null;

  return (
    <section className="w-full h-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-6 text-center">Proceso de Edición</h2>
      <div className="flex flex-row md:flex-col items-center justify-evenly h-full gap-2">
        {datosEdiciones.procesosEdicion.map((proceso, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            variants={animacionGaleria}
            initial="inicial"
            animate="visible"
            custom={index}
          >
            {iconosProcesos[proceso.nombre] || <Sliders size={40} className="text-acento" />}
            <p className="text-sm mt-2">{proceso.nombre}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
