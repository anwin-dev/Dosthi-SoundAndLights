import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '../components/MagneticButton';
import { Marquee } from '../components/Marquee';
import { StatsStrip } from '../components/StatsStrip';
import { useReveal } from '../hooks/useReveal';

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
  const scope = useReveal();
  const heroRef = useRef<HTMLElement | null>(null);
  const mouseGlowRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo('.hero-word', { y: 28, autoAlpha: 0, filter: 'blur(8px)' }, { y: 0, autoAlpha: 1, filter: 'blur(0px)', stagger: 0.18, duration: 1, ease: 'power3.out' });
      gsap.fromTo('.hero-copy', { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, delay: 0.25, ease: 'power3.out' });
      gsap.fromTo('.hero-cta', { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.1, delay: 0.45, ease: 'power3.out' });

      gsap.to('.hero-beam-a', { rotate: 22, repeat: -1, yoyo: true, duration: 8, ease: 'sine.inOut', transformOrigin: 'top center' });
      gsap.to('.hero-beam-b', { rotate: -20, repeat: -1, yoyo: true, duration: 9, ease: 'sine.inOut', transformOrigin: 'top center' });
      gsap.to('.hero-beam-c', { rotate: 16, repeat: -1, yoyo: true, duration: 10, ease: 'sine.inOut', transformOrigin: 'top center' });

      gsap.to('.hero-layer-back', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.to('.hero-layer-mid', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.to('.hero-layer-front', {
        yPercent: -24,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });
      gsap.to('.hero-content', {
        yPercent: -10,
        autoAlpha: 0.75,
        ease: 'none',
        scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: 1 },
      });

      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': () => {
          gsap.to('.horizontal-track', {
            xPercent: -40,
            ease: 'none',
            scrollTrigger: {
              trigger: '.horizontal-wrap',
              pin: true,
              scrub: 1,
              start: 'top top',
              end: '+=1000',
            },
          });
        },
      });

      const heroEl = heroRef.current;
      const glowEl = mouseGlowRef.current;
      if (!heroEl || !glowEl || window.matchMedia('(pointer: coarse)').matches) return;

      const quickX = gsap.quickTo(glowEl, 'x', { duration: 0.5, ease: 'power3.out' });
      const quickY = gsap.quickTo(glowEl, 'y', { duration: 0.5, ease: 'power3.out' });
      const quickBg = gsap.quickTo('.spotlight-core', 'xPercent', { duration: 0.7, ease: 'power2.out' });

      const onMove = (event: MouseEvent) => {
        const rect = heroEl.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        quickX(x - 160);
        quickY(y - 160);
        quickBg(((x / rect.width) - 0.5) * 10);
      };

      heroEl.addEventListener('mousemove', onMove);
      return () => heroEl.removeEventListener('mousemove', onMove);
    },
    { scope: heroRef },
  );

  return (
    <div ref={scope}>
      <section
        ref={heroRef}
        className="section-shell relative min-h-[86vh] overflow-hidden rounded-[2.5rem] border border-white/10 px-4 py-6 md:px-8 md:py-8"
      >
        <div className="hero-layer-back absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover opacity-30"
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=3f3ba84ce0cc90db4e74f7bb30fc8f6ce665f6ab&profile_id=139&oauth2_token_id=57447761"
          />
        </div>
        <div className="hero-layer-mid absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,180,0,0.20),transparent_45%),radial-gradient(circle_at_70%_40%,rgba(90,120,255,0.18),transparent_50%)]" />
        <div className="hero-layer-mid hero-fog-layer fog-1 absolute inset-x-[-10%] bottom-[-15%] h-[38%]" />
        <div className="hero-layer-mid hero-fog-layer fog-2 absolute inset-x-[-12%] bottom-[-4%] h-[30%]" />
        <div className="hero-layer-front beam hero-beam-a absolute -left-[8%] top-[-10%] h-[120%] w-[28%] opacity-45" />
        <div className="hero-layer-front beam hero-beam-b absolute left-[20%] top-[-14%] h-[128%] w-[22%] opacity-38" />
        <div className="hero-layer-front beam hero-beam-c absolute right-[8%] top-[-12%] h-[124%] w-[24%] opacity-42" />
        <div className="hero-layer-front laser laser-1 absolute left-[8%] top-[28%] h-px w-[45%]" />
        <div className="hero-layer-front laser laser-2 absolute right-[10%] top-[42%] h-px w-[35%]" />
        <div className="hero-layer-front spotlight-core absolute left-[44%] top-[36%] h-64 w-64 rounded-full bg-[#f4b400]/25 blur-[90px]" />
        <div ref={mouseGlowRef} className="pointer-events-none absolute left-0 top-0 z-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,213,74,0.22)_0%,rgba(255,213,74,0)_68%)] opacity-80 mix-blend-screen" />

        <div className="hero-layer-front pointer-events-none absolute inset-0">
          {Array.from({ length: 28 }).map((_, i) => (
            <span
              key={`p-${i}`}
              className="particle absolute rounded-full bg-white/55"
              style={{
                left: `${(i * 13) % 100}%`,
                top: `${(i * 17) % 100}%`,
                width: `${(i % 3) + 2}px`,
                height: `${(i % 3) + 2}px`,
                animationDelay: `${(i % 9) * 0.6}s`,
                animationDuration: `${8 + (i % 5)}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-content relative z-30 grid min-h-[74vh] items-center">
          <div className="max-w-5xl px-3 py-14 md:px-8 md:py-20">
            <p className="hero-copy text-xs tracking-[0.38em] text-[#FFD54A]">CINEMATIC EVENT PRODUCTION</p>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[0.95] md:text-7xl">
              <span className="hero-word block">We Don&apos;t Just Light Events.</span>
              <span className="hero-word text-gradient block">We Create Experiences.</span>
            </h1>
            <p className="hero-copy mt-7 max-w-2xl text-white/75">
              Premium technical direction, immersive lighting and concert-grade sound systems for weddings, festivals, corporate showcases and iconic live moments across Kerala.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="hero-cta"><Link to="/booking"><MagneticButton>Book Event</MagneticButton></Link></div>
              <div className="hero-cta"><Link to="/services"><MagneticButton variant="ghost">Explore Services</MagneticButton></Link></div>
            </div>
          </div>
        </div>
      </section>
      <div className="pt-8 md:pt-12"><Marquee /></div>

      <section className="section-shell grid gap-8 md:grid-cols-3">
        {['Featured Events', 'Premium Services', 'Equipment Preview'].map((item) => (
          <article key={item} className="reveal-up glass-panel rounded-3xl p-6 md:p-8">
            <p className="text-2xl">{item}</p>
            <p className="mt-3 text-sm text-white/65">Curated visual storytelling with bespoke stagecraft, immersive lighting designs and precision audio calibration.</p>
          </article>
        ))}
      </section>

      <StatsStrip />

      <section className="horizontal-wrap my-14 overflow-hidden lg:my-20">
        <div className="horizontal-track flex w-[200vw] gap-4 px-[4vw]">
          {['Latest Events', 'Featured Projects', 'Awards', 'Partner Logos', 'Instagram Feed'].map((item, index) => (
            <article key={item} className="glass-panel min-h-56 w-[70vw] min-w-[70vw] rounded-3xl p-6 lg:min-h-64 lg:w-[38vw] lg:min-w-[38vw] lg:p-8">
              <p className="text-xs tracking-[0.3em] text-[#FFD54A]">SHOWCASE {index + 1}</p>
              <h3 className="mt-4 text-4xl">{item}</h3>
              <p className="mt-3 text-white/65">Premium storytelling block with cinematic spacing and scroll-reactive movement.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell my-20 grid gap-6 rounded-[2rem] border border-[#F4B400]/20 p-8 md:grid-cols-2">
        <h2 className="reveal-up text-4xl md:text-6xl">Ready to produce your next unforgettable event?</h2>
        <div className="reveal-up">
          <p className="mb-5 text-white/70">From intimate weddings to high-capacity concerts, we deliver a world-class execution framework with cinematic precision.</p>
          <Link to="/contact"><MagneticButton>Talk to Our Team</MagneticButton></Link>
        </div>
      </section>
    </div>
  );
};
