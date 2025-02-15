"use client";

import { ReactNode } from "react";

interface SeccionProps {
  children: ReactNode;
  className?: string;
}

export default function Seccion({ children, className }: SeccionProps) {
  return (
    <section
      className={`w-full mx-auto bg-red-800/30 border px-4 flex flex-col flex-grow min-h-[calc(100vh-56px-80px)] md:min-h-[calc(100vh-64px-96px)] mt-[56px] md:mt-[64px] pb-[96px] overflow-hidden ${className}`}
    >
      {children}
    </section>
  );
}
