// Smart clinic assistant knowledge & intent matcher.
// Reads strictly from the clinic's verified data in site.ts and services.json — never invents prices,
// opening hours, or credentials.

import { site } from './site';
import servicesData from './services.json';

export interface ChatAction {
  label: string;
  href: string;
  external?: boolean;
  icon?: 'phone' | 'messenger' | 'directions' | 'calendar' | 'mail' | 'arrow';
}

export interface ChatReply {
  paragraphs: string[];
  actions?: ChatAction[];
  suggestions: string[];
}

interface ServiceMatcher {
  name: string;
  keywords: string[];
  caseNote?: string;
}

const serviceMatchers: ServiceMatcher[] = [
  {
    name: 'Dental consultation',
    keywords: ['consult', 'consultation', 'checkup', 'check-up', 'check up', 'examine', 'exam', 'ipatan-aw', 'patan-aw', 'magpacheck'],
  },
  {
    name: 'Dental cleaning',
    keywords: ['cleaning', 'clean', 'prophylaxis', 'scaling', 'polish', 'polishing', 'tartar', 'plaque', 'limpyo', 'palimpyo'],
  },
  {
    name: 'Fillings (pasta)',
    keywords: ['filling', 'fillings', 'pasta', 'papasta', 'cavity', 'cavities', 'decay', 'lungag', 'butas', 'tooth-coloured', 'composite filling'],
  },
  {
    name: 'Root canal therapy',
    keywords: ['root canal', 'rct', 'infected', 'nerve', 'fiber post'],
    caseNote: 'You can also see a real root canal treatment with fiber post and direct veneers in our Real smiles section.',
  },
  {
    name: 'Jacket crowns',
    keywords: ['jacket', 'crown', 'crowns', 'bridge', 'pfz', 'pfm', 'zirconia', 'porcelain', 'cap'],
    caseNote: 'We have a real before-and-after case replacing an old PFM bridge with a PFZ bridge in our Real smiles section.',
  },
  {
    name: 'Tooth extraction',
    keywords: ['extraction', 'extract', 'remove', 'pull', 'ibot', 'paibot', 'bunot', 'pabunot'],
  },
  {
    name: 'Wisdom tooth extraction',
    keywords: ['wisdom', 'impacted', 'molar', 'third molar', 'bag-ang'],
  },
  {
    name: 'Braces',
    keywords: ['brace', 'braces', 'ortho', 'orthodontic', 'crooked', 'align', 'straighten', 'brackets', 'transfer', 'adjust', 'adjustment'],
    caseNote:
      'We also accept patients continuing braces started with another dentist — see our Real smiles section for both completed braces + veneers and ongoing braces transfer cases.',
  },
  {
    name: 'Dental implants',
    keywords: ['implant', 'implants', 'titanium', 'anchored'],
  },
  {
    name: 'Dentures',
    keywords: ['denture', 'dentures', 'pustiso', 'false teeth', 'flexible denture', 'removable', 'missing teeth'],
    caseNote: 'You can view a real case swapping a worn plastic denture for a flexible denture in our Real smiles section.',
  },
  {
    name: 'Teeth whitening',
    keywords: ['whiten', 'whitening', 'bleach', 'bleaching', 'stain', 'stains', 'brighten', 'yellow teeth', 'paputi'],
  },
  {
    name: 'Direct veneers',
    keywords: ['veneer', 'veneers', 'direct veneer', 'direct veneers', 'gap', 'gaps', 'chipped', 'chip', 'reshape'],
    caseNote: 'We feature real patient cases with direct veneers in our Real smiles section.',
  },
];

export const initialSuggestions = [
  'What services do you offer?',
  'Where is the clinic located?',
  'How do I book a visit?',
  'How much are your treatments?',
  'Tell me about braces or veneers',
];

const defaultBookingActions: ChatAction[] = [
  { label: 'Message on Messenger', href: site.messengerUrl, external: true, icon: 'messenger' },
  { label: `Call ${site.phone.display}`, href: `tel:${site.phone.tel}`, icon: 'phone' },
];

export const welcomeMessage: ChatReply = {
  paragraphs: [
    `Hi! Welcome to ${site.name} on Colon St., Cebu City.`,
    'Ask me about our dental services, where to find us at Iconique Center, or how to book a visit.',
  ],
  actions: [
    { label: 'Book a visit', href: '#book', icon: 'calendar' },
    { label: `Call ${site.phone.display}`, href: `tel:${site.phone.tel}`, icon: 'phone' },
  ],
  suggestions: initialSuggestions,
};

function includesAny(text: string, terms: string[]): boolean {
  return terms.some((term) => {
    if (term.includes(' ')) return text.includes(term);
    const regex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');
    return regex.test(text);
  });
}

