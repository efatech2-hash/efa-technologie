export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  version: string;
  size: string;
  webUrl: string;
  apkPath: string;
  apkFilename: string;
  playStoreStatus: string;
  features: string[];
  imageSrc: string;
  logoSrc: string;
  blurDataURL?: string;
  accentColor: string;
  category: string;
}

export interface Advantage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  iconName: 'Sparkles' | 'Globe' | 'MessageCircle';
}
