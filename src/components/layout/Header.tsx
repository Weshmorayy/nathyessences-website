'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

const navigationLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Catalogue d’Essences', href: '#catalogue' },
  { label: 'Formats & Tarifs', href: '#formats' },
  { label: 'Espace Grossiste', href: '#business' },
  { label: 'Avis & Retours', href: '#avis' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Floating Modern Pill Header with No Generic Address Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
        <nav
          className={`mx-auto rounded-full transition-all duration-300 px-5 sm:px-8 py-3 flex items-center justify-between ${
            isScrolled
              ? 'bg-[#0A0D14]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-2xl'
              : 'bg-[#101522]/70 backdrop-blur-sm border border-[#232D42]'
          }`}
        >
          {/* Logo with 3D Gold Emblem */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-[#D4AF37]/50 p-0.5 bg-[#0A0D14]">
              <Image
                src="/images/brand/Logo-gold-transparent.png"
                alt="Nathy Essences Parfumerie"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-serif font-bold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                NATHY ESSENCES
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                Haute Parfumerie · Abidjan
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navigationLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold tracking-wide uppercase text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* WhatsApp Action Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B47B2B] text-black text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Commander WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-6 h-6 text-[#D4AF37]" />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer (Right Side & Full Overlay) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 !z-[999999] flex justify-end">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-[#0A0D14] border-l border-[#232D42] h-full shadow-2xl flex flex-col justify-between p-6 z-10 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-[#232D42]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                  <span className="font-serif font-bold text-base text-white">NATHY ESSENCES</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-gray-400"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold uppercase tracking-wider text-gray-200 hover:text-[#D4AF37] py-2 border-b border-white/5 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#232D42]">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B47B2B] text-black text-xs font-bold uppercase tracking-wider text-center"
              >
                <MessageCircle className="w-4 h-4 fill-black" />
                <span>WhatsApp : +225 05 64 25 15 34</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
