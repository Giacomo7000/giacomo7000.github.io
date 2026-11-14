---
title:
  en: "silvIA"
  it: "silvIA"
subtitle:
  en: "A macOS app for local audio transcription, designed to keep meeting recordings under the user's control."
  it: "Un'app macOS per trascrivere audio in locale, pensata per mantenere il controllo sulle registrazioni delle riunioni."
summary:
  en: "A personal macOS app combining local speech recognition, speaker separation, and live RAM and temperature monitoring, without sending recordings to cloud services."
  it: "Un'app macOS personale che unisce trascrizione locale, separazione degli interlocutori e monitoraggio di RAM e temperatura, senza inviare le registrazioni a servizi cloud."
year: "October 2026"
date: "2026-10"
order: 890
status:
  en: "Completed"
  it: "Completato"
role:
  en: "Personal project"
  it: "Progetto personale"
technologies: ["SwiftUI", "macOS", "Python", "MLX", "Whisper", "Parakeet", "pyannote.audio", "SQLite"]
featured: false
cover: "/assets/projects/silvia.webp"
coverFit: "logo"
sections:
  - title:
      en: "Context"
      it: "Contesto"
    body:
      en: |-
        I built silvIA to transcribe recordings without relying on paid online services or sending audio to someone else's servers. The idea came especially from business meetings: conversations can contain information that a company wants to keep within its own environment, while still benefiting from AI tools.

        Privacy was one reason; independence was another. I wanted a tool I could keep using without depending on a subscription, service availability, or a provider changing its offering. Once the models and dependencies are installed, audio processing runs locally on the Mac.
      it: |-
        Ho sviluppato silvIA per trascrivere registrazioni senza dipendere da servizi online a pagamento e senza inviare l'audio a server esterni. L'idea nasce soprattutto pensando alle riunioni aziendali: conversazioni che possono contenere informazioni da mantenere all'interno dell'azienda, pur beneficiando degli strumenti AI.

        La privacy è una motivazione, l'indipendenza è l'altra. Volevo uno strumento da poter continuare a usare senza dipendere da un abbonamento, dalla disponibilità di un servizio o dalle scelte di un fornitore. Una volta installati modelli e dipendenze, l'elaborazione dell'audio avviene in locale sul Mac.
  - title:
      en: "How it works"
      it: "Come funziona"
    body:
      en: |-
        The native SwiftUI interface lets me choose the transcription model, start the AI engine, and import a recording in formats such as M4A, MP3, or WAV. A Python processing layer runs the selected models locally, while the app manages the meeting library and displays the transcript.

        Original recordings are preserved separately from the generated text and speaker annotations. Local files and SQLite storage keep the meeting data on the machine. The engine can be stopped when it is no longer needed, releasing the memory occupied by the models.
      it: |-
        L'interfaccia nativa in SwiftUI permette di scegliere il modello di trascrizione, avviare il motore AI e importare una registrazione in formati come M4A, MP3 o WAV. Un livello di elaborazione in Python esegue i modelli localmente, mentre l'app gestisce la libreria delle riunioni e mostra la trascrizione.

        Le registrazioni originali vengono conservate separatamente dal testo generato e dalle annotazioni sugli interlocutori. File locali e archiviazione SQLite mantengono i dati delle riunioni sulla macchina. Quando non serve più, il motore può essere arrestato per liberare la memoria occupata dai modelli.
  - title:
      en: "Models and speaker separation"
      it: "Modelli e separazione degli interlocutori"
    body:
      en: |-
        I explored Whisper Large V3 and Parakeet TDT 0.6B v3 through their MLX implementations for Apple Silicon. Whisper Large V3 is the default transcription model, while Parakeet remains available as an alternative. Keeping the choice separate from the interface makes it possible to try different engines within the same workflow.

        For recordings with multiple speakers, Community-1 from pyannote.audio identifies speaker turns and aligns them with the transcript. Optional recognition with WeSpeaker can associate voices with explicitly saved local profiles. Separating speakers and identifying a known person remain distinct operations: recognition is disabled by default, and uncertain matches retain anonymous speaker labels.
      it: |-
        Ho esplorato Whisper Large V3 e Parakeet TDT 0.6B v3 attraverso le rispettive implementazioni MLX per Apple Silicon. Whisper Large V3 è il modello di trascrizione predefinito, mentre Parakeet resta disponibile come alternativa. Mantenere questa scelta separata dall'interfaccia permette di provare motori diversi all'interno dello stesso flusso di lavoro.

        Per le registrazioni con più persone, Community-1 di pyannote.audio individua i turni di parola e li allinea alla trascrizione. Il riconoscimento facoltativo con WeSpeaker può associare le voci a profili salvati esplicitamente in locale. Separare gli interlocutori e riconoscere una persona conosciuta restano operazioni distinte: il riconoscimento è disattivato di default e le corrispondenze incerte mantengono etichette anonime.
  - title:
      en: "Making local processing visible"
      it: "Rendere visibile l'elaborazione locale"
    body:
      en: "Running AI on a personal computer also means understanding its resource use. The interface shows system RAM usage and chip temperature when the sensor reading is available, alongside the engine state and processing progress. These readings help me keep an eye on the Mac during longer recordings; they are used live in the interface rather than collected as research metrics."
      it: "Eseguire l'AI sul proprio computer significa anche capire quali risorse sta utilizzando. L'interfaccia mostra l'utilizzo della RAM di sistema e la temperatura del chip, quando la lettura del sensore è disponibile, insieme allo stato del motore e all'avanzamento dell'elaborazione. Queste informazioni mi permettono di tenere sotto controllo il Mac durante le registrazioni più lunghe; vengono usate in tempo reale nell'interfaccia, senza essere raccolte come metriche di ricerca."
  - title:
      en: "Result"
      it: "Risultato"
    body:
      en: "Completed in October 2026, silvIA is a personal application I use for local transcription. The result is a single workflow that brings together audio import, transcription, speaker separation, and resource monitoring. It turns my original goal into a working tool: keeping control of recordings and their processing, with business meetings as the main use case that inspired the project."
      it: "Completata a ottobre 2026, silvIA è un'applicazione personale che utilizzo per la trascrizione locale. Il risultato è un unico flusso che riunisce importazione dell'audio, trascrizione, separazione degli interlocutori e monitoraggio delle risorse. L'idea iniziale è diventata uno strumento funzionante: mantenere il controllo sulle registrazioni e sulla loro elaborazione, con le riunioni aziendali come principale scenario che ha ispirato il progetto."
---
