import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { staggerContainer } from '../utils/animations';

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-360 mx-auto bg-[#0F172A]/30 rounded-[3rem]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
          },
        }}
        className="mb-16 md:flex justify-between items-end"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <p className="text-[#94A3B8] max-w-2xl">
            End-to-end applications demonstrating problem-solving, architectural
            decisions, and clean UI.
          </p>
        </div>

        <a
          href="https://github.com/Gambi204"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-[#38BDF8] hover:text-[#F8FAFC] transition-colors font-semibold"
        >
          View All on GitHub <ExternalLink size={18} />
        </a>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}

        <a
          href="https://github.com/Gambi204"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#1E293B] text-[#F8FAFC] hover:bg-[#1E293B] transition-colors font-semibold mt-4"
        >
          View All on GitHub <ExternalLink size={18} />
        </a>
      </motion.div>
    </section>
  );
}