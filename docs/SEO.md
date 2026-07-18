# SEO Package — Silver Lining of Hope

## Title & meta description table

Every page has a unique `<title>` (≤60 chars) and meta description (≤155
chars), set in each page's frontmatter. Primary keyword targets per the
audit:

| Page | URL | Primary keyword | Title |
| --- | --- | --- | --- |
| Home | `/` | missing persons and homicide victim advocacy nonprofit | Missing Persons & Homicide Victim Advocacy \| Silver Lining of Hope |
| About | `/about` | — (brand) | About Us \| Silver Lining of Hope |
| Our story | `/about/our-story` | Leslie Hope Houston | Our Story — Leslie 'Hope' Houston \| Silver Lining of Hope |
| Board | `/about/board` | — (trust) | Board of Directors \| Silver Lining of Hope |
| News | `/about/news` | — (trust) | In the News \| Silver Lining of Hope |
| Contact | `/about/contact` | — | Contact Us \| Silver Lining of Hope |
| Programs | `/programs` | pillars of HOPE | Our Programs — The Pillars of HOPE \| Silver Lining of Hope |
| Homicides | `/programs/homicides` | cold case review help for families / hidden homicide advocacy | Cold Case Review Help for Families \| Silver Lining of Hope |
| Outreach | `/programs/outreach-advocacy` | victim family advocacy | Victim Family Outreach & Advocacy \| Silver Lining of Hope |
| Missing persons | `/programs/missing-persons` | missing person case support Indiana | Missing Person Case Support in Indiana \| Silver Lining of Hope |
| Education & reform | `/programs/education-reform` | victims' rights legislation Indiana | Victim Advocacy Education & Legislative Reform \| Silver Lining of Hope |
| The Missing Link | `/programs/the-missing-link` | Indiana missing persons directory/database | The Missing Link — Indiana Missing Persons Directory \| Silver Lining of Hope |
| Get help | `/get-help` | free case support | Get Help — Free Case Support \| Silver Lining of Hope |
| Families | `/get-help/families` | what to do when a loved one goes missing | What to Do When a Loved One Goes Missing \| Silver Lining of Hope |
| Law enforcement | `/get-help/law-enforcement` | investigative research support for law enforcement | Investigative Research Support for Law Enforcement \| Silver Lining of Hope |
| Tip | `/get-help/submit-a-tip` | anonymous tip | Submit an Anonymous Tip \| Silver Lining of Hope |
| Resources | `/get-help/resources` | crisis resources hotlines | Crisis Resources & Hotlines \| Silver Lining of Hope |
| Get involved | `/get-involved` | volunteer advocate | Get Involved — Volunteer & Advocate \| Silver Lining of Hope |
| Volunteer | `/get-involved/volunteer` | volunteer missing persons | Volunteer With Us \| Silver Lining of Hope |
| Events | `/get-involved/events` | events Indiana | Events \| Silver Lining of Hope |
| Speaker | `/get-involved/request-a-speaker` | request a speaker | Request a Speaker \| Silver Lining of Hope |
| Legislative | `/get-involved/legislative-advocacy` | Dom & Davion's Law / Hailey's Law | Legislative Advocacy — Victims' Rights in Indiana \| Silver Lining of Hope |
| Blog | `/blog` | — | Blog — Case Updates & Advocacy News \| Silver Lining of Hope |
| Donate | `/donate` | donate | Donate — Fund Free Case Research \| Silver Lining of Hope |
| Terms | `/terms` | — | Terms & Privacy \| Silver Lining of Hope |

## Structured data (JSON-LD)

- **Sitewide** (`BaseLayout.astro`): `NonprofitOrganization` with `taxID`
  (EIN 39-2169099), `nonprofitStatus: Nonprofit501c3`, address, `areaServed`
  (IN/OH/IL/MI/KY), founder, and `sameAs` social links. **Update the
  `sameAs` URLs to the real social profiles before launch**, and add the
  Google Business Profile URL there once created (local SEO).
- **Inner pages** (`Breadcrumbs.astro`): `BreadcrumbList`.
- **Blog posts** (`blog/[slug].astro`): `Article` with author, dates,
  publisher reference.
- **Families help page**: `FAQPage` mirroring the visible FAQ.
- **Events page**: `Event` per listed event.
- **Donate page**: `DonateAction`.

## Technical checklist

- [x] One H1 per page (enforced by `PageLayout`), logical H2→H3 below.
- [x] Canonical URL on every page.
- [x] XML sitemap via `@astrojs/sitemap` → `/sitemap-index.xml`, referenced
      in `robots.txt` and a `<link rel="sitemap">`.
- [x] 301 redirect map in `public/_redirects` (Cloudflare Pages format) —
      **verify every old Wix slug against the live site before cutover.**
- [x] Kebab-case URLs throughout; `/copy-of-families` and prefixed pillar
      slugs redirected.
- [x] `robots.txt` allowing all, pointing at the sitemap.
- [ ] After launch: submit sitemap in Google Search Console + Bing
      Webmaster Tools; create a Google Business Profile and add its URL to
      the org schema `sameAs`.

## Core Web Vitals

- Fonts are self-hosted variable fonts (`@fontsource`) — no third-party
  font requests; consider adding `<link rel="preload">` for the two font
  files once hashed filenames are known post-build.
- All content images must ship with explicit `width`/`height` and
  `loading="lazy"` when below the fold (the templates already do this).
- Convert photos to WebP/AVIF at export time; keep hero-adjacent images
  preloaded and everything else lazy.
- No third-party scripts, no autoplaying media, minimal JS (nav toggle,
  quick exit, fade-in observer only) — LCP budget < 2.5s mobile is
  realistic on Cloudflare Pages.

## Image naming & alt text

Every image file must be named descriptively (`leslie-hope-houston.jpg`,
`missing-link-isp-district-map.png`) — never CDN strings. Rules used in
templates:

- Content images: meaningful alt describing the person/scene
  (e.g. `alt="Leslie 'Hope' Houston smiling outdoors"`).
- Decorative elements (the lining divider, brand mark): `aria-hidden` /
  empty alt so screen readers skip them.
- Victims' photos always sit in the `.memorial-frame` component for a
  consistent, respectful presentation.

**Action item:** `public/images/leslie-hope-houston.jpg` is a 1×1
placeholder — replace it with the real photo (suggest ~480×600, WebP or
optimized JPEG) before launch.
