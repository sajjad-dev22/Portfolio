import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-full h-20 px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400">
          SAJJAD
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-slate-300 text-lg font-medium">
          <li className="cursor-pointer hover:text-cyan-400 transition-colors duration-300">
           <a href="#home"> Home</a>
          </li>
          <li className="cursor-pointer hover:text-cyan-400 transition-colors duration-300">
           <a href="#about"> About</a>
          </li>
          <li className="cursor-pointer hover:text-cyan-400 transition-colors duration-300">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer hover:text-cyan-400 transition-colors duration-300">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer hover:text-cyan-400 transition-colors duration-300">
           <a href="#contact"> Contact</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-slate-900 text-slate-300 flex flex-col items-center gap-6 py-6 text-lg font-medium">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
}
