'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { Search, Sparkles, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const catalogueEssences = [
  // Homme & Mixte
  {
    name: 'Imagination',
    house: 'Louis Vuitton',
    gender: 'Homme / Mixte',
    family: 'Thé Noir de Chine, Agrumes de Calabre & Ambrox',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Culte',
    bottleIcon: 'glass-amber',
  },
  {
    name: 'Baccarat Rouge 540',
    house: 'Maison Francis Kurkdjian',
    gender: 'Mixte',
    family: 'Jasmin Grandiflorum, Safran & Cèdre Ambré',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Best-Seller',
    bottleIcon: 'glass-red',
  },
  {
    name: 'Bois Impérial',
    house: 'Essential Parfums',
    gender: 'Homme / Mixte',
    family: 'Akigalawood, Vétiver d’Haïti & Basilic Thaï',
    price: 'Dès 2 000 F',
    popular: true,
    tag: 'Niche Star',
    bottleIcon: 'glass-gold',
  },
  {
    name: 'Ganymède',
    house: 'Marc-Antoine Barrois',
    gender: 'Mixte',
    family: 'Mandarine d’Italie, Cuir Suédé & Immortelle',
    price: 'Dès 2 000 F',
    popular: true,
    tag: 'Prestige',
    bottleIcon: 'glass-gold',
  },
  {
    name: 'Alexandria II',
    house: 'Xerjoff',
    gender: 'Mixte / Royal',
    family: 'Bois de Rose, Oud du Laos & Pomme Cannelle',
    price: 'Dès 2 000 F',
    popular: true,
    tag: 'Haute Niche',
    bottleIcon: 'glass-amber',
  },
  {
    name: 'Hibiscus Mahajád',
    house: 'Maison Crivelli',
    gender: 'Mixte / Niche',
    family: 'Extrait d’Hibiscus, Rose Damascena & Cuir Vanille',
    price: 'Dès 2 000 F',
    popular: true,
    tag: 'Intense',
    bottleIcon: 'glass-red',
  },
  {
    name: 'Tilia',
    house: 'Marc-Antoine Barrois',
    gender: 'Mixte',
    family: 'Fleurs de Tilleul, Genêt Doré & Héliotrope',
    price: 'Dès 2 000 F',
    popular: false,
    tag: 'Nouveau',
    bottleIcon: 'glass-gold',
  },
  {
    name: 'Amouage Interlude 53',
    house: 'Amouage',
    gender: 'Homme / Extrême',
    family: 'Origan, Encens Royal & Cuir Fumé 53%',
    price: 'Dès 2 000 F',
    popular: false,
    tag: 'Extrait 53%',
    bottleIcon: 'glass-amber',
  },
  {
    name: 'Bleu de Chanel L’Exclusif',
    house: 'Chanel',
    gender: 'Homme',
    family: 'Cèdre Intense, Santal de Nouvelle-Calédonie',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Indémodable',
    bottleIcon: 'glass-navy',
  },
  {
    name: 'Sauvage Elixir',
    house: 'Dior',
    gender: 'Homme',
    family: 'Cannelle, Noix de Muscade & Lavande Épicée',
    price: 'Dès 1 500 F',
    popular: false,
    tag: 'Puissant',
    bottleIcon: 'glass-navy',
  },
  {
    name: 'Tom Ford Tobacco Vanille',
    house: 'Tom Ford',
    gender: 'Mixte',
    family: 'Feuilles de Tabac Blond, Vanille & Fève Tonka',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Gourmand',
    bottleIcon: 'glass-amber',
  },
  {
    name: 'Creed Aventus',
    house: 'Creed',
    gender: 'Homme',
    family: 'Ananas Noir, Bouleau Fumé & Musc Blanc',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Légende',
    bottleIcon: 'glass-gold',
  },

  // Femme
  {
    name: 'Delina Exclusif',
    house: 'Parfums de Marly',
    gender: 'Femme',
    family: 'Rose Turque, Litchi, Encens & Vanille Ambrée',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Féminin Royal',
    bottleIcon: 'glass-red',
  },
  {
    name: 'Kayali Yum Pistachio Gelato',
    house: 'Kayali',
    gender: 'Femme',
    family: 'Glace Pistache, Barbe à Papa & Crème Fouettée',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Gourmandise',
    bottleIcon: 'glass-gold',
  },
  {
    name: 'Libre Intense',
    house: 'Yves Saint Laurent',
    gender: 'Femme',
    family: 'Fleur d’Oranger du Maroc, Orchidée & Lavande',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Séduction',
    bottleIcon: 'glass-amber',
  },
  {
    name: 'Bianco Latte',
    house: 'Giardini Di Toscana',
    gender: 'Femme / Gourmand',
    family: 'Lait Chaud, Caramel Fondu, Miel & Vanille',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Tendance TikTok',
    bottleIcon: 'glass-gold',
  },
  {
    name: 'Guidance',
    house: 'Amouage',
    gender: 'Femme / Niche',
    family: 'Poire Sucrée, Encens d’Oman & Noisette Grillée',
    price: 'Dès 2 000 F',
    popular: false,
    tag: 'Haute Niche',
    bottleIcon: 'glass-amber',
  },
  {
    name: 'Escentric Molecules 02',
    house: 'Escentric Molecules',
    gender: 'Mixte',
    family: 'Ambroxan Pur 100% — Effet Peau Propre & Sillage Infini',
    price: 'Dès 2 500 F',
    popular: true,
    tag: 'Moléculaire',
    bottleIcon: 'glass-gold',
  },
  {
    name: 'DKNY Be Delicious',
    house: 'Donna Karan',
    gender: 'Femme',
    family: 'Pomme Verte Américaine, Concombre Frais & Magnolia',
    price: 'Dès 1 500 F',
    popular: true,
    tag: 'Frais & Pétillant',
    bottleIcon: 'glass-gold',
  },
  {
    name: 'Erba Pura',
    house: 'Xerjoff',
    gender: 'Mixte',
    family: 'Orange de Sicile, Citron de Calabre & Vanille Bourbon',
    price: 'Dès 2 000 F',
    popular: true,
    tag: 'Explosion Fruitée',
    bottleIcon: 'glass-gold',
  },
];

