import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#020617] py-8">
      <div className="max-w-360 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold tracking-tighter">
          Emmanuel.<span className="text-[#38BDF8]">dev</span>
        </div>

        <p className="text-sm text-[#94A3B8]">
          © {new Date().getFullYear()} Emmanuel Mugambi Riungu. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4 text-[#94A3B8]">
          <a
            href="https://github.com/Gambi204"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F8FAFC] transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/emmanuel-riungu-0315a5260/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38BDF8] transition-colors"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:mugambiriungu1@gmail.com"
            className="hover:text-[#F8FAFC] transition-colors"
            aria-label="Email Emmanuel"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}