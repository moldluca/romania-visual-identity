# România — Identitate Vizuală Națională

Propunere de brand de țară pentru România: un website de prezentare bilingv și un brand book
complet, cu regulile de aplicare a identității vizuale.

**Live:** https://romania.perpetuummobile.tech/

## Conținut

| Fișier / folder | Rol |
|---|---|
| `index.html` | Site-ul de prezentare — secțiunile Natură, Cultură, Patrimoniu, Brand Kit |
| `referat.html` | Referatul care documentează conceptul de brand de țară |
| `brandbook/` | Brand book-ul complet, capitolele 1–17 |
| `lang.js` | Traducerile RO / EN (obiectul `TRANSLATIONS`) |
| `popup.js`, `popup.css` | Componenta de popup folosită în site |
| `brand-kit.zip` | Kit-ul descărcabil (logo, culori, tipografie) |
| `photos/` | Fotografiile folosite în site și în brand book |

### Brand book

Capitolele sunt împărțite în șase fișiere HTML, accesibile din `brandbook/index.html`:

- `cap-01-04.html` — fundamentele brandului
- `cap-05-06.html` — logo, culori și tipografie
- `cap-07-08.html` — clădiri, spații și documente oficiale
- `cap-09-11.html`, `cap-12-13.html`, `cap-14-17.html` — restul aplicațiilor

## Bilingv

Site-ul e disponibil în **română** și **engleză**. Textele nu sunt duplicate în HTML: fiecare
element are un atribut de tip `data-i18n`, iar `lang.js` înlocuiește conținutul la schimbarea
limbii. Ca să adaugi un text nou, adaugi cheia în ambele obiecte (`ro` și `en`) din `lang.js`.

## Rulare locală

Site static, fără build step. Pentru ca `fetch`-urile și fonturile să funcționeze corect,
folosește un server local:

```bash
python3 -m http.server 8000
# apoi deschide http://localhost:8000
```

## Deploy

GitHub Pages din branch-ul `main`, domeniu custom prin `CNAME`. Fișierul `.nojekyll` dezactivează
procesarea Jekyll, ca folderele care încep cu `_` să fie servite ca atare.
