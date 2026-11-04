import { useState, useEffect } from 'react';
import { ExternalLink, Linkedin, MapPin, ZoomIn, X, QrCode, Award, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function FounderSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  const stackTechnologies = [
    'React',
    'Supabase PostgreSQL',
    'Vercel',
    'Row Level Security',
    'OAuth Integration'
  ];

  return (
    <section id="fondateur" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/60 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0A2342]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAFBFC] border border-[#0A2342]/20 text-[#0A2342] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Direction & Conception Technique</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            À Propos du <span className="text-[#0A2342]">Fondateur</span>
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            L&apos;ingénierie et la vision souveraine derrière la Suite technologique EFA.
          </p>
        </div>

        {/* BLOC UNIQUE PREMIUM (Carte Tout-en-un) */}
        <div
          className="rounded-[16px] border border-[#0A2342] shadow-xl shadow-slate-900/5 overflow-hidden transition-all duration-300"
          style={{ backgroundColor: '#FAFBFC' }}
        >
          {/* Subtle top gold accent bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#D4AF37] via-[#F4E08B] to-[#D4AF37]" />

          <div className="p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Colonne Gauche (35% on desktop: lg:col-span-5) */}
              <div className="lg:col-span-5 flex flex-col items-start text-left border-b lg:border-b-0 lg:border-r border-slate-200/80 pb-8 lg:pb-0 lg:pr-8">
                
                {/* Profil: Photo à gauche (120x120, coins 16px, bordure or, visage centré sans coupure), nom et détails à droite */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-5 w-full">
                  <div
                    className="shrink-0 overflow-hidden bg-white select-none relative"
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '16px',
                      border: '2px solid #D4AF37',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                  >
                    {!imageError ? (
                      <img
                        src="/images/photo-pro-YESSOUFOU-Malik-white.jpg"
                        alt="YESSOUFOU Malik - Founder & Lead Developer EFA TECHNOLOGIE"
                        style={{
                          width: '120px',
                          height: '120px',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                          display: 'block'
                        }}
                        onError={() => setImageError(true)}
                      />
                    ) : (
                      <div
                        className="w-full h-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-2xl tracking-wider"
                        title="YESSOUFOU Malik"
                      >
                        YM
                      </div>
                    )}
                  </div>

                  {/* Alignement à droite: YESSOUFOU Malik | Vérifié ✓ | Founder... */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight leading-tight">
                      YESSOUFOU Malik
                    </h3>

                    {/* Badge bleu Vérifié ✓ sous le nom */}
                    <div className="mt-1">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-tight shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Vérifié ✓</span>
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#0A2342] leading-snug">
                      Founder &amp; Lead Developer @ EFA TECHNOLOGIE
                    </p>

                    {/* Badge: "Basé à Lomé, Togo • Disponible" */}
                    <div className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <MapPin className="w-3 h-3 text-emerald-700 shrink-0" />
                      <span className="truncate">Basé à Lomé, Togo • Disponible</span>
                    </div>
                  </div>
                </div>

                {/* Bio text (nouvelles descriptions exactes des applications EFA) */}
                <div className="mt-6 text-slate-700 text-sm leading-relaxed text-left bg-white/80 p-5 rounded-2xl border border-slate-200/80 shadow-xs w-full">
                  <p className="font-medium text-slate-900 leading-snug">
                    Je suis <span className="font-bold text-slate-950">YESSOUFOU Malik</span>, Founder &amp; Lead Developer chez <span className="font-bold text-[#0A2342]">EFA TECHNOLOGIE</span>.
                  </p>
                  <p className="mt-3 text-slate-700">
                    J&apos;ai conçu et déployé de manière autonome les applications et logiciels EFA comprenant&nbsp;:
                  </p>
                  <ul className="mt-3 space-y-2.5 text-slate-700 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold select-none text-base leading-none mt-0.5">•</span>
                      <span>
                        <strong className="text-slate-950 font-bold">EFA Garde</strong> (Application de garde pharmacie — permet aux clients de repérer les pharmacies de garde, discuter et vérifier la disponibilité des produits)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold select-none text-base leading-none mt-0.5">•</span>
                      <span>
                        <strong className="text-slate-950 font-bold">EFA SUITE</strong> (Facture Pro+ Calculatrice de prix des articles)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#D4AF37] font-bold select-none text-base leading-none mt-0.5">•</span>
                      <span>
                        <strong className="text-slate-950 font-bold">EFA ACONTA</strong> (Gestion de stock et caisse pour PME)
                      </span>
                    </li>
                  </ul>
                  <div className="mt-3.5 pt-3 border-t border-slate-200/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0A2342] mb-1.5">
                      Stack Technique
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {stackTechnologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3.5 pt-3 border-t border-slate-200/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-1">
                      Mission
                    </p>
                    <p className="text-xs italic text-slate-600">
                      &ldquo;Digitaliser les entreprises africaines avec des solutions cloud performantes, sécurisées et 100% adaptées au marché local.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Liens: LinkedIn icon + site efa-technologie.vercel.app */}
                <div className="mt-5 flex flex-wrap items-center gap-3 w-full">
                  <a
                    href="https://www.linkedin.com/in/malik-yessoufou"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#004182] transition-colors shadow-xs"
                    aria-label="Profil LinkedIn de YESSOUFOU Malik"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://efa-technologie.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-200 hover:border-[#0A2342] text-[#0A2342] text-xs font-semibold hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    <span>efa-technologie.vercel.app</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Colonne Droite (65% on desktop: lg:col-span-7) */}
              <div className="lg:col-span-7 flex flex-col items-center w-full">
                
                {/* Certificat Header Badge */}
                <div className="w-full flex items-center justify-between mb-3 px-1">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0A2342]">
                    <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Document Officiel Vérifié
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
                    Cliquer pour zoomer
                  </span>
                </div>

                {/* Certificat Card with Hover Lift & Lightbox Trigger (cliquable pour zoomer en lightbox, c'est tout) */}
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsLightboxOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsLightboxOpen(true);
                    }
                  }}
                  className="w-full relative group cursor-pointer rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  title="Cliquer pour afficher l'attestation en plein écran et scanner le QR code"
                >
                  {/* High Quality Certificate Display */}
                  <div className="relative aspect-[1.45/1] w-full bg-slate-100 overflow-hidden">
                    <Image
                      src="/images/certificat-efa.jpg"
                      alt="Attestation de Concepteur et Développeur - EFA TECHNOLOGIE - YESSOUFOU Malik"
                      width={1200}
                      height={828}
                      quality={95}
                      priority
                      className="w-full h-full object-contain bg-white transition-transform duration-500 group-hover:scale-[1.02]"
                    />

                    {/* Hover Overlay with Zoom Icon */}
                    <div className="absolute inset-0 bg-[#0A2342]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="px-4 py-2.5 rounded-full bg-white/95 text-[#0A2342] text-xs font-bold flex items-center gap-2 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                        <span>Agrandir en Haute Définition</span>
                      </div>
                    </div>

                    {/* QR Code Scannable hint badge at bottom-left */}
                    <div className="absolute bottom-2.5 left-2.5 pointer-events-none bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200/80 shadow-sm flex items-center gap-1.5 text-[10px] font-semibold text-slate-800">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>QR code scannable</span>
                    </div>
                  </div>
                </div>

                {/* Sous le certificat, légende uniquement (aucun bouton de téléchargement) */}
                <p className="mt-3.5 text-center text-xs font-medium text-slate-500 leading-relaxed max-w-xl">
                  Attestation de Concepteur et Développeur • EFA TECHNOLOGIE • 29 Octobre 2026 • Vérifiable via QR code
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL FULLSCREEN ZOOM (Affichage HD avec QR code lisible) */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#0A2342] text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <h4 className="text-sm font-bold tracking-tight">
                  Attestation Officielle • YESSOUFOU Malik (EFA TECHNOLOGIE)
                </h4>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Fermer la vue agrandie"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Body (HD Scannable) */}
            <div className="relative overflow-auto p-2 sm:p-4 bg-slate-900/5 flex items-center justify-center flex-1">
              <img
                src="/images/certificat-efa.jpg"
                alt="Attestation de Concepteur et Développeur EFA TECHNOLOGIE - Zoom HD"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg border border-slate-200"
              />
            </div>

            {/* Modal Footer with quick instructions */}
            <div className="px-5 py-3 bg-[#FAFBFC] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <QrCode className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  Scannez le QR code en bas à gauche avec votre smartphone pour vérifier l&apos;authenticité sur <strong>efa-technologie.vercel.app</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-[#0A2342] hover:bg-[#0A2342]/90 text-white font-medium transition-colors text-xs"
                >
                  Fermer (Échap)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
