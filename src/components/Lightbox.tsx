import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import type { MediaItem } from '../types/site';
import { SmartImage } from './SmartImage';

type LightboxProps = {
  item: MediaItem | null;
  onClose: () => void;
};

export const Lightbox = ({ item, onClose }: LightboxProps) => (
  <AnimatePresence>
    {item ? (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[80] bg-black/90 p-4 md:p-10"
      >
        <button type="button" onClick={onClose} className="absolute right-6 top-6 rounded-full bg-white/10 p-3">
          <FiX />
        </button>
        <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-center">
          {item.type === 'video' ? (
            <video src={item.src} controls autoPlay className="max-h-[85vh] w-full rounded-2xl object-contain" />
          ) : (
            <SmartImage src={item.src} alt={item.title} className="max-h-[85vh] w-full rounded-2xl object-contain" />
          )}
        </div>
      </motion.div>
    ) : null}
  </AnimatePresence>
);
