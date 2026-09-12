import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Sparkles, Droplets, Award, Heart } from 'lucide-react';

export function About() {
  return (
    <section className="py-24 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photos composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#FAF9F6] border border-[#E8E2D8] p-3 shadow-xl">
              <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/showcase/Screenshot_20260912_121506_Chrome.jpg"
                  alt="Shooting Nathy Essences Parfumerie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F9F3E5] border border-[#E8E2D8] text-[#A67D28] text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>{siteConfig.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#14171F] leading-tight mb-6">
              {siteConfig.about.title}
            </h2>

            <div className="space-y-4 text-[#5C6479] font-light text-base sm:text-lg leading-relaxed mb-8">
              {siteConfig.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E8E2D8]">
              {siteConfig.about.stats.map((stat, i) => (
                <div key={i} className="bg-[#FAF9F6] p-4 rounded-xl border border-[#E8E2D8]">
                  <div className="font-serif font-bold text-xl sm:text-2xl text-[#C59A3F] mb-1">
                    {stat.value}
                  </div>
                  <h4 className="text-xs font-bold text-[#14171F] uppercase">{stat.label}</h4>
                  <p className="text-[10px] text-[#5C6479] mt-0.5">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
