import { site } from "./site";

// Both routes share one layout and keep their copy together.
export const about = {
  it: {
    title: "Chi sono",
    description: "Il percorso, il metodo e gli interessi di Giacomo Mariuzza, tra sviluppo AI e consulenza tecnica.",
    headline: ["Ho iniziato amando la tecnologia.", "Ho continuato costruendola."],
    introduction: "Sono Giacomo Mariuzza. Il mio lavoro unisce sviluppo e consulenza su soluzioni AI: sviluppo software, comprendo le esigenze dei clienti e collaboro con i team tecnici per trasformare sfide complesse in soluzioni concrete basate sull’AI.",
    belief: "Mi piacciono le idee che diventano strumenti utili. E i dettagli che li rendono semplici da usare.",
    now: "In questo momento",
    work: "Lavoro",
    study: "Studio",
    workDetail: site.role.it,
    studyDetail: "Magistrale · doppio titolo con Klagenfurt",
    journey: "Il percorso",
    journeyTitle: "Dalla curiosità alla pratica.",
    journeyIntro: "La mia passione per l’informatica nasce anche da Apple: dal modo in cui tecnologia, design ed esperienza utente diventano una cosa sola. È un’attenzione che cerco di portare in quello che faccio.",
    timelineOrder: "Dal presente agli inizi",
    method: "Il metodo",
    methodTitle: "Capire. Costruire. Migliorare.",
    methodIntro: "Mi piace mettere le idee alla prova, comprenderne i limiti e farle diventare qualcosa di utile.",
    principles: [
      { title: "Chiarezza", body: "Parto dalle persone e dalle loro esigenze. Metto a fuoco requisiti, vincoli e prossimi passi, prima di scegliere la tecnologia." },
      { title: "Concretezza", body: "Porto presto le idee in una demo, un prototipo o uno strumento da provare. Qualcosa di tangibile, da valutare e migliorare insieme." },
      { title: "Curiosità", body: "Continuo a studiare e sperimentare tra AI, cybersecurity e design. Cerco connessioni che possano trovare un’applicazione reale." }
    ],
    focus: "Gli interessi",
    focusTitle: "Quello che mi fa sperimentare.",
    interests: [
      { label: "Intelligenza artificiale", title: "AI applicata. Anche in locale.", body: "Dalle automazioni all’analisi di dati, documenti e immagini, fino alle interfacce conversazionali. Mi interessa soprattutto integrare i Local LLM: modelli linguistici che possono funzionare direttamente in locale.", tags: ["Local LLM", "Automazione", "Sistemi AI"] },
      { label: "Product design", title: "La cura dell’esperienza.", body: "Interfacce essenziali, dettagli curati e interazioni fluide, soprattutto in ambiente iOS. Per me, l’eleganza di un software passa anche da quanto risulta naturale usarlo.", tags: ["iOS", "Interfacce", "Esperienza utente"] }
    ],
    next: "Dalle idee ai progetti.",
    nextIntro: "Il mio modo di lavorare, messo in pratica."
  },
  en: {
    title: "About",
    description: "The background, approach, and interests of Giacomo Mariuzza, AI Solutions Consultant and AI Developer.",
    headline: ["I started by loving technology.", "I kept going by building it."],
    introduction: "I’m Giacomo Mariuzza. My work combines AI development and solutions consulting: I build software, understand client needs, and collaborate with technical teams to turn complex challenges into practical AI-powered solutions.",
    belief: "I like ideas that become useful tools. And the details that make those tools feel simple to use.",
    now: "Right now",
    work: "Work",
    study: "Study",
    workDetail: site.role.en,
    studyDetail: "Master’s · double degree with Klagenfurt",
    journey: "Journey",
    journeyTitle: "From curiosity to practice.",
    journeyIntro: "Apple helped spark my interest in computer science: the way technology, design, and user experience come together as one. I try to bring that same attention to the experience into my own work.",
    timelineOrder: "From the present to the beginning",
    method: "Approach",
    methodTitle: "Understand. Build. Improve.",
    methodIntro: "I like putting ideas to the test, understanding their limits, and turning them into something useful.",
    principles: [
      { title: "Clarity", body: "I start with people and their needs. I clarify requirements, constraints, and next steps before choosing the technology." },
      { title: "Practicality", body: "I turn ideas into a demo, a prototype, or a tool early on. Something tangible that we can test, evaluate, and improve together." },
      { title: "Curiosity", body: "I keep studying and experimenting across AI, cybersecurity, and design, looking for connections that can find a real application." }
    ],
    focus: "Interests",
    focusTitle: "What keeps me experimenting.",
    interests: [
      { label: "Artificial intelligence", title: "Applied AI. Local, too.", body: "From automation to data, document, and image analysis, through to conversational interfaces. I’m particularly interested in integrating Local LLMs: language models that can run directly on local hardware.", tags: ["Local LLMs", "Automation", "AI systems"] },
      { label: "Product design", title: "Care for the experience.", body: "Essential interfaces, thoughtful details, and fluid interactions, especially on iOS. To me, the elegance of software also comes from how natural it feels to use.", tags: ["iOS", "Interfaces", "User experience"] }
    ],
    next: "From ideas to projects.",
    nextIntro: "My way of working, put into practice."
  }
};
