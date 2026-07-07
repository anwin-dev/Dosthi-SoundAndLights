import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiMessageCircle, FiPhoneCall } from 'react-icons/fi';
import { PageHero } from '../components/PageHero';

export const ContactPage = () => (
  <div>
    <PageHero eyebrow="CONTACT" title="Let’s design your next iconic event production." description="Reach us for bookings, consultations and complete technical direction." />
    <section className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="overflow-hidden rounded-3xl border border-white/10">
        <iframe
          title="Kochi map"
          src="https://maps.google.com/maps?q=kochi&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="h-[400px] w-full"
        />
      </div>
      <article className="glass-panel space-y-4 rounded-3xl p-7">
        <p className="flex items-center gap-2"><FiPhoneCall /> +91 90000 12345</p>
        <p className="flex items-center gap-2"><FiMessageCircle /> WhatsApp Support</p>
        <p className="flex items-center gap-2"><FiMail /> hello@dosthilightsound.com</p>
        <p className="flex items-center gap-2"><FiMapPin /> Kochi, Kerala</p>
        <div className="flex gap-3 pt-4"><FiInstagram /><FiFacebook /></div>
      </article>
    </section>
  </div>
);
