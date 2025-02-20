import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEye, faUser, faCogs, faFolder, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Home() {
  const [animatingViewCV, setAnimatingViewCV] = useState(false);
  const [animatingDownloadCV, setAnimatingDownloadCV] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleCVClick = () => {
    setAnimatingViewCV(true);
    setTimeout(() => {
      window.open("/cv", "_blank");
      setAnimatingViewCV(false);
    }, 2000);
  };

  const handleDownloadClick = () => {
    setAnimatingDownloadCV(true);
    setTimeout(() => {
      window.open("/cv.pdf", "_blank");
      setAnimatingDownloadCV(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
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
        className="absolute inset-0 w-full h-full"
      />

      {/* Contenido principal */}
      <main className="flex flex-col items-center justify-center flex-grow text-white text-center p-6 pt-20 md:pt-32 space-y-10">
        
        {/* Botones de navegación */}
        <motion.div
          className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            { icon: faUser, href: "/about", label: "About" },
            { icon: faCogs, href: "/skills", label: "Skills" },
            { icon: faFolder, href: "/projects", label: "Projects" },
            { icon: faEnvelope, href: "/contact", label: "Contact" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="group flex items-center space-x-4 bg-gray-900 p-4 rounded-xl shadow-lg border border-yellow-400 hover:shadow-yellow-400 transition-all duration-300 md:text-xl"
              whileHover={{ scale: 1.1 }}
            >
              <FontAwesomeIcon icon={item.icon} className="text-yellow-400 text-2xl" />
              <span className="text-white">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>

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
          className="relative flex items-center justify-center mt-6"
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
        <div className="flex flex-col space-y-4">
          {!animatingViewCV && (
            <motion.button
              onClick={handleCVClick}
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition text-lg md:text-xl flex items-center justify-center gap-3"
              whileHover={{ scale: 1.1 }}
            >
              <FontAwesomeIcon icon={faEye} />
              View CV
            </motion.button>
          )}
          {!animatingDownloadCV && (
            <motion.button
              onClick={handleDownloadClick}
              className="border border-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition text-lg md:text-xl flex items-center justify-center gap-3"
              whileHover={{ scale: 1.1 }}
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </motion.button>
          )}
        </div>
      </main>

      {/* Iconos de redes sociales - SIEMPRE ABAJO DEL TODO */}
      <motion.footer
        className="w-full flex justify-center py-6 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex space-x-6">
          {[
            { icon: faGithub, href: "https://github.com/" },
            { icon: faLinkedin, href: "https://linkedin.com/" },
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
