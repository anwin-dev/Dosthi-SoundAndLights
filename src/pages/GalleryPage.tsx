import { PageHero } from '../components/PageHero';
import { SmartImage } from '../components/SmartImage';

export const GalleryPage = () => (
  <div>
    <PageHero eyebrow="GALLERY" title="Photo, video, drone and 360 captures with premium presentation." description="Immersive gallery experience with elegant hover motion and cinematic spacing." />
    <section className="section-shell grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {['Photos', 'Videos', 'Drone Shots', '360 View', 'Instagram Style'].map((item, index) => (
        <article key={item} className="group relative overflow-hidden rounded-3xl border border-white/10">
          <SmartImage
            src={`https://picsum.photos/seed/gallery-${index}/800/900`}
            alt={item}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
            fallbackSeed={`gallery-${index}`}
          />
          <p className="absolute bottom-4 left-4 text-lg">{item}</p>
        </article>
      ))}
    </section>
  </div>
);
