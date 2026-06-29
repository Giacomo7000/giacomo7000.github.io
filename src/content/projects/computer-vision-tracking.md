---
title:
  en: "Computer Vision Tracking"
  it: "Tracking in Computer Vision"
subtitle:
  en: "Face detection with digital zoom and people tracking with a moving camera."
  it: "Rilevamento volti con zoom digitale e tracking di persone con telecamera mobile."
summary:
  en: "A university computer vision project focused on real-time detection, dynamic digital zoom, smoothing, and mobile-camera tracking."
  it: "Un progetto universitario di computer vision su rilevamento in tempo reale, zoom digitale dinamico, smoothing e tracking con camera mobile."
year: "December 2025"
date: "2025-12"
order: 720
status:
  en: "Completed"
  it: "Completato"
role:
  en: "University project"
  it: "Progetto universitario"
technologies: ["Python", "OpenCV", "Haar Cascade", "YOLOv8", "EMA Smoothing", "Multiprocessing", "RTSP", "Hardware control (SIYI SDK)"]
featured: false
cover: "/assets/projects/computer-vision.png"
sections:
  - title:
      en: "Problem"
      it: "Problema"
    body:
      en: "Two distinct problems related to real-time visual tracking. The first: maintaining a constant face size in the frame when a person moves closer or farther away, without manual zoom control. The second, more complex one: making a mobile gimbal camera automatically follow a person, keeping them centered without the system freezing under inference load."
      it: "Due problemi distinti legati al tracking visivo in tempo reale. Il primo: mantenere una dimensione costante del volto nel frame quando la persona si avvicina o si allontana, senza controllo manuale dello zoom. Il secondo, più complesso: far inseguire automaticamente una persona a una telecamera gimbal mobile, mantenendola centrata senza che il sistema si blocchi sotto il carico dell'inferenza."
  - title:
      en: "Technical approach"
      it: "Approccio tecnico"
    body:
      en: "For the first problem I used a Haar Cascade classifier (OpenCV), with a persistent reference size, digital zoom clamped between 0.5x and 4x, and EMA smoothing to avoid abrupt transitions. For the second I used YOLOv8 for people detection, but the first monolithic prototype froze for 5-10 seconds every time it detected someone, collapsing from 25 to 2-3 FPS. I isolated the cause in the backpressure between video capture and inference, and redesigned the system with three separate processes (capture, inference, gimbal control) communicating through RAM disk, with rate limiting at 15Hz and a 90px dead zone on gimbal commands."
      it: "Per il primo problema ho usato un classificatore Haar Cascade (OpenCV), con una dimensione di riferimento persistente, zoom digitale clampato tra 0.5x e 4x, e smoothing EMA per evitare transizioni brusche. Per il secondo ho usato YOLOv8 per il rilevamento persone — ma il primo prototipo monolitico si bloccava 5-10 secondi ogni volta che rilevava qualcuno, crollando da 25 a 2-3 FPS. Ho isolato la causa nel backpressure tra acquisizione video e inferenza, e ho riprogettato il sistema con tre processi separati (acquisizione, inferenza, controllo gimbal) comunicanti tramite RAM disk, con rate limiting a 15Hz e una dead zone di 90px sui comandi al gimbal."
  - title:
      en: "Learning"
      it: "Apprendimento"
    body:
      en: "The project made me approach the same theme, real-time visual tracking, from two opposite angles. In the first case I deliberately chose a classical method for energy efficiency, thinking about IoT- or drone-like constraints. In the second, where accuracy mattered more, I had to solve problems typical of a deep learning system in production: the jump from 2-3 to 25+ FPS did not come from optimizing code, but from rethinking the architecture. It was a practical demonstration that, in real-time systems, architecture matters more than local optimization."
      it: "Il progetto mi ha fatto affrontare lo stesso tema — tracking visivo in tempo reale — da due angolazioni opposte. Nel primo caso ho scelto consapevolmente un metodo classico per l'efficienza energetica, pensando a vincoli simili a IoT o drone. Nel secondo, dove contava più l'accuratezza, ho dovuto risolvere i problemi tipici di un sistema deep learning in produzione: il salto da 2-3 a 25+ FPS non è arrivato ottimizzando il codice, ma ripensando l'architettura. È stata la dimostrazione pratica che, nei sistemi real-time, l'architettura conta più dell'ottimizzazione locale."
---
