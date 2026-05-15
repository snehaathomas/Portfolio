import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M0,40 Q25,20 50,40 T100,40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="z-10 flex flex-col items-center max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-[11px] md:text-xs uppercase tracking-[0.4em] font-bold text-sage-400 opacity-60">
            AI/DS Engineering Student
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-serif leading-[0.85] text-sage-600 mb-12"
        >
          <h1
            className="text-6xl tracking-tight"
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          ><span className="font-normal">
              SNEHA SARA THOMAS</span>
          </h1>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="relative w-56 h-72 md:w-72 md:h-96 mb-16 group"
        >
          <div className="absolute inset-0 border border-sage-600/10 translate-x-4 translate-y-4 rounded-full transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
          <div className="relative w-full h-full overflow-hidden rounded-full border border-sage-600/10">
            <img
              src="/sneha.jpeg"
              alt="Sneha Sara Thomas"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xs md:text-sm text-sage-600/70 max-w-md mb-12 tracking-widest uppercase font-medium leading-loose italic"
        >
          "Building Scalable Foundations in Data Systems & Algorithms"
          <br />
          <span className="text-[10px] uppercase tracking-[0.3em] mt-4 block font-bold not-italic opacity-40">Chennai, Tamil Nadu</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex gap-8 items-center"
        >
          {[
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/snehathomas13' },
            { Icon: Github, href: 'https://github.com/snehaathomas' },
            { Icon: Mail, href: 'mailto:snehathomasoff13@gmail.com' },
          ].map(({ Icon, href }, i) => (
            <MagneticButton key={i}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="p-3 border border-sage-200 rounded-full hover:bg-sage-600 hover:text-beige-50 transition-all">
                <Icon size={18} />
              </a>
            </MagneticButton>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-sage-300 vertical-text rotate-180"></span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sage-200 to-transparent" />
      </motion.div>
    </section>
  );
}
