"use client";

import { Inter } from "next/font/google";
import AboutNavbar from "../components/AboutNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} bg-black text-white`}>
      <AboutNavbar />
      <div className="pt-24">{children}</div>
    </div>
  );
}
