import Navbar from "../components/NavBar";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaCar } from "react-icons/fa";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Fondo de partículas animado (pero no dentro del contenedor) */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            color: { value: "#ffffff" },
            move: { enable: true, speed: 1, direction: "none", random: true },
            number: { value: 80 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: 3, random: true },
          },
        }}
        className="absolute inset-0 w-full h-full"
      />

          <main className="relative flex flex-col items-center justify-center min-h-screen w-screen text-white p-6 pt-20 md:pt-24">
        
        {/* Contenedor con fondo sólido y borde */}
        <motion.div
          className="bg-gray-900 bg-opacity-90 border-2 border-yellow-400 rounded-xl shadow-lg p-10 md:p-16 w-full max-w-4xl text-center flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Título con animación */}
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 max-w-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Feel free to reach out to me through any of the platforms below:
          </motion.p>

          {/* Contenedor flex para información y avatar */}
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* Información de contacto */}
            <div className="text-center md:text-left space-y-4 text-xl md:text-2xl">
              <p className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-3 text-yellow-400 text-3xl" /> dguisado7@gmail.com
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-3 text-yellow-400 text-3xl" /> +34 605 851 521
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaCalendarAlt className="mr-3 text-yellow-400 text-3xl" /> February 2, 2005
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-3 text-yellow-400 text-3xl" /> Sevilla, España
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaCar className="mr-3 text-yellow-400 text-3xl" /> Vehículo propio
              </p>
            </div>

            {/* Avatar con animación */}
            <motion.div
              className="w-48 h-48 md:w-56 md:h-56 bg-gray-700 rounded-full flex items-center justify-center text-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5 }}
            >
              <Image src="/avatar.png" alt="David Guisado" width={220} height={220} className="w-full h-full object-cover rounded-full" />
            </motion.div>
          </motion.div>

          {/* Iconos de redes sociales centrados abajo y más grandes */}
          <motion.div
            className="mt-10 flex space-x-10 text-5xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://github.com/DavidGuisadoNunez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-transform transform hover:scale-125"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/david-guisado-nu%C3%B1ez-933428271/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400 transition-transform transform hover:scale-125"
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
