import { motion, type Variants } from 'framer-motion';
import { fadeInUp } from '../utils/animations';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp as Variants}
      className="py-24 px-6 md:px-12 max-w-360 mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Backend foundation.
            <br />
            <span className="text-[#38BDF8]">Frontend growth.</span>
            <br />
            Product mindset.
          </h2>
        </div>

        <div className="glass-card p-8 rounded-2xl hover:border-[#38BDF8]/30 transition-colors duration-300">
          <p className="text-[#94A3B8] leading-relaxed mb-6 text-lg">
            My software engineering journey began deep in the backend. I
            developed a strong foundation in{' '}
            <strong className="text-[#F8FAFC]">
              Java, Spring Boot, REST APIs, databases
            </strong>
            , and building business-focused applications that require precision,
            security, and scalability.
          </p>

          <p className="text-[#94A3B8] leading-relaxed text-lg">
            Realizing that great products require excellent user experiences, I
            actively expanded my expertise into modern frontend engineering.
            Today, I seamlessly connect robust backends with responsive, dynamic
            interfaces using{' '}
            <strong className="text-[#F8FAFC]">
              React, TypeScript, Tailwind CSS
            </strong>
            , and modern web architectures, driving true{' '}
            <strong className="text-[#38BDF8]">Full-Stack Impact.</strong>
          </p>
        </div>
      </div>
    </motion.section>
  );
}