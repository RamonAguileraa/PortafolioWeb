"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function AboutNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled 
          ? "backdrop-blur-md bg-white/80 dark:bg-black/80 shadow-md" 
          : "bg-white/60 dark:bg-black/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow cursor-pointer"
        >
          Ramón Aguilera
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition font-medium">
            Inicio
          </Link>
          <Link href="/about" className="text-black dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition font-medium">
            Sobre mí
          </Link>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <div
            className="text-black dark:text-white z-50 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-md px-6 pb-6 pt-4 flex flex-col gap-6"
          >
            <Link
              href="/"
              className="text-black dark:text-white text-lg font-medium hover:text-pink-500 dark:hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="text-black dark:text-white text-lg font-medium hover:text-pink-500 dark:hover:text-pink-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Sobre mí
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
