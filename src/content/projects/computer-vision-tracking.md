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
technologies: ["Python", "OpenCV", "Haar Cascade", "Computer vision", "EMA smoothing"]
featured: false
cover: "/assets/projects/computer-vision.svg"
sections:
  - title:
      en: "Problem"
      it: "Problema"
    body:
      en: "When a person moves toward or away from a camera, their face changes size in the frame. The project explored how to maintain a consistent subject size without manual zoom control."
      it: "Quando una persona si avvicina o si allontana dalla camera, il volto cambia dimensione nel frame. Il progetto ha esplorato come mantenere una dimensione coerente senza controllo manuale dello zoom."
  - title:
      en: "Technical approach"
      it: "Approccio tecnico"
    body:
      en: "The implementation used OpenCV face detection, a persistent reference face size, bounded digital zoom, crop-and-resize logic, and exponential moving average smoothing to avoid abrupt transitions."
      it: "L'implementazione ha usato rilevamento volti con OpenCV, una dimensione di riferimento persistente, zoom digitale limitato, logica di crop e resize e smoothing EMA per evitare transizioni brusche."
  - title:
      en: "Learning"
      it: "Apprendimento"
    body:
      en: "The project made the trade-off between lightweight classical computer vision and heavier deep learning methods concrete, especially for IoT or drone-like constraints."
      it: "Il progetto ha reso concreto il trade-off tra computer vision classica leggera e metodi deep learning piu' pesanti, soprattutto in vincoli simili a IoT o droni."
---
