import { useState } from 'react';
import {
  ExternalLink,
  Download,
  Check,
  Globe,
  Smartphone,
  Cpu,
  Wrench,
  Server,
  GraduationCap,
  ArrowUpRight,
  Star,
  MessageCircle,
  Sparkles,
  School,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { EFA_PRODUCTS, EFA_SERVICES } from '../data/products';
import { Product, ServiceItem } from '../types';
import Image from 'next/image';

interface SolutionsSectionProps {
  onDownloadApk: (product: Product) => void;
}

export default function SolutionsSection({ onDownloadApk }: SolutionsSectionProps) {
  const [playStoreAlertProduct, setPlayStoreAlertProduct] = useState<string | null>(null);

  const handlePlayStoreClick = (productName: string) => {
    setPlayStoreAlertProduct(productName);
    setTimeout(() => {
      setPlayStoreAlertProduct(null);
    }, 4500);
  };

  const renderServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#0A3D8F]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#0A3D8F]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#0A3D8F]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#0A3D8F]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#0A3D8F]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#0A3D8F]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0A3D8F]" />;
    }
  };

  return (
    <section id="solutions" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0A3D8F] text-xs font-bold tracking-wider uppercase shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Éditeur Logiciel & Société IT · Togo & Afrique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Nos Solutions &amp; Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            <strong>EFA TECHNOLOGIE</strong> est une société IT complète : nous développons nos propres logiciels professionnels souverains et concevons vos projets numériques sur-mesure pour propulser vos activités.
          </p>
        </div>

        {/* Global Play Store Toast / Banner */}
        {playStoreAlertProduct && (
          <div className="mb-8 max-w-xl mx-auto p-4 bg-blue-50 border border-blue-200 rounded-xl text-center text-sm text-[#0A3D8F] shadow-sm animate-fade-in flex items-center justify-between gap-3">
            <span>
              <strong>{playStoreAlertProduct}</strong> arrive très prochainement sur le Google Play Store ! Téléchargez l'APK officiel dès maintenant ci-dessous.
            </span>
            <button
              onClick={() => setPlayStoreAlertProduct(null)}
              className="text-slate-400 hover:text-slate-600 text-xs font-bold px-2 py-1"
            >
              Fermer
            </button>
          </div>
        )}

        {/* ========================================================================= */}
        {/* ⭐ PRODUIT PHARE : EFA SCHOOL (Application Scolaire)                      */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A2342] via-[#0F172A] to-[#1E293B] border-2 border-[#D4AF37] shadow-2xl p-6 sm:p-8 lg:p-10 text-white">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Logo & Badges */}
              <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#F4E08B] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-xs">
                  <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  <span>Produit Phare · Édition 2026</span>
                </div>

                {/* Crest Logo */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-white/5 backdrop-blur-xs p-2 border border-[#D4AF37]/50 shadow-xl flex items-center justify-center mb-4">
                  <Image
                    src="/logos/efa-school.webp"
                    alt="Logo EFA SCHOOL - Application Scolaire"
                    width={144}
                    height={144}
                    loading="lazy"
                    placeholder="empty"
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 text-xs font-semibold text-slate-200">
                  <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Lancement Janvier 2026</span>
                </div>
              </div>

              {/* Right Column: Title, Description, Features & CTAs */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                      EFA SCHOOL
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wider">
                      Nouveau
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      v1.0.0
                    </span>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-[#F4E08B] mb-3">
                    Gestion Digitalisée des Écoles Africaines — De la CI à la Terminale
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">
                    Conçue sur-mesure pour les collèges, lycées et écoles primaires d'Afrique. EFA SCHOOL unifie la gestion des élèves, les calculs de moyennes et bulletins, le paiement des scolarités et communique en temps réel avec les parents d'élèves via des alertes WhatsApp automatiques.
                  </p>

                  {/* Feature Badges Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#F4E08B] stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-200">
                        <strong>Bulletins & Notes :</strong> Calcul automatique des rangs, moyennes et PV d'examens
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#F4E08B] stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-200">
                        <strong>Portail & WhatsApp :</strong> Envoi instantané des absences et notes aux parents
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#F4E08B] stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-200">
                        <strong>Trésorerie & Scolarité :</strong> Suivi des écolages, relances et reçus de caisse
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                      <div className="w-5 h-5 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#F4E08B] stroke-[3]" />
                      </div>
                      <span className="text-xs text-slate-200">
                        <strong>Multi-support & Hors-ligne :</strong> Fonctionne sans coupure avec ou sans Internet
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href="https://wa.me/22896100972?text=Bonjour%20EFA%20TECHNOLOGIE,%20je%20souhaite%20une%20d%C3%A9monstration%20gratuite%20d'EFA%20SCHOOL%20pour%20notre%20%C3%A9tablissement%20scolaire."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm shadow-lg transition-transform active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Demander une Démo École (WhatsApp)</span>
                  </a>

                  <a
                    href="#telechargements"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors border border-white/20"
                  >
                    <Download className="w-4 h-4 text-[#D4AF37]" />
                    <span>Voir dans Téléchargements (21.2 Mo)</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 2 : NOS SOLUTIONS LOGICIELLES DÉPLOYÉES                            */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Nos Solutions Déployées &amp; Disponibles
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Des applications prêtes à l'emploi sur le Web et en version mobile Android (APK).
            </p>
          </div>

          {/* Social Proof Pill Badge */}
          <div className="flex justify-center mb-8">
            <span className="px-4 py-1.5 bg-green-50 border border-green-200 rounded-full text-xs font-bold text-green-700">
              ⚡ 10 000+ boutiques nous font confiance à Lomé
            </span>
          </div>

          {/* 3 Luxury Product Store Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {EFA_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Header Bar */}
                <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Official 80x80px App Logo */}
                    <div
                      className="w-20 h-20 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center p-1.5 shrink-0 overflow-hidden"
                      style={{ width: '80px', height: '80px', borderRadius: '16px' }}
                    >
                      <Image
                        src={prod.logoSrc}
                        alt={`Logo ${prod.name}`}
                        width={80}
                        height={80}
                        loading="lazy"
                        placeholder="empty"
                        className="w-full h-full object-contain"
                        style={{ borderRadius: '12px' }}
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#0A3D8F] mb-0.5">
                        {prod.category}
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                        {prod.name}
                      </h4>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">
                        {prod.tagline}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {prod.version}
                    </span>
                  </div>
                </div>

                {/* Product Image Preview */}
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={prod.imageSrc}
                    alt={`Aperçu écran ${prod.name}`}
                    width={800}
                    height={450}
                    fill={true}
                    format="webp"
                    quality={75}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={prod.blurDataURL}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-700 border border-slate-200/60 shadow-2xs z-10">
                    {prod.size}
                  </div>
                </div>

                {/* Description & Key Points */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {prod.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5">
                      {prod.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-[#E8F1FF] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#0A3D8F] stroke-[3]" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3 ACTION BUTTONS */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {/* Bouton 1 BLEU: "Utiliser sur le Web" */}
                    <a
                      href={prod.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-[#0A3D8F] hover:bg-[#082f70] rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Utiliser sur le Web</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-0.5 opacity-80" />
                    </a>

                    {/* Bouton 2 NOIR: "Télécharger APK" */}
                    <a
                      href={prod.apkPath}
                      download={prod.apkFilename}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log(`[EFA Tech] Téléchargement démarré : ${prod.apkFilename} | Taille: ${prod.size}`);
                        onDownloadApk(prod);
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-all active:scale-[0.98] cursor-pointer"
                    >
                      <Download className="w-4 h-4 text-slate-200" />
                      <span>Télécharger APK ({prod.size})</span>
                    </a>

                    {/* Bouton 3 Play Store */}
                    <button
                      type="button"
                      onClick={() => handlePlayStoreClick(prod.name)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200/80 rounded-xl border border-slate-200/70 transition-colors cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.036 2.036 0 0 1-.61-1.464V3.278c0-.568.224-1.096.609-1.464zm11.602 11.604l2.585-2.585-11.834-6.8a1.99 1.99 0 0 0-.962-.25l10.211 9.635zm0 1.164L5.002 24.217a1.99 1.99 0 0 0 .962-.25l11.834-6.8-2.587-2.585zm1.53-1.53l3.655 2.1c1.238.71 1.238 1.87 0 2.58l-3.655 2.1-2.122-2.122 2.122-2.122z" />
                      </svg>
                      <span>{prod.playStoreStatus}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3 : GRILLE DES 6 SERVICES INFORMATIQUES SUR-MESURE                */}
        {/* ========================================================================= */}
        <div id="services" className="pt-6">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold tracking-wider uppercase shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Services IT &amp; Ingénierie Informatique</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Nos 6 Services Numériques Sur-Mesure
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed [text-wrap:balance]">
              Besoin d'un site web, d'une application sur-mesure ou d'une infrastructure robuste ? Nos ingénieurs vous accompagnent de A à Z avec réactivité et professionnalisme.
            </p>
          </div>

          {/* Grid 6 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EFA_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-[#0A3D8F]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-13 h-13 rounded-2xl bg-[#E8F1FF] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-300">
                      {renderServiceIcon(srv.iconName)}
                    </div>
                    <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#0A3D8F] group-hover:text-white transition-colors">
                      Service IT
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0A3D8F] transition-colors">
                    {srv.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#0A3D8F] mt-1 mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {srv.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Button: "Devis Gratuit" -> wa.me/22896100972 */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/22896100972?text=${encodeURIComponent(srv.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs active:scale-[0.98] cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Devis Gratuit (WhatsApp)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Assistance Banner below services */}
          <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <p className="text-sm font-bold text-[#0A3D8F]">
                Vous avez un projet spécifique ou un cahier des charges ?
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                Nos architectes logiciels à Lomé analysent vos besoins gratuitement et vous proposent un devis transparent sous 24h.
              </p>
            </div>
            <a
              href="https://wa.me/22896100972?text=Bonjour%20EFA%20TECHNOLOGIE,%20je%20souhaite%20un%20devis%20gratuit%20pour%20un%20projet%20informatique."
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A3D8F] hover:bg-[#082f70] text-white text-xs font-bold shadow-xs transition-all active:scale-[0.98]"
            >
              <span>Discuter de mon projet</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
