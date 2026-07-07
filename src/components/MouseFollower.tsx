import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export const MouseFollower = () => {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 120);
      y.set(event.clientY - 120);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x, y }}
      className="pointer-events-none fixed z-40 hidden h-60 w-60 rounded-full bg-[radial-gradient(circle,_rgba(244,180,0,0.18)_0%,_rgba(0,0,0,0)_70%)] md:block"
    />
  );
};
