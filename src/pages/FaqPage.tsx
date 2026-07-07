import { useState } from 'react';
import { PageHero } from '../components/PageHero';

const faqs = [
  { q: 'Do you handle complete event production?', a: 'Yes, from stage design and rigging to live sound, lighting and operations.' },
  { q: 'Can I book only equipment?', a: 'Yes. We offer equipment-only rentals with optional technical crew support.' },
  { q: 'Do you operate outside Kochi?', a: 'We execute events throughout Kerala with mobile production teams.' },
];

export const FaqPage = () => {
  const [open, setOpen] = useState(0);

  return (
    <div>
      <PageHero eyebrow="FAQ" title="Everything clients ask before production goes live." description="Animated accordion for quick answers on planning, logistics and technical execution." />
      <section className="section-shell space-y-3">
        {faqs.map((item, index) => (
          <article key={item.q} className="glass-panel rounded-2xl p-5">
            <button type="button" onClick={() => setOpen(index)} className="w-full text-left text-xl">{item.q}</button>
            <div className={`grid transition-all ${open === index ? 'grid-rows-[1fr] pt-3' : 'grid-rows-[0fr]'}`}>
              <p className="overflow-hidden text-white/70">{item.a}</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};
