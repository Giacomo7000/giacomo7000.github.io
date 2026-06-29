export const site = {
  name: "Giacomo Mariuzza",
  role: {
    en: "AI Developer and Technical Analyst",
    it: "AI Developer e Technical Analyst"
  },
  email: "giacomo.mariuzza@outlook.it",
  emailLabel: "giacomo.mariuzza [at] outlook.it",
  linkedin: "https://www.linkedin.com/in/giacomo-mariuzza-9a7228363/?skipRedirect=true",
  github: "https://github.com/Giacomo7000",
  cvPath: {
    en: "/cv/CV_Giacomo_Mariuzza_english.pdf",
    it: "/cv/CV_Giacomo_Mariuzza_italiano.pdf"
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
