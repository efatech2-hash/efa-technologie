import { Mail, Phone, MapPin, ArrowUp, Shield } from 'lucide-react';
import { EFA_CONTACT } from '../data/products';
import { Image } from './OptimizedImage';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/efa-tech.webp"
                alt="EFA TECHNOLOGIE Logo"
                width={48}
                height={48}
                loading="lazy"
                placeholder="empty"
                className="w-12 h-12 rounded-xl object-contain shrink-0"
                style={{ width: '48px', height: '48px' }}
              />
              <span className="text-white font-extrabold text-xl tracking-tight">
                EFA <span className="text-[#38bdf8]">TECHNOLOGIE</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 font-medium">
              « {EFA_CONTACT.slogan} »
            </p>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              L'éditeur technologique togolais qui simplifie la gestion comptable, la facturation commerciale et l'accès aux services essentiels au Togo et en Afrique.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Conçu avec fierté à Lomé, République Togolaise 🇹🇬
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Nos Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://efa-aconta.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  EFA ACONTA (Web)
                </a>
              </li>
              <li>
                <a
                  href="https://efa-suite.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  EFA SUITE (Facture + EFA Mon prix)
                </a>
              </li>
              <li>
                <a
                  href="https://efa-garde.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  EFA GARDE (Pharmacies de garde)
                </a>
              </li>
              <li>
                <a href="#telechargements" className="hover:text-white transition-colors">
                  Télécharger les fichiers APK
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#accueil" className="hover:text-white transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Catalogue Store
                </a>
              </li>
              <li>
                <a href="#pourquoi" className="hover:text-white transition-colors">
                  Pourquoi EFA Tech
                </a>
              </li>
              <li>
                <a href="#telechargements" className="hover:text-white transition-colors">
                  Installation Android
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Support Client
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Direct
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                <a href={`mailto:${EFA_CONTACT.email}`} className="hover:text-white">
                  {EFA_CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                <a href={`tel:${EFA_CONTACT.phone1Clean}`} className="hover:text-white">
                  {EFA_CONTACT.phone1}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                <a href={`tel:${EFA_CONTACT.phone2Clean}`} className="hover:text-white">
                  {EFA_CONTACT.phone2}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38bdf8] shrink-0" />
                <span>{EFA_CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EFA TECHNOLOGIE. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <span>Togo · Afrique de l'Ouest</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
