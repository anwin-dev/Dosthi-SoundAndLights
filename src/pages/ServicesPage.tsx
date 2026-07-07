import { MagneticButton } from '../components/MagneticButton';
import { PageHero } from '../components/PageHero';
import { SmartImage } from '../components/SmartImage';
import { serviceDetails } from '../data/siteData';
import { useReveal } from '../hooks/useReveal';

export const ServicesPage = () => {
  const scope = useReveal();

  return (
    <div ref={scope}>
      <PageHero eyebrow="SERVICES" title="End-to-end event production suites for every format." description="Every service category includes premium banners, key equipment stacks and conversion-ready action blocks." />
      <div className="section-shell space-y-8">
        {serviceDetails.map((service) => (
          <section key={service.id} className="reveal-up overflow-hidden rounded-[2rem] border border-white/10 md:grid md:grid-cols-[1.1fr_1fr]">
            <SmartImage
              src={service.banner}
              alt={service.title}
              className="h-full min-h-[20rem] w-full object-cover transition duration-700 hover:scale-105"
              wrapperClassName="h-full"
              fallbackSeed={service.id}
            />
            <div className="space-y-5 p-6 md:p-10">
              <p className="text-xs tracking-[0.3em] text-[#FFD54A]">{service.category}</p>
              <h2 className="text-3xl md:text-5xl">{service.title}</h2>
              <p className="text-white/70">{service.description}</p>
              <p className="text-xs tracking-[0.3em] text-[#FFD54A]">Equipment Used</p>
              <div className="flex flex-wrap gap-2">
                {service.equipmentUsed.map((equipment) => (
                  <span key={equipment} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">{equipment}</span>
                ))}
              </div>
              <MagneticButton>{service.cta}</MagneticButton>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
