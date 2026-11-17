# ADM Sabaoth Church Siracusa – sito web

Sito statico (HTML, CSS e JavaScript), senza installazioni né build.

## Struttura
- `index.html` – pagina principale (menu in alto con le schermate)
- `css/style.css` – grafica
- `js/main.js` – contenuti (dipartimenti, Life Group, eventi) e invio delle iscrizioni
- `images/logo.png` – logo
- `images/dipartimenti/` – foto dei dipartimenti
- `netlify.toml` – impostazioni di pubblicazione

## Pubblicare
1. Carica tutti i file su un repository GitHub, mantenendo le cartelle.
2. Su Netlify: *Add new site → Import an existing project*, scegli il repository e conferma (nessun comando di build, cartella di pubblicazione `.`).

## Foto dei dipartimenti
Metti le foto in `images/dipartimenti/` e, in `js/main.js`, completa l'elenco `PHOTOS`, ad esempio:
`var PHOTOS={"Worship":"images/dipartimenti/worship.jpg"};`
Senza foto compare la lettera iniziale del dipartimento.

## Invio automatico delle email
In `js/main.js`, in cima, nell'elenco `KEYS`, va inserita per ogni email di responsabile la chiave gratuita di web3forms.com (si crea inserendo quell'email: la chiave arriva nella sua casella). Senza chiave il pulsante email apre l'app di posta; WhatsApp funziona sempre.

## Modificare contatti e testi
Tutto in `js/main.js`: `DEPS` (dipartimenti e responsabili), `DESC` (descrizioni), `LIFE`, `LEM` e `LWA` (Life Group e contatti), `EVENTS` (eventi). I numeri WhatsApp vanno scritti con il prefisso, senza spazi né +, ad esempio `393331234567`. I testi della storia e della visione sono in `index.html`.
