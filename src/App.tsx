import { useState } from 'react';
import { Download, CheckCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionsSection from './components/SolutionsSection';
import WhyEfaSection from './components/WhyEfaSection';
import DownloadsSection from './components/DownloadsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DownloadModal from './components/DownloadModal';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import { EFA_PRODUCTS } from './data/products';
import { Product } from './types';

export default function App() {
  const [selectedProductForDownload, setSelectedProductForDownload] = useState<Product | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const handleDiscoverClick = () => {
    const el = document.getElementById('solutions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroApkClick = () => {
    const el = document.getElementById('telechargements');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadApk = (product: Product) => {
    console.log(`[EFA Tech] Taille du fichier: ${product.size}`);
    console.log(`[EFA Tech] Téléchargement démarré : ${product.apkFilename}`);
    setDownloadToast(`Téléchargement démarré : ${product.apkFilename} (${product.size})`);
    setSelectedProductForDownload(product);
    setTimeout(() => {
      setDownloadToast(null);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-[#E8F1FF] selection:text-[#0A3D8F]">
      {/* Toast Notification for direct APK download */}
      {downloadToast && (
        <aside
          aria-label="Notification de téléchargement"
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-slate-900 text-white text-xs font-semibold rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce"
        >
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <CheckCircle className="w-3.5 h-3.5" />
          </div>
          <span>{downloadToast}</span>
        </aside>
      )}

      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Interactive 3D Three.js */}
        <Hero
          onDiscoverClick={handleDiscoverClick}
          onApkClick={handleHeroApkClick}
        />

        {/* Solutions Store Section (3 Product Cards) */}
        <SolutionsSection onDownloadApk={handleDownloadApk} />

        {/* Why EFA Tech (3 Advatanges) */}
        <WhyEfaSection />

        {/* Direct APK Downloads & Android Installation Guide */}
        <DownloadsSection onDownloadApk={handleDownloadApk} />

        {/* Contact & Support Section */}
        <ContactSection />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Download Confirmation Modal */}
      {selectedProductForDownload && (
        <DownloadModal
          product={selectedProductForDownload}
          onClose={() => setSelectedProductForDownload(null)}
        />
      )}

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
