"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface TituloHundidoProps {
  texto: string;
}

export default function TituloHundido({ texto }: TituloHundidoProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <h2 className="opacity-0">{texto}</h2>;
  }

  const esOscuro = theme === "dark";

  return (
    <h2
      className="relative font-bold uppercase tracking-wide select-none text-4xl md:text-6xl lg:text-7xl
        flex items-center justify-center w-full md:w-auto md:h-full
        text-center md:text-left md:[writing-mode:vertical-rl] md:rotate-180"
      style={{
        color: esOscuro ? "#111111" : "#ffffff",
        textShadow: esOscuro
          ? "inset 3px 3px 5px rgba(255,255,255,0.2), inset -3px -3px 5px rgba(0,0,0,0.7)"
          : "inset 3px 3px 5px rgba(0,0,0,0.4), inset -3px -3px 5px rgba(255,255,255,0.8)",
        WebkitTextStroke: esOscuro
          ? "0.2px rgba(255,255,255,0.3)"
          : "0.5px rgba(0,0,0,0.3)",
      }}
    >
      {texto}
    </h2>
  );
}
