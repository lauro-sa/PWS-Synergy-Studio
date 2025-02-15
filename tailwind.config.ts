import { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fondoClaro: "#ffffff",
        fondoOscuro: "#111111",
        textoClaro: "#000000",
        textoOscuro: "#ffffff",
        grisClaro: "#e5e7eb",
        grisOscuro: "#4b5563",
        acento: "#6366f1",
      },
      fontSize: {
        h1: "2.25rem", // 36px
        h2: "1.875rem", // 30px
        h3: "1.5rem", // 24px
        p: "1rem", // 16px
        sm: "0.875rem", // 14px
      },
      spacing: {
        sectionPadding: "10rem", // Espaciado uniforme para secciones
      },
    },
  },
  darkMode: "class",
  plugins: [],
} satisfies Config;
