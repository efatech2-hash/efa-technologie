import { Download, Smartphone, ShieldCheck, CheckCircle2, AlertCircle, FileCode } from 'lucide-react';
import { EFA_PRODUCTS, EFA_ALL_APKS } from '../data/products';
import { Product } from '../types';
import { Image } from './OptimizedImage';

interface DownloadsSectionProps {
  onDownloadApk: (product: Product) => void;
}

export default function DownloadsSection({ onDownloadApk }: DownloadsSectionProps) {
  return (
    <section id="telechargements" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#0A3D8F]">
            <span>Centre de Téléchargement Officiel</span>
            <span aria-hidden="true">·</span>
            <span>Android APK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Téléchargez nos applications Android directement
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Installez nos fichiers APK officiels certifiés sans attendre la publication des stores. Chaque version est vérifiée, légère et 100% sécurisée.
          </p>
        </div>

        {/* 4 APK Download Cards (including efa-tech.apk) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EFA_ALL_APKS.map((apk) => (
            <div
              key={apk.id}
              className="p-5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/90 p-1 flex items-center justify-center shadow-2xs overflow-hidden">
                    <Image
                      src={apk.logoSrc}
                      alt={`Logo ${apk.name}`}
                      width={56}
                      height={56}
                      loading="lazy"
                      placeholder="empty"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                  <span className="text-xs font-mono font-semibold px-2 py-1 bg-slate-100 text-slate-700 rounded-md">
                    {apk.version}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">{apk.name}</h3>
                <p className="text-xs text-slate-500 mt-0.5 mb-4">{apk.tagline}</p>

                <div className="text-xs text-slate-600 space-y-1.5 py-3 border-y border-slate-100 mb-5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Taille APK :</span>
                    <span className="font-semibold text-slate-800 font-mono">{apk.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Compatibilité :</span>
                    <span className="font-semibold text-slate-800">Android 7.0+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Signature :</span>
                    <span className="font-semibold text-emerald-600 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Signé EFA Tech
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct APK Download Button (Black Button) */}
              <a
                href={apk.apkPath}
                download={apk.apkFilename}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  console.log(`[EFA Tech] Taille du fichier: ${apk.size} | Téléchargement démarré pour ${apk.apkFilename}`);
                  const productMatch = EFA_PRODUCTS.find((p) => p.id === apk.id) || {
                    id: apk.id,
                    name: apk.name,
                    tagline: apk.tagline,
                    description: `${apk.name} - Version officielle pour Android`,
                    badge: 'APK Officiel',
                    version: apk.version,
                    size: apk.size,
                    webUrl: `https://${apk.id}.vercel.app`,
                    apkPath: apk.apkPath,
                    apkFilename: apk.apkFilename,
                    playStoreStatus: 'Bientôt sur Play Store',
                    features: ['Version officielle signée', 'Installation directe APK'],
                    imageSrc: '',
                    logoSrc: apk.logoSrc,
                    accentColor: '#0A3D8F',
                    category: 'Application Android',
                  };
                  onDownloadApk(productMatch);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-3 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-transform active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4 text-slate-200" />
                <span>Télécharger ({apk.size})</span>
              </a>
            </div>
          ))}
        </div>

        {/* How to Install Guide */}
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-xs max-w-4xl mx-auto">
          <div className="flex items-center gap-2.5 mb-6 text-slate-900 font-bold text-lg">
            <Smartphone className="w-5 h-5 text-[#0A3D8F]" />
            <h3>Comment installer facilement le fichier APK sur votre smartphone Android ?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#E8F1FF] text-[#0A3D8F] font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h4 className="text-sm font-bold text-slate-900">1. Téléchargez l'APK</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cliquez sur le bouton noir ci-dessus pour télécharger directement le fichier APK de l'application de votre choix.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#E8F1FF] text-[#0A3D8F] font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h4 className="text-sm font-bold text-slate-900">2. Autorisez la source</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Si Android vous avertit, appuyez sur <em>"Paramètres"</em> puis activez <em>"Autoriser depuis cette source"</em> (ou "Sources inconnues").
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-7 h-7 rounded-full bg-[#E8F1FF] text-[#0A3D8F] font-bold text-xs flex items-center justify-center">
                3
              </div>
              <h4 className="text-sm font-bold text-slate-900">3. Lancez et profitez</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Appuyez sur <em>"Installer"</em>. L'icône de l'application apparaît sur votre écran d'accueil, prête à l'emploi !
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-[#0A3D8F] shrink-0" />
            <span>
              Tous nos packages APK sont compilés directement par les serveurs d'EFA TECHNOLOGIE à Lomé et garantis sans publicité ni virus.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
