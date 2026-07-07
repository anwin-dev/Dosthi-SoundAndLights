import type { EquipmentItem, MediaItem, Metric, NavItem, ServiceCategory, ServiceDetail } from '../types/site';

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Equipment', path: '/equipment' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Booking', path: '/booking' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export const metrics: Metric[] = [
  { label: 'Events Produced', value: '1,280', suffix: '+' },
  { label: 'Happy Clients', value: '860', suffix: '+' },
  { label: 'Years Experience', value: '12', suffix: '+' },
  { label: 'Equipment Inventory', value: '420', suffix: '+' },
];

export const partnerLogos = ['Lulu', 'Zudio', 'InfoPark', 'Le Meridien', 'Muthoot', 'Hilite'];

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Wedding Productions',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format',
    description: 'Luxury lighting, sound and visual narratives crafted for unforgettable wedding experiences.',
    services: ['Wedding Events', 'Reception', 'Engagement', 'Sangeet', 'Church Wedding', 'Temple Wedding', 'Destination Wedding'],
  },
  {
    title: 'Corporate Experiences',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format',
    description: 'Strategic staging and flawless technical execution for impactful business events.',
    services: ['Corporate Events', 'Conference', 'Seminar', 'Award Ceremony', 'Product Launch', 'Exhibition'],
  },
  {
    title: 'College & Youth Events',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1400&auto=format',
    description: 'High-energy production setups for vibrant campus festivals and cultural celebrations.',
    services: ['College Fest', 'Arts Festival', 'Tech Fest', 'Freshers', 'Farewell', 'DJ Night', 'Cultural Festival', 'Sports Meet'],
  },
  {
    title: 'Concerts & Stage Shows',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1400&auto=format',
    description: 'Cinematic lighting plots and concert-grade audio systems for large audience performances.',
    services: ['Celebrity Shows', 'Music Concert', 'Live Orchestra', 'EDM', 'Stage Shows'],
  },
  {
    title: 'Public & Religious Events',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1400&auto=format',
    description: 'Reliable, scalable setups for culturally significant events and mass gatherings.',
    services: ['Government Events', 'Political Meetings', 'Public Events', 'Religious Events', 'Temple Festival', 'Church Convention', 'Mosque Programs'],
  },
  {
    title: 'Lifestyle & Community Events',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1400&auto=format',
    description: 'Bespoke event production for personal celebrations and branded entertainment formats.',
    services: ['Birthday', 'Anniversary', 'Baby Shower', 'House Warming', 'Fashion Shows', 'Dance Competition', 'Drama', 'School Programs', 'Sports Events'],
  },
];

export const equipmentItems: EquipmentItem[] = [
  'Professional Audio',
  'Professional Lighting',
  'LED Walls',
  'Moving Heads',
  'Beam Lights',
  'Smoke Machine',
  'Laser',
  'CO2 Jets',
  'Cold Spark',
  'Truss',
  'Generator',
  'Digital Mixer',
  'Wireless Microphones',
  'Stage Platforms',
].map((title, index) => ({
  title,
  category: index % 2 ? 'Lighting' : 'Audio & Stage',
  image: `https://picsum.photos/seed/equipment-${index}/1000/700`,
}));

export const portfolioCategories = ['Wedding', 'Corporate', 'Concert', 'College', 'Temple Festival', 'Church', 'Birthday', 'Sports', 'Fashion'];

export const heroCollageImages = [
  { id: 'wedding-lighting', label: 'Wedding Lighting', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format' },
  { id: 'college-fest', label: 'College Festival', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format' },
  { id: 'concert-stage', label: 'Concert Stage', src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format' },
  { id: 'corporate-event', label: 'Corporate Event', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format' },
  { id: 'led-wall', label: 'LED Wall', src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1200&auto=format' },
  { id: 'moving-head-light', label: 'Moving Head Light', src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format' },
  { id: 'live-audience', label: 'Live Audience', src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format' },
  { id: 'stage-performance', label: 'Stage Performance', src: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format' },
];

export const portfolioMedia: MediaItem[] = Array.from({ length: 14 }).map((_, index) => {
  const category = portfolioCategories[index % portfolioCategories.length];
  const type = index % 5 === 0 ? 'video' : 'image';

  return {
    id: `media-${index + 1}`,
    title: `${category} Showcase ${index + 1}`,
    category,
    type,
    thumbnail: `https://picsum.photos/seed/portfolio-thumb-${index}/1000/${index % 2 ? 1400 : 900}`,
    src:
      type === 'video'
        ? 'https://player.vimeo.com/external/403323726.sd.mp4?s=85f0db9eaf8d916f549fce9f4292b4be8f7f4f1f&profile_id=139&oauth2_token_id=57447761'
        : `https://picsum.photos/seed/portfolio-${index}/1600/${index % 2 ? 2200 : 1200}`,
  };
});

export const serviceDetails: ServiceDetail[] = [
  {
    id: 'wedding',
    title: 'Wedding Production',
    category: 'Wedding',
    banner: 'https://images.unsplash.com/photo-1464699908537-0954e50791ee?q=80&w=1600&auto=format',
    description: 'Cinematic wedding experiences crafted with immersive light design and synchronized audio storytelling.',
    equipmentUsed: ['Professional Lighting', 'LED Wall', 'Digital Mixer', 'Wireless Microphones'],
    cta: 'Plan Wedding Experience',
  },
  {
    id: 'college-fest',
    title: 'College Fest Production',
    category: 'College Fest',
    banner: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=1600&auto=format',
    description: 'High-energy technical staging for youth festivals with dynamic effects and crowd-responsive audio.',
    equipmentUsed: ['Moving Heads', 'CO2 Jets', 'Cold Spark', 'Professional Audio'],
    cta: 'Book Fest Production',
  },
  {
    id: 'concert',
    title: 'Concert & Stage Shows',
    category: 'Concert',
    banner: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format',
    description: 'Arena-style sound reinforcement and layered lighting architecture for large audience concerts.',
    equipmentUsed: ['Line Array Audio', 'Beam Lights', 'Laser', 'Stage Platforms'],
    cta: 'Scale Your Concert',
  },
  {
    id: 'corporate',
    title: 'Corporate Event Direction',
    category: 'Corporate',
    banner: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format',
    description: 'Brand-led production systems for conferences, launches and executive showcases.',
    equipmentUsed: ['LED Wall', 'Presentation Audio', 'Truss', 'Professional Lighting'],
    cta: 'Produce Corporate Event',
  },
  {
    id: 'religious',
    title: 'Temple & Church Convention',
    category: 'Temple Festival',
    banner: 'https://images.unsplash.com/photo-1480365501497-199581be0e66?q=80&w=1600&auto=format',
    description: 'Reliable production workflows for large spiritual gatherings and public processions.',
    equipmentUsed: ['Generator', 'Wireless Microphones', 'Professional Audio', 'Smoke Machine'],
    cta: 'Discuss Event Setup',
  },
  {
    id: 'lifestyle',
    title: 'Birthday • Fashion • Sports',
    category: 'Fashion Show',
    banner: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1600&auto=format',
    description: 'Custom event formats for lifestyle celebrations, runway showcases and sports ceremonies.',
    equipmentUsed: ['LED Wall', 'Moving Heads', 'Professional Lighting', 'Digital Mixer'],
    cta: 'Start Custom Event Plan',
  },
];
