export const site = {
  name: "Giacomo Mariuzza",
  role: {
    en: "AI Solutions Consultant | AI Developer",
    it: "AI Solutions Consultant | AI Developer"
  },
  tagline: {
    en: "AI development, solutions consulting, and thoughtful software.",
    it: "Sviluppo AI, consulenza tecnica e software curato."
  },
  description: {
    en: "AI software development and solutions consulting: turning business needs into practical, thoughtfully designed software.",
    it: "Sviluppo software AI e consulenza sulle soluzioni: dalle esigenze aziendali a software concreti e curati nei dettagli."
  },
  email: "giacomo.mariuzza@outlook.it",
  emailLabel: "giacomo.mariuzza [at] outlook.it",
  linkedin: "https://www.linkedin.com/in/giacomo-mariuzza-9a7228363/?skipRedirect=true",
  github: "https://github.com/Giacomo7000",
  cvPath: {
    en: "/cv/CV_Giacomo_Mariuzza_english.pdf?v=20261024",
    it: "/cv/CV_Giacomo_Mariuzza_italiano.pdf?v=20261024"
  },
  url: import.meta.env.PUBLIC_SITE_URL || "https://giacomo7000.github.io"
};

export const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/projects", key: "projects" },
  { href: "/archive", key: "archive" },
  { href: "/contact", key: "contact" }
] as const;

export type Lang = "en" | "it";
