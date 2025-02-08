"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react"; // Ícono de información

export default function ModalImagen({ foto, titulo, detalles, informacion, onClose }: {
    foto: string;
    titulo: string;
    detalles: string;
    informacion?: string;
    onClose: () => void;
}) {
    const [mostrarInfo, setMostrarInfo] = useState(false);

    useEffect(() => {
        const cerrarConEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", cerrarConEscape);
        return () => document.removeEventListener("keydown", cerrarConEscape);
    }, [onClose]);

    return (
        <AnimatePresence>
            {foto && (
                <motion.div
                    className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-80 flex items-center justify-center z-50"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                    {/* Botón de cierre */}
                    <button
                        className="absolute top-6 right-9 text-white text-2xl font-bold z-50"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                    {/* Contenedor ajustable según si se muestra la información */}
                    <motion.div
                        className={`relative w-[100%] md:w-[80%] lg:w-[70%] max-w-2xl p-2 md:p-4 flex flex-col items-center`}
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                        exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {/* Imagen con tamaño dinámico según el modo información */}
                        <motion.div
                            className={`relative w-full ${mostrarInfo ? "h-[50%]" : "h-auto"} max-h-[90vh] transition-all duration-500`}
                            onClick={() => mostrarInfo && setMostrarInfo(false)} // 📌 Solo se cierra si ya estaba abierta
                        >
                            <Image
                                src={foto}
                                alt={titulo}
                                width={1200}
                                height={1600}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                                className="w-full h-full object-contain shadow-lg"
                            />


                            {/* Icono de información en la parte superior izquierda */}
                            <button
                                className="absolute top-4 left-4 bg-black/10 text-white p-2 rounded-full hover:bg-black/40 transition"
                                onClick={(e) => {
                                    e.stopPropagation(); // 📌 Evita cerrar al hacer clic en la "i"
                                    setMostrarInfo(!mostrarInfo);
                                }}
                            >
                                <Info size={20} />
                            </button>

                            {/* Etiqueta del título con animación y eliminación al mostrar la info */}
                            <AnimatePresence>
                                {!mostrarInfo && (
                                    <motion.div
                                        className="absolute bottom-[-36px] right-[0px] bg-black/70 text-white text-xs md:text-sm px-4 py-2 rounded-b-lg cursor-pointer"
                                        initial={{ opacity: 0, x: -50, y: 50 }}
                                        animate={{ opacity: 1, x: 0, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                        onClick={(e) => {
                                            e.stopPropagation(); // 📌 Evita cerrar al hacer clic en el título
                                            setMostrarInfo(true);
                                        }}
                                    >
                                        {titulo}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Información de la imagen (solo si está en modo info) */}
                        <AnimatePresence>
                            {mostrarInfo && (
                                <motion.div
                                    className="w-full bg-black/70 text-white text-sm p-4 rounded-b-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <p className="text-gray-300 text-[10px]">{detalles}</p>
                                        <p className="font-bold text-end">{titulo}</p>
                                    </div>
                                    <p className="mt-2">{informacion || "No hay información adicional disponible."}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
