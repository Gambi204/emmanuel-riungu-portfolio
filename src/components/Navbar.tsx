import type { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollTo } from '../utils/scrollTo';

type NavbarProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
};

export default function Navbar({
  mobileMenuOpen,
  setMobileMenuOpen,
  isScrolled,
}: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card py-4 shadow-lg shadow-[#020617]/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-360 mx-auto px-6 md:px-12 flex justify-between items-center">
        <button
          type="button"
          className="text-xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer"
          onClick={() => scrollTo('home')}
          aria-label="Go to homepage"
        >
          <span className="text-[#38BDF8]">&lt;</span>
          Emmanuel.<span className="text-[#38BDF8]">dev</span>
          <span className="text-[#38BDF8]">/&gt;</span>
        </button>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#94A3B8]">
          {['About', 'Skills', 'Projects', 'Experience', 'Journey'].map(
            (item) => (
              <button
                type="button"
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-[#F8FAFC] transition-colors"
              >
                {item}
              </button>
            ),
          )}

          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="px-5 py-2.5 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 hover:bg-[#38BDF8] hover:text-[#020617] transition-all font-semibold"
          >
            Let&apos;s Talk
          </button>
        </div>

        <button
          type="button"
          className="md:hidden text-[#F8FAFC]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass-card border-t border-[#1E293B] py-4 px-6 flex flex-col space-y-4 shadow-2xl"
          >
            {[
              'About',
              'Skills',
              'Projects',
              'Experience',
              'Journey',
              'Contact',
            ].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() =>
                  scrollTo(item.toLowerCase(), setMobileMenuOpen)
                }
                className="text-left py-2 text-[#94A3B8] hover:text-[#F8FAFC] font-medium transition-colors"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}