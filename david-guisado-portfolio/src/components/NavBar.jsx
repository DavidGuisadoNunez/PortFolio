import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative">
        
        {/* 🔹 Avatar + Nombre */}
        <div className="flex items-center space-x-3 flex-1">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-400 overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-xl md:text-2xl font-bold">David Guisado</h1>
        </div>

        {/* 🔹 Enlaces CENTRADOS */}
        <ul className="hidden md:flex space-x-6 text-lg absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link, idx) => {
            const isActive = currentPath === link.href;
            return (
              <li key={idx}>
                <Link
                  href={link.href}
                  className={`${isActive ? "text-yellow-400 font-bold" : "text-white"} hover:text-yellow-400 transition-colors`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* 🔹 Iconos DERECHA */}
        <div className="hidden md:flex space-x-4 text-2xl flex-1 justify-end">
          <a href="https://github.com/DavidGuisadoNunez" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/david-guisado-nu%C3%B1ez-933428271/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* 🔹 Menú hamburguesa en móviles */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔹 Menú desplegable en móviles */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link, idx) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={idx}
                href={link.href}
                className={`${isActive ? "text-yellow-400 font-bold" : "text-white"} transition-colors`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/DavidGuisadoNunez" target="_blank" rel="noopener noreferrer">
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
