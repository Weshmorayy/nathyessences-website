import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Sparkles, ArrowRight, MessageCircle, Droplets, Clock, ShieldCheck } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#FAF9F6] overflow-hidden border-b border-[#E8E2D8]">
      {/* Background Soft Sunlight & Warm Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C59A3F]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#D9822B]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Impactful Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Surtitre Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F9F3E5] border border-[#E8E2D8] text-[#A67D28] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>Essences Pures Concentrées · Tenue +48H</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#14171F] leading-[1.12] mb-6">
              Le Luxe des Grandes Maisons, <br />
              <span className="gold-gradient-text">Accessible à Tous au Millilitre.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#5C6479] font-light leading-relaxed mb-8 max-w-2xl">
              Portez <strong>Louis Vuitton, Amouage, Baccarat Rouge, Ganymède, Bois Impérial</strong> et plus de 150 extraits de haute parfumerie dès <strong>1 500 FCFA</strong>. Flaconnage sur mesure et tarifs grossistes à Abidjan.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#catalogue"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#14171F] hover:bg-[#C59A3F] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                <span>Découvrir les Essences</span>
                <ArrowRight className="w-4 h-4 text-[#E8C170]" />
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-gray-50 text-[#14171F] border border-[#E8E2D8] text-xs font-bold uppercase tracking-widest transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#C59A3F]" />
                <span>Commander sur WhatsApp</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E2D8] w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C59A3F] shadow-sm shrink-0">
                  <Droplets className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#14171F]">Essence 100%</h4>
                  <p className="text-[11px] text-[#5C6479]">Non diluée</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C59A3F] shadow-sm shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#14171F]">Tenue +48H</h4>
                  <p className="text-[11px] text-[#5C6479]">Sillage puissant</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white border border-[#E8E2D8] flex items-center justify-center text-[#C59A3F] shadow-sm shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#14171F]">Dès 1 500 F</h4>
                  <p className="text-[11px] text-[#5C6479]">10ml à 100ml</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-[#E8E2D8] shadow-2xl">
              <div className="relative h-[380px] sm:h-[460px] rounded-2xl overflow-hidden bg-[#14171F]">
                <Image
                  src="/images/showcase/Screenshot_20260912_121442_Chrome.jpg"
                  alt="Flacon d'essence pure Imagination Louis Vuitton Nathy"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E8E2D8] shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-[#C59A3F] tracking-wider block">
                      Flaconnage Artisanal
                    </span>
                    <span className="text-xs font-bold text-[#14171F]">
                      Bouchon bois & verre épais
                    </span>
                  </div>
                  <span className="text-xs font-bold text-[#A67D28] bg-[#F9F3E5] px-3 py-1 rounded-full border border-[#E8E2D8]">
                    Rechargeable
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
