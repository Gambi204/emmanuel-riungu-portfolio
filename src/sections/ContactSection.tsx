import { motion, type Variants } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { scaleIn } from '../utils/animations';
import { siteConfig } from '../data/site';

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={scaleIn as Variants}
      className="py-32 px-6 md:px-12 max-w-360 mx-auto text-center"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
        Let’s build something{' '}
        <span className="text-[#38BDF8]">useful.</span>
      </h2>

      <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto mb-12">
        I am open to software engineering, backend engineering, Java developer,
        frontend developer, and junior full-stack engineering opportunities.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href={`mailto:${siteConfig.email}`}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-[#F8FAFC] text-[#020617] rounded-xl font-bold hover:bg-[#E2E8F0] transition-colors hover:-translate-y-1"
        >
          <Mail size={20} /> Email Me
        </a>

        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 glass-card text-[#F8FAFC] rounded-xl font-bold hover:bg-[#1E293B] transition-all hover:-translate-y-1"
        >
          <FaGithub size={20} /> GitHub
        </a>

        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 glass-card text-[#38BDF8] border-[#38BDF8]/20 rounded-xl font-bold hover:bg-[#38BDF8]/10 transition-all hover:-translate-y-1"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
      </div>
    </motion.section>
  );
}