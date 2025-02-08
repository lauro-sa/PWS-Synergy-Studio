"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Íconos del menú hamburguesa
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Animaciones
import { datosLogo } from "@/datos/datosGenerales";

export default function Header() {
  const { theme, systemTheme } = useTheme();
  const [temaActual, setTemaActual] = useState<string | null>(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    setTemaActual(resolvedTheme ?? "light");
  }, [theme, systemTheme]);

  return (
    <header className="fixed top-0 left-0 w-full h-14 md:h-16 px-6 flex justify-between items-center bg-fondoClaro text-textoClaro dark:bg-fondoOscuro dark:text-textoOscuro shadow-md transition-all duration-300 z-50">

      {/* Logo animado */}
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
        {/* Animación del Logo */}
        <motion.div
          className="w-[40px] md:w-[60px] h-[40px] md:h-[60px] flex items-center justify-center flex-shrink-0"
          animate={{ opacity: [1, 0.9, 1], scale: [1, 1.05, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 7,
            ease: "easeInOut",
          }}
        >
          {temaActual && (
            <Image
              src={temaActual === "dark" ? datosLogo.logo.oscuro : datosLogo.logo.claro}
              alt="Logo"
              width={40}
              height={40}
              className="md:w-[60px] md:h-[60px] flex-shrink-0"
              priority
            />
          )}
        </motion.div>

        {/* Animación del texto con efecto de revelado progresivo */}
        <motion.span
          className="text-lg md:text-xl overflow-hidden inline-block"
          initial={{ width: 0 }} // 🔹 Comienza oculto
          animate={{ width: "auto" }} // 🔹 Se expande según el tamaño del texto
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            whiteSpace: "nowrap", // 🔹 Mantiene el texto en una sola línea
            display: "inline-block",
          }}
        >
          {datosLogo.nombreProyecto}
        </motion.span>
      </Link>


{/* Menú en escritorio */}
<nav className="hidden md:flex gap-6 text-sm">
  <Link href="/" className="hover:text-acento transition-all duration-300">Inicio</Link>
  <Link href="/galeria" className="hover:text-acento transition-all duration-300">Galería</Link>
  <Link href="/ediciones" className="hover:text-acento transition-all duration-300">Ediciones</Link> {/* NUEVA RUTA */}
  <Link href="/servicios" className="hover:text-acento transition-all duration-300">Servicios</Link>
  <Link href="/contacto" className="hover:text-acento transition-all duration-300">Contacto</Link>
</nav>

      {/* Botón del menú hamburguesa en móviles */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {menuAbierto ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú desplegable en móviles */}
  {/* Menú en móviles */}
<div className={`fixed inset-0 bg-fondoClaro dark:bg-fondoOscuro flex flex-col items-center justify-center gap-6 text-lg transition-transform duration-300 md:hidden ${menuAbierto ? "translate-x-0" : "translate-x-full"}`}>
  <Link href="/" className="hover:text-acento transition-all duration-300" onClick={() => setMenuAbierto(false)}>Inicio</Link>
  <Link href="/galeria" className="hover:text-acento transition-all duration-300" onClick={() => setMenuAbierto(false)}>Galería</Link>
  <Link href="/ediciones" className="hover:text-acento transition-all duration-300" onClick={() => setMenuAbierto(false)}>Ediciones</Link> {/* NUEVA RUTA */}
  <Link href="/servicios" className="hover:text-acento transition-all duration-300" onClick={() => setMenuAbierto(false)}>Servicios</Link>
  <Link href="/contacto" className="hover:text-acento transition-all duration-300" onClick={() => setMenuAbierto(false)}>Contacto</Link>
</div>
    </header>
  );
}
