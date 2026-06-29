---
title:
  en: "Modern forecasting deep dive"
  it: "Approfondimento forecasting"
summary:
  en: "A technical note on zero-shot forecasting and Chronos-2, focused on how a universal model can predict time series without task-specific training."
  it: "Una nota tecnica su zero-shot forecasting e Chronos-2, concentrata su come un modello universale possa prevedere serie temporali senza training specifico per ogni task."
date: "2025-12-29"
dateLabel:
  en: "October 23 - December 29"
  it: "23 Ottobre - 29 Dicembre"
location: "Research note"
order: 690
tags: ["Forecasting", "Time series", "Machine learning"]
links:
  - label:
      en: "Read paper"
      it: "Leggi il paper"
    url: "https://arxiv.org/pdf/2510.15821"
sections:
  - title:
      en: "Focus"
      it: "Focus"
    body:
      en: "I studied modern forecasting through the idea of a universal zero-shot model: instead of training a separate model for each dataset, Chronos-2 uses in-context learning and synthetic data to handle univariate, multivariate, and covariate forecasting tasks."
      it: "Ho approfondito il forecasting moderno attraverso l'idea di un modello universale zero-shot: invece di addestrare un modello diverso per ogni dataset, Chronos-2 usa in-context learning e dati sintetici per gestire task univariati, multivariati e con covariate."
  - title:
      en: "Technical notes"
      it: "Note tecniche"
    body:
      en: "The pipeline covered tokenization of past values and future known covariates, missing-data masks, robust scaling with standardization and hyperbolic arcsine, timestamp features, patch embeddings, self-attention, Time Attention with RoPE, Group Attention with ICL, and a Quantile Head trained with Quantile Loss over 21 quantiles."
      it: "La pipeline copriva tokenizzazione dei valori passati e delle covariate future note, maschere per dati mancanti, scaling robusto con standardizzazione e arcoseno iperbolico, feature temporali, patch embedding, self-attention, Time Attention con RoPE, Group Attention con ICL e una Quantile Head addestrata con Quantile Loss su 21 quantili."
  - title:
      en: "Evaluation"
      it: "Valutazione"
    body:
      en: "The evaluation referenced Fev-Bench with 100 tasks, Gift-Eval with 97 long-term tasks, and the Chronos Benchmark with 27 short-history tasks. Metrics included Average Win Rate, Skill Score, Median Runtime, leakage and failure checks, WQL, and MASE, with the strongest gains reported on univariate and covariate tasks."
      it: "La valutazione citava Fev-Bench con 100 task, Gift-Eval con 97 task long-term e il Chronos Benchmark con 27 task a storico breve. Le metriche includevano Average Win Rate, Skill Score, Median Runtime, controlli su leakage e failure, WQL e MASE, con i miglioramenti piu' forti sui task univariati e con covariate."
---
