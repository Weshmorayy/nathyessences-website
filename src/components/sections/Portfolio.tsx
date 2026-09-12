import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Camera, Sparkles } from 'lucide-react';

export function Portfolio() {
  return (
    <section className="py-24 bg-[#FAF9F6] border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F3E5] border border-[#E8E2D8] text-[#A67D28] text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>{siteConfig.portfolio.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14171F] mb-4">
            {siteConfig.portfolio.title}
          </h2>
          <p className="text-[#5C6479] font-light text-base sm:text-lg">
            {siteConfig.portfolio.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.portfolio.items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-white border border-[#E8E2D8] h-96 flex flex-col justify-end p-6 hover:border-[#C59A3F] transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14171F] via-[#14171F]/30 to-transparent" />
              <div className="relative z-10 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#E8C170] font-bold block mb-1">
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
