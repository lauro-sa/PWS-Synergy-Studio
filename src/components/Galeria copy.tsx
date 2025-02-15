"use client";

import { fotosGaleria01 } from "@/datos/datosGaleria";
import Image from "next/image";
import { useState } from "react";
import ModalImagen from "./ModalImagen";
import { motion } from "framer-motion";
import { animacionGaleria } from "@/utils/animaciones"; // ✅ Importamos solo la animación para las imágenes

export default function Galeria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);
  const [datosImagen, setDatosImagen] = useState<{ titulo: string; detalles: string; informacion?: string } | null>(null);

  return (
    <section className="w-full px-2 py-6">
      <div className="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-1 md:gap-2">
        {fotosGaleria01.imagenes.map((foto, index) => (
          <motion.div
            key={foto.id}
            className="relative w-full aspect-[3/4] cursor-pointer group overflow-hidden"
            onClick={() => {
              setImagenSeleccionada(foto.url);
              setDatosImagen({
                titulo: foto.titulo,
                detalles: foto.detalles,
                informacion: foto.informacion,
              });
            }}
            variants={animacionGaleria}
            initial="inicial"
            animate="visible"
            custom={index}
          >
            <Image
              key={foto.id}
              src={foto.url}
              alt={foto.titulo}
              fill
              priority={index === 0}
              className="object-cover rounded shadow-sm transition-transform duration-300 hover:scale-105 
                         grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-1 left-1 w-full text-start text-grisClaro/80 text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {foto.detalles}
            </div>
          </motion.div>
        ))}
      </div>

      {imagenSeleccionada && datosImagen && (
        <ModalImagen
          foto={imagenSeleccionada}
          titulo={datosImagen.titulo}
          detalles={datosImagen.detalles}
          informacion={datosImagen.informacion}
          onClose={() => {
            setImagenSeleccionada(null);
            setDatosImagen(null);
          }}
        />
      )}
    </section>
  );
}
