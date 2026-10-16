import type { Lang } from "@data/site";

export const labels = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    archive: "Archive",
    contact: "Contact",
    reading: "Reading",
    readingTitle: "My reading corner",
    readingDescription: "A collection of books I've read that inspired me, sparked new ideas, or offered fresh perspectives.",
    coverPending: "Cover to be confirmed",
    coverCredit: "Cover artwork © respective publishers and rights holders.",
    mainNavigation: "Main navigation",
    changeLanguage: "Switch to Italian",
    toggleTheme: "Toggle light and dark mode",
    skipToContent: "Skip to content",
    viewProjects: "View projects",
    contactMe: "Contact me",
    viewCv: "View CV",
    featuredProjects: "Featured projects",
    latestArchive: "Latest archive",
    readMore: "Read more",
    allProjects: "All projects",
    search: "Search",
    searchPlaceholder: "Search projects and archive",
    noResults: "No matching entries.",
    role: "Role",
    status: "Status",
    year: "Year",
    technologies: "Technologies",
    links: "Links",
    location: "Location",
    contactIntro: "For professional conversations, collaborations, or AI-related project discussions, email is the best starting point.",
    timeline: "Timeline",
    howIWork: "How I work",
    principles: "Principles",
    education: "Education",
    currentWork: "Current work",
    interests: "Technical interests",
    backProjects: "Back to projects",
    backArchive: "Back to archive",
    notFound: "Page not found",
    notFoundText: "This page may have moved or does not exist yet.",
    goHome: "Go home"
  },
  it: {
    home: "Home",
    about: "Chi sono",
    projects: "Progetti",
    archive: "Archivio",
    contact: "Contatti",
    reading: "Letture",
    readingTitle: "Il mio angolo di lettura",
    readingDescription: "Una raccolta di libri che ho letto e che mi hanno lasciato nuove idee, ispirazione o prospettive diverse.",
    coverPending: "Copertina da confermare",
    coverCredit: "Copertine © rispettivi editori e titolari dei diritti.",
    mainNavigation: "Navigazione principale",
    changeLanguage: "Passa all'inglese",
    toggleTheme: "Cambia tema chiaro o scuro",
    skipToContent: "Vai al contenuto",
    viewProjects: "Vedi progetti",
    contactMe: "Contattami",
    viewCv: "Vedi CV",
    featuredProjects: "Progetti in evidenza",
    latestArchive: "Ultimi dall'archivio",
    readMore: "Leggi",
    allProjects: "Tutti i progetti",
    search: "Cerca",
    searchPlaceholder: "Cerca progetti e archivio",
    noResults: "Nessun risultato.",
    role: "Ruolo",
    status: "Stato",
    year: "Anno",
    technologies: "Tecnologie",
    links: "Link",
    location: "Luogo",
    contactIntro: "Per conversazioni professionali, collaborazioni o progetti legati all'AI, l'email e' il punto di partenza migliore.",
    timeline: "Timeline",
    howIWork: "Metodo",
    principles: "Principi",
    education: "Formazione",
    currentWork: "Lavoro attuale",
    interests: "Interessi tecnici",
    backProjects: "Torna ai progetti",
    backArchive: "Torna all'archivio",
    notFound: "Pagina non trovata",
    notFoundText: "Questa pagina potrebbe essere stata spostata o non esistere ancora.",
    goHome: "Torna alla home"
  }
} as const;

export function t(lang: Lang, key: keyof typeof labels.en) {
  return labels[lang][key];
}

export function localize<T extends { en: string; it: string }>(value: T, lang: Lang) {
  return value[lang];
}

export function localizedPath(lang: Lang, path: string) {
  if (lang === "en") return path;
  if (path === "/") return "/it";
  return `/it${path}`;
}

export function alternatePath(lang: Lang, path: string) {
  if (lang === "en") {
    if (path === "/") return "/it";
    return `/it${path}`;
  }
  return path.replace(/^\/it/, "") || "/";
}
