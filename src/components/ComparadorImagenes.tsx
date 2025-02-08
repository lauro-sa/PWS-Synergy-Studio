"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { datosComparadorImagenes } from "@/datos/datosGenerales";
import { GripHorizontal } from "lucide-react"; // Ícono para la barra

export default function ComparadorImagenes() {
  const [posicion, setPosicion] = useState(50); // Posición inicial
  const contenedorRef = useRef<HTMLDivElement>(null);

  // Función para calcular la posición basada en el movimiento
  const manejarMovimiento = (event: React.MouseEvent | React.TouchEvent) => {
    if (!contenedorRef.current) return;
    const { left, width } = contenedorRef.current.getBoundingClientRect();
    let nuevaPosicion = 0;

    if ("touches" in event) {
      nuevaPosicion = ((event.touches[0].clientX - left) / width) * 100;
    } else {
      nuevaPosicion = ((event.clientX - left) / width) * 100;
    }

    setPosicion(Math.max(0, Math.min(100, nuevaPosicion))); // Limitar entre 0 y 100
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-8 text-center">
      <h2 className="text-xl font-bold mb-6">{datosComparadorImagenes.titulo}</h2>

      {/* 🖼️ Contenedor del Comparador */}
      <div
        ref={contenedorRef}
        className="relative w-full aspect-[3/4] overflow-hidden rounded shadow-lg cursor-ew-resize select-none"
        onMouseMove={manejarMovimiento}
        onTouchMove={manejarMovimiento}
      >
        {/* 🌈 Imagen en Color de Fondo */}
        <Image
          src={datosComparadorImagenes.imagenColor}
          alt="Imagen en color"
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 🖤 Imagen Blanco y Negro con máscara */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - posicion}% 0 0)` }}
        >
          <Image
            src={datosComparadorImagenes.imagenBN}
            alt="Imagen Blanco y Negro"
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* 📍 Barra Deslizante */}
        <div
          className="absolute inset-y-0 w-[3px] bg-white rounded-full shadow-md"
          style={{ left: `${posicion}%`, transform: "translateX(-50%)" }}
        />

        {/* 🔘 Icono Deslizable */}
        <div
          className="absolute top-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
          style={{ left: `${posicion}%`, transform: "translate(-50%, -50%)" }}
        >
          <GripHorizontal size={22} />
        </div>
      </div>
    </section>
  );
}
