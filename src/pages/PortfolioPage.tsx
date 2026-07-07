import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { PageHero } from '../components/PageHero';
import { SmartImage } from '../components/SmartImage';
import { portfolioCategories, portfolioMedia } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';
import type { MediaItem } from '../types/site';

export const PortfolioPage = () => {
  const scope = useReveal();
  const [active, setActive] = useState(portfolioCategories[0]);
  const [activeMedia, setActiveMedia] = useState<MediaItem | null>(null);
  const filteredMedia = useMemo(
    () => portfolioMedia.filter((item) => item.category === active),
    [active],
  );

  return (
    <div ref={scope}>
      <PageHero eyebrow="PORTFOLIO" title="Case-study led event portfolio with cinematic visual documentation." description="Filter by category to explore high-impact event productions delivered by Dosthi Light & Sound." />
      <section className="section-shell">
        <div className="mb-7 flex flex-wrap gap-2">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm ${active === category ? 'bg-[#F4B400] text-black' : 'glass-panel text-white/75'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <motion.div layout className="columns-1 gap-4 md:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.45 }}
                className="reveal-up group relative mb-4 cursor-pointer overflow-hidden rounded-3xl border border-white/10"
                onClick={() => setActiveMedia(item)}
              >
                <SmartImage
                  src={item.thumbnail}
                  alt={item.title}
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${
                    index % 2 ? 'h-[25rem]' : 'h-[17rem]'
                  }`}
                  fallbackSeed={item.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs tracking-[0.3em] text-[#FFD54A]">{item.type === 'video' ? 'VIDEO PREVIEW' : 'PHOTO STORY'}</p>
                  <p className="text-lg">{item.title}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      <Lightbox item={activeMedia} onClose={() => setActiveMedia(null)} />
    </div>
  );
};
