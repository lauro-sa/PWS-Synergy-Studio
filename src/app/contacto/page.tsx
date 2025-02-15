"use client";

import Contacto from "@/components/Contacto";
import Seccion from "@/components/Seccion";
import { motion } from "framer-motion";
import { animacionDesdeArriba } from "@/utils/animaciones";

export default function PaginaContacto() {
  return (
    <Seccion >
      {/* Título con animación centralizada */}
      <motion.h2
        className="text-xl md:text-2xl font-bold text-center mt-4 mb-4"
        variants={animacionDesdeArriba}
        initial="inicial"
        animate="visible"
      >
        ¿Hablamos?
      </motion.h2>

      <Contacto  />
    </Seccion>
  );
}
