import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, Code2, Download, Layout } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';
import { staggerContainer } from '../utils/animations';
import { scrollTo } from '../utils/scrollTo';
import { siteConfig } from '../data/site';

const heroFadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-360 mx-auto relative flex flex-col-reverse lg:flex-row items-center gap-16 min-h-screen"
    >
      <div className="absolute top-20 left-0 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 flex flex-col items-start w-full"
      >
        <motion.div
          variants={heroFadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border border-[#1E293B]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E] animate-pulse" />
          <span className="text-sm font-medium text-[#94A3B8]">
            Available for Software Engineering Opportunities
          </span>
        </motion.div>

        <motion.h1
          variants={heroFadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6"
        >
          Java/Spring Boot Backend Engineer building{' '}
          <span className="text-gradient">modern full-stack</span> web
          experiences.
        </motion.h1>

        <motion.p
          variants={heroFadeInUp}
          className="text-lg text-[#94A3B8] leading-relaxed mb-10 max-w-2xl"
        >
          I build reliable backend systems, clean user interfaces, and practical
          software products using Java, Spring Boot, React, TypeScript, and
          modern web technologies. My work focuses on solving real business
          problems through maintainable code, thoughtful design, and
          user-focused engineering.
        </motion.p>

        <motion.div
          variants={heroFadeInUp}
          className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
        >
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#38BDF8] text-[#020617] font-bold hover:bg-[#38BDF8]/90 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            View Projects <ChevronRight size={18} />
          </button>

          <a
            href={siteConfig.cvPath}
            download
            className="w-full sm:w-auto px-6 py-3 rounded-lg glass-card text-[#F8FAFC] font-semibold hover:bg-[#1E293B] transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 border border-[#1E293B] hover:border-[#94A3B8]/50"
          >
            <Download size={18} /> Download CV
          </a>

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-[#94A3B8] font-semibold hover:text-[#F8FAFC] transition-all flex items-center justify-center gap-2"
          >
            Contact Me
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        className="flex-1 relative flex justify-center lg:justify-end w-full max-w-md lg:max-w-none mx-auto lg:mx-0 pt-8 lg:pt-0"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-linear-to-tr from-[#0F172A] to-[#1E293B] p-2 shadow-[0_0_60px_rgba(56,189,248,0.15)] group">
          <img
            src={profileImage}
            alt="Emmanuel Mugambi Riungu"
            className="w-full h-full object-cover rounded-2xl filter contrast-110 saturate-100 group-hover:saturate-150 transition-all duration-700"
          />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 glass-card px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg"
          >
            <div className="text-[#38BDF8]">
              <Code2 size={24} />
            </div>

            <div>
              <p className="text-xs text-[#94A3B8] font-semibold uppercase tracking-wider">
                Backend
              </p>
              <p className="text-sm font-bold text-[#F8FAFC]">
                Java & Spring
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-4 -left-8 glass-card px-4 py-3 rounded-xl flex items-center gap-3 shadow-lg"
          >
            <div className="text-[#38BDF8]">
              <Layout size={24} />
            </div>

            <div>
              <p className="text-xs text-[#94A3B8] font-semibold uppercase tracking-wider">
                Frontend
              </p>
              <p className="text-sm font-bold text-[#F8FAFC]">React & TS</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-10 -right-4 glass-card p-4 rounded-xl border border-[#38BDF8]/30 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-xs text-[#94A3B8] font-semibold uppercase tracking-wider mb-2">
              Core Stack
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm font-medium">
              {[
                'Java',
                'Spring Boot',
                'React',
                'TypeScript',
                'PostgreSQL',
                'GitHub',
              ].map((tech) => (
                <span key={tech} className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-[#22C55E]" />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}