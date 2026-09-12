import React from 'react';
import { siteConfig } from '@/config/site';
import { Star, MessageSquare, Quote } from 'lucide-react';

export function Testimonials() {
  return (
    <section id="avis" className="py-24 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F3E5] border border-[#E8E2D8] text-[#A67D28] text-xs font-bold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>{siteConfig.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14171F] mb-4">
            {siteConfig.testimonials.title}
          </h2>
          <p className="text-[#5C6479] font-light text-base sm:text-lg">
            {siteConfig.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.testimonials.items.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF9F6] rounded-2xl p-8 border border-[#E8E2D8] flex flex-col justify-between hover:border-[#C59A3F] hover:shadow-xl transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-[#C59A3F] mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#C59A3F]/20 mb-3" />
                <p className="text-sm text-[#14171F] leading-relaxed italic mb-6 font-light">
                  « {item.content} »
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#14171F]">{item.author}</h4>
                  <span className="text-xs text-[#5C6479]">{item.role} · {item.location}</span>
                </div>
                <span className="text-[11px] text-[#A67D28] font-bold">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
