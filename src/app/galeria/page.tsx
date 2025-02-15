"use client";

// Sección genérica
import Seccion from "@/components/Seccion";

// Componentes
import Galeria from "@/components/GaleriaFotografia";

// Utilidades
import { motion } from "framer-motion";
import { animacionDesdeArriba } from "@/utils/animaciones";

// Datos de la galería
import { fotosGaleria01 } from "@/datos/datosGaleria";

export default function PaginaGaleria() {
  return (
    <Seccion>
      {/* Título con animación */}
      <motion.h2
        className="text-xl md:text-2xl font-bold text-center mt-4 mb-4"
        variants={animacionDesdeArriba}
        initial="inicial"
        animate="visible"
      >
        📸 Galería de Fotografía
      </motion.h2>

      {/* Componente de galería con datos y proporción correcta */}
      <Galeria datos={fotosGaleria01.imagenes} proporcion="aspect-[3/4]" />
    </Seccion>
  );
}
