---
title:
  en: "From Post to Like: Machine Learning Models for Instagram Engagement Prediction"
  it: "Dal Post al Like: Modelli di Machine Learning per la previsione di engagement su Instagram"
subtitle:
  en: "Bachelor thesis on predicting Instagram post engagement with regression models and neural networks."
  it: "Tesi triennale sulla previsione dell'engagement dei post Instagram con modelli di regressione e reti neurali."
summary:
  en: "A Bachelor thesis project focused on predicting Instagram likes after three days from post metadata, early engagement signals, and influencer-level features."
  it: "Un progetto di tesi triennale sulla previsione dei like Instagram dopo tre giorni, usando metadati del post, segnali iniziali di engagement e caratteristiche dell'influencer."
year: "2023-2024"
order: 660
status:
  en: "Completed"
  it: "Completato"
role:
  en: "Bachelor thesis project"
  it: "Progetto di tesi triennale"
technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Keras", "TensorFlow", "Machine learning"]
featured: false
cover: "/assets/projects/copertina-tesi.png"
sections:
  - title:
      en: "Context"
      it: "Contesto"
    body:
      en: "The thesis explored whether machine learning could estimate the engagement of Instagram posts, focusing on the prediction of likes after three days. The work used a dataset of fashion-influencer posts: the initial CSV contained 1,602 rows and 22 columns across 39 influencers, while the final valid prediction dataset contained 592 rows and 18 columns."
      it: "La tesi ha esplorato se il machine learning potesse stimare l'engagement dei post Instagram, concentrandosi sulla previsione dei like dopo tre giorni. Il lavoro ha usato un dataset di post di fashion influencer: il CSV iniziale conteneva 1.602 righe e 22 colonne su 39 influencer, mentre il dataset finale valido per la previsione conteneva 592 righe e 18 colonne."
  - title:
      en: "What I built"
      it: "Cosa ho fatto"
    body:
      en: "I prepared the dataset, selected predictive features, and compared Linear Regression, Random Forest Regression, and a neural network. The feature set included follower count, number of hashtags, number of mentions, day of the week, and likes after one day; preprocessing included normalization, one-hot encoding, and cyclical encoding for weekdays."
      it: "Ho preparato il dataset, selezionato le feature predittive e confrontato Linear Regression, Random Forest Regression e una rete neurale. Il set di feature includeva numero di follower, numero di hashtag, numero di mention, giorno della settimana e like dopo un giorno; il preprocessing includeva normalizzazione, one-hot encoding e codifica ciclica dei giorni della settimana."
  - title:
      en: "Results"
      it: "Risultati"
    body:
      en: "In the best experiment without additional context data, the neural network achieved MSE 134005.5657, RMSE 366.0677, MAE 197.2542, and R2 0.9463. A second experiment with context data reached R2 0.93 with the neural network, using 3,819 training rows and 670 test rows."
      it: "Nel miglior esperimento senza dati di contesto aggiuntivi, la rete neurale ha ottenuto MSE 134005.5657, RMSE 366.0677, MAE 197.2542 e R2 0.9463. Un secondo esperimento con dati di contesto ha raggiunto R2 0.93 con la rete neurale, usando 3.819 righe di training e 670 righe di test."
  - title:
      en: "Learning"
      it: "Apprendimento"
    body:
      en: "The project connected statistical reasoning, feature engineering, regression metrics, and neural-network experimentation. It also made clear how strongly prediction quality depends on data availability, early engagement signals, and the way the train/test split is designed."
      it: "Il progetto ha collegato ragionamento statistico, feature engineering, metriche di regressione e sperimentazione con reti neurali. Mi ha anche mostrato quanto la qualita' della previsione dipenda dalla disponibilita' dei dati, dai segnali iniziali di engagement e dal modo in cui viene costruito lo split train/test."
---
