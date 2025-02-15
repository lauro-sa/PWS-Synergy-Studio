"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import ModalImagen from "./ModalImagen";
import { fotosGaleriaDron } from "@/datos/datosGaleria";

// ✅ Función para ajustar la galería sin animaciones
const ajustarGaleria = (imagenes: typeof fotosGaleriaDron, columnas: number) => {
  if (columnas === 3) {
    return imagenes.some((img) => img.id === "9") ? imagenes : [...imagenes, imagenes.find((img) => img.id === "9")!];
  }
  return imagenes.filter((img) => img.id !== "9");
};

export default function GaleriaDron() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);
  const [datosImagen, setDatosImagen] = useState<{ titulo: string; detalles: string; informacion?: string } | null>(null);
  const [imagenesAjustadas, setImagenesAjustadas] = useState(fotosGaleriaDron);

  // ✅ Detecta el tamaño de la pantalla y ajusta las imágenes sin animaciones
  useEffect(() => {
    const actualizarGaleria = () => {
      const ancho = window.innerWidth;
      const columnas = ancho >= 1280 ? 4 : ancho >= 768 ? 3 : 2;

      // ✅ Se usa `setTimeout(0)` para forzar el re-render sin animaciones
      setTimeout(() => setImagenesAjustadas(ajustarGaleria(fotosGaleriaDron, columnas)), 0);
    };

    actualizarGaleria(); // Ejecutar en carga
    window.addEventListener("resize", actualizarGaleria);
    return () => window.removeEventListener("resize", actualizarGaleria);
  }, []);

  return (
    <section className="w-full max-w-5xl mx-auto px-2 py-6">
      <h2 className="text-h2 font-bold text-center mt-10">🚁 Drones</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
        {imagenesAjustadas.map((foto, index) => (
          <div
            key={`${foto.id}-${index}`}
            className="relative w-full aspect-[16/9] cursor-pointer group overflow-hidden"
            onClick={() => {
              setImagenSeleccionada(foto.url);
              setDatosImagen({
                titulo: foto.titulo,
                detalles: foto.detalles,
                informacion: foto.informacion ?? "No hay información adicional disponible.",
              });
            }}
          >
            {/* Imagen con efecto blanco y negro y hover */}
            <Image
              src={foto.url}
              alt={foto.titulo}
              fill
              priority={index === 0}
              className="object-cover rounded shadow-sm transition-transform duration-300 hover:scale-105 
                         grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
            />

            {/* Gradiente en la parte inferior */}
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Detalles de la imagen (Aparecen en hover) */}
            <div className="absolute bottom-1 left-1 w-full text-start text-gray-300 text-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {foto.detalles}
            </div>
          </div>
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
