import { motion, type Variants } from 'framer-motion';
import { Database, Layout, Server, Terminal } from 'lucide-react';
import SkillCard from '../components/SkillCard';
import { fadeInUp, staggerContainer } from '../utils/animations';

const skillGroups = [
  {
    title: 'Backend Engineering',
    icon: <Server size={24} />,
    skills: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'MySQL',
      'PostgreSQL',
      'Authentication',
      'OOP',
      'MVC',
    ],
  },
  {
    title: 'Frontend Engineering',
    icon: <Layout size={24} />,
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: <Terminal size={24} />,
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Figma', 'Netlify'],
  },
  {
    title: 'Currently Learning',
    icon: <Database size={24} />,
    skills: [
      'Next.js',
      'Frontend Testing',
      'Docker',
      'Cloud Deployment',
      'Full-Stack System Design',
    ],
    isLearning: true,
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 max-w-360 mx-auto relative"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp as Variants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Technical Arsenal
        </h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto">
          A comprehensive toolkit spanning from server-side logic to client-side
          rendering.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer as Variants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillGroups.map((group) => (
          <SkillCard
            key={group.title}
            title={group.title}
            icon={group.icon}
            skills={group.skills}
            isLearning={group.isLearning}
          />
        ))}
      </motion.div>
    </section>
  );
}