export function getBotReply(rawInput: string): ChatReply {
  const q = rawInput.trim().toLowerCase();

  // 1. Greeting
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|maayong buntag|maayong hapon|maayong gabii|kumusta|musta)[!.,?\s]*$/i.test(q)) {
    return {
      paragraphs: [
        `Hello! How can we help with your smile today at ${site.name}?`,
        'You can ask about specific treatments (like cleaning, pasta, braces, veneers, dentures, or extraction), our Colon St. address, or how to book.',
      ],
      actions: defaultBookingActions,
      suggestions: ['What services do you offer?', 'Where is the clinic located?', 'How do I book a visit?'],
    };
  }

  // 2. Thank you / closing
  if (/^(thanks|thank you|salamat|daghang salamat|ty|thx)[!.,?\s]*$/i.test(q)) {
    return {
      paragraphs: [
        `You're very welcome! We look forward to seeing you at ${site.name}, ${site.address.unit}, ${site.address.building}, ${site.address.street}`,
      ],
      actions: defaultBookingActions,
      suggestions: ['Where is the clinic located?', 'How do I book a visit?', 'What services do you offer?'],
    };
  }

  const matchedServices = serviceMatchers.filter((m) => includesAny(q, m.keywords));

  const asksPrice = includesAny(q, [
    'price', 'prices', 'cost', 'costs', 'rate', 'rates', 'fee', 'fees', 'how much',
    'pila', 'tagpila', 'magkano', 'presyo', 'bayad', 'budget', 'affordable', 'cheap', 'downpayment', 'down payment', 'installment', 'hmo', 'insurance', 'philhealth',
  ]);

  const asksLocation = includesAny(q, [
    'where', 'location', 'located', 'address', 'direction', 'directions', 'map', 'colon',
    'iconique', 'asa', 'asa dapit', 'landmark', 'floor', 'parking', 'cebu', 'saan',
  ]);

  const asksHours = includesAny(q, [
    'hour', 'hours', 'open', 'close', 'closed', 'closing', 'opening', 'schedule', 'time',
    'sunday', 'saturday', 'weekend', 'today', 'tomorrow', 'abri', 'sarado', 'oras', 'what time',
  ]);

  const asksBooking = includesAny(q, [
    'book', 'booking', 'appointment', 'schedule a', 'walk-in', 'walk in', 'walkin',
    'reserve', 'contact', 'phone', 'number', 'call', 'messenger', 'email', 'message', 'pa-appointment',
  ]);

  const asksPainOrUrgent = includesAny(q, [
    'pain', 'hurt', 'hurts', 'toothache', 'ache', 'aching', 'swollen', 'swelling', 'bleeding',
    'broken', 'cracked', 'emergency', 'urgent', 'sakit', 'ngilo', 'hubag', 'masakit',
  ]);

  const asksSmilesOrReviews = includesAny(q, [
    'before and after', 'before/after', 'case', 'cases', 'result', 'results', 'photo', 'photos',
    'gallery', 'review', 'reviews', 'testimonial', 'testimonials', 'feedback',
  ]);

  const asksAllServices = includesAny(q, [
    'service', 'services', 'offer', 'treatment', 'treatments', 'procedure', 'procedures', 'what do you do', 'unsay',
  ]);

  // 3. Urgent / Toothache
  if (asksPainOrUrgent) {
    return {
      paragraphs: [
        'We are sorry to hear your tooth is bothering you. Depending on what we find during a dental consultation, we can treat decay or damage with fillings (pasta), root canal therapy, jacket crowns, or tooth/wisdom tooth extraction when a tooth cannot be saved.',
        `Please call us directly at ${site.phone.display} or send us a message on Messenger so our team can assist you as soon as possible.`,
      ],
      actions: [
        { label: `Call ${site.phone.display}`, href: `tel:${site.phone.tel}`, icon: 'phone' },
        { label: 'Message on Messenger', href: site.messengerUrl, external: true, icon: 'messenger' },
      ],
      suggestions: ['Where is the clinic located?', 'Tell me about root canal therapy', 'Tell me about tooth extraction'],
    };
  }

  // 4. Specific service(s) matched (with optional price note if they asked "how much is...")
  if (matchedServices.length > 0) {
    const paragraphs: string[] = [];
    const actions: ChatAction[] = [];

    for (const match of matchedServices.slice(0, 3)) {
      const serviceInfo = servicesData.services.find((s) => s.name === match.name);
      if (serviceInfo) {
        paragraphs.push(`${serviceInfo.name}: ${serviceInfo.description}`);
      }
      if (match.caseNote) {
        paragraphs.push(match.caseNote);
      }
    }

    if (asksPrice) {
      paragraphs.push(
        `Because treatment depends on your teeth's condition (such as how many teeth are involved or what restoration is needed), we don't list fixed prices online. Send us a quick message on Messenger or call ${site.phone.display} and tell us what you need!`,
      );
    } else {
      paragraphs.push(
        `Ready to have our team take a look? Message us on Messenger or call ${site.phone.display} to book your visit.`,
      );
    }

    actions.push(...defaultBookingActions);
    if (matchedServices.some((m) => m.caseNote)) {
      actions.push({ label: 'See Real Smiles', href: '#smiles', icon: 'arrow' });
    } else {
      actions.push({ label: 'View All Services', href: '#services', icon: 'arrow' });
    }

    return {
      paragraphs,
      actions,
      suggestions: [
        'How do I book a visit?',
        'Where is the clinic located?',
        'What other services do you offer?',
      ],
    };
  }

  // 5. Price / Rates / HMO without a specific service
  if (asksPrice) {
    return {
      paragraphs: [
        'Every smile is different, so treatment costs depend on a quick look at your teeth and which procedure is right for you.',
        `Send us a message on Facebook Messenger with the treatment you have in mind, or call ${site.phone.display} — our team will gladly guide you.`,
      ],
      actions: defaultBookingActions,
      suggestions: ['What services do you offer?', 'Tell me about dental cleaning', 'Tell me about braces or veneers'],
    };
  }

  // 6. Location & Directions (with optional hours if asked together)
  if (asksLocation) {
    const paragraphs = [
      `You can find ${site.name} at ${site.address.unit}, ${site.address.building}, ${site.address.street}, ${site.address.city} ${site.address.postalCode}.`,
    ];
    if (asksHours) {
      paragraphs.push(`${site.hoursNote} — just reach out on Messenger or call ${site.phone.display} to confirm a time that suits you.`);
    } else {
      paragraphs.push('We are one floor up inside Iconique Center on Colon St. Tap below to open Google Maps or contact us before heading over.');
    }
    return {
      paragraphs,
      actions: [
        { label: 'Get Directions', href: site.mapsUrl, external: true, icon: 'directions' },
        { label: `Call ${site.phone.display}`, href: `tel:${site.phone.tel}`, icon: 'phone' },
      ],
      suggestions: ['What are your clinic hours?', 'How do I book a visit?', 'What services do you offer?'],
    };
  }

  // 7. Clinic Hours
  if (asksHours) {
    return {
      paragraphs: [
        `${site.hoursNote}. Send us a quick message on Messenger or call ${site.phone.display} with the day and time you'd like to drop by, and our team will confirm right away.`,
      ],
      actions: defaultBookingActions,
      suggestions: ['Where is the clinic located?', 'How do I book a visit?', 'What services do you offer?'],
    };
  }

  // 8. Booking / Contact
  if (asksBooking) {
    return {
      paragraphs: [
        'Booking a visit is quick! Send us a message on Facebook Messenger with the treatment you need and a day that suits you, or give us a call.',
        `Phone: ${site.phone.display} · Email: ${site.email}`,
      ],
      actions: [
        { label: 'Message on Messenger', href: site.messengerUrl, external: true, icon: 'messenger' },
        { label: `Call ${site.phone.display}`, href: `tel:${site.phone.tel}`, icon: 'phone' },
        { label: 'Email Us', href: `mailto:${site.email}`, icon: 'mail' },
      ],
      suggestions: ['Where is the clinic located?', 'What services do you offer?', 'What are your clinic hours?'],
    };
  }

  // 9. Before & After / Reviews
  if (asksSmilesOrReviews) {
    return {
      paragraphs: [
        'We share real, unedited before-and-after cases from our own patients — including braces with direct veneers, root canal therapy with direct veneers, PFZ bridge replacement, flexible dentures, and continued braces treatment.',
        'You can also read real 5-star Google reviews from our patients right on this page.',
      ],
      actions: [
        { label: 'See Real Smiles', href: '#smiles', icon: 'arrow' },
        { label: 'Read Google Reviews', href: '#reviews', icon: 'arrow' },
      ],
      suggestions: ['Tell me about braces or veneers', 'How do I book a visit?', 'What services do you offer?'],
    };
  }

  // 10. All Services overview
  if (asksAllServices) {
    const allServiceNames = servicesData.services.map((s) => s.name).join(', ');
    return {
      paragraphs: [
        `We offer 12 general and cosmetic dental services at ${site.name}: ${allServiceNames}.`,
        'Ask me about any specific service above to learn more, or jump straight to our Services section.',
      ],
      actions: [
        { label: 'Browse Services', href: '#services', icon: 'arrow' },
        ...defaultBookingActions,
      ],
      suggestions: [
        'Tell me about dental cleaning',
        'Tell me about fillings (pasta)',
        'Tell me about braces or veneers',
        'How do I book a visit?',
      ],
    };
  }

  // 11. Fallback for anything outside our known facts
  return {
    paragraphs: [
      `I want to make sure I only give you accurate details from our clinic. For specific questions, please message our team on Messenger or call ${site.phone.display}.`,
      'You can also ask me about our 12 dental services (like cleaning, pasta, braces, veneers, crowns, dentures, or extraction), our location on Colon St., or how to book a visit.',
    ],
    actions: defaultBookingActions,
    suggestions: initialSuggestions.slice(0, 4),
  };
}
