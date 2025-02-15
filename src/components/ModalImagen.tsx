"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";

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

                    {/* Contenedor principal */}
                    <motion.div
                        className="relative w-[100%] md:w-[80%] lg:w-[70%] max-w-2xl p-2 md:p-4 flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                        exit={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        {/* Imagen principal */}
                        <motion.div
                            className={`relative w-full ${mostrarInfo ? "h-[50%]" : "h-auto"} max-h-[90vh] transition-all duration-500`}
                            onClick={() => mostrarInfo && setMostrarInfo(false)}
                        >
                            <Image
                                src={foto}
                                alt={titulo}
                                width={1200}
                                height={1600}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
                                className="w-full h-full object-contain shadow-lg"
                            />

                            {/* Icono de información */}
                            <button
                                className="absolute top-4 left-4 bg-black/10 text-white p-2 rounded-full hover:bg-black/40 transition"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMostrarInfo(!mostrarInfo);
                                }}
                            >
                                <Info size={20} />
                            </button>
                        </motion.div>

                        {/* ✅ Etiqueta de título animada (ahora aparece desde la izquierda y sube) */}
                        <motion.div
                            className="absolute bottom-[-13px] right-[16px] bg-black/80 text-white px-4 py-1 text-sm rounded-bl-lg rounded-br-lg cursor-pointer"
                            initial={{ opacity: 0, x: -100, y: 20 }} // Aparece desde la izquierda y sube
                            animate={{ opacity: mostrarInfo ? 0 : 1, x: 0, y: 0 }} // Se esconde si se abre la info
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            onClick={() => setMostrarInfo(!mostrarInfo)}
                        >
                            {titulo}
                        </motion.div>

                        {/* Información adicional */}
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
                                    <p className="mt-2 text-start text-[12px]">{informacion || "No hay información adicional disponible."}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
