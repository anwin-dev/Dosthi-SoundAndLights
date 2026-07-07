import Lenis from 'lenis';
import { useEffect } from 'react';

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, lerp: 0.08 });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
};
