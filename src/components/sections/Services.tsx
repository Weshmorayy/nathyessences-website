'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Search, Sparkles, MessageCircle, Heart, Flame, Shield, ArrowRight } from 'lucide-react';

const catalogueEssences = [
  // Homme
  { name: 'Imagination', house: 'Louis Vuitton', gender: 'Homme / Mixte', family: 'Agrumes & Boisé Thé', price: 'Dès 1 500 F', special: true },
  { name: 'Baccarat Rouge 540', house: 'Maison Francis Kurkdjian', gender: 'Mixte', family: 'Ambré Boisé Gourmand', price: 'Dès 1 500 F', special: false },
  { name: 'Bois Impérial', house: 'Essential Parfums', gender: 'Homme / Mixte', family: 'Boisé Aromatique & Akigalawood', price: 'Dès 2 000 F', special: true },
  { name: 'Ganymède', house: 'Marc-Antoine Barrois', gender: 'Mixte', family: 'Minéral Cuiré Suédé', price: 'Dès 2 000 F', special: true },
  { name: 'Alexandria II', house: 'Xerjoff', gender: 'Mixte / Prestige', family: 'Oud Royal & Lavande', price: 'Dès 2 000 F', special: true },
  { name: 'Hibiscus Mahajád', house: 'Maison Crivelli', gender: 'Mixte / Niche', family: 'Floral Fruité & Cuir Vanille', price: 'Dès 2 000 F', special: true },
  { name: 'Tilia', house: 'Marc-Antoine Barrois', gender: 'Mixte', family: 'Tilleul Doré & Miel Boisé', price: 'Dès 2 000 F', special: true },
  { name: 'Amouage Interlude 53', house: 'Amouage', gender: 'Homme / Extrême', family: 'Encens & Cuir Ambré', price: 'Dès 2 000 F', special: true },
  { name: 'Bleu de Chanel L’Exclusif', house: 'Chanel', gender: 'Homme', family: 'Boisé Aromatique Profond', price: 'Dès 1 500 F', special: false },
  { name: 'Sauvage Elixir', house: 'Dior', gender: 'Homme', family: 'Épices Chaudes & Lavande Boisée', price: 'Dès 1 500 F', special: false },
  { name: 'Tom Ford Tobacco Vanille', house: 'Tom Ford', gender: 'Mixte', family: 'Tabac Gourmand & Épices', price: 'Dès 1 500 F', special: false },
  { name: 'Creed Aventus', house: 'Creed', gender: 'Homme', family: 'Fruité Boisé Ananas Fumé', price: 'Dès 1 500 F', special: false },

  // Femme
  { name: 'Delina Exclusif', house: 'Parfums de Marly', gender: 'Femme', family: 'Rose Turque & Oud Vanille', price: 'Dès 1 500 F', special: false },
  { name: 'Kayali Yum Pistachio Gelato', house: 'Kayali', gender: 'Femme', family: 'Gourmand Pistache & Crème', price: 'Dès 1 500 F', special: false },
  { name: 'Libre Intense', house: 'Yves Saint Laurent', gender: 'Femme', family: 'Fleur d’Oranger & Lavande Vanillée', price: 'Dès 1 500 F', special: false },
  { name: 'Bianco Latte', house: 'Giardini Di Toscana', gender: 'Femme / Gourmand', family: 'Lait Chaud, Caramel & Miel', price: 'Dès 1 500 F', special: false },
  { name: 'Guidance', house: 'Amouage', gender: 'Femme / Niche', family: 'Encens, Noisette & Osmanthus', price: 'Dès 2 000 F', special: true },
  { name: 'Escentric Molecules 02', house: 'Escentric Molecules', gender: 'Mixte', family: 'Ambroxan Pur & Aura Propre', price: 'Dès 2 500 F', special: true },
  { name: 'DKNY Be Delicious', house: 'Donna Karan', gender: 'Femme', family: 'Pomme Verte Croquante & Fraîcheur', price: 'Dès 1 500 F', special: false },
  { name: 'Erba Pura', house: 'Xerjoff', gender: 'Mixte', family: 'Cocktail Fruité Méditerranéen', price: 'Dès 2 000 F', special: true },
];

export function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredEssences = catalogueEssences.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.house.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.family.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === 'Tous') return matchesSearch;
    if (activeCategory === 'Spéciaux / Niche') return matchesSearch && item.special;
    if (activeCategory === 'Homme') return matchesSearch && item.gender.includes('Homme');
    if (activeCategory === 'Femme') return matchesSearch && item.gender.includes('Femme');
    return matchesSearch;
  });

  return (
    <section id="catalogue" className="py-24 bg-[#101522] border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151C2C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>L’Orgue à Parfums (+150 Références)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6">
            Trouvez Votre Signature Olfactive
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg">
            Recherchez instantanément votre extrait de parfum préféré parmi nos 150+ créations de prestige.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#D4AF37] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher par nom (ex: Imagination, Baccarat, Ganymede, Kayali, Bois Impérial...)"
              className="w-full pl-12 pr-4 py-4 rounded-full bg-[#151C2C] border border-[#232D42] focus:border-[#D4AF37] text-white text-sm focus:outline-none shadow-inner"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {['Tous', 'Homme', 'Femme', 'Spéciaux / Niche'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B47B2B] text-black shadow-md'
                    : 'bg-[#151C2C] text-gray-400 hover:text-white border border-[#232D42]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredEssences.map((essence, idx) => (
            <div
              key={idx}
              className="bg-[#151C2C] rounded-2xl p-6 border border-[#232D42] hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                    {essence.house}
                  </span>
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-white/5 text-gray-300 border border-white/10">
                    {essence.gender}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                  {essence.name}
                </h3>

                <p className="text-xs text-gray-400 font-light leading-relaxed mb-4">
                  {essence.family}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-gray-500 block">Flaconnage</span>
                  <span className="text-sm font-bold text-[#D4AF37]">{essence.price}</span>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Bonjour Nathy Essences, je souhaite commander l'essence pure : ${essence.name} (${essence.house}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-[#D4AF37] text-gray-200 hover:text-black border border-white/10 hover:border-[#D4AF37] text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* The Layering Formula Box (Unique Feature) */}
        <div className="bg-gradient-to-r from-[#151C2C] via-[#1A2236] to-[#151C2C] rounded-3xl p-8 sm:p-12 border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] block mb-2">
                Secret de Mixologie Nathy
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                Le Combo Culte : Imagination (LV) + DKNY Be Delicious
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light mb-6">
                « Je suis en train de tchouer les gens ici avec mon mix d’Imagination LV + DKNY... Je sens la richesse ! » — Sita K.
                <br />
                Nos conseillers en essences vous guident pour associer deux extraits et créer un sillage unique qui ne ressemble à aucun autre.
              </p>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                  "Bonjour Nathy Essences, je souhaite des conseils pour créer mon mix / layering personnalisé de 2 essences !"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B47B2B] text-black text-xs font-bold uppercase tracking-wider shadow-md hover:opacity-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Demander ma recette de layering WhatsApp</span>
              </a>
            </div>

            <div className="lg:col-span-4 bg-[#0A0D14]/80 p-6 rounded-2xl border border-white/10 text-center">
              <span className="text-xs uppercase font-bold text-gray-400 block mb-2">Formule Duo Spéciale</span>
              <div className="text-3xl font-serif font-bold text-[#D4AF37] mb-1">Pack Duo 2x35ml</div>
              <span className="text-sm text-gray-300 block mb-4">12 000 FCFA (au lieu de 13 000 F)</span>
              <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full inline-block">
                Livraison express Abidjan
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
