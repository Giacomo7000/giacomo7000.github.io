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
technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Keras", "TensorFlow", "Machine Learning"]
featured: true
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
      en: |-
        I prepared the dataset, selected predictive features (follower count, hashtags, mentions, weekday, likes after one day), and compared Linear Regression, Random Forest Regression, and a neural network (two hidden layers with 1024 and 512 nodes, dropout 0.2, Adam optimizer). A key methodological choice was splitting the train and test sets by influencer, not by individual post: a random split would have meant the model already "knew" the style of some influencers present in both training and test. Splitting by influencer means each prediction in the test set concerns an unseen author, a more realistic simulation of real tool usage. I finally built a small graphical interface that lets users enter post data (followers, hashtags, day, likes after one day) and immediately get the model prediction.

        I also tested a hypothesis that turned out to be subtler than expected: integrating the "historical context" of the same influencer's previous posts as additional features. The result was counterintuitive: with the neural network, performance stayed almost unchanged (R² 0.93 versus 0.946), while simpler models became significantly worse. A second experiment, with data augmentation, clearly damaged performance instead: I documented why, since introducing unrealistic placeholder values to simulate missing data confused the model more than it helped.
      it: |-
        Ho preparato il dataset, selezionato le feature predittive (numero di follower, hashtag, mention, giorno della settimana, like dopo un giorno) e confrontato Linear Regression, Random Forest Regression e una rete neurale (due layer nascosti da 1024 e 512 nodi, dropout 0.2, ottimizzatore Adam). Una scelta metodologica chiave è stata dividere train e test set per influencer e non per singolo post: una divisione casuale avrebbe fatto sì che il modello "conoscesse" già lo stile di alcuni influencer presenti sia in training che in test. Dividendo per influencer, invece, ogni previsione nel test set riguarda un autore mai visto, una simulazione più realistica dell'uso reale dello strumento. Ho infine costruito una piccola interfaccia grafica che permette di inserire i dati di un post (follower, hashtag, giorno, like dopo un giorno) e ottenere subito la previsione del modello.

        Ho anche testato un'ipotesi che si è rivelata più sottile del previsto: integrare il "contesto storico" dei post precedenti dello stesso influencer come feature aggiuntive. Il risultato è stato controintuitivo, con la rete neurale le performance sono rimaste quasi invariate (R² 0.93 contro 0.946), mentre sui modelli più semplici sono peggiorate sensibilmente. Un secondo esperimento, con data augmentation, ha invece danneggiato chiaramente le performance: ho documentato il perché, introdurre valori segnaposto non realistici per simulare dati mancanti confondeva il modello più di quanto lo aiutasse.
  - title:
      en: "Results"
      it: "Risultati"
    body:
      en: "In the best experiment, without additional context data, the neural network achieved MSE 134005.57, RMSE 366.07, MAE 197.25, and R² 0.946. The model explains about 95% of the variance in likes received after three days, with an average error of about 197 likes."
      it: "Nel miglior esperimento, senza dati di contesto aggiuntivi, la rete neurale ha ottenuto MSE 134005.57, RMSE 366.07, MAE 197.25 e R² 0.946, il modello spiega circa il 95% della varianza nei like ricevuti dopo tre giorni, con un errore medio di circa 197 like."
  - title:
      en: "Learning"
      it: "Apprendimento"
    body:
      en: "The project connected statistical reasoning, feature engineering, regression metrics, and neural-network experimentation. It also showed me that a negative result is still a result: understanding why an idea does not work, such as historical context or data augmentation, is part of the work as much as finding what does. Working on real engagement data also made me reflect on a less technical side of the problem: a predictive tool like this can help a creator improve their content, but it can also push toward optimization that sacrifices authenticity and spontaneity for performance, a trade-off I tried to keep in mind when framing the project's goals and limits."
      it: "Il progetto ha collegato ragionamento statistico, feature engineering, metriche di regressione e sperimentazione con reti neurali. Mi ha anche mostrato che un risultato negativo è comunque un risultato: capire perché un'idea non funziona, il contesto storico, la data augmentation, è parte del lavoro tanto quanto trovare quella che funziona. Lavorare su dati reali di engagement mi ha anche fatto riflettere su un lato meno tecnico del problema: uno strumento predittivo come questo può aiutare un creator a migliorare i propri contenuti, ma può anche spingere verso un'ottimizzazione che sacrifica autenticità e spontaneità a favore della performance, un trade-off che ho cercato di tenere presente nell'inquadrare obiettivi e limiti del progetto."
---
