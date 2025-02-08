import BotonTema from "@/components/BotonTema";
import ComparadorImagenes from "@/components/ComparadorImagenes";

export default function PaginaInicio() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-fondoClaro text-textoClaro dark:bg-fondoOscuro dark:text-textoOscuro">
      <h1 className="text-3xl font-bold">Bienvenido a mi Web de Fotografía y Videos</h1>
      <p className="mt-2 text-lg text-grisClaro dark:text-grisOscuro">
        Capturando momentos con cámara réflex y drone.
      </p>
      
      <div>
      <ComparadorImagenes />
      </div>

      {/* Botón de cambio de tema */}
      <div className="mt-4">
        <BotonTema />
      </div>

      {/* Placeholder de imagen */}
      <div className="w-64 h-40 mt-6 bg-grisClaro dark:bg-grisOscuro flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Imagen aquí</span>
      </div>
    </main>
  );
}
