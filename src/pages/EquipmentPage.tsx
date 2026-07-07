import { PageHero } from '../components/PageHero';
import { SmartImage } from '../components/SmartImage';
import { equipmentItems } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

export const EquipmentPage = () => {
  const scope = useReveal();

  return (
    <div ref={scope}>
      <PageHero eyebrow="EQUIPMENT" title="World-class inventory engineered for flawless live production." description="Professional audio, precision lighting and advanced special effects systems maintained for premium reliability." />
      <section className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {equipmentItems.map((item) => (
          <article key={item.title} className="reveal-up group relative overflow-hidden rounded-3xl border border-white/10 p-6 transition hover:border-[#F4B400]/40">
            <SmartImage
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-40"
              fallbackSeed={item.title.toLowerCase().replaceAll(' ', '-')}
            />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-[#FFD54A]">{item.category}</p>
              <h3 className="mt-4 text-3xl">{item.title}</h3>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
