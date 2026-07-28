import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    { id: "about", name: "About", href: "#about" },
    { id: "education", name: "Education", href: "#education" },
    { id: "skills", name: "Skills", href: "#skills" },
    { id: "projects", name: "Projects", href: "#projects" },
    { id: "contact", name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Active:", entry.target.id); // Debug
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-100px 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <nav className="w-full sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-lg">
      <div className="max-w-full h-20 px-6 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-cyan-400">SAJJAD</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`relative pb-2 transition-all duration-300
${
  active === link.id
    ? "text-cyan-400 after:w-full"
    : "text-slate-300 hover:text-cyan-400 after:w-0 hover:after:w-full"
}
after:content-['']
after:absolute after:left-0 after:-bottom-1
after:h-[2px] after:bg-cyan-400
after:transition-all after:duration-300`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-slate-900 text-slate-300 flex flex-col items-center gap-6 py-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="hover:text-cyan-400 cursor-pointer">
              <a
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setOpen(false); // Click ke baad menu band ho jayega
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
