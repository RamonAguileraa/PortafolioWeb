export interface Project {
  id: string
  title: string
  description: string
  category: 'web' | 'mobile' | 'fullstack' | 'design' | 'marketing' | 'videojuegos'
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
  startDate: string
  endDate?: string
  status: 'completed' | 'in-progress' | 'planned'
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'zarandeado',
    title: 'El Zarandeado',
    description: 'Estrategia de marketing digital integral para restaurante de mariscos. Gestión de redes sociales y contenido visual.',
    category: 'marketing',
    technologies: ['Marketing Digital', 'Social Media', 'Content Creation', 'Branding'],
    image: '/zarandeado-mkt.png',
    githubUrl: '#',
    startDate: '2024-01-01',
    endDate: '2024-03-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'celda27',
    title: 'Celda 27',
    description: 'Estrategia de redes sociales que incrementó seguidores en un 200%. Creación de contenido y gestión de comunidad.',
    category: 'marketing',
    technologies: ['Social Media', 'Marketing Strategy', 'Content Creation'],
    image: '/celda27-fto.jpg',
    githubUrl: '#',
    startDate: '2023-09-01',
    endDate: '2024-01-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'ibenteu',
    title: 'Ibenteu App',
    description: 'Plataforma de reservación de salones para eventos. Sistema completo de gestión y pagos.',
    category: 'web',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    image: '/IBENTEU-app.png',
    githubUrl: 'https://github.com/RamonAguileraa/aroma_cafe',
    liveUrl: '#',
    startDate: '2023-06-01',
    endDate: '2023-08-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'cafearoma',
    title: 'Café Aroma',
    description: 'Sitio web elegante para cafetería con sistema de menú interactivo y reservaciones.',
    category: 'web',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    image: '/cafearoma-web.png',
    githubUrl: 'https://github.com/RamonAguileraa/aroma_cafe',
    liveUrl: '#',
    startDate: '2023-02-01',
    endDate: '2023-04-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'tibucami-web',
    title: 'Tibucami Page',
    description: 'Landing page promocional para el videojuego Tibucami ganador de Ludic Jam.',
    category: 'web',
    technologies: ['React', 'Next.js', 'Framer Motion', 'Tailwind'],
    image: '/tibucamipage-web.png',
    githubUrl: '#',
    liveUrl: '#',
    startDate: '2024-04-01',
    endDate: '2024-05-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'petkeeper',
    title: 'PetKeeper App',
    description: 'Aplicación móvil para gestión de mascotas, citas veterinarias y recordatorios de cuidado.',
    category: 'mobile',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Expo'],
    image: '/petkeeper-app.png',
    githubUrl: '#',
    liveUrl: '#',
    startDate: '2024-06-01',
    endDate: '2024-08-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'canal28',
    title: 'Noticias Canal 28',
    description: 'Portal informativo para televisora local con CMS personalizado.',
    category: 'web',
    technologies: ['PHP', 'MySQL', 'Bootstrap', 'CMS'],
    image: '/canal28.jpg',
    githubUrl: '#',
    liveUrl: '#',
    startDate: '2022-10-01',
    endDate: '2022-12-01',
    status: 'completed'
  },
  {
    id: 'wall-or-fall',
    title: 'Wall Or Fall',
    description: 'Juego de plataformas 2D con mecánicas de gravedad y puzzles.',
    category: 'videojuegos',
    technologies: ['Unity', 'C#', 'Game Design', '2D Graphics'],
    image: '/wallorfall.jpg',
    githubUrl: 'https://github.com/RamonAguileraa/Wall-Or-Fall',
    liveUrl: '#',
    startDate: '2022-08-01',
    endDate: '2022-10-01',
    status: 'completed'
  },
  {
    id: 'tibucami',
    title: 'Tibucami',
    description: 'Ganador en Ludic Jam. Videojuego 3D sobre la cultura de Chihuahua.',
    category: 'videojuegos',
    technologies: ['Unity', 'C#', '3D Graphics', 'Cultural Design'],
    image: '/tibucami.jpg',
    githubUrl: '#',
    liveUrl: '#',
    startDate: '2024-03-01',
    endDate: '2024-04-01',
    status: 'completed'
  },
  {
    id: 'camp-hollow',
    title: 'Camp Hollow',
    description: 'Videojuego 3D de aventura y exploración narrativa en un misterioso campamento.',
    category: 'videojuegos',
    technologies: ['Unity', 'C#', '3D Graphics', 'Narrative Design'],
    image: '/camphollow.jpg',
    githubUrl: '#',
    liveUrl: '#',
    startDate: '2023-11-01',
    endDate: '2024-01-01',
    status: 'completed'
  }
]
