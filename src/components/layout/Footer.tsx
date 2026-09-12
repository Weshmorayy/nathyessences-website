import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';

const navigationLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Catalogue d’Essences', href: '#catalogue' },
  { label: 'Formats & Tarifs', href: '#formats' },
  { label: 'Espace Grossiste', href: '#business' },
  { label: 'Avis & Retours', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#07090E] text-white pt-16 pb-12 border-t border-[#1F2637]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#1F2637]">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#0A0D14] p-0.5 border border-[#D4AF37]/50">
                <Image
                  src="/images/brand/Logo-gold-transparent.png"
                  alt="Nathy Essences Parfumerie"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-serif font-bold tracking-wider text-white">
                NATHY ESSENCES
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light max-w-sm">
              Votre parfumerie d’extraits concentrés et d’essences pures à Abidjan. 
              Le luxe des grands créateurs accessible à tous au millilitre dès 1 500 FCFA.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Essences Pures · Tenue +48H · Formats 10ml à 100ml</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#D4AF37] mb-4">
              Contact & Commandes
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Abidjan, Côte d’Ivoire — Livraison express</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors font-medium text-white"
                >
                  WhatsApp : +225 05 64 25 15 34
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.legal.companyName}. Tous droits réservés.</p>
          <p className="flex items-center gap-2">
            <span>Parfumerie d’Essences Pures • Abidjan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
