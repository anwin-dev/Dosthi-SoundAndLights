import { motion } from 'framer-motion';

export const Loader = () => (
  <div className="fixed inset-0 z-[70] grid place-items-center bg-[#050505]">
    <div className="relative text-center">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-['Clash_Display'] text-4xl md:text-6xl"
      >
        Dosthi <span className="text-[#F4B400]">Light & Sound</span>
      </motion.p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        className="mx-auto mt-4 h-[2px] bg-[#F4B400]"
      />
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.4 }}
        className="mt-5 text-sm tracking-[0.35em] text-white/70"
      >
        SPOTLIGHTS WARMING UP
      </motion.div>
    </div>
  </div>
);
