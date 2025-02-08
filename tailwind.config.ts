import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fondoClaro: "#ffffff",  // Fondo en modo claro
        fondoOscuro: "#111111", // Fondo en modo oscuro (como en Next.js)
        textoClaro: "#000000",  // Texto en modo claro
        textoOscuro: "#ffffff", // Texto en modo oscuro
        grisClaro: "#e5e7eb",   // Detalles en claro
        grisOscuro: "#4b5563",  // Detalles en oscuro
        acento: "#6366f1",      // Color de acento
      },
    },
  },
  darkMode: "class", // Habilita el modo oscuro con clases
  plugins: [],
} satisfies Config;
