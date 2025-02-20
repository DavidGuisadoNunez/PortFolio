import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Football Teams App",
      description: "A web application displaying a list of football teams, including their country and stadium.",
      github: "https://github.com/tuusuario/football-teams-app",
    },
    {
      title: "Notes Manager",
      description: "An intuitive application to create, edit, delete, and manage notes efficiently.",
      github: "https://github.com/tuusuario/notes-manager",
    },
    {
      title: "Car Dealership",
      description: "A vehicle dealership platform where users can browse and purchase cars.",
      github: "https://github.com/tuusuario/car-dealership",
    },
    {
      title: "Personal Portfolio",
      description: "A modern and animated portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
      github: "https://github.com/tuusuario/portfolio",
    }
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
            number: { value: 60 },
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
          className="bg-gray-900 bg-opacity-90 border-2 border-yellow-400 rounded-xl shadow-lg p-10 md:p-16 w-full max-w-5xl text-center flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Título con animación */}
          <motion.h1
            className="text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Projects
          </motion.h1>

          <motion.p
            className="text-lg text-gray-400 text-center max-w-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Here are some of the projects I have worked on:
          </motion.p>

          {/* Grid con los proyectos */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full overflow-visible"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, staggerChildren: 0.2 } },
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-700 hover:border-yellow-400 transition-all duration-300 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 flex items-center gap-2 text-lg hover:underline"
                >
                  <FaGithub className="text-2xl" /> View on GitHub
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </main>
    </>
  );
}
