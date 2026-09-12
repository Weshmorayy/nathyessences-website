import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Sparkles, ArrowRight, MessageCircle, Droplet, Flame, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 bg-[#0A0D14] overflow-hidden border-b border-[#232D42]">
      {/* Dynamic Background Amber & Gold Aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#E5A83B]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Editorial Intro */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Surtitre Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#151C2C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Essences Pures Concentrées · Tenue +48H</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-8">
            Le Luxe des Grandes Maisons, <br />
            <span className="gold-gradient-title">Accessible à Tous au Millilitre.</span>
          </h1>

          <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Portez <strong>Louis Vuitton, Amouage, Baccarat Rouge, Ganymède, Bois Impérial</strong> et plus de 150 extraits de haute parfumerie dès <strong>1 500 FCFA</strong>. Flacons rechargeables & tarifs grossistes à Abidjan.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#catalogue"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5A83B] to-[#B47B2B] text-black text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#D4AF37]/20"
            >
              <span>Consulter l’Orgue à Essences</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#151C2C] hover:bg-[#1C263B] text-white border border-[#232D42] text-xs font-bold uppercase tracking-widest transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Commander sur WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Triptych Visual Layout - 3 Distinct Authentic Shots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {/* Card 1 */}
          <div className="relative rounded-2xl overflow-hidden bg-[#151C2C] border border-[#232D42] h-80 sm:h-96 group">
            <Image
              src="/images/showcase/Screenshot_20260912_121442_Chrome.jpg"
              alt="Flacon Imagination et essences Nathy"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
                Grandes Inspirations
              </span>
              <h3 className="font-serif font-bold text-lg text-white">Imagination & LV Line</h3>
              <p className="text-xs text-gray-300 font-light mt-1">Extraits concentrés purs haute fidélité</p>
            </div>
          </div>

          {/* Card 2 - Center Highlight */}
          <div className="relative rounded-2xl overflow-hidden bg-[#151C2C] border-2 border-[#D4AF37]/50 h-80 sm:h-96 group shadow-2xl md:-translate-y-4">
            <Image
              src="/images/showcase/Screenshot_20260912_121349_Chrome.jpg"
              alt="Hibiscus Mahajad Maison Crivelli"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-90" />
            <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              Best-Seller Niche
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
                Haute Parfumerie Rare
              </span>
              <h3 className="font-serif font-bold text-lg text-white">Hibiscus Mahajád & Crivelli</h3>
              <p className="text-xs text-gray-300 font-light mt-1">Sillage puissant et persistant</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative rounded-2xl overflow-hidden bg-[#151C2C] border border-[#232D42] h-80 sm:h-96 group">
            <Image
              src="/images/showcase/Screenshot_20260912_121418_Chrome.jpg"
              alt="Alexandria II Xerjoff essence"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block mb-1">
                Orientaux & Nobles
              </span>
              <h3 className="font-serif font-bold text-lg text-white">Alexandria II & Amouage</h3>
              <p className="text-xs text-gray-300 font-light mt-1">Boisés précieux et oud intense</p>
            </div>
          </div>
        </div>

        {/* 3 Core Value Pills */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-[#232D42]">
          <div className="flex items-center gap-4 bg-[#151C2C]/50 p-4 rounded-xl border border-[#232D42]">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Droplet className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">Essence Pure 100%</h4>
              <p className="text-xs text-gray-400 font-light">Concentré huileux non dénaturé</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#151C2C]/50 p-4 rounded-xl border border-[#232D42]">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">Tenue +48 Heures</h4>
              <p className="text-xs text-gray-400 font-light">Sillage durable sur vêtements et peau</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#151C2C]/50 p-4 rounded-xl border border-[#232D42]">
            <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase text-white tracking-wider">De 10ml à 100ml</h4>
              <p className="text-xs text-gray-400 font-light">Dès 1 500 F & Tarifs revendeurs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
