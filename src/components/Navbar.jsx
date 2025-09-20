import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/logo.png"

const sections = ["home", "about", "experience", "projects", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(id);
        }
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition ${
        scrolled ? "bg-gray-950/90 backdrop-blur-xxs shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="#home" className="flex items-center text-2xl font-bold text-teal-400">
            <img className="w-15 h-11" src={logo} alt="Black hole img as Logo"/>
            SHerzod's Space
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`hover:text-teal-400 transition ${
                  active === section ? "text-teal-400" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 py-6 space-y-4 text-gray-300">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`block text-lg ${
                active === section ? "text-teal-400" : ""
              }`}
              onClick={() => setMenuOpen(false)} // close on click
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
