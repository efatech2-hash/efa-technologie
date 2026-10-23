import { ArrowRight, Download, CheckCircle2, Shield, Smartphone } from 'lucide-react';
import ThreeHeroShowcase from './ThreeHeroShowcase';

interface HeroProps {
  onDiscoverClick: () => void;
  onApkClick: () => void;
}

export default function Hero({ onDiscoverClick, onApkClick }: HeroProps) {
  return (
    <section id="accueil" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-white">
      {/* Background Soft Ambient Light Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#E8F1FF]/80 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-6 space-y-6">
            {/* Quiet Editorial Kicker (NO static pill boxes) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0A3D8F]">
              <span>EFA TECHNOLOGIE</span>
              <span aria-hidden="true">·</span>
              <span>Lomé, Togo</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600">Innovation Africaine</span>
            </div>

            {/* Main Headline (exact text requested) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] [text-wrap:balance]">
              La technologie devient enfin <span className="text-[#0A3D8F]">FACILE</span>
            </h1>

            {/* Subtitle (exact text requested) */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
              EFA Tech simplifie la gestion de votre entreprise au Togo et en Afrique.
            </p>

            <p className="text-sm text-slate-500 leading-normal max-w-lg">
              Facturation certifiée OTR, calcul de prix et marges EFA Mon prix, comptabilité simplifiée en FCFA et pharmacies de garde à Lomé, dans des applications rapides et intuitives.
            </p>

            {/* 2 Primary CTA Buttons (exact buttons requested) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onDiscoverClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-[#0A3D8F] hover:bg-[#082f70] rounded-xl shadow-md shadow-[#0A3D8F]/15 transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <span>Découvrir nos solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onApkClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-900 bg-[#E8F1FF] hover:bg-[#d8e7ff] border border-blue-200/60 rounded-xl transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#0A3D8F]" />
                <span>Télécharger APK</span>
              </button>
            </div>

            {/* Adjacency Trust signals */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A3D8F]" />
                <span>Prise en main en 5 min</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A3D8F]" />
                <span>Mode Hors-Ligne & FCFA</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0A3D8F]" />
                <span>Support WhatsApp 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three.js Interactive 3D Showcase */}
          <div className="lg:col-span-6 w-full">
            <ThreeHeroShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}
