import { FiInstagram, FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { navItems } from '../data/siteData';

export const Footer = () => (
  <footer className="mt-24 border-t border-white/10 py-14">
    <div className="section-shell grid gap-10 md:grid-cols-4">
      <div>
        <p className="text-2xl font-semibold">Dosthi Light & Sound</p>
        <p className="mt-3 text-sm text-white/65">Premium event production across Kerala.</p>
      </div>
      <div>
        <p className="mb-3 text-sm uppercase text-[#FFD54A]">Quick Links</p>
        <div className="grid gap-2 text-white/75">
          {navItems.slice(0, 6).map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="space-y-3 text-sm text-white/80">
        <p className="text-[#FFD54A]">Contact</p>
        <p className="flex items-center gap-2"><FiPhoneCall /> +91 90000 12345</p>
        <p className="flex items-center gap-2"><FiMail /> hello@dosthilightsound.com</p>
        <p className="flex items-center gap-2"><FiMapPin /> Kochi, Kerala</p>
      </div>
      <div>
        <p className="mb-3 text-[#FFD54A]">Newsletter</p>
        <div className="glass-panel rounded-2xl p-2">
          <input placeholder="Your email" className="w-full bg-transparent px-3 py-2 text-sm outline-none" />
        </div>
        <button type="button" className="mt-3 flex items-center gap-2 text-sm">
          <FiInstagram /> Follow on Instagram
        </button>
      </div>
    </div>
  </footer>
);
