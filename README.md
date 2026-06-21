# Giacomo Mariuzza Portfolio

Professional bilingual personal website for Giacomo Mariuzza, built with Astro, TypeScript, content collections, static pages, light/dark theme support, and GitHub Pages deployment.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Content

Projects live in:

```text
src/content/projects/
```

Archive entries live in:

```text
src/content/archive/
```

Each content file contains English and Italian fields. Edit those Markdown frontmatter files to update titles, summaries, status, roles, technologies, detail sections, dates, links, and TODO notes.

Project ordering uses the `order` field. Higher numbers appear first, so newer work can be shown before older work.

## Assets

Public assets are under:

```text
public/assets/
public/cv/
```

Private working files outside this site are not part of the public website and must not be edited, moved, renamed, or published directly. Raw PDFs, datasets, archives, internal documents, and confidential client details should stay out of `public/`.

The public CV file used by the site is:

```text
public/cv/giacomo-mariuzza-cv.pdf
```

## Configuration

Copy `.env.example` to `.env` only for local configuration. Do not commit real secrets or private tracking keys.

Supported public environment variables:

```text
PUBLIC_SITE_URL
PUBLIC_PLAUSIBLE_DOMAIN
PUBLIC_UMAMI_WEBSITE_ID
PUBLIC_UMAMI_SCRIPT_URL
PUBLIC_FORMSPREE_ENDPOINT
```

Analytics scripts render only when the relevant public variables are set. The contact form falls back to `mailto:` when `PUBLIC_FORMSPREE_ENDPOINT` is not configured.

## Deployment

GitHub Pages deployment is configured in:

```text
.github/workflows/deploy.yml
```

The workflow builds Astro’s default `dist/` output and deploys on pushes to `main`.

For a user/organization GitHub Pages repository named `<github-username>.github.io`, set repository Pages source to GitHub Actions.

## Current TODOs

- Confirm exact dates for archive entries that currently use a broad year.
- Replace placeholder project links with real public URLs when available.
- Confirm which project screenshots are approved for public use.
- Keep Aipertech/client work generic unless specific public details are explicitly approved.
- Configure Formspree, Plausible, or Umami only when production IDs are available.
