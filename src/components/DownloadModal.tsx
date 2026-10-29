import { useEffect } from 'react';
import { X, Download, ShieldCheck, Smartphone, CheckCircle, ExternalLink } from 'lucide-react';
import { Product } from '../types';
import Image from 'next/image';

interface DownloadModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function DownloadModal({ product, onClose }: DownloadModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 overflow-hidden">
              <Image
                src={product.logoSrc}
                alt={product.name}
                width={48}
                height={48}
                loading="lazy"
                placeholder="empty"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Téléchargement : {product.name}
              </h3>
              <p className="text-xs text-slate-500 font-mono">
                {product.apkFilename} · {product.size} · {product.version}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status Alert */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-800">
              <span className="font-bold">Fichier APK prêt !</span> Le téléchargement direct a démarré. Si rien ne se passe, cliquez sur le bouton ci-dessous.
            </div>
          </div>

          {/* Direct Download Button */}
          <a
            href={product.apkPath}
            download={product.apkFilename}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              console.log(`[EFA Tech] Téléchargement relancé: ${product.apkFilename} | Taille: ${product.size}`);
            }}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Télécharger {product.apkFilename} ({product.size})</span>
          </a>

          {/* Quick 3-Step Guide */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Installation rapide sur Android
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <span>Ouvrez le fichier téléchargé dans la barre de notifications ou votre dossier Téléchargements.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <span>Si demandé, activez <em>"Autoriser l'installation d'applications inconnues"</em> dans les paramètres de votre navigateur.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <span>Cliquez sur <em>"Installer"</em> et lancez votre application.</span>
              </div>
            </div>
          </div>

          {/* Web fallback link */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Vous préférez utiliser la version Web ?</span>
            <a
              href={product.webUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0A3D8F] hover:underline inline-flex items-center gap-1"
            >
              <span>Ouvrir sur le Web</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
