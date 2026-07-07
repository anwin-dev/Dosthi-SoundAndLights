import { motion } from 'framer-motion';
import { type ReactNode, useState } from 'react';

type MagneticButtonProps = {
  children: ReactNode;
  variant?: 'filled' | 'ghost';
};

export const MagneticButton = ({ children, variant = 'filled' }: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <motion.button
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({
          x: (event.clientX - rect.left - rect.width / 2) * 0.2,
          y: (event.clientY - rect.top - rect.height / 2) * 0.2,
        });
      }}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      animate={position}
      transition={{ type: 'spring', stiffness: 150, damping: 12 }}
      className={`group relative overflow-hidden rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition ${
        variant === 'filled'
          ? 'bg-[#F4B400] text-black shadow-[0_0_32px_rgba(244,180,0,0.35)]'
          : 'glass-panel text-white'
      }`}
    >
      <span className="absolute inset-y-0 -left-[40%] w-1/3 -skew-x-12 bg-white/20 blur-md transition duration-700 group-hover:left-[120%]" />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};
