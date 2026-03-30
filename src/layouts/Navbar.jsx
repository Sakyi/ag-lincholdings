import React, { use, useEffect, useState } from "react";
import { Briefcase, Code, Menu, X } from "lucide-react";
import Logo from "../assets/aglinkslogo.png";

import { scrollToSection, useScrollSpy } from "../hooks/useScrollSpy";
import { NAV_LINKS } from "../utils/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (sectionid) => {
    scrollToSection(sectionid);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-5 transition-all duration-300 font-display
      ${isScrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"} `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Official Company Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src={Logo}
              alt="AG-LINC Holdings Logo"
              className={`transition-all duration-300  ${isScrolled ? "h-10" : "h-19"}`}
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-secondary transition-colors">
                AG-LINC
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">
                Holdings
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium uppercase tracking-widest transition-colors duration-300
                ${activeSection === link.id ? "text-secondary" : "text-white/80 hover:text-secondary"}
                `}
              >
                {link.label}
              </button>
            ))}

            {/* Contact CTA */}
            <button
              onClick={() => handleNavClick("contact")}
              className="px-6 py-2.5 bg-secondary text-primary text-sm font-bold rounded-sm hover:bg-accent transition-all duration-300"
            >
              CONTACT US
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-secondary transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-primary border-t border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 py-10 space-y-6 flex flex-col items-center">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-xl font-medium tracking-wide ${
                activeSection === link.id ? "text-secondary" : "text-white/70"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full max-w-xs py-4 bg-secondary text-primary font-bold rounded-sm mt-4"
          >
            CONTACT US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* Navigation Bar */
}
{
  /* <nav className="absolute top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary flex items-center justify-center rounded-sm shadow-lg">
            <span className="text-primary font-bold text-xl">AG</span>
          </div>
          <div className="text-white">
            <div className="font-bold text-lg tracking-wider">AG-LINC</div>
            <div className="text-[10px] text-white/60 uppercase tracking-[0.2em]">
              Group Limited
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-white/80 text-sm font-medium tracking-wide">
          {["About", "Sectors", "Projects", "Sustainability", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-secondary transition-colors"
              >
                {item}
              </a>
            ),
          )}
        </div>

        <button className="px-6 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary transition-all text-xs font-bold uppercase tracking-widest rounded-sm">
          Client Portal
        </button>
      </nav> */
}
