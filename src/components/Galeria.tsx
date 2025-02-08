"use client";

import { fotosGaleria01 } from "@/datos/datosGaleria";
import Image from "next/image";
import { useState } from "react";
import ModalImagen from "./ModalImagen";
import { motion } from "framer-motion";

export default function Galeria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);
  const [datosImagen, setDatosImagen] = useState<{ titulo: string; detalles: string; informacion?: string } | null>(null);

  return (
    <section className="w-full px-2 py-6">
      <h2 className="text-lg md:text-xl font-bold text-center mt-12 mb-4">{fotosGaleria01.titulo}</h2>

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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          >
            {/* Agrega el atributo priority a las imágenes importantes */}
            <Image
              key={foto.id}
              src={foto.url}
              alt={foto.titulo}
              fill
              priority={index === 0} // Marca como prioritaria solo la primera imagen
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded shadow-sm"
            />

            {/* Filtro degradado */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Detalles técnicos */}
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
