// 📁 src/utils/animaciones.ts

import { Variants } from "framer-motion";

// 🔹 Animación de aparición desde arriba
export const animacionDesdeArriba: Variants = {
  inicial: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// 🔹 Animación de aparición con escala
export const animacionEscala: Variants = {
  inicial: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
};

// 🔹 Animación de entrada desde la izquierda
export const animacionDesdeIzquierda: Variants = {
  inicial: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.3 } },
};

// 🔹 Animación de entrada desde la derecha
export const animacionDesdeDerecha: Variants = {
  inicial: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
};

// 🔹 Animación secuencial para la galería
export const animacionGaleria: Variants = {
  inicial: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, delay: index * 0.1, ease: "easeOut" },
  }),
};

export const animacionTarjeta = {
  inicial: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.2 },
  }),
};
