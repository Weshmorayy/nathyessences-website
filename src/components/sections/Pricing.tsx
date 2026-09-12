import React from 'react';
import { siteConfig } from '@/config/site';
import { Package, MessageCircle, ArrowRight, ShieldCheck, TrendingUp, CheckCircle } from 'lucide-react';

const formatsDetail = [
  { size: '10 ML', price: '1 500 F', note: 'Format Poche / Découverte', height: 'h-14', popular: false },
  { size: '20 ML', price: '3 500 F', note: 'Spray Quotidien', height: 'h-16', popular: false },
  { size: '25 ML', price: '4 000 F', note: 'Idéal Sac à Main', height: 'h-20', popular: false },
  { size: '35 ML', price: '6 500 F', note: 'Taille Standard Favorie', height: 'h-24', popular: true },
  { size: '40 ML', price: '7 500 F', note: 'Format Généreux', height: 'h-28', popular: false },
  { size: '60 ML', price: '10 000 F', note: 'Grande Réserve +48h', height: 'h-32', popular: true },
  { size: '100 ML', price: '20 000 F', note: 'Flacon Prestige Signature', height: 'h-36', popular: false },
];

export function Pricing() {
  return (
    <section id="formats" className="py-24 bg-[#FAF9F6] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F3E5] border border-[#E8E2D8] text-[#A67D28] text-xs font-bold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Guide Visuel des Flacons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14171F] mb-4">
            Une Tarification Simple & Claire
          </h2>
          <p className="text-[#5C6479] font-light text-base sm:text-lg">
            Choisissez la contenance exacte adaptée à vos envies ou à votre budget.
          </p>
        </div>

        {/* Visual Bottle Size Scale with Stylized Visual Bottles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-20 items-end">
          {formatsDetail.map((fmt, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between text-center relative ${
                fmt.popular
                  ? 'bg-white border-[#C59A3F] shadow-xl shadow-[#C59A3F]/10'
                  : 'bg-white border-[#E8E2D8] hover:border-[#C59A3F]/50 shadow-sm'
              }`}
            >
              {fmt.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C59A3F] text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow">
                  Top Choix
                </span>
              )}

              {/* Visual Scaled Bottle Graphic */}
              <div className="h-40 flex flex-col items-center justify-end mb-4">
                <div className="w-7 h-4 bg-[#C49A6C] rounded-t-sm border border-[#9A744C]" />
                <div className="w-4 h-1 bg-[#C59A3F]" />
                <div className={`w-12 ${fmt.height} rounded-b-md border-2 border-[#E8E2D8] bg-gradient-to-t from-[#E5BE65]/50 via-[#FAF9F6] to-white flex items-center justify-center p-1 shadow-inner`}>
                  <span className="text-[9px] font-bold text-[#14171F]">{fmt.size}</span>
                </div>
              </div>

              <div>
                <div className="font-serif font-bold text-lg sm:text-xl text-[#14171F] mb-1">
                  {fmt.price}
                </div>
                <p className="text-[11px] text-[#5C6479] font-light mb-4">
                  {fmt.note}
                </p>
              </div>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  `Bonjour Nathy Essences, je souhaite commander un flacon de format ${fmt.size} à ${fmt.price}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-[#14171F] hover:bg-[#C59A3F] text-white text-xs font-bold transition-colors block text-center shadow-sm"
              >
                Choisir
              </a>
            </div>
          ))}
        </div>

        {/* Section B2B / Wholesale & Business Starter Pack */}
        <div id="business" className="bg-[#121A2E] rounded-3xl p-8 sm:p-12 lg:p-16 text-white border border-[#232D42] relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Opportunité Business & Revendeurs</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-6 leading-tight">
                Lancez Votre Propre Activité de Parfums avec Nos Tarifs Grossistes
              </h3>

              <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                Vous souhaitez vous lancer dans le commerce de parfums en Côte d’Ivoire ou approvisionner votre boutique ? 
                Nous vous fournissons nos essences pures à des <strong>tarifs dégressifs exceptionnels</strong> (au litre, demi-litre ou par lot de flacons).
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#E8C170] shrink-0" />
                  <span className="text-sm text-gray-200">100ml en gros : <strong>18 500 F à 23 000 F</strong> selon gamme</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#E8C170] shrink-0" />
                  <span className="text-sm text-gray-200">Fourniture de flacons spray verre & bouchons bois</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-[#E8C170] shrink-0" />
                  <span className="text-sm text-gray-200">Conseils marketing & sélection des 10 parfums les plus vendus</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Bonjour Nathy Essences, je souhaite recevoir le catalogue complet et les tarifs pour revendeurs / grossistes."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#C59A3F] to-[#E8C170] text-black text-xs font-bold uppercase tracking-wider shadow-lg hover:brightness-110 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>Demander la Grille Grossiste</span>
              </a>
            </div>

            <div className="lg:col-span-5 bg-[#090E1A] p-8 rounded-2xl border border-white/10">
              <span className="text-xs uppercase font-bold text-[#E8C170] block mb-4 tracking-wider">
                Exemple de Rentabilité Revendeur
              </span>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-gray-400">Achat Pack 100ml Gros</span>
                  <span className="font-bold text-white">18 500 FCFA</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-gray-400">Reconditionné en 10 flacons (10ml)</span>
                  <span className="font-bold text-white">10 x 1 500 F</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/5">
                  <span className="text-gray-400">Chiffre d’Affaires</span>
                  <span className="font-bold text-emerald-400">15 000 à 25 000 FCFA</span>
                </div>
                <div className="pt-2 text-xs text-gray-400 font-light leading-relaxed">
                  Rentabilité rapide et forte fidélisation grâce à la tenue exceptionnelle des essences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
