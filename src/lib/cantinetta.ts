import data from "@data/cantinetta.json";
import type { Lang } from "@data/site";
import { t } from "@lib/i18n";

export type MuseumText = { it: string; en: string };
export type MuseumPhoto = {
  src: string;
  width: number;
  height: number;
  alt: MuseumText;
  author: string;
  title: string;
  source: string;
  original: string;
  license: string;
  licenseUrl: string;
  changes: MuseumText;
};
export type MuseumDevice = {
  id: string;
  name: MuseumText;
  room: string;
  order: number;
  introduced: string | null;
  highlights: MuseumText;
  description: MuseumText;
  sources: { label: string; url: string }[];
  confirmation: MuseumText | null;
  photo: MuseumPhoto | null;
  photoNote: MuseumText;
};

export const museum = data as {
  rooms: { id: string; name: MuseumText }[];
  devices: MuseumDevice[];
};

export function museumDate(value: string | null, lang: Lang) {
  if (!value) return t(lang, "museumUnconfirmed");
  if (/^\d{4}$/.test(value)) return value;
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(lang === "it" ? "it-IT" : "en-GB", {
    month: "long", year: "numeric", timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}
