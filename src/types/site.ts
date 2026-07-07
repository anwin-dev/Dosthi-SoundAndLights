export type NavItem = {
  label: string;
  path: string;
};

export type Metric = {
  label: string;
  value: string;
  suffix?: string;
};

export type ServiceCategory = {
  title: string;
  services: string[];
  image: string;
  description: string;
};

export type EquipmentItem = {
  title: string;
  category: string;
  image: string;
};

export type MediaItem = {
  id: string;
  title: string;
  category: string;
  type: 'image' | 'video';
  thumbnail: string;
  src: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  category: string;
  banner: string;
  description: string;
  equipmentUsed: string[];
  cta: string;
};
