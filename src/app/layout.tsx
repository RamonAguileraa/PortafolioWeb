import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Ramón Aguilera | Full Stack Developer',
  description: 'Portafolio profesional de Ramón Aguilera. Desarrollo web, aplicaciones móviles, UI/UX y marketing digital.',
  keywords: [
    'Ramón Aguilera',
    'portafolio',
    'desarrollador web',
    'fullstack',
    'Next.js',
    'React',
    'TypeScript',
    'UI/UX',
    'Chihuahua',
    'México'
  ],
  authors: [{ name: 'Ramón Aguilera', url: 'https://github.com/RamonAguileraa' }],
  creator: 'Ramón Aguilera',
  openGraph: {
    title: 'Ramón Aguilera | Full Stack Developer',
    description: 'Creando experiencias digitales excepcionales a través del código y el diseño.',
    url: 'https://ramonaguilera.dev',
    siteName: 'Ramón Aguilera',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramón Aguilera | Full Stack Developer',
    description: 'Creando experiencias digitales excepcionales a través del código y el diseño.',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-neutral-950 text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
