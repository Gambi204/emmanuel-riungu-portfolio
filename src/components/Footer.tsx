import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { siteConfig } from '../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#020617] py-8">
      <div className="max-w-360 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold tracking-tighter">
          {siteConfig.brandName}
        </div>

        <p className="text-sm text-[#94A3B8]">
          © {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>

        <div className="flex items-center gap-4 text-[#94A3B8]">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F8FAFC] transition-colors"
            aria-label="GitHub profile"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#38BDF8] transition-colors"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
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