import { Users, TrendingUp, Star } from 'lucide-react';

export default function SocialProofBanner() {
  const stats = [
    {
      value: '10 000+',
      label: 'Utilisateurs',
      icon: Users,
    },
    {
      value: '500 000+',
      label: 'Ventes enregistrées',
      icon: TrendingUp,
    },
    {
      value: '4.8/5',
      label: 'Satisfaction',
      icon: Star,
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
            Rejoignez les 10 000+ entrepreneurs qui gèrent déjà leur boutique avec EFA
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight font-mono mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
