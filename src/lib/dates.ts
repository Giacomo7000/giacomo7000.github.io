import type { Lang } from "@data/site";
import { localize } from "@lib/i18n";

export const months = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  it: [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre"
  ]
} as const;

const englishMonthIndex = new Map(months.en.map((month, index) => [month.toLowerCase(), index]));

export function formatMonthYear(value: string, lang: Lang) {
  const match = value.match(/^(\d{4})-(\d{2})$/);
  if (!match) return translateMonthYearLabel(value, lang);

  const year = match[1];
  const monthIndex = Number(match[2]) - 1;
  const month = months[lang][monthIndex];
  return month ? `${month} ${year}` : year;
}

export function translateMonthYearLabel(value: string, lang: Lang) {
  const match = value.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (!match) return value;

  const monthIndex = englishMonthIndex.get(match[1].toLowerCase());
  if (monthIndex === undefined) return value;
  return `${months[lang][monthIndex]} ${match[2]}`;
}

export function formatProjectDate(data: { date?: string; year: string }, lang: Lang) {
  return data.date ? formatMonthYear(data.date, lang) : translateMonthYearLabel(data.year, lang);
}

export function formatArchiveDate(data: { date: string; dateLabel?: { en: string; it: string } }, lang: Lang) {
  if (data.dateLabel) return localize(data.dateLabel, lang);

  const [year, month, day] = data.date.split("-").map(Number);
  const monthName = months[lang][month - 1];
  if (!year || !monthName || !day) return data.date;
  if (lang === "en") return `${monthName} ${day}, ${year}`;
  return `${day} ${monthName} ${year}`;
}
