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
technologies: ["Raspberry Pi", "Python", "PiCamera", "MySQL", "Sockets (TCP)", "RSA Encryption", "Computer Vision"]
featured: false
cover: "/assets/projects/iot.png"
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
      en: |-
        To reduce network traffic and keep the system practical, recognition was performed locally on the Raspberry Pi: no raw frames on the network, only the name of the identified person. Recognition is based on facial feature extraction (HOG) followed by a neural network that generates a 128-dimensional embedding for each face, then compares it with a database of known faces. To reduce false positives, the system requires 5 seconds of consecutive recognition before confirming an identity, ignores multiple people detected at the same time, and enforces a 30-second cooldown before registering the same person again.

        Data was encrypted with RSA before being sent through TCP sockets: the server generates a key pair and shares only the public key for encryption, keeping the private key to decrypt incoming data. Accesses were then saved in a MySQL database, with a composite primary key made of name and timestamp to guarantee uniqueness for each log.
      it: |-
        Per ridurre il traffico di rete e mantenere il sistema pratico, il riconoscimento veniva eseguito localmente sul Raspberry Pi, niente frame grezzi sulla rete, solo il nome della persona identificata. Il riconoscimento si basa su un'estrazione di feature facciali (HOG) seguita da una rete neurale che genera un embedding a 128 dimensioni per ogni volto, confrontato poi con un database di volti noti. Per ridurre falsi positivi, il sistema richiede 5 secondi di riconoscimento consecutivo prima di confermare un'identità, ignora più persone rilevate contemporaneamente, e impone un cooldown di 30 secondi prima di registrare di nuovo la stessa persona.

        I dati venivano cifrati con RSA prima dell'invio tramite socket TCP: il server genera una coppia di chiavi e condivide solo quella pubblica per la cifratura, mantenendo quella privata per decifrare in arrivo. Gli accessi venivano poi salvati in un database MySQL, con una chiave primaria composta da nome e timestamp per garantire l'unicità di ogni log.
  - title:
      en: "Learning"
      it: "Apprendimento"
    body:
      en: "An attempt to use Grafana for real-time visualization did not succeed because of database integration difficulties. We documented it openly instead of hiding it, and moved to notebook-based visualization with Matplotlib and Seaborn. The project also made us reflect on the real limits of the system: recognition based on 2D images can be fooled by a simple photo, a problem that would require a depth sensor (for example LiDAR) to be solved in a real security context."
      it: "Un tentativo di usare Grafana per la visualizzazione in tempo reale non è andato a buon fine per difficoltà di integrazione col database, l'abbiamo documentato apertamente invece di nasconderlo, e siamo passati a una visualizzazione via notebook con Matplotlib e Seaborn. Il progetto ci ha anche fatto riflettere sui limiti reali del sistema: un riconoscimento basato su immagini 2D può essere ingannato da una semplice foto, un problema che richiederebbe un sensore di profondità (es. LiDAR) per essere risolto in un contesto di sicurezza reale."
---
