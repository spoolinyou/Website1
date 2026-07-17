# Before / After — What Changed and Why

Summary of the redesign against the site audit's six problem areas.

## 1. Navigation

**Before:** 3-level mega-menu; inconsistent labels ("H-Homicides",
"O- Outreach & Advocacy"); individual case pages and external petitions in
primary nav; `copy-of-families` URLs.

**After:** 6 items + persistent Donate button, max one level of dropdown.
Pillars renamed to plain names under Programs. Case pages and petitions
moved out of primary nav (petitions live on the Legislative Advocacy page,
which links out to live petition URLs). Mobile nav is a single accessible
disclosure; Donate is full-width at the top of the mobile menu.

## 2. Headings

**Before:** multiple H1s per page, decorative H5/H6, pillar descriptions
crammed into heading blocks with ✨, inconsistent casing.

**After:** one H1 per page, owned by the layout so it can't be duplicated.
Logical H2→H3 hierarchy. Sentence case everywhere. "Decorative" emphasis is
now handled by the design system (eyebrow labels, the pillar letter, the
silver-lining rule) instead of heading tags.

## 3. Redundant content

**Before:** two Vision sections and overlapping mission text on the
homepage; wall-of-text sections; stray zero-width characters.

**After:** the homepage carries one tight mission expression (hero +
founder story); full Mission/Vision/Commitments live once, on the About
page. All copy rewritten in plain language with real paragraphs and lists.

## 4. Images

**Before:** raw CDN filenames, missing alt text, blurry crops, inconsistent
card sizes.

**After:** descriptive kebab-case filenames required (documented in
`docs/SEO.md`), meaningful alt on content images, empty/hidden alt on
decorative ones, explicit width/height and lazy loading, and a consistent
`.memorial-frame` treatment for victims' photos. Cards sit on a fixed grid
with equal sizing.

## 5. Visual system

**Before:** no consistent palette, type scale, spacing, or button styles;
lost Donate CTA.

**After:** a tokenized system (`src/styles/tokens.css`): ink-navy base,
silver neutrals, warm paper, one gold accent; Fraunces + Public Sans on a
12–64px scale; 4px spacing scale; defined button/card/form components. The
Donate CTA is high-contrast gold and persistent in the header. Signature
element: the hairline silver-to-gold "lining" gradient used as the section
divider and under every H1 — the one memorable thing, used consistently.

## 6. SEO

**Before:** generic shared title/description, no structured data, no
keyword targeting, messy URLs.

**After:** unique title + meta description per page mapped to one primary
keyword each; NonprofitOrganization / BreadcrumbList / Article / FAQPage /
Event / DonateAction JSON-LD; canonical URLs, sitemap, robots.txt; clean
kebab-case URLs with a 301 map from every known Wix URL. Full inventory in
`docs/SEO.md`.

## New capabilities that didn't exist before

- **Quick Exit button** with double-Escape shortcut — a standard safety
  feature for DV-adjacent sites.
- Crisis hotlines in the sitewide footer (one click from anywhere).
- Anonymous tip form with genuinely minimal fields and explicit
  anonymity language.
- Blog on Markdown content collections with author/date/category and
  related-post links.
- Static architecture: no page builder overhead, ~zero JS, fast LCP,
  free hosting on Cloudflare Pages.
