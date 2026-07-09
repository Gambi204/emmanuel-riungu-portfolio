import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

type SkillCardProps = {
  title: string;
  icon: ReactNode;
  skills: string[];
  isLearning?: boolean;
};

export default function SkillCard({
  title,
  icon,
  skills,
  isLearning = false,
}: SkillCardProps) {
  return (
    <motion.div
      variants={fadeInUp as Variants}
      className={`bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 transition-colors group relative overflow-hidden ${
        isLearning ? 'hover:border-[#22C55E]/50' : 'hover:border-[#38BDF8]/50'
      }`}
    >
      {isLearning && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#22C55E]/5 rounded-bl-full -z-10" />
      )}

      <div
        className={`w-12 h-12 rounded-lg ${
          isLearning
            ? 'bg-[#22C55E]/10 text-[#22C55E]'
            : 'bg-[#38BDF8]/10 text-[#38BDF8]'
        } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-4">{title}</h3>

      <ul className="space-y-2 text-[#94A3B8]">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <div
              className={`w-1.5 h-1.5 rounded-full ${
                isLearning ? 'bg-[#22C55E]' : 'bg-[#38BDF8]'
              }`}
            />
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}