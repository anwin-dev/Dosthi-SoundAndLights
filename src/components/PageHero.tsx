import { motion } from 'framer-motion';

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <section className="section-shell mb-20 pt-16">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6 text-xs tracking-[0.35em] text-[#FFD54A]"
    >
      {eyebrow}
    </motion.p>
    <motion.h1
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.1 }}
      className="max-w-5xl text-5xl leading-[0.95] md:text-7xl"
    >
      {title}
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.18 }}
      className="mt-6 max-w-2xl text-base text-white/65 md:text-lg"
    >
      {description}
    </motion.p>
  </section>
);
