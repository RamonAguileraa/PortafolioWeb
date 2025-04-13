"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const scrollToSection = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "/about" }, // página externa
  { name: "Experiencia", href: "#experiencia" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-lg bg-black/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Nombre */}
        <span
          onClick={() => scrollToSection("#inicio")}
          className="text-xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow cursor-pointer"
        >
          Ramón Aguilera
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((link, idx) =>
            link.href.startsWith("/") ? (
              <Link
                key={idx}
                href={link.href}
                className="text-white hover:text-pink-400 transition font-medium"
              >
                {link.name}
              </Link>
            ) : (
              <span
                key={idx}
                onClick={() => scrollToSection(link.href)}
                className="cursor-pointer text-white hover:text-pink-400 transition font-medium"
              >
                {link.name}
              </span>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden text-white z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md flex flex-col gap-6 px-6 pb-6 pt-4">
          {links.map((link, idx) =>
            link.href.startsWith("/") ? (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium hover:text-pink-400 transition"
              >
                {link.name}
              </Link>
            ) : (
              <span
                key={idx}
                onClick={() => {
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className="text-white text-lg font-medium hover:text-pink-400 transition"
              >
                {link.name}
              </span>
            )
          )}
        </div>
      )}
    </motion.nav>
  );
}
