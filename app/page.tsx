"use client"

import { ArrowBigDownDash } from "lucide-react";
import {JoinSessionForm} from "@/components/sessions/join-session-form";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start w-full mb-auto">
      <section className="w-full bg-[#f5f2eb] sm:py-20 space-y-5 p-8 sm:px-20">
        <h1 className="text-foco-700 text-3xl font-bold">
          Accesibilizando la educación
        </h1>
        <p className="text-base text-foco-600 max-w-xl">
          Foco es una herramienta para hacer la educación un poco más
          accesible para personas con <span className="font-medium text-foco-800">alteraciones sensoriales</span> asociados a los estimulos
          auditivos.
        </p>
      </section>
      <section className="w-full sm:py-10 space-y-5 p-8 sm:px-20 flex flex-col items-center">
        <h1 className="inline-flex text-foco-700 text-xl sm:text-2xl font-bold gap-x-2">
          ¡Únete a una sesión! <ArrowBigDownDash className="w-7 h-7 animate-bounce"/>
        </h1>
        <div className="mx-auto">
          <JoinSessionForm/>
        </div>
      </section>
    </main>
  );
}
