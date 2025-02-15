"use client";

// Sección genérica
import Seccion from "@/components/Seccion";

// Componentes
import BotonTema from "@/components/BotonTema";
import GaleriaFotografia from "@/components/GaleriaFotografia";
import GaleriaDron from "@/components/GaleriaDron";
import GaleriaReels from "@/components/GaleriaReels";

export default function PaginaInicio() {
  return (
    <Seccion className="flex flex-col items-center justify-center text-center space-y-12">
      {/* Título y botón de tema */}
      <h1 className="text-h1 font-bold">Bienvenido a mi Web de Fotografía y Videos</h1>
      <BotonTema />

      {/* Galerías separadas */}
      <GaleriaFotografia />
      <GaleriaDron />
      <GaleriaReels />
    </Seccion>
  );
}
