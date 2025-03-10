"use client";

import { ReactNode } from "react";

interface SeccionProps {
  children: ReactNode;
  className?: string;
}

export default function Seccion({ children, className }: SeccionProps) {
  return (
    <section className={`border-2 border-red-700 w-full mx-auto px-4 flex flex-col ${className}`}>
      {children}
    </section>
  );
}
