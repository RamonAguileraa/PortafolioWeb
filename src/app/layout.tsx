import "./globals.css";
import { Inter } from "next/font/google";
import ClientLayout from "./components/ClientLayout"; // nuevo componente

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
  themeColor: "#000000",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
