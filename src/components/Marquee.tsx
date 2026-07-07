import { partnerLogos } from '../data/siteData';

export const Marquee = () => (
  <div className="my-14 overflow-hidden border-y border-white/10 py-6">
    <div className="animate-[marquee_24s_linear_infinite] whitespace-nowrap text-white/50">
      {[...partnerLogos, ...partnerLogos].map((logo, index) => (
        <span key={`${logo}-${index}`} className="mx-8 text-sm uppercase tracking-[0.35em]">
          {logo}
        </span>
      ))}
    </div>
  </div>
);
