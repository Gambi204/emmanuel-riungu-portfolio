import { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  ExternalLink, Mail, Terminal, Database, Layout, Server, Briefcase, CheckCircle2
} from 'lucide-react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
// --- DATA: Mimicking src/data/ ---

const PROJECTS = [
  {
    title: 'MaziwaFarm',
    description: 'Full-stack dairy farm management portal for tracking cow health, milk production, staff tasks, financial reports, and role-based workflows.',
    tech: ['React', 'Vite', 'CSS3', 'Axios', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    highlights: ['RBAC', 'dashboards', 'financial reporting', 'CSV export', 'print reports', 'dark/light mode'],
    github: 'https://github.com/Gambi204',
    gradient: 'from-[#38BDF8] to-transparent'
  },
  {
    title: 'JikoTrack',
    description: 'Restaurant operations system designed to support accounting and inventory management for small restaurants.',
    tech: ['Django', 'Django REST Framework', 'MySQL', 'Nuxt', 'Vue', 'Tailwind CSS'],
    highlights: ['Inventory tracking', 'accounting workflows', 'staff coordination', 'business process improvement'],
    github: 'https://github.com/Gambi204',
    gradient: 'from-[#22C55E] to-transparent'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Modern frontend portfolio website showcasing backend experience, frontend growth, and full-stack engineering direction.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion', 'Netlify'],
    highlights: ['Responsive design', 'animations', 'component architecture', 'recruiter-focused storytelling'],
    github: 'https://github.com/Gambi204',
    gradient: 'from-[#818CF8] to-transparent'
  }
];

const TIMELINE = [
  {
    year: '2023',
    title: 'Foundations & Logic',
    description: 'Focused on core computer science concepts using Java. Built database-driven applications, mastering OOP principles, Swing, and MySQL to lay down strong backend architecture skills.'
  },
  {
    year: '2024',
    title: 'System Workflows',
    description: 'Developed JikoTrack. Shifted focus to real-world business problems: restaurant operations, inventory mapping, and accounting systems. Gained practical experience designing relational schemas.'
  },
  {
    year: '2025 – 2026',
    title: 'Enterprise Backend Exposure',
    description: 'Deep dive into Spring Boot, RESTful APIs, and enterprise backend engineering. Acquired valuable industry exposure dealing with integration parameters and system reliability.',
    accent: true
  },
  {
    year: 'Now',
    title: 'Full-Stack Expansion',
    description: 'Aggressively mastering React, TypeScript, and frontend engineering to transform robust backend APIs into seamless, interactive user experiences. Ready for full-stack product development.',
    current: true
  }
];

// --- UTILS: Animation Variants (Mimicking src/utils/animations.js) ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } }
};

