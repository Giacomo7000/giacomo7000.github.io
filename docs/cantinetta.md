# Cantinetta — manutenzione

## Pagine e componenti

- Italiano: `/it/cantinetta`; inglese: `/cantinetta`.
- `src/components/CantinettaPage.astro`: hero, teche e schede; riusa `BaseLayout` e `Button`.
- `src/styles/cantinetta.css`: stili isolati, variabili del tema esistente e griglia 4/3/2/1 colonne.
- `src/scripts/cantinetta.ts`: filtri, comparsa progressiva, inclinazione e dialog nativo.
- `src/lib/cantinetta.ts`: tipi e formattazione delle date; interfaccia in `src/lib/i18n.ts`.
- `src/components/Footer.astro`: collegamento Cantinetta accanto a Letture; header invariato.
- `src/assets/cantinetta/`: illustrazioni decorative ricavate dal prototipo fornito, soltanto nella hero.
- Nessuna nuova dipendenza, servizio o backend.

## Modificare la collezione

Unico catalogo: `src/data/cantinetta.json`. L'array `rooms` stabilisce ordine e nomi
bilingui delle sale. Per rinominare una sala basta modificare `name.it/en`;
per riordinarle spostare le voci; per unirle assegnare lo stesso `room` ai dispositivi.

Ogni dispositivo contiene:

- `id`: identificativo stabile, lettere minuscole, cifre e trattini.
- `name`, `highlights`, `description`: oggetti `{ "it": "…", "en": "…" }`.
- `room`: identificativo di una sala; `order`: posizione intera univoca, crescente.
- `introduced`: anno o mese di presentazione, `YYYY` / `YYYY-MM`; `null` se incerto.
- `sources`: collegamenti alle fonti storiche, preferibilmente Apple.
- `confirmation`: nota bilingue sui dettagli da verificare, oppure `null`.
- `photo`: metadati della fotografia locale, oppure `null` con `photoNote` bilingue.

Aggiungere una voce con un nuovo `id` e `order` è sufficiente: pagine, filtri,
conteggi e navigazione fra oggetti si aggiornano dai dati. Non ci sono conteggi
statici nell'interfaccia. Le date si riferiscono al lancio del modello/famiglia,
non all'acquisto o all'esemplare posseduto. iBook G4 e Pro Keyboard distinguono
esplicitamente il debutto della famiglia dalla revisione della collezione.

Per una fotografia aggiungere un WebP locale in `public/assets/cantinetta/` e
compilare `src`, `width`, `height`, `alt.it/en`, `author`, `title`, `source`,
`original`, `license`, `licenseUrl`, `changes.it/en`. Aggiornare anche il registro
pubblico `public/assets/cantinetta/credits.json`; i test rilevano crediti mancanti
o discordanti. Le immagini sono ridimensionate senza ingrandimento, massimo
800 × 800 px, senza deformazioni; la pagina usa `object-fit: contain`.

## Modelli e varianti

Recepita l'indicazione di usare le dimensioni più piccole: iBook 12″,
MacBook Air 2015 11″, Air M5 13″, iPad Pro M1 11″, Watch Series 3 38 mm e
SE di seconda generazione 40 mm. Apple Remote è interpretato come la versione
bianca compatta a infrarossi; è facilmente correggibile nei dati.

Restano queste conferme:

- **Apple Pro Keyboard M7803**: Tasti bianchi e M7803 indicati nell’inventario; anno della variante da confermare (circa 2002).
- **iBook G4 12″**: Revisione e anno dell’esemplare da confermare; data riferita al debutto della famiglia.
- **iMac 24″ (Early 2009)**: Processore, GPU e memoria dell’esemplare da confermare.
- **iMac 21,5″**: Segnalato come “Mid 2012”: anno e identificativo modello da verificare.
- **Apple Watch Series 3 · 38 mm**: Variante GPS o GPS + Cellular dell’esemplare da confermare.
- **Apple Watch SE (2ª generazione) · 40 mm**: Variante GPS o GPS + Cellular dell’esemplare da confermare. La fotografia mostra la versione GPS + Cellular.

## Fotografie mancanti

