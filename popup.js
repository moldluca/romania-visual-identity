/* ============================================================
   popup.js — Romanian National Visual Identity
   Popup system: openPopup(id), closePopup()
   ============================================================ */

const POPUP_DATA = {
  'natura-carpati': {
    photo: 'photos/01-carpati.jpg',
    eyebrow: 'Natură · Nature',
    title: 'Munții Carpați',
    titleEn: 'The Carpathian Mountains',
    desc: 'Munții Carpați formează coloana vertebrală a României, cu o lungime de peste 1.500 km. Oferă peisaje spectaculoase, faună sălbatică diversă și trasee montane de neuitat.',
    descEn: 'The Carpathian Mountains form the backbone of Romania, stretching over 1,500 km. They offer spectacular landscapes, diverse wildlife and unforgettable mountain trails.',
    stats: [
      { value: '1.500 km', label: 'lungime' },
      { value: '2.544 m', label: 'vârf Moldoveanu' },
      { value: '3 lanțuri', label: 'muntoase' }
    ]
  },
  'natura-delta': {
    photo: 'photos/02-delta-dunarii.jpg',
    eyebrow: 'Natură · Nature',
    title: 'Delta Dunării',
    titleEn: 'The Danube Delta',
    desc: 'A doua deltă ca mărime din Europa, Delta Dunării este un paradis al biodiversității cu peste 5.800 de specii de animale și plante. Sit UNESCO din 1991.',
    descEn: 'The second largest delta in Europe, the Danube Delta is a biodiversity paradise with over 5,800 species of animals and plants. UNESCO World Heritage Site since 1991.',
    stats: [
      { value: '5.800+', label: 'specii' },
      { value: '5.800 km²', label: 'suprafață' },
      { value: '1991', label: 'UNESCO' }
    ]
  },
  'natura-retezat': {
    photo: 'photos/09-retezat.jpg',
    eyebrow: 'Natură · Nature',
    title: 'Parcuri Naționale',
    titleEn: 'National Parks',
    desc: 'România are 30 de parcuri naționale și naturale, acoperind habitate diverse: munți înalți, păduri virgine, zone umede și câmpii. Retezatul este cel mai vechi parc național al țării.',
    descEn: "Romania has 30 national and natural parks covering diverse habitats: high mountains, virgin forests, wetlands and plains. Retezat is the country's oldest national park.",
    stats: [
      { value: '30', label: 'parcuri naționale' },
      { value: '1935', label: 'Retezat fondat' },
      { value: '38.138 ha', label: 'suprafață Retezat' }
    ]
  },
  'natura-litoral': {
    photo: 'photos/08-litoral.jpg',
    eyebrow: 'Natură · Nature',
    title: 'Marea Neagră',
    titleEn: 'The Black Sea',
    desc: 'Cu 245 km de coastă, litoralul românesc oferă plaje largi, stațiuni renumite și peisaje marine de neuitat. Constanța, cel mai vechi oraș al României, veghează de milenii acest litoral.',
    descEn: "With 245 km of coastline, the Romanian shore offers wide beaches, renowned resorts and unforgettable marine landscapes. Constanța, Romania's oldest city, has watched over this coast for millennia.",
    stats: [
      { value: '245 km', label: 'coastă' },
      { value: '13', label: 'stațiuni' },
      { value: '7.000 ani', label: 'Constanța' }
    ]
  },
  'natura-padure': {
    photo: 'photos/10-padure.jpg',
    eyebrow: 'Natură · Nature',
    title: 'Păduri Seculare',
    titleEn: 'Ancient Forests',
    desc: 'România deține cele mai extinse păduri virgine din Europa, cu arbori seculari de sute de ani. Aceste păduri neafectate de om găzduiesc urși, lupi și linxi în sălbăticie.',
    descEn: 'Romania holds the most extensive virgin forests in Europe, with trees hundreds of years old. These untouched forests host bears, wolves and lynxes in the wild.',
    stats: [
      { value: '6,9M ha', label: 'păduri totale' },
      { value: '500.000 ha', label: 'păduri virgine' },
      { value: '60%', label: 'din UE' }
    ]
  },
  'cultura-traditional': {
    photo: 'photos/03-traditional.jpg',
    eyebrow: 'Cultură · Culture',
    title: 'Ie Românească',
    titleEn: 'The Romanian Blouse',
    desc: 'Ia românească, emblema portului tradițional, este recunoscută internațional pentru broderia sa complexă și simbolistica sa profundă. Henri Matisse și alți artiști au fost fascinați de frumusețea ei.',
    descEn: 'The Romanian blouse, the emblem of traditional attire, is internationally recognized for its complex embroidery and deep symbolism. Henri Matisse and other artists were fascinated by its beauty.',
    stats: [
      { value: '24 iunie', label: 'Ziua Iei' },
      { value: '2013', label: 'UNESCO ICH' },
      { value: '100+', label: 'modele regionale' }
    ]
  },
  'cultura-gastronomie': {
    photo: 'photos/04-gastronomie.jpg',
    eyebrow: 'Cultură · Culture',
    title: 'Gastronomie',
    titleEn: 'Romanian Cuisine',
    desc: 'Bucătăria românească reflectă diversitatea regională a țării: sarmale, mămăligă, mici și cozonac sunt preparate cu rețete transmise din generație în generație, folosind ingrediente locale naturale.',
    descEn: "Romanian cuisine reflects the country's regional diversity: sarmale, polenta, mici and cozonac are prepared with recipes passed down through generations, using natural local ingredients.",
    stats: [
      { value: '8', label: 'regiuni culinare' },
      { value: '500+', label: 'rețete tradiționale' },
      { value: '2.000 ani', label: 'tradiție' }
    ]
  },
  'cultura-dans': {
    photo: 'photos/18-dans-traditional.jpg',
    eyebrow: 'Cultură · Culture',
    title: 'Dans Tradițional',
    titleEn: 'Traditional Dance',
    desc: 'Dansurile tradiționale românești, de la hora și sârba până la căluș, sunt expresii vii ale identității culturale. Căluș-ul este inclus în patrimoniul UNESCO al umanității.',
    descEn: "Traditional Romanian dances, from hora and sârba to căluș, are living expressions of cultural identity. The Căluș ritual dance is included in UNESCO's intangible cultural heritage.",
    stats: [
      { value: '200+', label: 'dansuri regionale' },
      { value: '2005', label: 'Căluș — UNESCO' },
      { value: '3.000 ani', label: 'tradiție' }
    ]
  },
  'cultura-sat': {
    photo: 'photos/11-sat-traditional.jpg',
    eyebrow: 'Cultură · Culture',
    title: 'Sat Tradițional',
    titleEn: 'Traditional Village',
    desc: 'Satele românești păstrează arhitectura și tradițiile milenare. Muzeul Național al Satului din București adăpostește peste 300 de gospodării autentice aduse din toată țara.',
    descEn: 'Romanian villages preserve millennial architecture and traditions. The National Village Museum in Bucharest houses over 300 authentic homesteads brought from across the country.',
    stats: [
      { value: '12.957', label: 'sate' },
      { value: '300+', label: 'gospodării muzeu' },
      { value: '1936', label: 'Muzeul Satului' }
    ]
  },
  'patrimoniu-peles': {
    photo: 'photos/05-peles.jpg',
    eyebrow: 'Patrimoniu · Heritage',
    title: 'Castelul Peleș',
    titleEn: 'Peleș Castle',
    desc: 'Considerat una dintre cele mai frumoase clădiri neo-renascentiste din Europa, Castelul Peleș a fost reședință regală și astăzi atrage milioane de vizitatori în inima munților Bucegi.',
    descEn: 'Considered one of the most beautiful Neo-Renaissance buildings in Europe, Peleș Castle was a royal residence and today attracts millions of visitors in the heart of the Bucegi Mountains.',
    stats: [
      { value: '1883', label: 'inaugurat' },
      { value: '160', label: 'camere' },
      { value: '3.200 m²', label: 'suprafață' }
    ]
  },
  'patrimoniu-voronet': {
    photo: 'photos/06-voronet.jpg',
    eyebrow: 'Patrimoniu · Heritage',
    title: 'Mânăstirea Voroneț',
    titleEn: 'Voroneț Monastery',
    desc: 'Numită "Capela Sixtină a Estului", Mânăstirea Voroneț este celebră pentru fresca exterioară albastra sa unică. Construită în 1488 de Ștefan cel Mare, este sit UNESCO din 1993.',
    descEn: 'Called the "Sistine Chapel of the East", Voroneț Monastery is famous for its unique blue exterior fresco. Built in 1488 by Stephen the Great, it has been a UNESCO site since 1993.',
    stats: [
      { value: '1488', label: 'construită' },
      { value: '1993', label: 'UNESCO' },
      { value: '1 an', label: 'timp construcție' }
    ]
  }
};

