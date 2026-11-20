---
title:
  en: "NBA Forecasting"
  it: "NBA Forecasting"
subtitle:
  en: "From basketball statistics to win probabilities, with a Mac app to compare predictions."
  it: "Dalle statistiche del basket alle probabilità di vittoria, con un'app Mac per confrontare le previsioni."
summary:
  en: "A personal machine learning project combining NBA data engineering, neural network experiments, and a native Mac app to predict game winners and track results."
  it: "Un progetto personale di machine learning che unisce preparazione dei dati NBA, sperimentazione con reti neurali e un'app Mac per prevedere i vincitori e seguire i risultati."
year: "November 2026"
date: "2026-11"
order: 895
status:
  en: "Completed"
  it: "Completato"
role:
  en: "Personal project: data pipeline, model experimentation, and application development"
  it: "Progetto personale: pipeline dati, sperimentazione dei modelli e sviluppo dell'applicazione"
technologies: ["Python", "PyTorch", "scikit-learn", "CatBoost", "SQLite", "Parquet", "DuckDB", "SwiftUI", "AppKit"]
featured: false
cover: "/assets/projects/nba-forecasting-logo.webp"
coverFit: "logo"
detailCover: "/assets/projects/nba-forecasting-app.webp"
detailCoverAlt:
  en: "NBA Forecast Mac app showing upcoming games, competition filters, and prediction availability times."
  it: "L'app Mac NBA Forecast con le prossime partite, i filtri per competizione e gli orari di disponibilità delle previsioni."
