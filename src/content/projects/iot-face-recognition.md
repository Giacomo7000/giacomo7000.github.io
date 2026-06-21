---
title:
  en: "IoT Face Recognition System"
  it: "Sistema IoT di riconoscimento facciale"
subtitle:
  en: "A Raspberry Pi system for local face-recognition processing and access-log management."
  it: "Un sistema con Raspberry Pi per riconoscimento facciale locale e gestione dei log di accesso."
summary:
  en: "A Bachelor IoT project using Raspberry Pi, PiCamera, local processing, socket communication, MySQL storage, encryption, and data visualization."
  it: "Un progetto triennale IoT con Raspberry Pi, PiCamera, elaborazione locale, socket, storage MySQL, crittografia e visualizzazione dati."
year: "July 2024"
date: "2024-07"
order: 600
status:
  en: "Completed"
  it: "Completato"
role:
  en: "University group project"
  it: "Progetto universitario di gruppo"
technologies: ["Raspberry Pi", "Python", "PiCamera", "MySQL", "Sockets", "Cryptography"]
featured: false
cover: "/assets/projects/iot-face-recognition-v2.svg"
sections:
  - title:
      en: "Context"
      it: "Contesto"
    body:
      en: "The project implemented a level-2 IoT architecture: a Raspberry Pi node handled image capture and face-recognition processing, while a PC server stored and displayed the access logs."
      it: "Il progetto ha implementato un'architettura IoT di livello 2: un nodo Raspberry Pi gestiva acquisizione immagini e riconoscimento facciale, mentre un server PC salvava e mostrava i log di accesso."
  - title:
      en: "Technical approach"
      it: "Approccio tecnico"
    body:
      en: "To reduce network traffic and keep the design practical, recognition was performed locally on the Raspberry Pi. Only the resulting events were sent through sockets to a MySQL-backed server, where they could be stored, inspected, and visualized."
      it: "Per ridurre il traffico di rete e mantenere il sistema pratico, il riconoscimento veniva eseguito localmente sul Raspberry Pi. Solo gli eventi risultanti venivano inviati tramite socket a un server con MySQL, dove potevano essere salvati, consultati e visualizzati."
---
