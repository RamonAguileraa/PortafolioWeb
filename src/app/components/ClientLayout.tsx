"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavbar = pathname !== "/about";

  return (
    <>
      {showNavbar && <Navbar />}
      <div className="min-h-screen">{children}</div>
    </>
  );
}