export function Services() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [showAll, setShowAll] = useState(false);

  const filteredEssences = catalogueEssences.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.house.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.family.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeCategory === 'Tous') return matchesSearch;
    if (activeCategory === 'Top Ventes') return matchesSearch && item.popular;
    if (activeCategory === 'Homme') return matchesSearch && item.gender.includes('Homme');
    if (activeCategory === 'Femme') return matchesSearch && item.gender.includes('Femme');
    return matchesSearch;
  });

  const INITIAL_LIMIT = 8;
  const isSearching = searchTerm.trim().length > 0;
  const displayedEssences = showAll || isSearching ? filteredEssences : filteredEssences.slice(0, INITIAL_LIMIT);
  const remainingCount = filteredEssences.length - INITIAL_LIMIT;

  return (
    <section id="catalogue" className="py-24 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F3E5] border border-[#E8E2D8] text-[#A67D28] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>L’Orgue des Essences (+150 Créations)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14171F] mb-4">
            Trouvez Votre Extrait Favori
          </h2>
          <p className="text-[#5C6479] font-light text-base sm:text-lg">
            Des flacons de verre noble remplis à la demande avec nos concentrés d’essences pures.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="max-w-3xl mx-auto mb-12 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-[#C59A3F] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher une essence (ex: Imagination, Baccarat, Ganymède, Kayali, Bois Impérial...)"
              className="w-full pl-12 pr-4 py-4 rounded-full bg-[#FAF9F6] border border-[#E8E2D8] focus:border-[#C59A3F] text-[#14171F] placeholder-gray-400 text-sm focus:outline-none shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center pt-2">
            {['Tous', 'Top Ventes', 'Homme', 'Femme'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setShowAll(false);
                }}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? 'bg-[#14171F] text-white shadow-md'
                    : 'bg-[#FAF9F6] text-[#5C6479] hover:text-[#14171F] border border-[#E8E2D8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Flacon Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {displayedEssences.map((essence, idx) => (
            <div
              key={idx}
              className="group bg-[#FAF9F6] hover:bg-white rounded-2xl p-6 border border-[#E8E2D8] hover:border-[#C59A3F] transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Visual Flacon Graphic Representation */}
                <div className="relative h-44 rounded-xl bg-white border border-[#E8E2D8]/60 p-4 mb-5 flex flex-col items-center justify-center overflow-hidden">
                  {/* Visual Bottle Graphic */}
                  <div className="relative w-16 h-28 flex flex-col items-center">
                    {/* Wooden Cap */}
                    <div className="w-9 h-6 bg-[#C49A6C] rounded-t-sm shadow-inner border border-[#9A744C]" />
                    {/* Golden Neck */}
                    <div className="w-5 h-1.5 bg-[#C59A3F]" />
                    {/* Glass Body with Liquid Gradient */}
                    <div className="w-16 h-20 rounded-b-lg border-2 border-[#E8E2D8] bg-gradient-to-t from-[#E5BE65]/40 via-[#FAF9F6] to-white relative flex flex-col items-center justify-center p-1 shadow-sm">
                      <span className="text-[8px] font-serif font-bold text-[#14171F] text-center leading-tight truncate w-full px-1">
                        {essence.name}
                      </span>
                      <span className="text-[6px] uppercase tracking-tighter text-[#C59A3F] font-bold mt-0.5">
                        Essence Pure
                      </span>
                    </div>
                  </div>

                  {/* Tag Pill */}
                  <span className="absolute top-2.5 right-2.5 text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#F9F3E5] text-[#A67D28] border border-[#E8E2D8]">
                    {essence.tag}
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-widest text-[#C59A3F] font-bold block mb-1">
                  {essence.house}
                </span>

                <h3 className="font-serif font-bold text-lg text-[#14171F] group-hover:text-[#C59A3F] transition-colors mb-2">
                  {essence.name}
                </h3>

                <p className="text-xs text-[#5C6479] font-light leading-relaxed mb-4 line-clamp-2">
                  {essence.family}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase text-[#5C6479] block">Format 10ml</span>
                  <span className="text-sm font-bold text-[#14171F]">{essence.price}</span>
                </div>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Bonjour Nathy Essences, je souhaite commander l'essence pure : ${essence.name} (${essence.house}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-[#14171F] group-hover:bg-[#C59A3F] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Commander</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Smart "Voir plus de références" Controls & WhatsApp Callout */}
        {!isSearching && filteredEssences.length > INITIAL_LIMIT && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FAF9F6] hover:bg-[#F0ECE1] border-2 border-[#C59A3F]/50 hover:border-[#C59A3F] text-[#14171F] text-xs font-bold uppercase tracking-wider transition-all shadow-sm group"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-4 h-4 text-[#C59A3F] group-hover:-translate-y-0.5 transition-transform" />
                  <span>Afficher moins de références</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-[#C59A3F] group-hover:translate-y-0.5 transition-transform" />
                  <span>Voir plus de références (+{remainingCount} essences)</span>
                </>
              )}
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Bonjour Nathy Essences, avez-vous en stock l'essence de..."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-800 text-xs font-bold uppercase tracking-wider transition-all border border-emerald-600/30"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Demander une référence rare sur WhatsApp</span>
            </a>
          </div>
        )}

        {/* The Layering Formula Box - Contrast Section */}
        <div className="bg-[#121A2E] rounded-3xl p-8 sm:p-12 text-white border border-[#232D42] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8C170] block mb-2">
                Secret de Mixologie Nathy
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C59A3F] to-[#E8C170] text-black text-xs font-bold uppercase tracking-wider shadow-md hover:brightness-110"
              >
                <Sparkles className="w-4 h-4" />
                <span>Demander ma recette de layering WhatsApp</span>
              </a>
            </div>

            <div className="lg:col-span-4 bg-[#090E1A] p-6 rounded-2xl border border-white/10 text-center">
              <span className="text-xs uppercase font-bold text-gray-400 block mb-2">Formule Duo Spéciale</span>
              <div className="text-3xl font-serif font-bold text-[#E8C170] mb-1">Pack Duo 2x35ml</div>
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
