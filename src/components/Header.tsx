"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Íconos del menú hamburguesa
import { useTheme } from "next-themes";
import { motion } from "framer-motion"; // Animaciones
import { datosLogo } from "@/datos/datosGenerales";

// Animación del título del sitio
const animacionTitulo = {
  hidden: { width: 0 },
  visible: {
    width: "auto",
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// Función para que cada letra de los enlaces se escriba una tras otra SIN superposición
const animacionEscribir = (inicio: number) => ({
  hidden: { opacity: 1 },
  visible: {
    transition: {
      delayChildren: inicio, // 🔹 Comienza después de que termine el enlace anterior
      staggerChildren: 0.04, // 🔹 Velocidad de escritura por letra
    },
  },
});

// Variante para cada letra
const letra = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Header() {
  const { theme, systemTheme } = useTheme();
  const [temaActual, setTemaActual] = useState<string | null>(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    setTemaActual(resolvedTheme ?? "light");
  }, [theme, systemTheme]);

  // Lista de enlaces con tiempos progresivos
  const enlaces = [
    { nombre: "Inicio", ruta: "/" },
    { nombre: "Galería", ruta: "/galeria" },
    { nombre: "Ediciones", ruta: "/ediciones" },
    { nombre: "Servicios", ruta: "/servicios" },
    { nombre: "Contacto", ruta: "/contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-14 md:h-16 px-6 flex justify-between items-center bg-fondoClaro text-textoClaro dark:bg-fondoOscuro dark:text-textoOscuro shadow-md transition-all duration-300 z-50">
      
      {/* Logo animado */}
      <Link href="/" className="flex items-center gap-2 text-xl font-bold">
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

        {/* Animación del nombre del proyecto SOLO en PC */}
        <motion.span
          className="text-lg md:text-xl overflow-hidden inline-block"
          variants={animacionTitulo}
          initial="hidden"
          animate="visible"
          style={{
            whiteSpace: "nowrap",
            display: "inline-block",
          }}
        >
          {datosLogo.nombreProyecto}
        </motion.span>
      </Link>

      {/* Menú en escritorio con efecto máquina de escribir letra por letra sin superposición */}
      <nav className="hidden md:flex gap-6 text-sm">
        {enlaces.map((item, index) => (
          <motion.div
            key={index}
            variants={animacionEscribir(1.5 + enlaces.slice(0, index).reduce((acc, el) => acc + el.nombre.length * 0.08, 0))} 
            initial="hidden"
            animate="visible"
            className="hidden md:flex"
          >
            <Link href={item.ruta} className="hover:text-acento transition-all duration-300">
              {item.nombre.split("").map((char, i) => (
                <motion.span key={i} variants={letra}>
                  {char}
                </motion.span>
              ))}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Botón del menú hamburguesa en móviles */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="md:hidden p-2 rounded-lg transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {menuAbierto ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menú en móviles (sin efecto máquina de escribir) */}
      <div
        className={`fixed inset-0 bg-fondoClaro dark:bg-fondoOscuro flex flex-col items-center justify-center gap-6 text-lg transition-transform duration-300 md:hidden ${
          menuAbierto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {enlaces.map((item, index) => (
          <Link key={index} href={item.ruta} className="hover:text-acento transition-all duration-300" onClick={() => setMenuAbierto(false)}>
            {item.nombre}
          </Link>
        ))}
      </div>
    </header>
  );
}