sections:
  - title:
      en: "Context"
      it: "Contesto"
    body:
      en: |-
        My interest in basketball led me to a practical question: which information available before an NBA game helps predict its winner? Between July and November 2026, I developed NBA Forecasting to explore that question, from collecting historical data to training models and building an application I now use to follow new games.

        The models estimate each team's probability of winning, rather than the final score. I developed the project with AI-assisted programming, analysis, and review tools; the predictions themselves come from numerical models trained on basketball data. Training and inference run locally, while Internet access supplies schedules, statistics, and player availability.
      it: |-
        La passione per il basket mi ha portato a una domanda concreta: quali informazioni disponibili prima di una partita NBA aiutano a prevederne il vincitore? Tra luglio e novembre 2026 ho sviluppato NBA Forecasting per esplorare questa domanda, dalla raccolta dei dati storici all'addestramento dei modelli, fino a un'applicazione che ora utilizzo per seguire le nuove partite.

        I modelli stimano la probabilità di vittoria delle due squadre, senza prevedere il punteggio finale. Ho sviluppato il progetto con strumenti AI di supporto alla programmazione, all'analisi e alla revisione; le previsioni provengono invece da modelli numerici addestrati sui dati del basket. Training e inferenza avvengono in locale, mentre Internet serve per acquisire calendario, statistiche e disponibilità dei giocatori.
  - title:
      en: "Building a reliable data pipeline"
      it: "Costruire una pipeline dati affidabile"
    body:
      en: |-
        I built a historical archive covering seasons from 2015–16 onwards, with more than 14,000 completed games, team and player statistics, play-by-play events, and shot data. I worked on importing and normalising sources, matching team and player identities, and checking scores, minutes, missing values, and data provenance. SQLite manages the relational archive, with Parquet and DuckDB supporting datasets and analysis.

        A central challenge was preventing future information from entering a prediction. Features use eligible games completed before a defined cutoff; preprocessing is fitted on training data only. Chronological splits and walk-forward evaluation reproduce the sequence of training on the past and predicting later games.
      it: |-
        Ho costruito un archivio storico dalle stagioni 2015–16 in poi, con oltre 14.000 gare concluse, statistiche di squadra e giocatore, eventi play-by-play e dati sui tiri. Ho lavorato sull'importazione e normalizzazione delle fonti, sul collegamento delle identità di squadre e giocatori e sui controlli di punteggi, minuti, valori mancanti e provenienza dei dati. SQLite gestisce l'archivio relazionale, mentre Parquet e DuckDB supportano dataset e analisi.

        Una sfida centrale è stata evitare che informazioni future entrassero nelle previsioni. Le feature utilizzano soltanto gare ammissibili concluse prima di un cutoff definito; il preprocessing viene adattato esclusivamente sui dati di training. Suddivisioni cronologiche e valutazioni walk-forward riproducono la sequenza di addestrare sul passato e prevedere incontri successivi.
  - title:
      en: "Testing what helps the prediction"
      it: "Capire cosa aiuta la previsione"
    body:
      en: |-
        I started by comparing Elo, Logistic Regression, and CatBoost, then explored feed-forward neural networks through campaigns of hundreds of configurations. I varied network architecture, regularisation, training duration, historical windows, and the weight given to the current season, checking stability across different random seeds.

        Inputs describe team strength and recent form, shooting, turnovers, home advantage, rest, schedule density, and head-to-head games. Larger versions add player form and bench contributions. I compared schemas with 444, 264, and 88 inputs, including masks that tell the model which values are missing: more inputs do not necessarily mean better predictions. The final app keeps four networks, two using team/context data and two also using player information, and shows their probabilities separately.
      it: |-
        Sono partito confrontando Elo, Regressione Logistica e CatBoost, per poi esplorare reti neurali feed-forward con campagne di centinaia di configurazioni. Ho variato architettura, regolarizzazione, durata del training, finestre storiche e peso della stagione corrente, verificando anche la stabilità con diversi semi casuali.

        Gli input descrivono forza e forma recente delle squadre, tiro, palle perse, vantaggio casalingo, riposo, densità del calendario e scontri diretti. Le versioni più ampie aggiungono forma dei giocatori e contributo della panchina. Ho confrontato schemi a 444, 264 e 88 ingressi, comprese maschere che indicano quali valori mancano: più input non significano necessariamente previsioni migliori. L'app finale mantiene quattro reti, due con dati di squadra e contesto e due anche con informazioni individuali, mostrando separatamente le loro probabilità.
  - title:
      en: "Results and what they mean"
      it: "Risultati e loro significato"
    body:
      en: |-
        On an archived development panel of 237 games across 30 NBA game days in the 2025–26 season, the four selected configurations achieved 68.35%, 73.00%, 70.04%, and 70.89% accuracy. The best by accuracy identified 173 winners out of 237. I also evaluated Brier score and log loss, which assess the quality of the probabilities rather than just the chosen winner: the model with the most correct winners was not the best on every metric.

        These are retrospective development results from data already examined during model selection, not an independent future test or the app's current live performance. I am now using the app to collect new predictions and compare them with actual outcomes. This keeps the historical experiments distinct from the ongoing practical evaluation.
      it: |-
        Su un campione storico di sviluppo di 237 partite distribuite su 30 giornate NBA della stagione 2025–26, le quattro configurazioni selezionate hanno raggiunto accuratezze del 68,35%, 73,00%, 70,04% e 70,89%. La migliore per accuratezza ha individuato 173 vincitori su 237. Ho valutato anche Brier score e log loss, che misurano la qualità delle probabilità e non soltanto il vincitore scelto: il modello con più pronostici corretti non era il migliore in tutte le metriche.

        Sono risultati retrospettivi di sviluppo su dati già esaminati nella selezione dei modelli, non un test futuro indipendente né le prestazioni live attuali dell'app. Ora utilizzo l'applicazione per raccogliere nuove previsioni e confrontarle con gli esiti reali, mantenendo distinti gli esperimenti storici dalla valutazione pratica in corso.
  - title:
      en: "From experiments to a working Mac app"
      it: "Dagli esperimenti a un'app Mac utilizzabile"
    body:
      en: |-
        I brought the research into a native SwiftUI/AppKit application with a local Python backend. It updates game data, filters upcoming fixtures by competition, runs the four models, and saves predictions with their timestamps and model versions. After games finish, it retrieves the outcomes and updates the history and performance summaries.

        The interface also shows player absences. Confirmed unavailable players are excluded from the player-aware models' input selection; this live extension has not yet had a dedicated backtest. The main outcome is a complete workflow connecting data engineering, controlled machine learning experiments, reproducible predictions, and a tool I use daily. NBA names and logos belong to their respective owners; this personal project is not affiliated with the NBA.
      it: |-
        Ho portato la ricerca in un'applicazione nativa SwiftUI/AppKit con backend Python locale. L'app aggiorna i dati, filtra le prossime gare per competizione, esegue i quattro modelli e salva le previsioni con timestamp e versioni delle reti. Dopo le partite recupera gli esiti e aggiorna storico e riepiloghi delle prestazioni.

        L'interfaccia mostra anche le assenze dei giocatori. Gli indisponibili confermati vengono esclusi dalla selezione degli input delle reti che usano dati individuali; questa estensione live non ha ancora un backtest dedicato. Il risultato principale è un flusso completo che collega preparazione dei dati, sperimentazione controllata, previsioni riproducibili e uno strumento che uso quotidianamente. Nomi e loghi NBA appartengono ai rispettivi titolari; il progetto personale non è affiliato alla NBA.
---
