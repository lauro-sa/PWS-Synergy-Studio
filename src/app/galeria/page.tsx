"use client";

// Sección genérica
import Seccion from "@/components/Seccion";

// Componentes
import GaleriaFotografia from "@/components/GaleriaFotografia";
import TituloHundido from "@/components/TituloHundido";

// Utilidades
import { motion } from "framer-motion";
import { animacionDesdeArriba } from "@/utils/animaciones";

export default function PaginaGaleria() {
  return (
    <Seccion className="flex flex-col md:flex-row w-full items-center justify-center">
      {/* 📸 Título con animación y efecto hundido */}
      <motion.div
        variants={animacionDesdeArriba}
        initial="inicial"
        animate="visible"
        className="w-full md:w-auto md:flex-shrink-0"
      >
        <TituloHundido texto="GALERÍA DE FOTOGRAFÍA" />
      </motion.div>

      {/* 📸 Componente de galería con datos */}
      <div className="w-full px-2 py-1">
        <GaleriaFotografia />
      </div>
    </Seccion>
  );
}
