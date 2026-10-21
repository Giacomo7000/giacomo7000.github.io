// Runs inline in <head> so the homepage can choose its language before rendering.
(() => {
  const url = new URL(window.location.href);
  const explicitLanguage = url.searchParams.get("lang");
  let preferredLanguage;

  if (explicitLanguage === "en" || explicitLanguage === "it") {
    preferredLanguage = explicitLanguage;
    try { window.localStorage.setItem("language", preferredLanguage); } catch {}

    // The query parameter also lets manual switching work when storage is blocked.
    url.searchParams.delete("lang");
    try {
      window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
    } catch {}
  } else {
    try { preferredLanguage = window.localStorage.getItem("language"); } catch {}
  }

  // Localized links and the shared GitHub Pages 404 keep their existing routes.
  if (url.pathname !== "/" && url.pathname !== "/index.html") return;

  if (preferredLanguage !== "en" && preferredLanguage !== "it") {
    preferredLanguage = "en";
    try {
      const deviceLanguage = window.navigator.languages?.[0] || window.navigator.language;
      if (typeof deviceLanguage === "string" && deviceLanguage.toLowerCase().split("-")[0] === "it") {
        preferredLanguage = "it";
      }
    } catch {}
  }

  if (preferredLanguage === "it") {
    window.location.replace("/it" + url.search + url.hash);
  }
})();
