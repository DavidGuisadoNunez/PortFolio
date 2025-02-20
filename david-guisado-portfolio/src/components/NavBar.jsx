import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Nombre en la izquierda */}
        <h1 className="text-2xl font-bold">David Guisado</h1>

        {/* Enlaces en desktop */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* Iconos de GitHub y LinkedIn en desktop */}
        <div className="hidden md:flex space-x-4 text-2xl">
          <a href="https://github.com/DavidGuisadoNunez" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Menú hamburguesa en móvil */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/tu-github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
