'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const { contact, contactSection } = siteConfig;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    format: '',
    essence: '',
    deliveryLocation: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Pre-fill WhatsApp message tailored for Nathy Essences
    const text = `*Nouvelle Commande / Demande d'Essence - Nathy Essences*%0A` +
      `👤 *Nom :* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Téléphone :* ${encodeURIComponent(formData.phone)}%0A` +
      `🧪 *Essence(s) souhaitée(s) :* ${encodeURIComponent(formData.essence || 'Conseil personnalisé')}%0A` +
      `📏 *Format / Type :* ${encodeURIComponent(formData.format || '10ml / Non précisé')}%0A` +
      `📍 *Commune / Quartier :* ${encodeURIComponent(formData.deliveryLocation || 'Abidjan')}%0A` +
      `💬 *Précisions / Mix :* ${encodeURIComponent(formData.message || 'Aucune')}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/${contact.whatsappNumber}?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <Section
      id="contact"
      badge={contactSection.badge}
      title={contactSection.title}
      subtitle={contactSection.subtitle}
      background="white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121A2E] text-white space-y-6 border border-[#232D42] shadow-xl">
            <h3 className="text-xl font-bold font-serif text-white flex items-center gap-2">
              <span>{siteConfig.shortName} Parfumerie</span>
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed font-light">
              Des essences pures de haute parfumerie au millilitre. Notre équipe vous conseille et prépare vos flacons avec soin.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E8C170] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Localisation & Livraison</p>
                  <p className="text-gray-300">
                    {contact.address.city}, {contact.address.country}
                  </p>
                  <p className="text-xs text-[#E8C170] mt-0.5">{contact.landmarkNotice}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E8C170] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Horaires d’accueil & Commandes</p>
                  {contact.openingHours.map((h, idx) => (
                    <p key={idx} className="text-gray-300">
                      {h.days} : {h.hours}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-semibold text-white">WhatsApp Commandes</p>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm transition-colors"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#E8C170] shrink-0" />
                <div>
                  <p className="font-semibold text-white">Appels Directs</p>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#E8C170] shrink-0" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-gray-300 hover:text-white transition-colors text-xs"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Column (7 cols) */}
        <div className="lg:col-span-7">
          <Card className="p-6 sm:p-8 bg-[#FAF9F6] border-[#E8E2D8] shadow-sm rounded-2xl">
            <div className="mb-6">
              <h4 className="text-xl font-bold font-serif text-[#14171F] mb-1">
                {contactSection.formTitle}
              </h4>
              <p className="text-xs sm:text-sm text-[#5C6479]">
                {contactSection.formDescription}
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h5 className="text-xl font-bold text-[#14171F]">
                  Votre demande a été préparée !
                </h5>
                <p className="text-sm text-[#5C6479] max-w-md mx-auto">
                  Si WhatsApp ne s’est pas ouvert automatiquement, contactez-nous directement au {contact.phoneDisplay}.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                >
                  Nouvelle demande
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#14171F] uppercase tracking-wider mb-1.5">
                      Votre Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Kouamé Sarah"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-[#14171F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#14171F] uppercase tracking-wider mb-1.5">
                      Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: +225 05 ..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-[#14171F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="essence" className="block text-xs font-bold text-[#14171F] uppercase tracking-wider mb-1.5">
                      Essence(s) ou Référence(s)
                    </label>
                    <input
                      type="text"
                      id="essence"
                      value={formData.essence}
                      onChange={(e) => setFormData({ ...formData, essence: e.target.value })}
                      placeholder="Ex: Imagination LV, Baccarat 540..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-[#14171F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="format" className="block text-xs font-bold text-[#14171F] uppercase tracking-wider mb-1.5">
                      Format souhaité
                    </label>
                    <select
                      id="format"
                      value={formData.format}
                      onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-[#14171F] focus:outline-none focus:ring-2 focus:ring-[#C59A3F] text-sm"
                    >
                      <option value="">Sélectionnez un format...</option>
                      <option value="Format Pocket 10ml (1 500 F)">Format Pocket 10ml (1 500 F)</option>
                      <option value="Format 20ml (3 500 F)">Format 20ml (3 500 F)</option>
                      <option value="Format 25ml (4 000 F)">Format 25ml (4 000 F)</option>
                      <option value="Format 35ml (6 500 F)">Format 35ml (6 500 F)</option>
                      <option value="Format 40ml (7 500 F)">Format 40ml (7 500 F)</option>
                      <option value="Format 60ml (10 000 F)">Format 60ml (10 000 F)</option>
                      <option value="Grand Format 100ml (20 000 F)">Grand Format 100ml (20 000 F)</option>
                      <option value="Pack Duo Layering (2x35ml - 12 000 F)">Pack Duo Layering (2x35ml - 12 000 F)</option>
                      <option value="Pack Démarrage Revendeur / Grossiste">Pack Démarrage Revendeur / Grossiste</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="deliveryLocation" className="block text-xs font-bold text-[#14171F] uppercase tracking-wider mb-1.5">
                    Lieu ou Commune de livraison (Abidjan / Intérieur)
                  </label>
                  <input
                    type="text"
                    id="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    placeholder="Ex: Cocody Angré, Plateau, Marcory, Yopougon, Bouaké..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-[#14171F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#14171F] uppercase tracking-wider mb-1.5">
                    Précisions ou Questions (Optionnel)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Détails sur votre commande, question sur un mélange ou demande de devis revendeur..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E8E2D8] bg-white text-[#14171F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C59A3F] text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full bg-[#121A2E] hover:bg-[#1C2845] text-white font-bold py-3.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 mr-2 text-emerald-400" />
                  <span>{isSubmitting ? 'Préparation...' : 'Envoyer ma commande sur WhatsApp'}</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </Section>
  );
}
