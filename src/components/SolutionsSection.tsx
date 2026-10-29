import { useState } from 'react';
import { ExternalLink, Download, Check, Sparkles, Smartphone, Globe, Shield, ArrowUpRight } from 'lucide-react';
import { EFA_PRODUCTS } from '../data/products';
import { Product } from '../types';
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

  return (
    <section id="solutions" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#0A3D8F]">
            <span>Catalogue d'applications</span>
            <span aria-hidden="true">·</span>
            <span>Édition 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Nos Solutions Professionnelles
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed [text-wrap:balance]">
            Des logiciels taillés sur-mesure pour propulser vos activités. Disponibles en ligne immédiatement et en version application Android native (APK).
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

        {/* Badge Preuve Sociale au-dessus des 3 cartes */}
        <div className="flex justify-center mb-4">
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
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                      {prod.name}
                    </h3>
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

                {/* 3 ACTION BUTTONS (Exact specifications) */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  {/* Bouton 1 BLEU: "Utiliser sur le Web" -> efa-*.vercel.app dans nouvel onglet */}
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

                  {/* Bouton 2 NOIR: "Télécharger APK" -> lien direct avec download, target=_blank, rel=noopener noreferrer */}
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

                  {/* Bouton 3 Play Store: badge "Bientôt sur Play Store" */}
                  <button
                    type="button"
                    onClick={() => handlePlayStoreClick(prod.name)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200/80 rounded-xl border border-slate-200/70 transition-colors cursor-pointer"
                  >
                    {/* Google Play store simple glyph */}
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
    </section>
  );
}
