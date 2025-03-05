"use client";

import { ReactNode } from "react";

interface SeccionInicioProps {
  children: ReactNode;
  id?: string;
}

export default function SeccionInicio({ children, id }: SeccionInicioProps) {
  return (
    <section
      id={id}
      className="flex flex-col justify-center items-center w-full min-h-screen md:min-h-dvh snap-section"
    >
      {children}
    </section>
  );
}
