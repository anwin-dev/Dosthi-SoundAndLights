import { PageHero } from '../components/PageHero';

export const TestimonialsPage = () => (
  <div>
    <PageHero eyebrow="TESTIMONIALS" title="Client stories, video reviews and social proof at premium depth." description="From Google reviews to cinematic testimonials, we showcase trust with elegance." />
    <section className="section-shell grid gap-5 md:grid-cols-3">
      {['Video Reviews', 'Google Reviews', 'Client Stories'].map((item) => (
        <article key={item} className="glass-panel rounded-3xl p-7">
          <h3 className="text-3xl">{item}</h3>
          <p className="mt-3 text-white/65">“The production quality felt global. Every cue, transition and visual impact was exactly on point.”</p>
        </article>
      ))}
    </section>
  </div>
);
