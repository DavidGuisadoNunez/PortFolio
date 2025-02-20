import Navbar from "../components/Navbar";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiFigma, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, borderColor: "border-orange-500", glow: "hover:shadow-orange-500/50" },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, borderColor: "border-blue-500", glow: "hover:shadow-blue-500/50" },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, borderColor: "border-yellow-400", glow: "hover:shadow-yellow-400/50" },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, borderColor: "border-blue-500", glow: "hover:shadow-blue-500/50" },
    { name: "React", icon: <FaReact className="text-blue-400" />, borderColor: "border-blue-400", glow: "hover:shadow-blue-400/50" },
    { name: "Angular", icon: <FaAngular className="text-red-500" />, borderColor: "border-red-500", glow: "hover:shadow-red-500/50" },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" />, borderColor: "border-white", glow: "hover:shadow-white/50" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, borderColor: "border-green-500", glow: "hover:shadow-green-500/50" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, borderColor: "border-green-400", glow: "hover:shadow-green-400/50" },
    { name: "Figma", icon: <SiFigma className="text-pink-400" />, borderColor: "border-pink-400", glow: "hover:shadow-pink-400/50" },
  ];

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
            number: { value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: 3, random: true },
          },
        }}
        className="absolute inset-0 w-full h-full overflow-hidden"
      />

      {/* Contenedor sin scroll horizontal */}
      <main className="relative flex flex-col items-center justify-center min-h-screen text-white p-6 pt-20 md:pt-24 overflow-x-hidden">
        
        {/* Contenedor con borde y fondo diferenciado */}
        <motion.div
          className="bg-gray-900 bg-opacity-90 border-2 border-yellow-400 rounded-xl shadow-lg p-10 md:p-16 w-full max-w-5xl text-center flex flex-col items-center overflow-visible"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Título con animación */}
          <motion.h1
            className="text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Skills
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 text-center max-w-3xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Here are some of the technologies I use:
          </motion.p>

          {/* Grid con distribución RESPONSIVA */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 md:grid-rows-2 gap-6 w-full max-w-screen-lg overflow-visible"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, staggerChildren: 0.2 } },
            }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`bg-gray-800 text-white p-6 md:p-8 rounded-xl shadow-lg flex flex-col items-center justify-center space-y-2 
                border-2 ${skill.borderColor} ${skill.glow} transition-all duration-300 w-full max-w-[350px] md:max-w-[200px]`}
                whileHover={{ scale: 1.15, rotate: 5, boxShadow: "0px 0px 15px rgba(255,255,255,0.5)" }}
                whileTap={{ scale: 0.9 }}
                animate={{ y: [0, -10, 0], transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
              >
                <motion.div
                  className="text-6xl md:text-7xl"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100, damping: 10, delay: index * 0.1 }}
                >
                  {skill.icon}
                </motion.div>
                <span className="text-lg md:text-xl font-semibold whitespace-nowrap">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
