'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',
    'nav.contact': 'Contacto',
    'nav.viewProjects': 'Ver proyectos',

    // Hero
    'hero.title': 'Ing. en Tecnologías de la Información • Full Stack Developer',
    'hero.description': 'Creando experiencias digitales excepcionales a través del código y el diseño.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.contact': 'Contacto',
    'hero.downloadCV': 'Descargar CV',
    'hero.years': 'Años',
    'hero.projects': 'Proyectos',
    'hero.dedication': 'Dedicación',
    'hero.scroll': 'Scroll',

    // Services
    'services.label': 'Servicios',
    'services.title': 'Lo que puedo hacer',
    'services.subtitle': 'por ti',
    'services.webDev.title': 'Web Development',
    'services.webDev.description': 'Aplicaciones web modernas con React, Next.js y TypeScript. Rendimiento y escalabilidad.',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.description': 'Apps móviles multiplataforma con React Native. Experiencias fluidas para iOS y Android.',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.description': 'Interfaces intuitivas y atractivas. Prototipado en Figma centrado en el usuario.',
    'services.marketing.title': 'Marketing Digital',
    'services.marketing.description': 'Estrategias de marketing, SEO y gestión de redes sociales para impulsar tu marca.',
    'services.moreInfo': 'Más información',

    // Selected Work
    'selectedWork.label': 'Portafolio',
    'selectedWork.title': 'Selected',
    'selectedWork.titleItalic': 'Work',
    'selectedWork.viewAll': 'Ver todos',
    'selectedWork.exploreAll': 'Explorar todos los proyectos',

    // Experience
    'experience.label': 'Trayectoria',
    'experience.title': 'Experiencia',
    'experience.titleItalic': '& Logros',
    'experience.workExperience': 'Experiencia Laboral',
    'experience.leadership': 'Liderazgo & Comunidad',
    'experience.mentorship': 'Mentoría & Eventos',
    'experience.startups': 'Startups & Proyectos',
    'experience.current': 'Actual',
    'experience.viewRecognitions': 'Click para ver reconocimientos',

    // Contact
    'contact.label': 'Contacto',
    'contact.title': '¿Tienes un proyecto',
    'contact.titleItalic': 'en mente?',
    'contact.description': 'Estoy disponible para colaboraciones, proyectos freelance y oportunidades laborales.',
    'contact.downloadCV': 'Descargar CV',
    'contact.whatsapp': 'Mensaje directo',
    'contact.linkedin': 'Conectemos',
    'contact.github': 'Ver código',
    'contact.instagram': 'Sígueme',

    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madeWith': 'Diseñado y desarrollado con pasión.',

    // Tech Stack
    'techStack.title': 'Tecnologías que domino',

    // Projects page
    'projects.label': 'Portafolio completo',
    'projects.title': 'Todos los',
    'projects.titleItalic': 'proyectos',
    'projects.description': 'Una colección de mis trabajos en desarrollo web, aplicaciones móviles, videojuegos y marketing digital.',
    'projects.backHome': 'Volver al inicio',
    'projects.noProjects': 'No hay proyectos en esta categoría.',
    'projects.all': 'Todos',

    // About page
    'about.label': 'Sobre mí',
    'about.description': 'Full Stack Developer apasionado por crear experiencias digitales excepcionales.',
    'about.bio1': 'Soy un desarrollador web full stack con más de 3 años de experiencia creando aplicaciones web modernas y escalables. Mi pasión por la tecnología me ha llevado a especializarme en el ecosistema de JavaScript, especialmente en React, Next.js y Node.js.',
    'about.bio2': 'Me encanta resolver problemas complejos y crear experiencias de usuario excepcionales. Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades para mantenerme al día con las últimas tendencias en desarrollo web.',
    'about.bio3': 'Cuando no estoy programando, disfruto de la fotografía, los viajes y explorar nuevas culturas. Creo que estas experiencias me ayudan a pensar de manera más creativa y a entender mejor las necesidades de los usuarios.',
    'about.technologies': 'Tecnologías',
    'about.learning': 'Aprendiendo',
    'about.workTogether': 'Trabajemos juntos',
    'about.yearsExperience': 'Años de experiencia',
    'about.completedProjects': 'Proyectos completados',
    'about.clientSatisfaction': 'Satisfacción del cliente',
    'about.availability': 'Disponibilidad',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'nav.viewProjects': 'View projects',

    // Hero
    'hero.title': 'IT Engineer • Full Stack Developer',
    'hero.description': 'Creating exceptional digital experiences through code and design.',
    'hero.viewProjects': 'View projects',
    'hero.contact': 'Contact',
    'hero.downloadCV': 'Download CV',
    'hero.years': 'Years',
    'hero.projects': 'Projects',
    'hero.dedication': 'Dedication',
    'hero.scroll': 'Scroll',

    // Services
    'services.label': 'Services',
    'services.title': 'What I can do',
    'services.subtitle': 'for you',
    'services.webDev.title': 'Web Development',
    'services.webDev.description': 'Modern web applications with React, Next.js and TypeScript. Performance and scalability.',
    'services.mobile.title': 'Mobile Apps',
    'services.mobile.description': 'Cross-platform mobile apps with React Native. Fluid experiences for iOS and Android.',
    'services.uiux.title': 'UI/UX Design',
    'services.uiux.description': 'Intuitive and attractive interfaces. User-centered prototyping in Figma.',
    'services.marketing.title': 'Digital Marketing',
    'services.marketing.description': 'Marketing strategies, SEO and social media management to boost your brand.',
    'services.moreInfo': 'More info',

    // Selected Work
    'selectedWork.label': 'Portfolio',
    'selectedWork.title': 'Selected',
    'selectedWork.titleItalic': 'Work',
    'selectedWork.viewAll': 'View all',
    'selectedWork.exploreAll': 'Explore all projects',

    // Experience
    'experience.label': 'Career',
    'experience.title': 'Experience',
    'experience.titleItalic': '& Achievements',
    'experience.workExperience': 'Work Experience',
    'experience.leadership': 'Leadership & Community',
    'experience.mentorship': 'Mentorship & Events',
    'experience.startups': 'Startups & Projects',
    'experience.current': 'Current',
    'experience.viewRecognitions': 'Click to view recognitions',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Have a project',
    'contact.titleItalic': 'in mind?',
    'contact.description': "I'm available for collaborations, freelance projects and job opportunities.",
    'contact.downloadCV': 'Download CV',
    'contact.whatsapp': 'Direct message',
    'contact.linkedin': "Let's connect",
    'contact.github': 'View code',
    'contact.instagram': 'Follow me',

    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.madeWith': 'Designed and developed with passion.',

    // Tech Stack
    'techStack.title': 'Technologies I master',

    // Projects page
    'projects.label': 'Complete portfolio',
    'projects.title': 'All',
    'projects.titleItalic': 'projects',
    'projects.description': 'A collection of my work in web development, mobile apps, video games and digital marketing.',
    'projects.backHome': 'Back to home',
    'projects.noProjects': 'No projects in this category.',
    'projects.all': 'All',

    // About page
    'about.label': 'About me',
    'about.description': 'Full Stack Developer passionate about creating exceptional digital experiences.',
    'about.bio1': "I'm a full stack web developer with over 3 years of experience creating modern and scalable web applications. My passion for technology has led me to specialize in the JavaScript ecosystem, especially React, Next.js and Node.js.",
    'about.bio2': "I love solving complex problems and creating exceptional user experiences. I'm always learning new technologies and improving my skills to stay up to date with the latest trends in web development.",
    'about.bio3': "When I'm not coding, I enjoy photography, traveling and exploring new cultures. I believe these experiences help me think more creatively and better understand user needs.",
    'about.technologies': 'Technologies',
    'about.learning': 'Learning',
    'about.workTogether': "Let's work together",
    'about.yearsExperience': 'Years of experience',
    'about.completedProjects': 'Completed projects',
    'about.clientSatisfaction': 'Client satisfaction',
    'about.availability': 'Availability',
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language)
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['es']] || key
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  // Return default values for SSR/static generation
  if (context === undefined) {
    return {
      language: 'es' as const,
      toggleLanguage: () => {},
      t: (key: string) => translations.es[key as keyof typeof translations['es']] || key
    }
  }
  return context
}
