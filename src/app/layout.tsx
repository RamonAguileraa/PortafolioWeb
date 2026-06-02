import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from './components/Navbar'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  metadataBase: new URL('https://ramonaguilera.dev'),
  title: {
    default: 'Ramón Aguilera | Ing. en TI & Full Stack Developer en Chihuahua',
    template: '%s | Ramón Aguilera'
  },
  description: 'Ingeniero en Tecnologías de la Información y Desarrollador de Software en Chihuahua, México. Desarrollador en Secretaría de Educación, founder de Innova. Especializado en React, Next.js, C#, .NET, Oracle, UI/UX y marketing digital.',
  keywords: [
    'Ramón Aguilera',
    'desarrollador web Chihuahua',
    'Full Stack Developer Chihuahua',
    'programador Chihuahua México',
    'desarrollo web Chihuahua',
    'aplicaciones móviles Chihuahua',
    'React developer México',
    'Next.js developer',
    'Studioko',
    'diseño web Chihuahua',
    'UI/UX Chihuahua',
    'marketing digital Chihuahua',
    'ingeniero TI Chihuahua',
    'UTCH',
    'freelancer Chihuahua'
  ],
  authors: [{ name: 'Ramón Aguilera', url: 'https://github.com/RamonAguileraa' }],
  creator: 'Ramón Aguilera',
  publisher: 'Ramón Aguilera',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Ramón Aguilera | Ing. en TI & Full Stack Developer',
    description: 'Ingeniero en TI y Full Stack Developer en Chihuahua. Especializado en React, Next.js, apps móviles y diseño UI/UX.',
    url: 'https://ramonaguilera.dev',
    siteName: 'Ramón Aguilera - Portafolio',
    locale: 'es_MX',
    alternateLocale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/yo.png',
        width: 800,
        height: 600,
        alt: 'Ramón Aguilera - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramón Aguilera | Full Stack Developer Chihuahua',
    description: 'Ingeniero en TI y Full Stack Developer. React, Next.js, apps móviles y UI/UX.',
    images: ['/yo.png'],
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
  alternates: {
    canonical: 'https://ramonaguilera.dev',
    languages: {
      'es-MX': 'https://ramonaguilera.dev',
      'en-US': 'https://ramonaguilera.dev/en',
    },
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ramón Aguilera',
  jobTitle: 'Ingeniero en Tecnologías de la Información & Full Stack Developer',
  description: 'Full Stack Developer especializado en React, Next.js y desarrollo de aplicaciones móviles en Chihuahua, México.',
  url: 'https://ramonaguilera.dev',
  image: 'https://ramonaguilera.dev/yo.png',
  email: 'ramonaguileradve@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chihuahua',
    addressRegion: 'Chihuahua',
    addressCountry: 'MX'
  },
  sameAs: [
    'https://github.com/RamonAguileraa',
    'https://www.linkedin.com/in/ramón-aguilera-95a2732a9',
    'https://www.instagram.com/ramon_aguileraa'
  ],
  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'React Native', 'UI/UX Design', 'Web Development'],
  worksFor: {
    '@type': 'Organization',
    name: 'Secretaría de Educación del Estado de Chihuahua',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-neutral-950 dark:bg-neutral-950 light:bg-white text-white dark:text-white light:text-neutral-900 antialiased transition-colors duration-300`}>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
