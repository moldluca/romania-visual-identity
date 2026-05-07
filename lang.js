const TRANSLATIONS = {
  ro: {
    'nav-natura':     'Natură',
    'nav-cultura':    'Cultură',
    'nav-patrimoniu': 'Patrimoniu',
    'nav-brandkit':   'Brand Kit',
    'hero-eyebrow':   'Identitate Vizuală Națională · National Visual Identity',
    'hero-title':     'România',
    'hero-subtitle':  'Descoperă · Discover · Entdecke',
    'hero-cta':       'Descoperă România',
    'scroll-label':   'scroll',
    's1-eyebrow':     'Natură',
    's1-title':       'Peisaje de neuitat',
    's2-eyebrow':     'Cultură',
    's2-title':       'Tradiții vii',
    's3-eyebrow':     'Patrimoniu',
    's3-title':       '8 situri UNESCO',
    'tag-carpati':    'Munții Carpați',
    'lbl-carpati':    'Acoperișul României',
    'tag-delta':      'Delta Dunării',
    'lbl-delta':      'Biodiversitate unică',
    'tag-retezat':    'Parcuri Naționale',
    'lbl-retezat':    'Natură sălbatică',
    'tag-litoral':    'Marea Neagră',
    'lbl-litoral':    '245 km de litoral',
    'tag-padure':     'Păduri Seculare',
    'lbl-padure':     '3M ha de pădure',
    'tag-traditional':'Costum Tradițional',
    'lbl-traditional':'Ie românească',
    'tag-gastro':     'Gastronomie',
    'lbl-gastro':     'Bucătărie autentică',
    'tag-dans':       'Muzică & Dans',
    'lbl-dans':       'Ritmuri milenare',
    'tag-sat':        'Sat Tradițional',
    'lbl-sat':        'Viața la sat',
    'tag-peles':      'Castelul Peleș',
    'lbl-peles':      'Bijuteria Carpaților',
    'tag-voronet':    'Mânăstirea Voroneț',
    'lbl-voronet':    'Albastrul de Voroneț',
    'dl-eyebrow':     'România · Brand Kit 2026',
    'dl-title':       'Descarcă Brand Kit-ul',
    'dl-desc':        'Logo-uri SVG/PNG, paleta de culori, ghid tipografie, brand book complet (132 pagini) și referat de prezentare. Tot ce ai nevoie pentru a aplica corect identitatea vizuală națională.',
    'btn-dl':         'Download Brand Kit',
    'btn-dl-sec':     'Brand Book',
    'btn-referat':    'Referat Prezentare',
    'footer-copy':    '© 2026 · România · Identitate Vizuală Națională',
  },
  en: {
    'nav-natura':     'Nature',
    'nav-cultura':    'Culture',
    'nav-patrimoniu': 'Heritage',
    'nav-brandkit':   'Brand Kit',
    'hero-eyebrow':   'National Visual Identity · Identitate Vizuală Națională',
    'hero-title':     'Romania',
    'hero-subtitle':  'Discover · Descoperă · Entdecken',
    'hero-cta':       'Discover Romania',
    'scroll-label':   'scroll',
    's1-eyebrow':     'Nature',
    's1-title':       'Unforgettable Landscapes',
    's2-eyebrow':     'Culture',
    's2-title':       'Living Traditions',
    's3-eyebrow':     'Heritage',
    's3-title':       '8 UNESCO Sites',
    'tag-carpati':    'Carpathian Mountains',
    'lbl-carpati':    'The Roof of Romania',
    'tag-delta':      'Danube Delta',
    'lbl-delta':      'Unique Biodiversity',
    'tag-retezat':    'National Parks',
    'lbl-retezat':    'Wild Nature',
    'tag-litoral':    'Black Sea',
    'lbl-litoral':    '245 km of Coastline',
    'tag-padure':     'Ancient Forests',
    'lbl-padure':     '3M ha of Forest',
    'tag-traditional':'Traditional Costume',
    'lbl-traditional':'The Romanian Blouse',
    'tag-gastro':     'Gastronomy',
    'lbl-gastro':     'Authentic Cuisine',
    'tag-dans':       'Music & Dance',
    'lbl-dans':       'Millennial Rhythms',
    'tag-sat':        'Traditional Village',
    'lbl-sat':        'Village Life',
    'tag-peles':      'Peleș Castle',
    'lbl-peles':      'Jewel of the Carpathians',
    'tag-voronet':    'Voroneț Monastery',
    'lbl-voronet':    'The Blue of Voroneț',
    'dl-eyebrow':     'Romania · Brand Kit 2026',
    'dl-title':       'Download the Brand Kit',
    'dl-desc':        'SVG/PNG logos, color palette, typography guide, full brand book (132 pages) and presentation paper. Everything you need to correctly apply the national visual identity.',
    'btn-dl':         'Download Brand Kit',
    'btn-dl-sec':     'Brand Book',
    'btn-referat':    'Presentation Paper',
    'footer-copy':    '© 2026 · Romania · National Visual Identity',
  }
};

let currentLang = 'ro';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const t = TRANSLATIONS[lang];
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update popup if open
  if (typeof currentPopupId !== 'undefined' && currentPopupId) {
    refreshPopupLang(lang);
  }
}
