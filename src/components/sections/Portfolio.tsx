import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Camera, Sparkles } from 'lucide-react';

export function Portfolio() {
  return (
    <section className="py-24 bg-[#0A0D14] border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151C2C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{siteConfig.portfolio.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            {siteConfig.portfolio.title}
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg">
            {siteConfig.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.portfolio.items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-[#151C2C] border border-[#232D42] h-96 flex flex-col justify-end p-6 hover:border-[#D4AF37]/50 transition-all duration-300 shadow-lg"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/40 to-transparent" />
              <div className="relative z-10">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-lg text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-300 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
