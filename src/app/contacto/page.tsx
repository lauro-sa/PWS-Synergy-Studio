"use client";

import { datosContacto } from "@/datos/datosGenerales";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Contacto() {
    return (
        <section className="w-full px-4 py-10 max-w-5xl mx-auto text-textoClaro dark:text-textoOscuro min-h-screen flex flex-col justify-between">

            {/* 🔹 Título fijo en la parte superior */}
            <motion.h2
                className="text-lg md:text:xl font-bold text-end mt-12 mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                ¿Hablamos?
            </motion.h2>

            {/* 🔹 Contenedor Principal (Imagen + Bloques de Texto) */}
            <div className="flex flex-col md:flex-row items-center gap-8 flex-grow justify-center">

                {/* 📸 Imagen desde datosGenerales */}
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
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
                <div className="md:w-1/2 flex flex-col gap-14">
                    {/* Bloque 1: Fotografía */}
                    <motion.div
                        className="p-6 bg-fondoClaro dark:bg-fondoOscuro rounded-lg shadow-lg text-center md:text-left"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-bold mb-3">Fotografía Profesional</h3>
                        <p className="text-sm">
                            Capturamos momentos únicos con la mejor calidad. Desde retratos hasta paisajes, nuestra fotografía refleja emociones y detalles inigualables.
                        </p>
                    </motion.div>

                    {/* Redes sociales - SIEMPRE ABAJO */}
                    <div className="flex justify-center gap-10 pb-6">
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

                    {/* Bloque 2: Videos con Drone */}
                    <motion.div
                        className="p-6 bg-fondoClaro dark:bg-fondoOscuro rounded-lg shadow-lg text-center md:text-left"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold mb-3">Videos con Drone</h3>
                        <p className="text-sm">
                            Tomamos imágenes aéreas espectaculares con tecnología avanzada en drones. Ideal para eventos, empresas o contenido visual impactante.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* 🔹 Información de contacto y Redes Sociales (Siempre abajo) */}
            <div className="mt-10 mb-6 md:mb-0 flex flex-col md:flex-row items-center gap-4 text-sm">
                <p className="flex items-center gap-2">
                    <MapPin size={20} className="text-acento" /> {datosContacto.direccion}
                </p>
                <a href={`tel:${datosContacto.telefono.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-acento transition">
                    <Phone size={20} className="text-acento" /> {datosContacto.telefono}
                </a>
            </div>


        </section>
    );
}