/* ---- DOM injection ---- */
function injectPopupHTML() {
  const html = `
    <div id="popup-overlay" class="popup-hidden" onclick="handleOverlayClick(event)">
      <div id="popup-card">
        <button onclick="closePopup()" id="popup-close" aria-label="Închide">&#215;</button>
        <img id="popup-photo" src="" alt="">
        <div id="popup-content">
          <div id="popup-eyebrow"></div>
          <h2 id="popup-title"></h2>
          <p id="popup-title-en"></p>
          <p id="popup-desc"></p>
          <p id="popup-desc-en"></p>
          <div id="popup-stats"></div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}

/* ---- Open ---- */
function openPopup(id) {
  const data = POPUP_DATA[id];
  if (!data) {
    console.warn('openPopup: no data for id "' + id + '"');
    return;
  }

  const overlay = document.getElementById('popup-overlay');
  const card    = document.getElementById('popup-card');

  // Populate content
  document.getElementById('popup-photo').src          = data.photo;
  document.getElementById('popup-photo').alt          = data.title;
  document.getElementById('popup-eyebrow').textContent = data.eyebrow;
  document.getElementById('popup-title').textContent   = data.title;
  document.getElementById('popup-title-en').textContent = data.titleEn || '';
  document.getElementById('popup-desc').textContent    = data.desc;
  document.getElementById('popup-desc-en').textContent = data.descEn || '';

  // Build stats
  const statsEl = document.getElementById('popup-stats');
  statsEl.innerHTML = (data.stats || []).map(function(s) {
    return (
      '<div class="popup-stat">' +
        '<span class="popup-stat-value">' + s.value + '</span>' +
        '<span class="popup-stat-label">' + s.label + '</span>' +
      '</div>'
    );
  }).join('');

  // Reset scroll
  card.scrollTop = 0;

  // Show — remove hidden, then trigger animation next frame
  overlay.classList.remove('popup-hidden');
  // Force reflow so transition fires
  void overlay.offsetWidth;
  overlay.classList.add('popup-visible');

  // Prevent body scroll
  document.body.style.overflow = 'hidden';
}

/* ---- Close ---- */
function closePopup() {
  const overlay = document.getElementById('popup-overlay');
  if (!overlay) return;

  overlay.classList.remove('popup-visible');

  // Wait for fade-out to finish before hiding
  overlay.addEventListener('transitionend', function handler() {
    overlay.classList.add('popup-hidden');
    overlay.removeEventListener('transitionend', handler);
  });

  document.body.style.overflow = '';
}

/* ---- Click outside card ---- */
function handleOverlayClick(event) {
  if (event.target === document.getElementById('popup-overlay')) {
    closePopup();
  }
}

/* ---- ESC key ---- */
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const overlay = document.getElementById('popup-overlay');
    if (overlay && !overlay.classList.contains('popup-hidden')) {
      closePopup();
    }
  }
});

/* ---- Init on DOM ready ---- */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectPopupHTML);
} else {
  injectPopupHTML();
}
