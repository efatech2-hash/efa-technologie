import { MessageCircle } from 'lucide-react';
import { EFA_CONTACT } from '../data/products';

export default function WhatsAppFloatingButton() {
  return (
    <aside
      aria-label="Assistance WhatsApp rapide"
      className="fixed bottom-5 right-5 z-40 flex items-center group"
    >
      <a
        href={EFA_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter le support EFA Tech sur WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold whitespace-nowrap hidden sm:inline">
          Support WhatsApp Lomé
        </span>
      </a>
    </aside>
  );
}
