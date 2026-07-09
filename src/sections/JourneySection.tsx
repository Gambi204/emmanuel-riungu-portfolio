import { motion, type Variants } from 'framer-motion';
import { timeline } from '../data/timeline';
import { fadeInUp } from '../utils/animations';

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="py-24 px-6 md:px-12 max-w-360 mx-auto bg-[#0F172A]/30"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp as Variants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Developer Timeline
          </h2>

          <p className="text-[#94A3B8]">
            The progression from foundational logic to full-stack execution.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-[#1E293B] ml-4 md:ml-0 md:pl-0 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp as Variants}
              className="relative pl-8 md:pl-0"
            >
              <div
                className={`hidden md:block absolute left-1/2 -translate-x-1/2 -top-1 w-4 h-4 rounded-full bg-[#020617] border-2 ${
                  item.current
                    ? 'border-[#38BDF8] shadow-[0_0_15px_#38BDF8] animate-pulse w-5 h-5'
                    : item.accent
                      ? 'border-[#38BDF8] shadow-[0_0_10px_#38BDF8]'
                      : 'border-[#1E293B]'
                }`}
              />

              <div
                className={`md:hidden absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-[#020617] border-2 ${
                  item.current
                    ? 'border-[#38BDF8] shadow-[0_0_15px_#38BDF8] animate-pulse w-5 h-5 -translate-x-1/2'
                    : item.accent
                      ? 'border-[#38BDF8] shadow-[0_0_10px_#38BDF8]'
                      : 'border-[#1E293B]'
                }`}
              />

              <div
                className={`md:w-1/2 ${
                  idx % 2 === 0
                    ? 'md:pr-12 md:text-right'
                    : 'md:ml-auto md:pl-12 text-left'
                }`}
              >
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold rounded-md mb-2 ${
                    item.current
                      ? 'bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E]'
                      : item.accent
                        ? 'bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8]'
                        : 'bg-[#1E293B] text-[#F8FAFC]'
                  }`}
                >
                  {item.year}
                </span>

                <h4 className="text-xl font-bold text-[#F8FAFC] mb-2">
                  {item.title}
                </h4>

                <p className="text-[#94A3B8]">{item.description}</p>
              </div>
            </motion.div>
          ))}

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#1E293B] -translate-x-1/2 -z-10" />
        </div>
      </div>
    </section>
  );
}