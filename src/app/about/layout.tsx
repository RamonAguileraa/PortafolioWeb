"use client";

import { Inter } from "next/font/google";
import AboutNavbar from "../components/AboutNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black transition-colors duration-300`}>
      <AboutNavbar />
      <div className="pt-24">{children}</div>
    </div>
  );
}
