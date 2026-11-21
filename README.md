# ADM Sabaoth Church Siracusa – sito web

Sito statico (HTML, CSS e JavaScript), senza installazioni né build.

## Struttura
- `index.html` – pagina principale (menu in alto con le schermate)
- `css/style.css` – grafica
- `js/main.js` – contenuti (dipartimenti, Life Group, eventi) e invio delle iscrizioni
- `images/logo.png` – logo
- `images/dipartimenti/` – foto dei dipartimenti
- `images/donazioni.png` – immagine con i dati per il bonifico (sezione Donazioni)
- `manifest.webmanifest` e `sw.js` – rendono il sito un'app installabile (funziona anche con poca connessione)
- `images/icons/` – icone dell'app
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

## App installabile
Il sito è anche un'app (PWA): una volta pubblicato su Netlify (indirizzo https) si può aggiungere alla schermata Home.
- **Android (Chrome):** compare il pulsante "Installa l'app" in fondo alla pagina, oppure menu ⋮ → *Installa app*.
- **iPhone (Safari):** tocca *Condividi* → *Aggiungi alla schermata Home*.
Se cambi i file, aggiorna il numero in `var CACHE="adm-sabaoth-v2"` dentro `sw.js` (ad esempio v2) per forzare l'aggiornamento sui telefoni.
