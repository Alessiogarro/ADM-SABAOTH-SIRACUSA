# ADM Sabaoth Church Siracusa – sito web

Sito statico (HTML, CSS e JavaScript), senza installazioni né build.

## Struttura
- `index.html` – pagina principale
- `css/style.css` – grafica
- `js/main.js` – contenuti dinamici (dipartimenti, Life Group, eventi) e invio delle iscrizioni
- `images/logo.png` – logo
- `netlify.toml` – impostazioni di pubblicazione

## Pubblicare
1. Carica tutti i file su un repository GitHub, mantenendo le cartelle.
2. Su Netlify: *Add new site → Import an existing project*, scegli il repository e conferma (nessun comando di build, cartella di pubblicazione `.`).

## Invio automatico delle email
In `js/main.js`, in cima, c'è l'elenco `KEYS`: per ogni email di responsabile va inserita la chiave gratuita di web3forms.com (si crea inserendo quell'email: la chiave arriva nella sua casella). Senza chiave, il pulsante email apre l'app di posta; il pulsante WhatsApp funziona sempre.

## Modificare contatti e testi
Tutto si trova in `js/main.js`: `DEPS` (dipartimenti e responsabili), `DESC` (descrizioni), `LIFE`, `LEM` e `LWA` (Life Group e contatti), `EVENTS` (eventi). I numeri WhatsApp vanno scritti con il prefisso, senza spazi né +, ad esempio `393331234567`.
