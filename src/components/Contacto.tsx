"use client";

import { datosContacto } from "@/datos/datosGenerales";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import {
  animacionEscala,
  animacionDesdeIzquierda,
  animacionDesdeDerecha,
} from "@/utils/animaciones";

export default function Contacto() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* 🔹 Contenedor Principal */}
      <div className="flex flex-col md:flex-row items-center gap-8 flex-grow">
        {/* 📸 Imagen */}
        <motion.div
          className="w-full md:w-1/2"
          variants={animacionEscala}
          initial="inicial"
          animate="visible"
        >
          <Image
            src={datosContacto.imagenContacto}
            alt="Fotografía y Drones"
            width={800}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </motion.div>

        {/* 📄 Bloques de texto */}
        <div className="md:w-1/2 flex flex-col gap-8">
          {/* Bloque 1 */}
          <motion.div
            className="p-6 bg-fondoClaro dark:bg-fondoOscuro rounded-lg shadow-lg text-center md:text-left"
            variants={animacionDesdeIzquierda}
            initial="inicial"
            animate="visible"
          >
            <h3 className="text-xl font-bold mb-3">Fotografía Profesional</h3>
            <p className="text-sm">
              Capturamos momentos únicos con la mejor calidad. Desde retratos hasta paisajes, nuestra fotografía refleja emociones y detalles inigualables.
            </p>
          </motion.div>

          {/* 🔹 Redes sociales */}
          <div className="flex justify-center gap-6 mt-6">
            <a href={datosContacto.redes.instagram} target="_blank" rel="noopener noreferrer" className="text-acento hover:scale-110 transition-transform">
              <Instagram size={32} />
            </a>
            <a href={datosContacto.redes.linkedin} target="_blank" rel="noopener noreferrer" className="text-acento hover:scale-110 transition-transform">
              <Linkedin size={32} />
            </a>
            <a href={`mailto:${datosContacto.email}`} className="text-acento hover:scale-110 transition-transform">
              <Mail size={32} />
            </a>
          </div>

          {/* Bloque 2 */}
          <motion.div
            className="p-6 bg-fondoClaro dark:bg-fondoOscuro rounded-lg shadow-lg text-center md:text-left"
            variants={animacionDesdeDerecha}
            initial="inicial"
            animate="visible"
          >
            <h3 className="text-xl font-bold mb-3">Videos con Drone</h3>
            <p className="text-sm">
              Tomamos imágenes aéreas espectaculares con tecnología avanzada en drones. Ideal para eventos, empresas o contenido visual impactante.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Información de contacto */}
      <div className="mt-10 flex flex-col md:flex-row items-center gap-4 text-sm">
        <p className="flex items-center gap-2">
          <MapPin size={20} className="text-acento" /> {datosContacto.direccion}
        </p>
        <a
          href={`tel:${datosContacto.telefono.replace(/\s/g, "")}`}
          className="flex items-center gap-2 hover:text-acento transition"
        >
          <Phone size={20} className="text-acento" /> {datosContacto.telefono}
        </a>
      </div>
    </section>
  );
}
