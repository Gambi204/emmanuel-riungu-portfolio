import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '../types';
import { fadeInUp } from '../utils/animations';

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp as Variants}
      className="h-full bg-[#020617] border border-[#1E293B] rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-[#38BDF8]/30 hover:shadow-[0_20px_40px_-15px_rgba(56,189,248,0.12)] transition-all duration-300"
    >
      <div className="h-48 bg-linear-to-br from-[#0F172A] to-[#1E293B] relative overflow-hidden border-b border-[#1E293B]">
        <div
          className={`absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] ${project.gradient}`}
        />
        <div className="absolute bottom-4 left-6">
          <h3 className="text-2xl font-bold text-[#F8FAFC]">
            {project.title}
          </h3>
        </div>
      </div>

      <div className="p-5 sm:p-6 flex flex-col h-[calc(100%-12rem)]">
        <p className="text-[#94A3B8] mb-6 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#0F172A] text-[#38BDF8] border border-[#1E293B]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="space-y-2 mb-6">
          {project.highlights.map((highlight) => (
            <p
              key={highlight}
              className="text-sm flex items-center gap-2 text-[#F8FAFC]"
            >
              <CheckCircle2 size={14} className="text-[#22C55E] shrink-0" />
              {highlight}
            </p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8FAFC] hover:text-[#38BDF8] transition-colors"
          >
            <FaGithub size={16} /> View Source
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#38BDF8] hover:text-[#F8FAFC] transition-colors"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}