import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Nathy Essences Parfumerie — Le Luxe Accessible à Tous à Abidjan',
  shortName: 'Nathy Essences',
  domain: 'nathyessences.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nathyessences.com',
  tagline: 'Le Parfum Qui Vous Ressemble',
  taglineSecondary: 'Essences pures & concentrées de grands créateurs et parfums de niche au millilitre',
  description:
    'Nathy Essences Parfumerie à Abidjan. Vente d’essences pures concentrées de grandes marques (Louis Vuitton, Amouage, Baccarat Rouge, Maison Crivelli, Bois Impérial...). Formats flacons de 10ml à 100ml, prix de gros pour revendeurs et layering personnalisé.',
  keywords: [
    'nathy essences',
    'nathy essences parfumerie',
    'essence de parfum abidjan',
    'parfum pur concentre cote d ivoire',
    'essence baccarat rouge abidjan',
    'imagination louis vuitton essence',
    'grossiste parfum abidjan',
    'revendeur parfum abidjan',
    'layering parfum abidjan',
    'parfum de niche abidjan',
  ],
  locale: 'fr_CI',
  defaultOgImage: '/images/brand/Logo-gold-white-background.jpg',
  logo: {
    transparent: '/images/brand/Logo-gold-transparent.png',
    dark: '/images/brand/Logo-gold-white-background.jpg',
  },

  contact: {
    phone: '+2250564251534',
    phoneDisplay: '+225 05 64 25 15 34',
    whatsappNumber: '2250564251534',
    whatsappUrl:
      'https://wa.me/2250564251534?text=Bonjour%20Nathy%20Essences%2C%20je%20souhaite%20commander%20des%20essences%20de%20parfum.',
    email: 'contact@nathyessences.com',
    address: {
      street: 'Boutique & Showroom Essences',
      neighborhood: 'Abidjan',
      city: 'Abidjan',
      country: 'Côte d’Ivoire',
      countryCode: 'CI',
    },
    openingHours: [
      {
        days: 'Lundi – Samedi',
        hours: '08h00 – 20h00',
      },
      {
        days: 'Dimanche',
        hours: 'Commandes WhatsApp 7j/7',
      },
    ],
    googleMapsUrl: 'https://maps.google.com/?q=Abidjan+Cote+d+Ivoire',
    landmarkNotice: 'Livraison express partout à Abidjan & expéditions à l’intérieur du pays',
  },

  legal: {
    companyName: 'Nathy Essences Parfumerie',
    legalForm: 'Entreprise Individuelle',
    rccm: 'RCCM CI-ABJ-2024-A',
    rcsCity: 'Abidjan',
    directorPublication: 'Direction Nathy Essences',
    hostName: 'Hostinger International Ltd.',
    hostAddress: '61 Lordou Vironos Street, 6023 Larnaca, Chypre',
    hostWebsite: 'https://www.hostinger.fr',
  },

  socials: [
    {
      platform: 'facebook',
      url: 'https://facebook.com/nathy',
      label: 'Facebook',
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/2250564251534',
      label: 'WhatsApp Direct',
    },
  ],

  hero: {
    badge: 'Essences Pures · Concentration Extrême · Tenue +48h',
    title: 'Le Luxe des Grandes Maisons,',
    titleHighlight: 'Accessible à Tous au Millilitre.',
    subtitle:
      'Portez vos inspirations préférées (Louis Vuitton, Amouage, Baccarat Rouge, Maison Crivelli...) sans vous ruiner. Flaconnages sur mesure dès 1 500 FCFA et packs de lancement pour revendeurs.',
    primaryCta: {
      text: 'Explorer l’Orgue à Essences',
      href: '#catalogue',
    },
    secondaryCta: {
      text: 'Tarifs Grossistes & Business',
      href: '#business',
    },
    trustBadges: {
      rating: '5.0/5',
      reviewCount: '500+ clients comblés',
      label: '+150 Essences Pures & Rares',
    },
    heroImage: {
      src: '/images/showcase/Screenshot_20260912_121442_Chrome.jpg',
      alt: 'Flacons d’essences pures Nathy Essences Parfumerie',
    },
  },

  about: {
    badge: 'L’Art de l’Essence Pure',
    title: 'Pourquoi Choisir Nos Essences Concentrées ?',
    subtitle: 'La puissance du parfum pur sans dilution excessive.',
    paragraphs: [
      'Chez Nathy Essences Parfumerie, nous sélectionnons les extraits et concentrés les plus purs pour vous offrir une intensité et un sillage remarquables dès la première vaporisation.',
      'Grâce à notre concept de flaconnage au millilitre, vous avez enfin la liberté de varier les plaisirs selon votre humeur, d’expérimenter le Layering (mélange de deux senteurs) ou de lancer votre propre activité lucrative de parfumerie.',
    ],
    stats: [
      { value: '+150', label: 'Grandes Références', description: 'Designers & Niche' },
      { value: '1 500 F', label: 'Prix de Départ', description: 'Format 10ml pocket' },
      { value: '48H+', label: 'Tenue Prolongée', description: 'Sur tissus & peau' },
    ],
    image: {
      src: '/images/showcase/Screenshot_20260912_121506_Chrome.jpg',
      alt: 'Composition florale et flacon d’essence Nathy',
    },
  },

  services: {
    badge: 'Nos Formats & Services',
    title: 'Formats Flacons & Solutions Pro',
    subtitle: 'Du flacon de poche quotidien jusqu’au demi-litre pour revendeurs.',
    categories: ['Tous', 'Détail', 'Grossiste', 'Layering'],
    items: [
      {
        id: 'format-decouverte',
        category: 'Détail',
        title: 'Formats 10ml, 20ml & 25ml',
        description: 'Idéal pour glisser dans son sac, tester une nouvelle note ou alterner ses parfums au quotidien.',
        iconName: 'Sparkles',
        features: ['10ml : 1 500 F', '20ml : 3 500 F', '25ml : 4 000 F'],
        popular: true,
        priceNote: 'Dès 1 500 FCFA',
      },
      {
        id: 'format-confort',
        category: 'Détail',
        title: 'Formats 35ml, 40ml & 60ml',
        description: 'Les formats favoris de nos clientes fidèles pour une utilisation quotidienne généreuse.',
        iconName: 'Gem',
        features: ['35ml : 6 500 F', '40ml : 7 500 F', '60ml : 10 000 F'],
        popular: true,
        priceNote: 'Dès 6 500 FCFA',
      },
      {
        id: 'format-prestige-100ml',
        category: 'Détail',
        title: 'Grand Format Prestige 100ml',
        description: 'Le flacon maître pour votre signature olfactive préférée. Une réserve longue durée.',
        iconName: 'Crown',
        features: ['100ml classique : 20 000 F', 'Flacon spray haute diffusion'],
        popular: false,
        priceNote: '20 000 FCFA',
      },
      {
        id: 'espace-grossiste-revendeur',
        category: 'Grossiste',
        title: 'Packs Business & Tarifs de Gros',
        description: 'Approvisionnez votre commerce avec nos tarifs dégressifs exceptionnels dès 10 pièces ou au litre.',
        iconName: 'Banknote',
        features: ['100ml en gros : 18 500 F / 23 000 F', 'Rentabilité garantie', 'Accompagnement conseil'],
        popular: true,
        priceNote: 'Tarifs Dégressifs',
      },
      {
        id: 'layering-mixologie',
        category: 'Layering',
        title: 'Atelier Mixologie & Layering',
        description: 'Combinez 2 essences (ex: Imagination LV + DKNY) pour créer un parfum sur-mesure que personne d’autre ne porte.',
        iconName: 'Heart',
        features: ['Conseils personnalisés', 'Combinaisons testées'],
        popular: false,
        priceNote: 'Sur Demande',
      },
      {
        id: 'diffuseurs-voiture-maison',
        category: 'Ambiance',
        title: 'Diffuseurs Voiture & Maison',
        description: 'Prolongez l’expérience olfactive dans votre habitacle ou votre intérieur avec nos concentrés d’ambiance.',
        iconName: 'ShieldCheck',
        features: ['Longue diffusion', 'Parfums frais et boisés'],
        popular: false,
        priceNote: 'Dès 2 500 FCFA',
      },
    ],
  },

  portfolio: {
    badge: 'Galerie Shoots & Univers',
    title: 'L’Univers Visuel Nathy Essences',
    subtitle: 'Flacons en verre et bouchons en bois noble dans nos ambiances signatures.',
    items: [
      {
        id: '1',
        title: 'Hibiscus Mahajád & Parfums Rares',
        category: 'Niche',
        description: 'Essences de collection Maison Crivelli',
        image: '/images/showcase/Screenshot_20260912_121349_Chrome.jpg',
        imageAlt: 'Flacons Nathy Essences Hibiscus Mahajad',
        tags: ['Maison Crivelli', 'Niche', 'Extrait'],
      },
      {
        id: '2',
        title: 'Alexandria II & Amouage Interlude',
        category: 'Orientaux',
        description: 'Notes boisées, ambrées et royales',
        image: '/images/showcase/Screenshot_20260912_121418_Chrome.jpg',
        imageAlt: 'Alexandria II Xerjoff essence Nathy',
        tags: ['Xerjoff', 'Amouage', 'Boisé'],
      },
      {
        id: '3',
        title: 'Imagination & Fleur du Désert',
        category: 'Grands Créateurs',
        description: 'Les sillages iconiques Louis Vuitton',
        image: '/images/showcase/Screenshot_20260912_121442_Chrome.jpg',
        imageAlt: 'Imagination Louis Vuitton essence Nathy',
        tags: ['Louis Vuitton', 'Frais', 'Agrumes'],
      },
      {
        id: '4',
        title: 'Jump Up and Kiss Me & Clive Christian',
        category: 'Haute Parfumerie',
        description: 'La quintessence du raffinement anglais',
        image: '/images/showcase/Screenshot_20260912_121553_Chrome.jpg',
        imageAlt: 'Clive Christian essence Nathy',
        tags: ['Clive Christian', 'Prestige', 'Intense'],
      },
    ],
  },

  testimonials: {
    badge: 'La Voix des Clientes',
    title: 'Des Retours 100% Authentiques',
    subtitle: 'Ce que disent nos clientes et revendeurs à Abidjan.',
    items: [
      {
        id: '1',
        author: 'Sita Koné',
        role: 'Cliente Particulière',
        location: 'Cocody',
        content:
          'Je suis en train de tchouer les gens avec mon mix de Imagination de LV + le DKNY ! Je sens la richesse grave ! La tenue sur les habits dure plus de 2 jours.',
        rating: 5,
        date: 'Septembre 2026',
      },
      {
        id: '2',
        author: 'Mariam Diabaté',
        role: 'Revendeuse Indépendante',
        location: 'Yopougon',
        content:
          'J’ai commencé avec le pack de démarrage revendeur. Toutes mes clientes ont adoré la qualité des essences et la fidélité des senteurs. Mes stocks sont partis en 1 semaine.',
        rating: 5,
        date: 'Août 2026',
      },
      {
        id: '3',
        author: 'Koffi Emmanuel',
        role: 'Amateur de Parfums de Niche',
        location: 'Plateau',
        content:
          'Alexandria II et Bois Impérial sont exactement identiques aux originaux qui coûtent 200 000 F en parfumerie classique. Là j’ai mon flacon de 60ml pour 10 000 F. Bravo Nathy !',
        rating: 5,
        date: 'Août 2026',
      },
    ],
  },

  faq: {
    badge: 'Questions Fréquentes',
    title: 'Tout Comprendre sur Nos Essences',
    subtitle: 'Qualité, dilution, tenue et commandes.',
    items: [
      {
        question: 'Qu’est-ce qu’une essence de parfum pure ?',
        answer:
          'C’est le cœur concentré du parfum, avant l’adjonction excessive d’alcool. Cela permet une tenue remarquable de plus de 48 heures sur les tissus et une évolution très douce sur votre peau.',
      },
      {
        question: 'Comment passer une commande ?',
        answer:
          'Vous choisissez vos essences dans notre liste ou vous nous donnez vos parfums préférés directement sur WhatsApp au +225 05 64 25 15 34. Nous préparons votre flaconnage personnalisé immédiatement.',
      },
      {
        question: 'Comment démarrer comme revendeur ?',
        answer:
          'Nous proposons des tarifs de gros très avantageux dès 10 flacons ou au format 100ml / litre. Contactez-nous pour recevoir notre grille tarifaire revendeur et des conseils pour lancer vos ventes.',
      },
      {
        question: 'Comment se passe la livraison ?',
        answer:
          'Nous livrons à domicile ou au bureau partout à Abidjan en express dans la journée, et nous expédions dans toutes les villes de l’intérieur via les compagnies de transport fiables.',
      },
    ],
  },

  contactSection: {
    badge: 'Commander & Conseil',
    title: 'Votre Signature Olfactive en un Clic',
    subtitle: 'Écrivez-nous sur WhatsApp pour composer votre flacon ou demander un conseil de layering.',
    formTitle: 'Envoyer une demande rapide',
    formDescription: 'Réponse express par notre équipe sous 10 minutes.',
  },
};
