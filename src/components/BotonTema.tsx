"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function BotonTema() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Evita errores en SSR

  const temaActual = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(temaActual === "dark" ? "light" : "dark")}
      className="p-2 border rounded-lg transition duration-300 dark:bg-gray-800 dark:text-white bg-gray-200 text-gray-900 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {temaActual === "dark" ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}
    </button>
  );
}
