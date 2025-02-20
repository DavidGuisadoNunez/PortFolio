import Image from "next/image";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function CV() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Fondo de partículas animado */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            color: { value: "#ffffff" },
            move: { enable: true, speed: 1, direction: "none", random: true },
            number: { value: 60 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: 2, random: true },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />

        <main className="relative flex flex-col items-center justify-center min-h-screen w-full text-white px-6 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        {/* Contenedor con borde y fondo oscuro */}
        <div className="bg-gray-900 bg-opacity-90 border-2 border-yellow-400 rounded-xl shadow-lg p-8 md:p-12 w-full max-w-3xl text-center">
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My CV</h1>
          <p className="text-lg text-gray-400 mb-6">
            Here is my full CV. You can view or download it.
          </p>

          {/* Imagen del CV */}
          <div className="w-full bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
            <Image
              src="/cv.jpg"
              alt="Curriculum Vitae"
              width={800}
              height={1000}
              className="rounded-md"
            />
          </div>

          {/* Botón de descarga */}
          <a
            href="/cv.pdf"
            download
            className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Download CV
          </a>
        </div>
      </main>
    </>
  );
}
