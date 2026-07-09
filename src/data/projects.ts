import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'MaziwaFarm',
    description:
      'Full-stack dairy farm management portal for tracking cow health, milk production, staff tasks, financial reports, and role-based workflows.',
    tech: [
      'React',
      'Vite',
      'CSS3',
      'Axios',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'JWT',
    ],
    highlights: [
      'Role-based access control',
      'Operational dashboards',
      'Financial reporting',
      'CSV exports',
      'Print reports',
      'Dark/light mode',
    ],
    github: 'https://github.com/Gambi204/dairyfarm-managment-system',
    gradient: 'from-[#38BDF8] to-transparent',
  },
  {
    title: 'JikoTrack',
    description:
      'Restaurant operations system designed to support accounting and inventory management for small restaurants.',
    tech: [
      'Django',
      'Django REST Framework',
      'MySQL',
      'Nuxt',
      'Vue',
      'Tailwind CSS',
    ],
    highlights: [
      'Inventory tracking',
      'Accounting workflows',
      'Staff coordination',
      'Business process improvement',
    ],
    github: 'https://github.com/BethwelKimutai/fullstackErpSystem',
    gradient: 'from-[#22C55E] to-transparent',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'Modern frontend portfolio website showcasing backend experience, frontend growth, and full-stack engineering direction.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    highlights: [
      'Responsive design',
      'Animations',
      'Component architecture',
      'Recruiter-focused storytelling',
    ],
    github: 'https://github.com/Gambi204/emmanuel-riungu-portfolio',
    gradient: 'from-[#818CF8] to-transparent',
  },
];