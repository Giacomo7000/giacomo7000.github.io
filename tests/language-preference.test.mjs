import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const script = readFileSync(new URL("../src/scripts/language-preference.js", import.meta.url), "utf8");

function visit({ path = "/", languages = ["en-US"], language = "en-US", saved, blockedStorage = false, navigator, blockedHistory = false } = {}) {
  const redirects = [];
  const storage = new Map(saved === undefined ? [] : [["language", saved]]);
  let visibleUrl = "https://example.com" + path;
  const state = { retained: true };
  const window = {
    location: { href: visibleUrl, replace: (target) => redirects.push(target) },
    navigator: navigator ?? { languages, language },
    localStorage: {
      getItem(key) { if (blockedStorage) throw new Error("Storage blocked"); return storage.get(key) ?? null; },
      setItem(key, value) { if (blockedStorage) throw new Error("Storage blocked"); storage.set(key, value); }
    },
    history: {
      state,
      replaceState(nextState, title, target) {
        if (blockedHistory) throw new Error("History blocked");
        assert.equal(nextState, state);
        visibleUrl = "https://example.com" + target;
      }
    }
  };
  vm.runInNewContext(script, { window, URL });
  return { redirects, storage, visibleUrl };
}

test("Italian device variants select Italian without saving an automatic preference", () => {
  for (const language of ["it", "it-IT", "it-CH", "IT-it"]) {
    const result = visit({ languages: [language] });
    assert.deepEqual(result.redirects, ["/it"]);
    assert.equal(result.storage.has("language"), false);
  }
});

test("the primary browser language wins over secondary preferences", () => {
  assert.deepEqual(visit({ languages: ["en-US", "it-IT"] }).redirects, []);
  assert.deepEqual(visit({ languages: ["fr-FR", "it-IT"] }).redirects, []);
});

test("navigator.language is a fallback when the language list is missing or empty", () => {
  assert.deepEqual(visit({ languages: [], language: "it-IT" }).redirects, ["/it"]);
  assert.deepEqual(visit({ navigator: { language: "it-IT" } }).redirects, ["/it"]);
});

test("unknown, missing, malformed, and inaccessible device languages default to English", () => {
  for (const language of ["en", "de-DE", "fr", "", undefined, 42, null]) {
    assert.deepEqual(visit({ navigator: { languages: [language], language } }).redirects, []);
  }
  const navigator = { get languages() { throw new Error("Unavailable"); } };
  assert.deepEqual(visit({ navigator }).redirects, []);
});

test("a saved manual choice wins over the device language", () => {
  assert.deepEqual(visit({ saved: "en", languages: ["it-IT"] }).redirects, []);
  assert.deepEqual(visit({ saved: "it", languages: ["en-US"] }).redirects, ["/it"]);
  assert.deepEqual(visit({ saved: "invalid", languages: ["it-IT"] }).redirects, ["/it"]);
});

test("explicit switching wins over storage and device, and saves the choice", () => {
  const english = visit({ path: "/?lang=en", saved: "it", languages: ["it-IT"] });
  assert.deepEqual(english.redirects, []);
  assert.equal(english.storage.get("language"), "en");
  assert.equal(english.visibleUrl, "https://example.com/");
  const italian = visit({ path: "/it/about?lang=it", saved: "en" });
  assert.deepEqual(italian.redirects, []);
  assert.equal(italian.storage.get("language"), "it");
  assert.equal(italian.visibleUrl, "https://example.com/it/about");
});

test("blocked storage does not prevent detection or undo an explicit English switch", () => {
  assert.deepEqual(visit({ blockedStorage: true, languages: ["it-IT"] }).redirects, ["/it"]);
  assert.deepEqual(visit({ path: "/?lang=en", blockedStorage: true, languages: ["it-IT"] }).redirects, []);
});

test("redirects retain query strings and fragments, including index.html entry points", () => {
  assert.deepEqual(visit({ path: "/index.html?from=cv#main-content", languages: ["it-IT"] }).redirects, ["/it?from=cv#main-content"]);
  const result = visit({ path: "/?from=cv&lang=it#main-content" });
  assert.deepEqual(result.redirects, ["/it?from=cv#main-content"]);
  assert.equal(result.visibleUrl, "https://example.com/?from=cv#main-content");
});

test("history errors do not prevent language selection", () => {
  assert.deepEqual(visit({ path: "/?lang=it", blockedHistory: true }).redirects, ["/it"]);
});

test("explicit routes and missing pages never auto-redirect or loop", () => {
  for (const path of ["/it", "/it/", "/about", "/projects/applied-ai-work/", "/it/about", "/404", "/404.html", "/missing-page"]) {
    assert.deepEqual(visit({ path, languages: ["it-IT"], saved: "it" }).redirects, []);
  }
});

test("invalid query preferences cannot replace a valid saved choice", () => {
  const result = visit({ path: "/?lang=fr", saved: "en", languages: ["it-IT"] });
  assert.deepEqual(result.redirects, []);
  assert.equal(result.storage.get("language"), "en");
});