La collezione contiene 34 schede, 26 fotografie locali e 8 segnaposto dichiarati.
La ricerca non ha individuato per questi casi una fotografia adatta di cui fossero
verificabili insieme modello, riutilizzabilità e qualità:

- **iBook G4 12″**: Fotografia pulita del modello da 12″ con licenza di riutilizzo non ancora verificata.
- **iMac 24″ (Early 2009)**: Fotografia riutilizzabile dell’iMac 24″ Early 2009 non verificata. Le immagini di altre revisioni non sono state usate.
- **iMac 21,5″**: Serve identificare il modello: “Mid 2012” non corrisponde alla denominazione Apple del 21,5″ Late 2012.
- **MacBook Air 11″ (Early 2015)**: Fotografia riutilizzabile del modello da 11″ Early 2015 non ancora verificata.
- **MacBook Air Retina 13″ (2020, Intel Core i5)**: Fotografia riutilizzabile del modello Retina Intel 2020 non ancora verificata.
- **iPad Pro 11″ (M1)**: Fotografia del modello M1 da 11″ non ancora verificata: non sono state usate immagini del 12,9″.
- **EarPods USB-C**: Fotografia riutilizzabile con connettore USB-C identificabile non ancora verificata.
- **AirPods Pro (3ª generazione)**: Fotografia riutilizzabile e non alterata dei prodotti di terza generazione non ancora verificata.

Scartate immagini di generazioni diverse, render, esemplari dimostrativi non
verificabili, fotografie con cartellini promozionali e una versione di AirPods
Pro 3 che dichiara ritocchi generativi nei metadati Commons. La fotografia di
iPhone 15 Pro è un dettaglio reale delle fotocamere, indicato anche nel testo
alternativo. Le foto documentano il modello e possono avere colore o allestimento
diversi dall'esemplare personale; la variante Cellular del Watch SE è esplicitata.

## Fonti, attribuzioni e licenze

Storia: fonti per ciascun dispositivo nel campo `sources`, visibili nella scheda.
Prevalentemente Apple Newsroom e Apple Support. Nessun benchmark indipendente
inventato: per M1 il testo distingue il dato di autonomia dichiarato da Apple
nell'annuncio e le condizioni di prova. M5 e AirPods Pro 3 sono documentati con
i rispettivi annunci Apple del 2026 e del 2025.

Fotografie: Wikimedia Commons, senza hotlink di immagini. Ogni scheda mostra
titolo, autore, fonte, licenza e modifiche. Registro completo esportabile:
[`public/assets/cantinetta/credits.json`](../public/assets/cantinetta/credits.json).
I singoli file mantengono la licenza indicata; le versioni CC BY-SA sono
condivise sotto la stessa licenza. La licenza del codice non si estende alle
fotografie. Nessun sostegno o approvazione degli autori è implicato.

