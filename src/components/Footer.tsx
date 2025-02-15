"use client";

import { datosContacto } from "@/datos/datosGenerales"; // ✅ Asegurar que esta línea esté presente
import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 lg:px-8 bg-fondoClaro dark:bg-fondoOscuro shadow-lg relative group mt-auto">
      {/* Línea luminosa */}
      <div className="absolute top-0 left-0 w-0 h-0.5 bg-acento opacity-0 transition-all duration-700 ease-in-out group-hover:w-full group-hover:opacity-100"></div>

      {/* Contenedor flexible que cambia en móviles */}
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        {/* Copyright */}
        <div>
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} {datosContacto?.nombreProyecto || "Mi Proyecto"}
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex gap-4">
          <a href={datosContacto?.redes?.instagram || "#"} target="_blank" className="transition group-hover:text-acento">
            <Instagram size={20} />
          </a>
          <a href={datosContacto?.redes?.linkedin || "#"} target="_blank" className="transition group-hover:text-acento">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${datosContacto?.email || "email@example.com"}`} className="transition group-hover:text-acento">
            <Mail size={20} />
          </a>
        </div>

        {/* Crédito al desarrollador */}
        <div>
          <p className=" text-sm">
            Desarrollado por{" "}
            <Link href="https://stiancode.dev/" target="_blank" className="text-acento inline-block transition-transform duration-500 group-hover:scale-110 transform origin-left">
              Stian Code
            </Link>
            <span className="inline-block text-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ml-3">
              ♡
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
