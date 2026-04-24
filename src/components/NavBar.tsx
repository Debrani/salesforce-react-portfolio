import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
 
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Download Resume", href: "#download-resume" },
  { label: "Blogs", href: "#blogs" },
];
 
export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "projects", "certifications", "download-resume", "blogs"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          current = navItems.find((n) => n.href === `#${id}`)?.label ?? "Home";
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActive(label);
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={scrolled ? { padding: "12px 0", background: "rgba(15,20,40,0.8)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)" } : { padding: "20px 0" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.span whileHover={{ scale: 1.05 }} className="text-lg font-bold" style={{ color: "#00d4ff", fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 10px rgba(0,212,255,0.5)" }}>
          P.DEBRANI<span style={{ color: "#fff" }}></span>
        </motion.span>
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href, item.label)} className="relative text-sm font-medium transition-colors duration-200" style={{ color: active === item.label ? "#00d4ff" : "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px transition-all duration-300" style={{ width: active === item.label ? "100%" : "0%", background: "linear-gradient(90deg,#00d4ff,#7c3aed)" }} />
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {[0, 1, 2].map((i) => (
            <motion.span key={i} className="block h-0.5 w-6 rounded-full" style={{ background: "#00d4ff" }}
              animate={mobileOpen ? (i === 0 ? { rotate: 45, y: 8 } : i === 1 ? { opacity: 0 } : { rotate: -45, y: -8 }) : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }} />
          ))}
        </button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden glass-panel">
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={(e) => handleNavClick(e, item.href, item.label)} className="block text-sm font-medium py-2" style={{ color: active === item.label ? "#00d4ff" : "#94a3b8", fontFamily: "'Inter', sans-serif" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}