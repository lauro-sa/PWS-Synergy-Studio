"use client";

import { useEffect, useState } from "react";
import Seccion from "@/components/Seccion";
import BotonTema from "@/components/BotonTema";
import GaleriaFotografia from "@/components/GaleriaFotografia";
import GaleriaDron from "@/components/GaleriaDron";
import GaleriaReels from "@/components/GaleriaReels";
import TituloHundido from "@/components/TituloHundido";


export default function PaginaInicio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  // 📌 Al cargar la página, aseguramos que empiece en la parte superior
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".snap-section"));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const index = sections.indexOf(visibleSection.target as HTMLElement);
          setActiveIndex(index);
        }
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (isScrolling) return;
      setIsScrolling(true);

      setTimeout(() => {
        setIsScrolling(false);
      }, 800);

      const sections = Array.from(document.querySelectorAll(".snap-section"));
      let newIndex = activeIndex;

      if (event.deltaY > 0 && activeIndex < sections.length - 1) {
        newIndex = activeIndex + 1;
      } else if (event.deltaY < 0 && activeIndex > 0) {
        newIndex = activeIndex - 1;
      }

      sections[newIndex].scrollIntoView({ behavior: "smooth" });
      setActiveIndex(newIndex);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [activeIndex, isScrolling]);

  return (
    <div className="flex flex-col items-center justify-center space-y-12 w-full">
      {/* 📸 Sección de Fotografía */}
      <div id="fotografia" className="snap-section flex flex-col md:flex-row w-full items-center justify-center min-h-screen max-w-7xl mx-auto">
        <TituloHundido texto="FOTOGRAFÍA" />
        <div className="w-full flex items-center justify-center">
          <GaleriaFotografia />
        </div>
      </div>

      {/* 🚁 Sección de Vuelos de Drone */}
      <div id="vuelos" className="snap-section flex flex-col md:flex-row w-full items-center justify-center min-h-screen max-w-7xl mx-auto">
        <TituloHundido texto="VUELOS" />
        <div className="w-full flex items-center justify-center">
          <GaleriaDron />
        </div>
      </div>

      {/* 📲 Sección de Publicidad */}
      <div id="publicidad" className="snap-section flex flex-col md:flex-row w-full items-center justify-center min-h-screen max-w-7xl mx-auto">
        <TituloHundido texto="PUBLICIDAD" />
        <div className="w-full flex items-center justify-center">
          <GaleriaReels />
        </div>
      </div>

      {/* 🔘 Botón de tema */}
      <div className="snap-section flex justify-center items-center w-full py-10 min-h-screen">
        <BotonTema />
      </div>
    </div>
  );
}
