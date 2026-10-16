# Giacomo Mariuzza Portfolio

This repository contains the source code for Giacomo Mariuzza's bilingual personal portfolio, published at `giacomo7000.github.io`.

The site presents projects, archive entries, professional background, contact links, and downloadable CVs in English and Italian. It is built as a static Astro website, so content is generated at build time and deployed as static HTML, CSS, JavaScript, images, and PDFs.

## Technical Overview

The project uses Astro with TypeScript and Astro Content Collections. Pages are rendered from structured Markdown frontmatter and reusable `.astro` components. This keeps the public content editable as data while preserving a consistent visual structure across project pages, archive pages, cards, navigation, and layout.

The website supports:

- English and Italian page variants.
- Project and archive detail pages generated from content collections.
- Static routing for GitHub Pages.
- Light/dark theme support.
- Public assets for project covers, archive images, branding, favicon, and CV PDFs.
- Optional analytics through public environment variables.

## Reading catalog

Edit `src/data/books.json` to maintain the catalog at `/reading` and `/it/reading`.
Each entry needs `title`, `author`, `cover` (a path under `public/`), and a unique
numeric `position`. Keep entries in reading order, oldest first; the page sorts a
copy by descending position so the most recent book appears first. No reading
dates are inferred. Add a new entry with the next position; neither page needs
editing. Titles and authors are shared verbatim across both languages; UI labels
live in `src/lib/i18n.ts`.

Keep `isbn`, `publisher`, `language`, `source` (the edition's catalog page), and
`coverSource` (the original image URL) with each entry to make edition and image
provenance reviewable. Assets in `public/assets/books/` are local WebP copies,
resized without enlargement or cropping. Cover artwork belongs to the respective
publishers and rights holders; it is not covered by a repository license.

Without the owner's ISBNs, cover variants cannot be confirmed against their
physical copies. The selected editions are documented in the data: Penguin
English Library for Orwell, Planet Manga volume 1 for Pluto, Mondadori Vivavoce
for Faggin, and Sceptre's English paperback for Dobelli. With the owner's approval,
Mister Facebook uses Barbera's authentic cover and L'alchimista uses the Italian
La nave di Teseo edition (ISBN 9788893443029). Mister Facebook's available original
is only 200 × 298 pixels: `object-fit: scale-down` preserves native sharpness
without enlarging it inside the uniform frame. Replace it with a larger original
when available. A `null` cover is supported for future entries whose artwork is
not yet available, using a localized neutral placeholder.

## Project Structure

```text
src/
  components/        Reusable UI blocks such as cards, footer, header, timeline, and detail views
  content/
    projects/        Project entries rendered into /projects and /it/projects
    archive/         Archive entries rendered into /archive and /it/archive
  data/              Site-wide constants such as profile links, email, CV paths, and navigation items
  layouts/           Base HTML layout shared by all pages
  lib/               Localization, content loading, search data, and date formatting helpers
  pages/             Astro routes for EN and IT pages
  styles/            Global CSS, theme variables, layout primitives, and shared UI classes

public/
  assets/            Public images, SVGs, project covers, archive media, and brand files
  cv/                Public downloadable CV PDFs
  favicon/           Favicon assets
```

## Content Model

Projects and archive entries are stored as Markdown files with structured frontmatter. Each entry contains localized `en` and `it` fields for titles, summaries, labels, and body sections.

Project entries include data such as:

- title and subtitle
- summary
- year and optional date
- role, status, and technologies
- cover image
- optional external links
- detail sections

Archive entries include:

- title and summary
- date and optional visible date label
- location
- tags
- optional gallery and external links
- detail sections

Ordering is controlled by the `order` field. Higher values appear first in listings and home-page selections.

## Localization

The site uses separate English and Italian routes:

- English pages are served from root paths such as `/`, `/projects`, and `/archive`.
- Italian pages are served from `/it`, `/it/projects`, and `/it/archive`.

Reusable helpers in `src/lib/i18n.ts` select localized strings, build localized paths, and connect EN/IT page variants. Shared content files provide both languages in the same entry so each project or archive item stays synchronized.

## Assets And CVs

Public files live under `public/`, which is copied into the final static build. Project images and archive images are referenced through absolute public paths such as `/assets/projects/...`.

The CV links are language-specific:

```text
public/cv/CV_Giacomo_Mariuzza_english.pdf
public/cv/CV_Giacomo_Mariuzza_italiano.pdf
```

Private source materials, drafts, raw documents, datasets, and unapproved client details are intentionally kept outside `public/` so they are not shipped with the website.

## Build And Deployment

The site can be built locally with Astro:

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

Production deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`. On pushes to `main`, the workflow builds Astro's static `dist/` output and publishes it through GitHub Pages.

## Environment Variables

Optional public environment variables are documented in `.env.example`.

Supported values:

```text
PUBLIC_SITE_URL
PUBLIC_PLAUSIBLE_DOMAIN
PUBLIC_UMAMI_WEBSITE_ID
PUBLIC_UMAMI_SCRIPT_URL
```

Analytics scripts render only when their public variables are configured.
