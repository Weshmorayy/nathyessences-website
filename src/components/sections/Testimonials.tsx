import React from 'react';
import { siteConfig } from '@/config/site';
import { Star, MessageSquare, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="avis" className="py-24 bg-[#101522] border-b border-[#232D42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151C2C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{siteConfig.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            {siteConfig.testimonials.title}
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg">
            {siteConfig.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#151C2C] rounded-2xl p-8 border border-[#232D42] flex flex-col justify-between hover:border-[#D4AF37]/40 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D4AF37] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#D4AF37]/20 mb-3" />
                <p className="text-sm text-gray-200 leading-relaxed italic mb-6 font-light">
                  « {item.content} »
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">{item.author}</h4>
                  <span className="text-xs text-gray-400">{item.role} · {item.location}</span>
                </div>
                <span className="text-[11px] text-[#D4AF37] font-medium">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