// --- SECTIONS: Mimicking src/sections/ ---
const SkillsSection = () => {
  const skillGroups = [
    {
      title: "Backend Engineering",
      icon: <Server size={24} />,
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'PostgreSQL', 'Authentication', 'OOP', 'MVC'],
      accent: 'border-[#38BDF8]/50'
    },
    {
      title: "Frontend Engineering",
      icon: <Layout size={24} />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      accent: 'border-[#38BDF8]/50'
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal size={24} />,
      skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code', 'Figma', 'Netlify'],
      accent: 'border-[#38BDF8]/50'
    },
    {
      title: "Currently Learning",
      icon: <Database size={24} />,
      skills: ['Next.js', 'Frontend Testing', 'Docker', 'Cloud Deployment', 'Full-Stack System Design'],
      accent: 'border-[#22C55E]/50',
      isLearning: true
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-360 mx-auto relative">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Technical Arsenal</h2>
        <p className="text-[#94A3B8] max-w-2xl mx-auto">A comprehensive toolkit spanning from server-side logic to client-side rendering.</p>
      </motion.div>

      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillGroups.map((group, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            className={`bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 transition-colors group relative overflow-hidden ${
              group.isLearning ? 'hover:border-[#22C55E]/50' : 'hover:border-[#38BDF8]/50'
            }`}
          >
            {group.isLearning && <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/5 rounded-bl-full -z-10"></div>}
            <div className={`w-12 h-12 rounded-lg ${group.isLearning ? 'bg-[#22C55E]/10 text-[#22C55E]' : 'bg-[#38BDF8]/10 text-[#38BDF8]'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {group.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{group.title}</h3>
            <ul className="space-y-2 text-[#94A3B8]">
              {group.skills.map(skill => (
                <li key={skill} className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${group.isLearning ? 'bg-[#22C55E]' : 'bg-[#38BDF8]'}`}></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const ProjectsSection = () => (
  <section id="projects" className="py-24 px-6 md:px-12 max-w-360 mx-auto bg-[#0F172A]/30 rounded-[3rem]">
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-16 md:flex justify-between items-end">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
        <p className="text-[#94A3B8] max-w-2xl">End-to-end applications demonstrating problem-solving, architectural decisions, and clean UI.</p>
      </div>
      <a href="https://github.com/Gambi204" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-[#38BDF8] hover:text-[#F8FAFC] transition-colors font-semibold">
        View All on GitHub <ExternalLink size={18} />
      </a>
    </motion.div>

    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
    >
      {PROJECTS.map((project, idx) => (
        <motion.div key={idx} variants={fadeInUp} className="bg-[#020617] border border-[#1E293B] rounded-2xl overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.1)] transition-all duration-300">
          <div className="h-48 bg-linear-to-br from-[#0F172A] to-[#1E293B] relative overflow-hidden border-b border-[#1E293B]">
             <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] ${project.gradient}`}></div>
             <div className="absolute bottom-4 left-6">
               <h3 className="text-2xl font-bold text-[#F8FAFC]">{project.title}</h3>
             </div>
          </div>
          <div className="p-6">
            <p className="text-[#94A3B8] mb-6 min-h-20 text-sm leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6 min-h-15">
              {project.tech.map(tech => (
                <span key={tech} className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#0F172A] text-[#38BDF8] border border-[#1E293B]">{tech}</span>
              ))}
            </div>
            <div className="space-y-2 mb-6 min-h-20">
              {project.highlights.map(highlight => (
                <p key={highlight} className="text-sm flex items-center gap-2 text-[#F8FAFC]">
                  <CheckCircle2 size={14} className="text-[#22C55E] shrink-0" /> {highlight}
                </p>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8FAFC] hover:text-[#38BDF8] transition-colors">
              <FaGithub size={16} /> View Source
            </a>
          </div>
        </motion.div>
      ))}
      <a href="https://github.com/Gambi204" target="_blank" rel="noopener noreferrer" className="md:hidden w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#1E293B] text-[#F8FAFC] hover:bg-[#1E293B] transition-colors font-semibold mt-4">
        View All on GitHub <ExternalLink size={18} />
      </a>
    </motion.div>
  </section>
);

const ExperienceSection = () => (
  <motion.section 
    id="experience" 
    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
    className="py-24 px-6 md:px-12 max-w-360 mx-auto"
  >
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">Professional Experience</h2>
    <div className="max-w-4xl mx-auto bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 relative overflow-hidden group hover:border-[#38BDF8]/30 transition-colors">
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full"></div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-[#020617] border border-[#1E293B] flex items-center justify-center text-[#22C55E] shrink-0">
            <Briefcase size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#F8FAFC]">Integration Parameter Management</h3>
            <p className="text-lg text-[#38BDF8] font-medium mb-1">Safaricom Internship</p>
            <p className="text-[#94A3B8] leading-relaxed max-w-2xl mt-4">
              Contributed to an internal integration-related task focused on improving how technical parameters were handled within an enterprise software environment. Strengthened understanding of backend configuration, system reliability, and production-facing integrations. Implementation details are confidential.
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const JourneySection = () => (
  <section id="journey" className="py-24 px-6 md:px-12 max-w-360 mx-auto bg-[#0F172A]/30">
    <div className="max-w-4xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Developer Timeline</h2>
        <p className="text-[#94A3B8]">The progression from foundational logic to full-stack execution.</p>
      </motion.div>

      <div className="relative border-l-2 border-[#1E293B] ml-4 md:ml-0 md:pl-0 space-y-12">
        {TIMELINE.map((item, idx) => (
          <motion.div 
            key={idx}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline Dots */}
            <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 -top-1 w-4 h-4 rounded-full bg-[#020617] border-2 ${item.current ? 'border-[#38BDF8] shadow-[0_0_15px_#38BDF8] animate-pulse w-5 h-5' : item.accent ? 'border-[#38BDF8] shadow-[0_0_10px_#38BDF8]' : 'border-[#1E293B]'}`}></div>
            <div className={`md:hidden absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-[#020617] border-2 ${item.current ? 'border-[#38BDF8] shadow-[0_0_15px_#38BDF8] animate-pulse w-5 h-5 -translate-x-1/2' : item.accent ? 'border-[#38BDF8] shadow-[0_0_10px_#38BDF8]' : 'border-[#1E293B]'}`}></div>
            
            {/* Timeline Content Layout */}
            <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 text-left'}`}>
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded-md mb-2 ${item.current ? 'bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E]' : item.accent ? 'bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8]' : 'bg-[#1E293B] text-[#F8FAFC]'}`}>
                {item.year}
              </span>
              <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">{item.title}</h4>
              <p className="text-[#94A3B8]">{item.description}</p>
            </div>
          </motion.div>
        ))}
        {/* Desktop Center Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1E293B] -translate-x-1/2 -z-10"></div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <motion.section 
    id="contact" 
    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
    className="py-32 px-6 md:px-12 max-w-360 mx-auto text-center"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Let’s build something <span className="text-[#38BDF8]">useful.</span></h2>
    <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
      I am open to software engineering, backend engineering, Java developer, frontend developer, and junior full-stack engineering opportunities.
    </p>
    
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <a href="mailto:mugambiriungu1@gmail.com" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#F8FAFC] text-[#020617] rounded-xl font-bold hover:bg-[#E2E8F0] transition-colors hover:-translate-y-1">
        <Mail size={20} /> Email Me
      </a>
      <a href="https://github.com/Gambi204" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 glass-card text-[#F8FAFC] rounded-xl font-bold hover:bg-[#1E293B] transition-all hover:-translate-y-1">
        <FaGithub size={20} /> GitHub
      </a>
      <a href="https://www.linkedin.com/in/emmanuel-riungu-0315a5260/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 glass-card text-[#38BDF8] border-[#38BDF8]/20 rounded-xl font-bold hover:bg-[#38BDF8]/10 transition-all hover:-translate-y-1">
        <FaLinkedin size={20} /> LinkedIn
      </a>
    </div>
  </motion.section>
);

// --- MAIN APP COMPONENT (Mimicking src/App.tsx) ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-[#F8FAFC] font-sans selection:bg-[#38BDF8]/30 overflow-x-hidden">
      {/* Global CSS for elements difficult to target with basic Tailwind classes in this environment */}

      <Navbar isScrolled={isScrolled} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main>
        <HeroSection />
        <div className="w-full max-w-360 mx-auto px-6 md:px-12"><div className="h-px w-full bg-linear-to-r from-transparent via-[#1E293B] to-transparent"></div></div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}