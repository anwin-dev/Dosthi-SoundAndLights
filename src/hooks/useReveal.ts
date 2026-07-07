import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useReveal = () => {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>('.reveal-up').forEach((item) => {
        gsap.fromTo(
          item,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 85%' },
          },
        );
      });
    },
    { scope },
  );

  return scope;
};
