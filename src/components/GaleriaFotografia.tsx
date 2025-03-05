"use client";

import Image from "next/image";
import { useState } from "react";
import ModalImagen from "./ModalImagen";
import { motion } from "framer-motion";
import { animacionGaleria } from "@/utils/animaciones";
import { fotosGaleria01 } from "@/datos/datosGaleria";

export default function GaleriaFotografia() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);
  const [datosImagen, setDatosImagen] = useState<{ titulo: string; detalles: string; informacion?: string } | null>(null);

  return (
    <section className="w-full py-1">
      {/* Manteniendo la cantidad de columnas y ajustando las imágenes */}
      <div className="grid grid-cols-3 md:grid-cols-4 2xl:grid-cols-6 gap-1 md:gap-2 w-full">
        {fotosGaleria01.imagenes.map((foto, index) => (
          <motion.div
            key={foto.id}
            className="relative w-full aspect-[3/4] cursor-pointer group overflow-hidden"
            onClick={() => {
              setImagenSeleccionada(foto.url);
              setDatosImagen({
                titulo: foto.titulo,
                detalles: foto.detalles,
                informacion: foto.informacion ?? "No hay información adicional disponible.",
              });
            }}
            variants={animacionGaleria}
            initial="inicial"
            animate="visible"
            custom={index}
          >
            {/* Imagen con efecto blanco y negro y hover */}
            <Image
              src={foto.url}
              alt={foto.titulo}
              fill
              priority={index === 0}
              className="w-full h-full object-cover rounded shadow-sm transition-transform duration-300 hover:scale-105 
                         grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            />

            {/* Gradiente en la parte inferior */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Detalles de la imagen (Aparecen en hover) */}
            <div className="absolute bottom-1 left-1 w-full text-start text-gray-300 text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {foto.detalles}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal para ver la imagen en detalle */}
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
