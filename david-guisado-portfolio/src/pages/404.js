import Navbar from "../components/Navbar";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { motion } from "framer-motion";

export default function NotFound() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Navbar />

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
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: 3, random: true },
          },
        }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      />

      <main className="relative flex flex-col items-center justify-center min-h-screen text-white p-6 pt-20 md:pt-24 text-center">
        {/* Contenedor con borde y fondo diferenciado */}
        <motion.div
          className="bg-gray-900 bg-opacity-90 border-2 border-yellow-400 rounded-xl shadow-lg p-10 md:p-16 w-full max-w-3xl flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Título con animación */}
          <motion.h1
            className="text-6xl font-bold mb-4 text-yellow-400"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            404
          </motion.h1>

          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-lg text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            Oops! The page you are looking for does not exist.
          </motion.p>

          {/* Botón para volver a la Home */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link 
            href="/" 
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
                Go Back Home
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
