import React from 'react';
import { siteConfig } from '@/config/site';
import { MessageCircle, Phone, MapPin, Clock, Sparkles } from 'lucide-react';

export function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-[#101522] border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#151C2C] via-[#0A0D14] to-[#151C2C] rounded-3xl p-8 sm:p-14 lg:p-20 text-white border-2 border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] block mb-3">
                {siteConfig.contactSection.badge}
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold leading-tight mb-6">
                Composez Votre Flacon ou Lancez Votre Activité
              </h2>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-light">
                Écrivez-nous directement sur WhatsApp pour toute commande de détail (dès 1 500 F) 
                ou pour recevoir la grille tarifaire complète pour revendeurs.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B47B2B] text-black text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-black" />
                  <span>Discuter sur WhatsApp (+225 05 64 25 15 34)</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white border border-[#232D42] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Quick Info Card */}
            <div className="lg:col-span-5 bg-[#0A0D14]/90 backdrop-blur-md rounded-2xl p-8 border border-[#232D42] space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                    Livraison & Retrait
                  </h4>
                  <p className="text-sm text-gray-200">
                    Livraison express à domicile et au bureau à Abidjan & expéditions à l’intérieur du pays.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-1">
                    Horaires de Traitement
                  </h4>
                  <p className="text-sm text-gray-200">
                    Lundi – Samedi : 08h00 – 20h00
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Commandes WhatsApp 7j/7 sans interruption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
