import { Heart } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-items-center min-h-screen p-8 pb-15 gap-16 sm:p-15 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full">
        <div className="flex w-full justify-between items-center">
          <img src="logo.svg" alt="logo" className="w-32" />
          <Navbar />
        </div>
        <section className="w-full bg-[#f5f2eb] -ml-8 -mr-8 sm:-ml-15 sm:-mr-40 sm:p-8 sm:px-15 sm:py-20 space-y-3">
          <h1 className="text-foco-700 text-3xl font-bold">
            Accesibilizando la educación
          </h1>
          <p className="text-sm text-foco-600 max-w-xl">
            Foco es una herramienta para hacer la educación un poco más
            accesible para personas con problemas sensoriales relacionados al
            ruido e hipoacusia.
          </p>
        </section>
      </main>
      <footer className="row-start-3 gap-x-2 flex flex-wrap items-center justify-center text-xs text-gray-500">
        Made with <Heart className="w-3 h-3" /> by PFG
      </footer>
    </div>
  );
}
