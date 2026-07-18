# Silver Lining of Hope — Website

Redesigned website for **Silver Lining of Hope, Inc** (silverliningofhope.com),
an Indiana 501(c)(3) (EIN 39-2169099) providing free investigative research
and advocacy for families of missing persons, unsolved homicides, and
unidentified persons, and for domestic violence survivors.

Built with [Astro](https://astro.build) as a fully static site, designed for
deployment to **Cloudflare Pages** (the redesign brief's Option B).

## Quick start

```sh
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the build
```

Deploy: point Cloudflare Pages at this repo with build command `npm run build`
and output directory `dist`. The `public/_redirects` file provides the 301
map from old Wix URLs.

## Structure

```
src/
  styles/tokens.css     # design tokens: palette, type scale, spacing
  styles/global.css     # base styles + components (buttons, cards, forms…)
  layouts/BaseLayout    # <head>, SEO meta, org JSON-LD, header/footer/quick-exit
  layouts/PageLayout    # inner-page shell: breadcrumbs + single H1 + lining
  components/           # Header (nav), Footer, Breadcrumbs, QuickExit
  content/blog/         # blog posts as Markdown (title/author/date/category)
  pages/                # one file per route, kebab-case URLs
docs/
  SEO.md                # title/meta table, schema inventory, CWV checklist
  ACCESSIBILITY.md      # trauma-informed + WCAG 2.1 AA checklist
  BEFORE-AFTER.md       # what changed from the Wix site and why
```

## Before launch — content that needs real data

1. **Photos** — `public/images/leslie-hope-houston.jpg` is a placeholder;
   replace with the real photo. Add team/event photos with descriptive
   filenames and alt text (see `docs/SEO.md`).
2. **Board page** — fill in real board member names and bios.
3. **In the news** — replace placeholder press mentions with real coverage.
4. **Events** — replace the placeholder event.
5. **Donate** — embed the real Zeffy/Givebutter/Donorbox form
   (see the comment in `src/pages/donate.astro`).
6. **Forms** — the contact and tip forms post to `/api/contact` and
   `/api/tip`; wire these to a privacy-respecting backend (e.g. Cloudflare
   Pages Functions + email, with IP logging disabled for tips).
7. **Social links** — update `sameAs` URLs in `BaseLayout.astro`.
8. **Redirects** — verify every old Wix slug against the live site and
   extend `public/_redirects`.
