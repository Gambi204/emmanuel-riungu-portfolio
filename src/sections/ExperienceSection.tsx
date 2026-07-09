import { motion, type Variants } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

export default function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp as Variants}
      className="py-24 px-6 md:px-12 max-w-360 mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
        Professional Experience
      </h2>

      <div className="max-w-4xl mx-auto bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 relative overflow-hidden group hover:border-[#38BDF8]/30 transition-colors">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#38BDF8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-[#020617] border border-[#1E293B] flex items-center justify-center text-[#22C55E] shrink-0">
              <Briefcase size={28} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#F8FAFC]">
                Integration Parameter Management
              </h3>

              <p className="text-lg text-[#38BDF8] font-medium mb-1">
                Safaricom Internship
              </p>

              <p className="text-[#94A3B8] leading-relaxed max-w-2xl mt-4">
                Contributed to an internal integration-related task focused on
                improving how technical parameters were handled within an
                enterprise software environment. Strengthened understanding of
                backend configuration, system reliability, and production-facing
                integrations. Implementation details are confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}