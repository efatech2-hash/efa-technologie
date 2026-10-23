import { Product, Advantage } from '../types';

export const EFA_PRODUCTS: Product[] = [
  {
    id: 'efa-aconta',
    name: 'EFA ACONTA',
    tagline: 'Comptabilité & Trésorerie simplifiées',
    description:
      'Gérez votre trésorerie, vos recettes quotidiennes et vos états financiers en toute simplicité. Idéal pour commerçants, artisans, prestataires et PME au Togo et en Afrique de l\'Ouest.',
    badge: 'Finance & Trésorerie',
    version: 'v2.1.0',
    size: '18.4 Mo',
    webUrl: 'https://efa-aconta.vercel.app',
    apkPath: '/apks/efa-aconta.apk',
    apkFilename: 'efa-aconta.apk',
    playStoreStatus: 'Bientôt sur Play Store',
    category: 'Comptabilité Intuitive',
    accentColor: '#0A3D8F',
    imageSrc: '/src/assets/images/efa_aconta_preview.webp',
    logoSrc: '/logos/efa-aconta.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAACwAwCdASoUAAsAPzmGuVQvKSWjMAgB4CcJZwAAUo93AgB60Zk0AAD+VGe16S9ENsSsCeJKrpPJvfaE1XegoJ6DQrqks95aAXT8rbmj4z0fCAAA',
    features: [
      'Suivi instantané des entrées et sorties en Francs CFA (XOF)',
      'Rapprochement bancaire et solde de caisse automatique',
      'Bilans et rapports financiers clairs exportables en PDF',
      'Fonctionne sans connexion Internet avec synchronisation cloud',
    ],
  },
  {
    id: 'efa-suite',
    name: 'EFA SUITE',
    tagline: 'Application 2-en-1 : EFA Facture & EFA Mon prix',
    description:
      'EFA SUITE est une application 2-en-1 puissante conçue pour les commerçants et entreprises : elle réunit la facturation professionnelle certifiée OTR (EFA Facture) et le calcul précis de prix et marges (EFA Mon prix) pour vendre en toute sérénité sans jamais perdre.',
    badge: 'Application 2-en-1',
    version: 'v1.8.4',
    size: '22.1 Mo',
    webUrl: 'https://efa-suite.vercel.app',
    apkPath: '/apks/efa-suite.apk',
    apkFilename: 'efa-suite.apk',
    playStoreStatus: 'Bientôt sur Play Store',
    category: 'Facturation & Calcul de Marges',
    accentColor: '#0A3D8F',
    imageSrc: '/src/assets/images/efa_suite_preview.webp',
    logoSrc: '/logos/efa-suite.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACwAwCdASoUAAsAPzmGuVOvKSWisAgB4CcJQBibA8FjDudswv3rMADhTqldw76bybY7wQwDV4MHqLquNvFxyCD2cmqu9GKmPw/K0Wkd74ENom/Rza2TpgAA',
    features: [
      'EFA Facture : Facturation professionnelle certifiée OTR',
      'EFA Mon prix : Calculateur de prix et de marges pour fixer vos prix réels',
      'Calcul automatique des charges, taxes et marges pour vendre sans perdre',
      'Historique client, devis conformes et gestion commerciale intégrée',
    ],
  },
  {
    id: 'efa-garde',
    name: 'EFA GARDE',
    tagline: 'Pharmacies de garde à Lomé & contact direct',
    description:
      'EFA Garde permet de repérer facilement les pharmacies de garde autour de vous à Lomé et de discuter directement avec ces pharmacies.',
    badge: 'Pharmacies de Garde',
    version: 'v3.0.1',
    size: '16.8 Mo',
    webUrl: 'https://efa-garde.vercel.app',
    apkPath: '/apks/efa-garde.apk',
    apkFilename: 'efa-garde.apk',
    playStoreStatus: 'Bientôt sur Play Store',
    category: 'Santé & Pharmacies Lomé',
    accentColor: '#0A3D8F',
    imageSrc: '/src/assets/images/efa_garde_preview.webp',
    logoSrc: '/logos/efa-garde.webp',
    blurDataURL:
      'data:image/webp;base64,UklGRmYAAABXRUJQVlA4IFoAAAAQBACdASoUAAsAPzmGulQvKSWjMAgB4CcJQBOmUABv5aw+dFW1JhHbeAD+1akL97650i8SpyQgxETMxZqq2dq5AiVK5CayoN/6cq7tq4WQD9ugMVeeTkGSrAA=',
    features: [
      'Repérage immédiat des pharmacies de garde ouvertes autour de vous à Lomé',
      'Discussion et appel direct avec chaque pharmacie de garde',
      'Localisation précise, itinéraires et horaires de garde actualisés',
      'Accessible 24h/24 en urgence, sur le Web et en application APK',
    ],
  },
];

