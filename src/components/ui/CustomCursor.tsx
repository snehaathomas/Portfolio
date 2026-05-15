import { motion } from 'motion/react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference hidden md:block"
      animate={{
        x: x - 16,
        y: y - 16,
        scale: isHovering ? 2.5 : 1,
      }}
      transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
    >
      <div className="w-full h-full bg-white rounded-full opacity-80" />
    </motion.div>
  );
}
