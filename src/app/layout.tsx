import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./components/ClientLayout";
import { ThemeProvider } from "./contexts/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ramon Aguilera | Portafolio",
  description: "Portafolio profesional de Ramon Aguilera, desarrollador fullstack.",
  keywords: [
    "Ramon Aguilera",
    "portafolio",
    "desarrollador web",
    "fullstack",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "UI/UX",
    "proyectos",
    "Chihuahua"
  ],
  authors: [{ name: "Ramon Aguilera", url: "https://github.com/RamonAguileraa" }],
  creator: "Ramon Aguilera",
  openGraph: {
    title: "Ramon Aguilera | Portafolio",
    description: "Desarrollador web fullstack enfocado en experiencias visuales con Next.js.",
    url: "https://tu-dominio.com",
    siteName: "Portafolio de Ramon Aguilera",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramon Aguilera | Portafolio",
    description: "Portafolio profesional como desarrollador fullstack.",
    creator: "@tu_usuario",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.className} bg-black text-white dark:bg-black dark:text-white light:bg-white light:text-black transition-colors duration-300`}>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
