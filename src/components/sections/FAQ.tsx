'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#0A0D14] border-b border-[#232D42]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151C2C] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{siteConfig.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
            {siteConfig.faq.title}
          </h2>
          <p className="text-gray-300 font-light text-base sm:text-lg">
            {siteConfig.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faq.items.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#151C2C] rounded-2xl border border-[#232D42] overflow-hidden transition-all duration-200 shadow-md"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#0A0D14] border border-[#232D42] flex items-center justify-center shrink-0 text-[#D4AF37] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-black' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
