import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { EFA_CONTACT } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    solution: 'EFA ACONTA',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || (!formData.phone && !formData.email)) {
      return;
    }
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Bonjour EFA Tech,\nNom: ${formData.name || 'Client'}\nSolution souhaitée: ${formData.solution}\nMessage: ${formData.message || 'Je souhaite être contacté pour une démonstration.'}`
    );
    window.open(`https://wa.me/22896100972?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0A3D8F]">
              <span>Assistance & Partenariat</span>
              <span aria-hidden="true">·</span>
              <span>Lomé, Togo</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Parlons de votre projet ou demandez une démonstration
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Vous souhaitez équiper vos boutiques, votre entreprise, ou en savoir plus sur nos applications ? Notre équipe locale est à votre entière disposition.
            </p>

            {/* Direct contact items */}
            <div className="space-y-4 pt-2">
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-[#E8F1FF] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#0A3D8F]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Courriel direct</div>
                  <a
                    href={`mailto:${EFA_CONTACT.email}`}
                    className="text-sm font-bold text-slate-900 hover:text-[#0A3D8F] transition-colors"
                  >
                    {EFA_CONTACT.email}
                  </a>
                  <div className="text-[11px] text-slate-500 mt-0.5">Réponse sous 2 heures</div>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-[#E8F1FF] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0A3D8F]" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-slate-400">Téléphones & WhatsApp</div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <a
                      href={`tel:${EFA_CONTACT.phone1Clean}`}
                      className="text-sm font-bold text-slate-900 hover:text-[#0A3D8F] transition-colors"
                    >
                      {EFA_CONTACT.phone1}
                    </a>
                    <span className="hidden sm:inline text-slate-300">/</span>
                    <a
                      href={`tel:${EFA_CONTACT.phone2Clean}`}
                      className="text-sm font-bold text-slate-900 hover:text-[#0A3D8F] transition-colors"
                    >
                      {EFA_CONTACT.phone2}
                    </a>
                  </div>
                  <div className="text-[11px] text-emerald-600 font-medium">
                    WhatsApp disponible 24h/24 et 7j/7
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="w-10 h-10 rounded-lg bg-[#E8F1FF] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0A3D8F]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400">Siège social</div>
                  <div className="text-sm font-bold text-slate-900">{EFA_CONTACT.location}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Togo · Afrique de l'Ouest</div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp button */}
            <div className="pt-2">
              <a
                href={EFA_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ouvrir WhatsApp (+228 96 10 09 72)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message envoyé avec succès !</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Merci {formData.name}. Un conseiller d'EFA TECHNOLOGIE vous contactera dans les plus brefs délais au {formData.phone || formData.email}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', solution: 'EFA ACONTA', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-[#0A3D8F] bg-[#E8F1FF] rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Envoyer un message à l'équipe
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Nom complet / Entreprise *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Koffi / SARL Togo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A3D8F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Numéro de téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+228 90 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A3D8F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Adresse email (optionnel)
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A3D8F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Solution d'intérêt
                    </label>
                    <select
                      value={formData.solution}
                      onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A3D8F]"
                    >
                      <option value="EFA ACONTA">EFA ACONTA (Comptabilité)</option>
                      <option value="EFA SUITE">EFA SUITE (Facture OTR & EFA Mon prix)</option>
                      <option value="EFA GARDE">EFA GARDE (Pharmacies de garde Lomé)</option>
                      <option value="Toutes les solutions">Toutes les solutions (Pack Pro)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Votre message ou besoin spécifique
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Précisez vos besoins : volume de facturation, nombre d'utilisateurs, demande de formation sur place..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A3D8F]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#0A3D8F] hover:bg-[#082f70] rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Envoyer la demande</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Envoyer via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
