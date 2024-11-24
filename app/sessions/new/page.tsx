"use client"

import { ArrowBigDownDash } from "lucide-react";
import {NewSessionForm} from "@/components/sessions/new-session-form";

export default function NewSession() {
  return (
    <main className="flex flex-col gap-8 items-center sm:items-start w-full mb-auto">
      <section className="w-full sm:py-10 space-y-5 p-8 sm:px-20 flex flex-col items-center">
        <h1 className="inline-flex text-foco-700 text-xl sm:text-2xl font-bold gap-x-2">
          ¡Crea a una nueva sesión! <ArrowBigDownDash className="w-7 h-7 animate-bounce"/>
        </h1>
        <p className="text-sm text-gray-500 text-center sm:text-left">¿Eres profesor/a 👩‍🏫?, crea una nueva sesión para tu clase aquí!</p>
        <div className="w-full sm:max-w-xl">
          <NewSessionForm />
        </div>
      </section>
    </main>
  );
}
