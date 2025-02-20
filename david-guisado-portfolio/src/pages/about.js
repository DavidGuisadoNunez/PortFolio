import Image from "next/image";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaDatabase, FaCodeBranch } from "react-icons/fa";

export default function About() {
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
            number: { value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: 3, random: true },
          },
        }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      />

      <main className="relative flex flex-col items-center justify-center min-h-screen text-white p-6 pt-20 md:pt-24 overflow-x-hidden">
        {/* Contenedor con borde y fondo diferenciado */}
        <motion.div
          className="bg-gray-900 bg-opacity-90 border-2 border-yellow-400 rounded-xl shadow-lg p-10 md:p-16 w-full max-w-4xl text-center flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Avatar con efecto flotante */}
          <motion.div
            className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gray-800 flex items-center justify-center shadow-lg"
            initial={{ y: -10 }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/avatar.png" alt="David Guisado" width={180} height={180} className="w-full h-full object-cover rounded-full" />
          </motion.div>

          {/* Título con animación */}
          <motion.h1
            className="text-5xl font-bold mt-6 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 max-w-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Passionate full-stack developer with experience in building dynamic web applications.
          </motion.p>

          {/* Sección de descripción detallada */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-col items-center">
              <FaLaptopCode className="text-yellow-400 text-5xl mb-3" />
              <h3 className="text-xl font-semibold">Frontend</h3>
              <p className="text-gray-400 text-sm">
                Expertise in **React, Angular, Next.js**, creating user-friendly and responsive interfaces.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaDatabase className="text-yellow-400 text-5xl mb-3" />
              <h3 className="text-xl font-semibold">Backend</h3>
              <p className="text-gray-400 text-sm">
                Experience with **Node.js, Express, MongoDB**, and APIs for scalable and secure applications.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <FaCodeBranch className="text-yellow-400 text-5xl mb-3" />
              <h3 className="text-xl font-semibold">Version Control</h3>
              <p className="text-gray-400 text-sm">
                Proficient in **Git & GitHub**, managing repositories and collaborative development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
