"use client";

import { datosEdiciones } from "@/datos/datosGenerales";
import { motion } from "framer-motion";
import { FileImage, Layers, Image } from "lucide-react"; // Íconos

const iconosFormatos = {
  RAW: <FileImage size={30} className="text-acento" />,
  LOG: <Layers size={30} className="text-acento" />,
  JPEG: <Image size={30} className="text-acento" />,
};

export default function FormatosExplicacion() {
  if (!datosEdiciones?.formatos) return null;

  return (
<section className="w-full max-w-3xl mx-auto py-8 flex flex-col items-center text-center">
  <h2 className="text-xl font-bold mb-6">Diferentes Formatos de Imagen</h2>

  {/* 🔹 Contenedor en FILA con 3 columnas */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {datosEdiciones.formatos.map((formato) => (
      <motion.div
        key={formato.nombre}
        className="p-6 bg-fondoClaro dark:bg-fondoOscuro rounded-lg shadow-lg flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* 🏆 Ícono y título en FILA */}
        <div className="flex items-center gap-2">
          {iconosFormatos[formato.nombre] || <FileImage size={40} className="text-acento" />}
          <h3 className="text-lg font-semibold">{formato.nombre}</h3>
        </div>

        {/* 📄 Descripción debajo CENTRADA */}
        <p className="text-sm mt-2">{formato.descripcion}</p>
      </motion.div>
    ))}
  </div>
</section>

  );
}
