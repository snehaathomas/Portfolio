import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/ui/CustomCursor';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-beige-100 flex flex-col items-center justify-center z-[100]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1, 0.5, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-1 h-8 bg-sage-600 rounded-full"
              />
            ))}
          </div>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="text-[10px] uppercase tracking-[0.6em] font-bold text-sage-400"
          >
            Loading Experience
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="relative selection:bg-sage-600 selection:text-beige-100">
      <CustomCursor />
      <Navigation />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[1.5px] bg-sage-600 origin-left z-[60]" 
        style={{ scaleX }} 
      />

      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      
      {/* Subtle Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply z-[100]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
    </main>
  );
}
