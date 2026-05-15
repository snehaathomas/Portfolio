import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b ${
        isScrolled ? 'bg-beige-50/80 backdrop-blur-md py-4 border-sage-100' : 'bg-transparent py-8 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-xs md:text-sm font-sans font-bold tracking-[0.3em] uppercase text-sage-600"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Sneha Thomas
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] font-bold hover:text-sage-400 transition-colors"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <MagneticButton className="bg-sage-600 text-beige-50 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-sage-500 transition-all">
              Contact
            </MagneticButton>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-sage-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed inset-0 bg-beige-50 z-50 flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-8 text-sage-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-4xl font-serif italic hover:text-sage-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="mailto:snehathomasoff13@gmail.com"
              className="flex items-center gap-2 mt-8 text-sage-400"
            >
              <Mail size={18} />
              <span className="text-sm tracking-widest uppercase">Get in touch</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