export interface ApkItem {
  id: string;
  name: string;
  tagline: string;
  version: string;
  size: string;
  apkPath: string;
  apkFilename: string;
  logoSrc: string;
}

export const EFA_ALL_APKS: ApkItem[] = [
  {
    id: 'efa-aconta',
    name: 'EFA ACONTA',
    tagline: 'Comptabilité & Trésorerie en FCFA',
    version: 'v2.1.0',
    size: '18.4 Mo',
    apkPath: '/apks/efa-aconta.apk',
    apkFilename: 'efa-aconta.apk',
    logoSrc: '/logos/efa-aconta.webp',
  },
  {
    id: 'efa-suite',
    name: 'EFA SUITE',
    tagline: 'Facture OTR & Calcul EFA Mon prix',
    version: 'v1.8.4',
    size: '22.1 Mo',
    apkPath: '/apks/efa-suite.apk',
    apkFilename: 'efa-suite.apk',
    logoSrc: '/logos/efa-suite.webp',
  },
  {
    id: 'efa-garde',
    name: 'EFA GARDE',
    tagline: 'Pharmacies de garde à Lomé',
    version: 'v3.0.1',
    size: '16.8 Mo',
    apkPath: '/apks/efa-garde.apk',
    apkFilename: 'efa-garde.apk',
    logoSrc: '/logos/efa-garde.webp',
  },
  {
    id: 'efa-tech',
    name: 'EFA TECH',
    tagline: 'Portail officiel tout-en-un EFA',
    version: 'v1.0.0',
    size: '19.5 Mo',
    apkPath: '/apks/efa-tech.apk',
    apkFilename: 'efa-tech.apk',
    logoSrc: '/logos/efa-tech.webp',
  },
];

export const EFA_ADVANTAGES: Advantage[] = [
  {
    id: 'adv-facile',
    number: '01',
    title: 'La technologie devient enfin facile',
    subtitle: 'Prise en main immédiate en moins de 5 minutes',
    description:
      'Finies les usines à gaz compliquées. Nos logiciels sont créés avec une obsession de clarté absolue : vous n\'avez pas besoin d\'être informaticien ou comptable pour gérer votre activité comme un pro.',
    highlights: [
      'Interfaces épurées au style Apple/Stripe',
      'Navigation limpide sans jargon technique',
      'Accessible sur ordinateur, tablette et smartphone',
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'adv-togolais',
    number: '02',
    title: '100% pensé pour le Togo et l\'Afrique',
    subtitle: 'Conçu pour nos réalités économiques et de terrain',
    description:
      'Nos outils intègrent nativement le Franc CFA (XOF), la gestion de trésorerie locale, les connexions réseau fluctuantes et le travail en mode hors-ligne sans interruption.',
    highlights: [
      'Fonctionne hors-ligne et synchronise dès reconnexion',
      'Adapté aux PME, artisans, commerces et grandes structures',
      'Frais transparents et sans abonnement exorbitant',
    ],
    iconName: 'Globe',
  },
  {
    id: 'adv-support',
    number: '03',
    title: 'Support WhatsApp & Local 24/7',
    subtitle: 'Une équipe humaine basée à Lomé toujours disponible',
    description:
      'Un doute ? Un besoin d\'aide ou une question ? Nos ingénieurs et conseillers locaux basés à Lomé vous répondent directement sur WhatsApp ou par téléphone sans délai d\'attente.',
    highlights: [
      'Assistance directe sur WhatsApp au +228 96 10 09 72',
      'Ligne directe au +228 93 28 91 62',
      'Formations sur place et accompagnement sur-mesure',
    ],
    iconName: 'MessageCircle',
  },
];

export const EFA_CONTACT = {
  brand: 'EFA TECHNOLOGIE',
  slogan: 'EFA Tech, la facilité de la technologie',
  email: 'efatech2@gmail.com',
  phone1: '+228 96 10 09 72',
  phone1Clean: '+22896100972',
  phone2: '+228 93 28 91 62',
  phone2Clean: '+22893289162',
  location: 'Lomé, Togo',
  whatsappUrl: 'https://wa.me/22896100972?text=Bonjour%20EFA%20Tech,%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20solutions.',
};
