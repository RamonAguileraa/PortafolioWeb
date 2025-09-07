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
    title: 'Marketing - El Zarandeado',
    description: 'Propuesta de marketing con un conversor de divisas en PHP y React, utilizando la API de Fixer.',
    category: 'marketing',
    technologies: ['PHP', 'React', 'API Integration', 'Marketing Strategy'],
    image: '/zarandeado.png',
    githubUrl: '#',
    startDate: '2024-01-01',
    endDate: '2024-03-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'celda27',
    title: 'Marketing - Celda27',
    description: 'Estrategia de redes sociales que incrementó seguidores en un 200%.',
    category: 'marketing',
    technologies: ['Social Media', 'Marketing Strategy', 'Content Creation'],
    image: '/celda27.jpg',
    githubUrl: '#',
    startDate: '2023-09-01',
    endDate: '2024-01-01',
    status: 'completed'
  },
  {
    id: 'ibenteu',
    title: 'Ibenteu',
    description: 'Plataforma de reservación de salones con PHP y vanilla JS.',
    category: 'web',
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    image: '/IBENTEU.png',
    githubUrl: 'https://github.com/RamonAguileraa/aroma_cafe',
    liveUrl: '#',
    startDate: '2023-06-01',
    endDate: '2023-08-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'enligne',
    title: '€NLIGNE',
    description: 'Conversor de divisas con PHP y React, integración de API Fixer.',
    category: 'web',
    technologies: ['PHP', 'React', 'API Integration', 'JavaScript'],
    image: '/enligne.png',
    githubUrl: 'https://github.com/RamonAguileraa/rincondel_grano',
    liveUrl: '#',
    startDate: '2023-04-01',
    endDate: '2023-06-01',
    status: 'completed'
  },
  {
    id: 'aroma-cafe',
    title: 'Aroma Café',
    description: 'Sitio web visual para una cafetería ficticia, desarrollado en PHP.',
    category: 'web',
    technologies: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    image: '/cafearoma.png',
    githubUrl: 'https://github.com/RamonAguileraa/aroma_cafe',
    liveUrl: '#',
    startDate: '2023-02-01',
    endDate: '2023-04-01',
    status: 'completed'
  },
  {
    id: 'rincon-grano',
    title: 'Rincón del Grano',
    description: 'Landing page profesional para cafetería con enfoque UX/UI.',
    category: 'web',
    technologies: ['HTML', 'CSS', 'JavaScript', 'UX/UI Design'],
    image: '/cafearoma.png',
    githubUrl: 'https://github.com/RamonAguileraa/rincondel_grano',
    liveUrl: '#',
    startDate: '2023-01-01',
    endDate: '2023-02-01',
    status: 'completed'
  },
  {
    id: 'canal28',
    title: 'Noticias Canal 28',
    description: 'Sitio informativo para televisora Canal 28.',
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
    title: 'Wall Or Fall (2D)',
    description: 'Juego de plataformas 2D desarrollado en Ingeniería.',
    category: 'videojuegos',
    technologies: ['Unity', 'C#', 'Game Development', '2D Graphics'],
    image: '/wallorfall.jpg',
    githubUrl: 'https://github.com/RamonAguileraa/Wall-Or-Fall',
    liveUrl: '#',
    startDate: '2022-08-01',
    endDate: '2022-10-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'tibucami',
    title: 'Tibucami (3D)',
    description: 'Ganador en Ludic Jam, videojuego sobre Chihuahua con enfoque cultural.',
    category: 'videojuegos',
    technologies: ['Unity', 'C#', '3D Graphics', 'Cultural Design'],
    image: '/tibucami.jpg',
    githubUrl: '#',
    liveUrl: '#',
    startDate: '2024-03-01',
    endDate: '2024-04-01',
    status: 'completed',
    featured: true
  },
  {
    id: 'camp-hollow',
    title: 'Camp Hollow (3D)',
    description: 'Videojuego 3D estilo aventura con exploración narrativa en campamento.',
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
