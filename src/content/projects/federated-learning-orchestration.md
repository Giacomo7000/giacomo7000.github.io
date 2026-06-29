---
title:
  en: "Distributed AI Orchestration with Federated Learning"
  it: "Orchestrazione AI distribuita con Federated Learning"
subtitle:
  en: "An Erlang/Python orchestration prototype for cross-silo federated-learning rounds."
  it: "Un prototipo Erlang/Python per orchestrare round di federated learning cross-silo."
summary:
  en: "A Master project where I implemented the orchestration layer for cross-silo Federated Learning: a 3-node Erlang full-mesh cluster, Python workers through Erlang Ports/ErlPort, Bully-based aggregator election, round barriers, seed distribution, and dummy latent-vector exchange."
  it: "Un progetto magistrale in cui ho implementato il layer di orchestrazione per il Federated Learning cross-silo: cluster Erlang full-mesh a 3 nodi, worker Python tramite Erlang Ports/ErlPort, elezione dell'aggregatore con Bully Algorithm, barriere di round, distribuzione del seed e scambio di vettori latenti dummy."
year: "May 2026"
date: "2026-05"
order: 840
status:
  en: "Completed"
  it: "Completato"
role:
  en: "University project"
  it: "Progetto universitario"
technologies: ["Erlang", "Python", "ErlPort", "BEAM", "Federated Learning", "Bully Algorithm", "Fault tolerance"]
featured: false
cover: "/assets/projects/federated-learning.svg"
sections:
  - title:
      en: "Context"
      it: "Contesto"
    body:
      en: "The project targeted cross-silo Federated Learning for healthcare organizations, where a small set of trusted silos coordinate training without moving raw patient data. The design scope considered 2 to 100 organizations, but the implemented university prototype focused on orchestration rather than training a real clinical model."
      it: "Il progetto era orientato al Federated Learning cross-silo in ambito sanitario, dove un insieme ridotto di silos affidabili coordina l'addestramento senza spostare dati grezzi dei pazienti. Il perimetro progettuale considerava da 2 a 100 organizzazioni, ma il prototipo universitario implementato si e' concentrato sull'orchestrazione, non sull'addestramento di un modello clinico reale."
  - title:
      en: "What I built"
      it: "Cosa ho costruito"
    body:
      en: "I implemented the Basic Tier: an Erlang/BEAM full-mesh cluster with 3 simulated nodes, a metric-based Bully Algorithm for dynamic aggregator election, asynchronous Barrier Synchronization for round completion, shared seed distribution, and Python worker integration through OS ports/ErlPort. The Python side represented stateless ML workers; the prototype exchanged dummy latent vectors instead of real patient data."
      it: "Ho implementato il Basic Tier: un cluster Erlang/BEAM full-mesh con 3 nodi simulati, Bully Algorithm basato su metriche per eleggere dinamicamente l'aggregatore, Barrier Synchronization asincrona per chiudere i round, distribuzione del seed condiviso e integrazione dei worker Python tramite OS ports/ErlPort. Il lato Python rappresentava worker ML stateless; il prototipo scambiava vettori latenti dummy invece di dati reali dei pazienti."
  - title:
      en: "Measured scope"
      it: "Perimetro misurabile"
    body:
      en: "The report records a validated Erlang-Python proof of concept through Ports and a 3-node simulated cluster. It does not report convergence time, model accuracy, throughput benchmarks, a real dataset, or a real model run. TinyLlama integration was listed as an Advanced Tier extension, so I do not claim it as implemented work."
      it: "Il report documenta una proof of concept Erlang-Python validata tramite Ports e un cluster simulato a 3 nodi. Non riporta tempo di convergenza, accuratezza del modello, benchmark di throughput, dataset reale o run di un modello reale. L'integrazione di TinyLlama era indicata come estensione Advanced Tier, quindi non la presento come lavoro implementato."
  - title:
      en: "Fault tolerance"
      it: "Fault tolerance"
    body:
      en: "The recovery policy handles an aggregator crash or network partition during aggregation with Round Abort: partial gradients are discarded, a new Bully election runs, a new seed is agreed, and a clean round starts. The design also describes a liveness threshold such as 80% of active nodes for aggregation, but the report does not state a tested number of failed nodes tolerated by the 3-node prototype."
      it: "La policy di recupero gestisce crash dell'aggregatore o partizioni di rete durante l'aggregazione con Round Abort: i gradienti parziali vengono scartati, parte una nuova elezione Bully, viene concordato un nuovo seed e inizia un round pulito. Il design descrive anche una soglia di liveness, ad esempio l'80% dei nodi attivi per aggregare, ma il report non indica un numero testato di nodi guasti tollerati dal prototipo a 3 nodi."
  - title:
      en: "Learning"
      it: "Apprendimento"
    body:
      en: "The main learning was that Federated Learning is not only a model-training problem. In cross-silo settings, the hard part becomes distributed coordination: leader election, deterministic round startup, late or failed participants, bridge failure isolation, and deciding when aborting a round is safer than trying to recover partial state."
      it: "L'apprendimento principale e' stato che il Federated Learning non e' solo un problema di addestramento del modello. In scenari cross-silo, la parte difficile diventa il coordinamento distribuito: elezione del leader, avvio deterministico dei round, partecipanti lenti o guasti, isolamento dei crash nel bridge e scelta di quando abortire un round sia piu' sicuro che recuperare stato parziale."
---
