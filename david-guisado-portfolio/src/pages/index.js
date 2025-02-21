import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Home() {
  const router = useRouter();
  const [animatingViewCV, setAnimatingViewCV] = useState(false);
  const [animatingDownloadCV, setAnimatingDownloadCV] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleCVClick = () => {
    setAnimatingViewCV(true);
    window.open("/cv", "_blank"); // Abre inmediatamente
    setTimeout(() => setAnimatingViewCV(false), 2000); // Reactivar botón
  };

  const handleDownloadClick = () => {
    setAnimatingDownloadCV(true);
    window.open("/cv.pdf", "_blank"); // Abre inmediatamente
    setTimeout(() => setAnimatingDownloadCV(false), 2000);
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Fondo animado */}
      <Particles
        init={particlesInit}
        options={{
          background: { color: "#000000" },
          fullScreen: { enable: true, zIndex: -1 },
          particles: {
            color: { value: "#ffffff" },
            move: { enable: true, speed: 1, direction: "none", random: true },
            number: { value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: 3, random: true },
          },
        }}
        className="absolute inset-0 w-full h-full pointer-events-none" // Evita bloquear clicks
      />

      {/* Contenido principal */}
      <main className="relative flex flex-col items-center justify-center flex-grow text-white text-center p-6 pt-20 md:pt-32 space-y-10 z-10">
        {/* Texto central */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-5xl text-gray-300">Hello, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white">David Guisado</h1>
          <p className="text-2xl md:text-3xl text-yellow-400">
            <Typewriter
              words={["Full-Stack Developer", "JavaScript Enthusiast", "Next.js & React Developer", "Passionate Coder"]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
        </motion.div>

        {/* Avatar flotante */}
        <motion.div
          className="relative flex items-center justify-center mt-6 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full bg-yellow-500 absolute blur-xl opacity-20"></div>
          <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-4 border-yellow-400 shadow-lg flex items-center justify-center relative">
            <Image src="/avatar.png" alt="Avatar" width={350} height={350} className="object-contain rounded-full" />
          </div>
        </motion.div>

        {/* Botones de CV */}
        <div className="flex flex-col space-y-4 z-20">
          <motion.button
            onClick={handleCVClick}
            disabled={animatingViewCV}
            className={`bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition text-lg md:text-xl flex items-center justify-center gap-3 ${
              animatingViewCV ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={{ scale: animatingViewCV ? 1 : 1.1 }}
          >
            <FontAwesomeIcon icon={faEye} />
            View CV
          </motion.button>

          <motion.button
            onClick={handleDownloadClick}
            disabled={animatingDownloadCV}
            className={`border border-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition text-lg md:text-xl flex items-center justify-center gap-3 ${
              animatingDownloadCV ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={{ scale: animatingDownloadCV ? 1 : 1.1 }}
          >
            <FontAwesomeIcon icon={faDownload} />
            Download CV
          </motion.button>
        </div>
      </main>

      {/* Iconos de redes sociales - SIEMPRE ABAJO DEL TODO */}
      <motion.footer
        className="w-full flex justify-center py-6 mt-auto z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex space-x-6">
          {[
            { icon: faGithub, href: "https://github.com/DavidGuisadoNunez" },
            { icon: faLinkedin, href: "https://www.linkedin.com/in/david-guisado-nu%C3%B1ez-933428271/" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition text-4xl text-white"
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          ))}
        </div>
      </motion.footer>
    </div>
  );
}
