import { Sparkles, Globe, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { EFA_ADVANTAGES, EFA_CONTACT } from '../data/products';
import Image from 'next/image';
import placeholders from '../data/imagePlaceholders.json';

export default function WhyEfaSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0A3D8F]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#0A3D8F]" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-[#0A3D8F]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#0A3D8F]" />;
    }
  };

  return (
    <section id="pourquoi" className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold text-[#0A3D8F]">
            <span>Pourquoi choisir EFA Tech</span>
            <span aria-hidden="true">·</span>
            <span>Nos 3 Engagements Fondamentaux</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 [text-wrap:balance]">
            Une technologie puissante, pensée pour rendre votre quotidien évident.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            EFA TECHNOLOGIE est née d'un constat simple : la plupart des logiciels de gestion sont trop lourds, trop chers et déconnectés de la réalité du terrain africain. Nous changeons la donne.
          </p>
        </div>

        {/* 3 Core Advantages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {EFA_ADVANTAGES.map((adv) => (
            <div
              key={adv.id}
              className="flex flex-col justify-between p-8 bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-[#0A3D8F]/25 font-mono">
                    {adv.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#E8F1FF] flex items-center justify-center">
                    {getIcon(adv.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {adv.title}
                </h3>
                <p className="text-xs font-semibold text-[#0A3D8F] mb-4">
                  {adv.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {adv.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                {adv.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0A3D8F] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#0A3D8F] uppercase tracking-wider">Témoignages & Avis Clients</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ce que disent nos commerçants partenaires
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex text-amber-500 gap-1 text-sm">★★★★★</div>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "Grâce à EFA AConta, mes factures OTR sont éditées en 10 secondes directement depuis mon téléphone au Grand Marché de Lomé. Une vraie délivrance."
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-900">Akouvi M.</div>
                <div className="text-xs text-slate-500">Grossiste Alimentaire, Lomé</div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex text-amber-500 gap-1 text-sm">★★★★★</div>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "EFA Mon Prix m'évite de vendre à perte avec les variations de transport. Tout est calculé au franc CFA près pour ma quincaillerie."
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-900">Kodjo T.</div>
                <div className="text-xs text-slate-500">Quincaillerie Moderne, Bè-Kpota</div>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs space-y-3">
              <div className="flex text-amber-500 gap-1 text-sm">★★★★★</div>
              <p className="text-sm text-slate-700 italic leading-relaxed">
                "L'application EFA Garde nous évite de tourner la nuit pour chercher une pharmacie ouverte à Lomé. Rapide, précis, fonctionne même hors-ligne."
              </p>
              <div className="pt-2 border-t border-slate-200">
                <div className="text-xs font-bold text-slate-900">Dr. Sylvie A.</div>
                <div className="text-xs text-slate-500">Professionnelle de santé, Tokoin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Impact & Headquarters Showcase */}
        <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300">
                <span>Implantation Locale</span>
                <span aria-hidden="true">·</span>
                <span>Lomé, Togo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Proximité, Réactivité & Accompagnement sur le terrain
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Nos équipes de développeurs et de conseillers vous accompagnent lors du déploiement de vos solutions. Que vous soyez une boutique de quartier à Lomé ou une entreprise en pleine expansion en Afrique, nous restons à portée de message.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
              <div>
                <div className="text-2xl font-black text-white font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Adapté au FCFA</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-mono">&lt; 5 min</div>
                <div className="text-xs text-slate-400 mt-0.5">Prise en main</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white font-mono">24/7</div>
                <div className="text-xs text-slate-400 mt-0.5">Support WhatsApp</div>
              </div>
            </div>

            <div>
              <a
                href={EFA_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A3D8F] hover:bg-[#0c47a5] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuter avec un conseiller sur WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-800">
            <Image
              src="/images/phare-technologie.webp"
              alt="Locaux et Équipe EFA TECHNOLOGIE Lomé Togo"
              width={800}
              height={450}
              fill={true}
              format="webp"
              quality={75}
              loading="lazy"
              placeholder="blur"
              blurDataURL={placeholders['phare-technologie.webp']}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent lg:hidden pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
