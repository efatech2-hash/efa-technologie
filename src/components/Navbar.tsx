import { useState } from 'react';
import { Menu, X, Download, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

interface NavbarProps {
  onOpenDownloadModal?: (appId?: string) => void;
}

export default function Navbar({ onOpenDownloadModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single Brand element */}
          <a
            href="#accueil"
            className="flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-[#0A3D8F] whitespace-nowrap shrink-0"
          >
            <Image
              src="/logos/efa-tech.webp"
              alt="Logo EFA Tech"
              width={48}
              height={48}
              loading="lazy"
              placeholder="empty"
              className="w-12 h-12 rounded-xl object-contain shrink-0"
              style={{ width: '48px', height: '48px' }}
            />
            <span className="text-slate-900 font-extrabold text-xl">
              EFA <span className="text-[#0A3D8F]">Tech</span>
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a
              href="#accueil"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#accueil');
              }}
              className="hover:text-[#0A3D8F] transition-colors whitespace-nowrap shrink-0"
            >
              Accueil
            </a>
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#solutions');
              }}
              className="hover:text-[#0A3D8F] transition-colors whitespace-nowrap shrink-0"
            >
              Nos Solutions
            </a>
            <a
              href="#telechargements"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#telechargements');
              }}
              className="hover:text-[#0A3D8F] transition-colors whitespace-nowrap shrink-0"
            >
              Téléchargements
            </a>
            <a
              href="#pourquoi"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#pourquoi');
              }}
              className="hover:text-[#0A3D8F] transition-colors whitespace-nowrap shrink-0"
            >
              Pourquoi EFA Tech
            </a>
            <a
              href="#fondateur"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#fondateur');
              }}
              className="hover:text-[#0A3D8F] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span>Fondateur</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hover:text-[#0A3D8F] transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#telechargements"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#telechargements');
              }}
              className="inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-bold text-white bg-[#0A3D8F] hover:bg-[#082f70] rounded-xl shadow-xs transition-all active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger nos Apps</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#telechargements"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#telechargements');
              }}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#0A3D8F] rounded-lg"
            >
              Apps
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#accueil');
            }}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Accueil
          </a>
          <a
            href="#solutions"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#solutions');
            }}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Nos Solutions
          </a>
          <a
            href="#telechargements"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#telechargements');
            }}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Téléchargements & APK
          </a>
          <a
            href="#pourquoi"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#pourquoi');
            }}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Pourquoi EFA Tech
          </a>
          <a
            href="#fondateur"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#fondateur');
            }}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50 flex items-center justify-between"
          >
            <span>À Propos du Fondateur</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0A2342] text-[#D4AF37] font-bold">Certifié</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
          >
            Contact & Support WhatsApp
          </a>

          <div className="pt-2">
            <a
              href="#telechargements"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#telechargements');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#0A3D8F] rounded-xl shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger nos applications APK</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
