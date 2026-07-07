import { PageHero } from '../components/PageHero';
import { StatsStrip } from '../components/StatsStrip';
import { useReveal } from '../hooks/useReveal';

const timeline = ['2014 Founded in Kochi', '2017 Expanded statewide operations', '2020 Added immersive LED and laser division', '2024 Delivered 1,000+ premium events'];

export const AboutPage = () => {
  const scope = useReveal();

  return (
    <div ref={scope}>
      <PageHero eyebrow="ABOUT US" title="Kerala’s premium event production partner for unforgettable experiences." description="Dosthi Light & Sound blends technical mastery with cinematic storytelling to produce deeply memorable events." />
      <section className="section-shell grid gap-6 md:grid-cols-2">
        {['Mission', 'Vision', 'Values', 'Founder Message'].map((item) => (
          <article key={item} className="reveal-up glass-panel rounded-3xl p-8">
            <h3 className="text-3xl">{item}</h3>
            <p className="mt-4 text-white/65">We combine innovation, reliability and artistic direction to elevate event production standards across every category.</p>
          </article>
        ))}
      </section>
      <section className="section-shell my-18">
        <p className="mb-5 text-xs tracking-[0.3em] text-[#FFD54A]">TIMELINE</p>
        <div className="space-y-4">
          {timeline.map((item) => (
            <div key={item} className="reveal-up border-l border-[#F4B400]/40 pl-5 text-lg">{item}</div>
          ))}
        </div>
      </section>
      <StatsStrip />
    </div>
  );
};
