"use client";

import { useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrollingUp = latest < lastY;
    const bottomReached = window.innerHeight + latest >= document.body.scrollHeight - 50;

    setVisible(scrollingUp || latest < 10 || bottomReached);
    setLastY(latest);
  });

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-full px-6 py-3 flex items-center gap-6 shadow-lg"
    >
      <a
        href="https://www.instagram.com/ramon_aguileraa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-400 transition"
      >
        <FaInstagram className="text-xl" />
        <span className="text-sm hidden sm:inline">Instagram</span>
      </a>

      <a
        href="https://wa.me/52161422833958?text=Hola%20Ramón%2C%20vi%20tu%20portafolio%20y%20me%20gustaría%20contactarte%20por%20mensaje."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-400 transition"
      >
        <FaWhatsapp className="text-xl" />
        <span className="text-sm hidden sm:inline">WhatsApp (solo mensajes)</span>
      </a>

      <a
        href="https://www.linkedin.com/in/ramon-aguilera"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-400 transition"
      >
        <FaLinkedin className="text-xl" />
        <span className="text-sm hidden sm:inline">LinkedIn</span>
      </a>

      <a
        href="https://github.com/RamonAguileraa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-400 transition"
      >
        <FaGithub className="text-xl" />
        <span className="text-sm hidden sm:inline">GitHub</span>
      </a>
    </motion.footer>
  );
}