| Dispositivo | Autore / attribuzione | Fonte e licenza |
| --- | --- | --- |
| Macintosh Plus | Felix Winkelnkemper | [Fonte](https://commons.wikimedia.org/wiki/File:Apple_Macintosh_Plus_white_background.jpg) · [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| Macintosh LC II | All About Apple Museum / www.allaboutapple.com; DrJunge (crop and processing) | [Fonte](https://commons.wikimedia.org/wiki/File:Macintosh_LC_II.jpg) · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Apple Pro Keyboard M7803 | All About Apple Museum / www.allaboutapple.com | [Fonte](https://commons.wikimedia.org/wiki/File:Apple_Pro_Keyboard_white.jpg) · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/) |
| Apple Remote (bianco, infrarossi) | NerdyScienceDude | [Fonte](https://commons.wikimedia.org/wiki/File:Appleremotes.JPG) · [Public domain](https://commons.wikimedia.org/wiki/Template:PD-self) |
| iPhone (1ª generazione) | Kaiser KurzydloVII | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_(Original)_von_Apple_mit_8GB.png) · [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| iPhone 3GS | Khalid Mahmood | [Fonte](https://commons.wikimedia.org/wiki/File:Iphone_3GS-1.jpg) · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) |
| iPhone 4 | K2025 | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_4_-_front.jpg) · [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| iPod nano (6ª generazione) | kauhoshi | [Fonte](https://commons.wikimedia.org/wiki/File:IPod_nano_6G.JPG) · [CC BY 3.0](https://creativecommons.org/licenses/by/3.0) |
| iPhone 4S | iGeeksBlog | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_4s.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| iPhone 5s | © Raimond Spekking / CC BY-SA 4.0 (via Wikimedia Commons) | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_5s_(model_A1457)-3319.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| iPhone 6s | © Raimond Spekking / CC BY-SA 4.0 (via Wikimedia Commons) | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_6s_-_rear_view-92671.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| iPhone 7 | cicwdn on Pixabay | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_7.jpg) · [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| AirPods (1ª generazione) | Maurizio Pesce from Milan, Italia | [Fonte](https://commons.wikimedia.org/wiki/File:AirPods.jpg) · [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| Apple Watch Series 3 · 38 mm | Fletcher | [Fonte](https://commons.wikimedia.org/wiki/File:Apple_Watch_Series_3_Sensors.jpg) · [CC BY 4.0](https://creativecommons.org/licenses/by/4.0) |
| iPhone XS | Cullen Steber | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_XS.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| iPhone XR | Asdaiang14453 | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_XR.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| Apple Pencil (2ª generazione) | ajay_suresh | [Fonte](https://commons.wikimedia.org/wiki/File:Apple_Pencil_2_(51013514266).jpg) · [CC BY 2.0](https://creativecommons.org/licenses/by/2.0) |
| AirPods Pro (1ª generazione) | Arne Müseler / www.arne-mueseler.com | [Fonte](https://commons.wikimedia.org/wiki/File:Apple_airpods_pro.jpg) · [CC BY-SA 3.0 de](https://creativecommons.org/licenses/by-sa/3.0/de/deed.en) |
| MacBook Air M1 | Padgriffin | [Fonte](https://commons.wikimedia.org/wiki/File:MacBook_Air_M1.png) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| AirTag (1ª generazione) | KKPCW | [Fonte](https://commons.wikimedia.org/wiki/File:Airtag_-_6.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| AirPods (3ª generazione) | Yovt | [Fonte](https://commons.wikimedia.org/wiki/File:AirPods_3.jpg) · [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| iPhone 14 Pro | iGeeksBlog | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_14_Pro_Deep_Purple.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| Apple Watch SE (2ª generazione) · 40 mm | AzureSaturn | [Fonte](https://commons.wikimedia.org/wiki/File:Apple_Watch_SE_2_(GPS_%2B_Cellular,_40mm,_Midnight)_with_Anchor_Blue_Sport_Loop.jpg) · [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed.en) |
| iPhone 15 Plus | メイド理世 | [Fonte](https://commons.wikimedia.org/wiki/File:IPhone_15_Plus,_January_28,_2024.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| iPhone 15 Pro | Kyu3 | [Fonte](https://commons.wikimedia.org/wiki/File:Back_camera_of_iPhone_15_Pro.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |
| MacBook Air 13″ (M5) | Kyu3a | [Fonte](https://commons.wikimedia.org/wiki/File:M5_Macbook_Air_13_Sky_Blue_model.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0) |

Modifiche locali: ridimensionamento e conversione WebP. Apple Remote è ritagliato
per isolare il solo telecomando bianco dal confronto originale; nessun prodotto
è stato generato artificialmente. Credit completi, originali e modifiche sono
registrati per ogni file nel JSON pubblico. Verifica fonti: 16 novembre 2026.

## Avvio e verifiche

```sh
npm run dev
# http://localhost:4321/it/cantinetta
# http://localhost:4321/cantinetta
npm test
npm run build
npm run preview
```

Il progetto non definisce uno script lint. I test controllano preferenze di lingua,
identificativi, riferimenti alle sale, testi bilingui, fonti, asset locali e
coerenza delle attribuzioni. Il workflow GitHub Pages esegue test e build dopo
il push su `main`.

Controlli visivi: desktop, tablet e smartphone, lingue IT/EN, tema chiaro/scuro,
filtri, conteggi, foto, apertura delle schede, oggetto successivo, Escape e
ripristino del focus. Le animazioni rispettano `prefers-reduced-motion`, il
comportamento senza JavaScript conserva collegamenti a schede HTML inline e i
controlli invisibili non vengono offerti. Le foto sotto la piega usano lazy loading.
