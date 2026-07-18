# Trauma-Informed UX & Accessibility Checklist

Target: WCAG 2.1 AA, plus the trauma-informed requirements from the
redesign brief. Status reflects what is implemented in this codebase.

## Trauma-informed requirements

- [x] **Quick Exit / Safety Exit** — persistent pill button on every page
      (`QuickExit.astro`); clicking it (or pressing Escape twice) replaces
      the page with a neutral Google weather search via
      `location.replace()` so Back doesn't return here. Hidden in print.
- [x] **Internet safety note** near DV resources
      (`/get-help/resources#internet-safety`), linked from the footer, with
      honest limits (Quick Exit can't erase history; monitored devices).
- [x] **Crisis resources one click from every page** — 911, DV Hotline,
      988, NamUs, NCMEC, Charley Project links live in the sitewide footer.
- [x] **Minimal forms** — contact form: 3 required fields; tip form: 2
      required fields, identity optional and clearly marked; explicit
      privacy/anonymity language beside every submit button; no CAPTCHAs.
- [x] **Plain language** — help pages written in short sentences,
      second person, no jargon (APRA/NCIC/NamUs explained on first use).
- [x] **No sensationalism** — no crime-scene imagery anywhere; victims'
      photos only in the respectful `.memorial-frame` treatment.

## WCAG 2.1 AA

- [x] **Contrast ≥ 4.5:1** — body text `#232b38` on `#f7f5f1` (13.3:1);
      silver `#c9ced6` on ink `#1b2432` (9.2:1); gold used as *text* only
      in its dark variant `#8a6a2f` on light (4.6:1) or `#c9a15a` on
      ink-deep (7.0:1); teal links `#2e5e5e` on paper (6.8:1). Buttons:
      ink-deep on gold (8.9:1).
- [x] **Visible keyboard focus** — global 3px gold-deep `:focus-visible`
      outline with offset.
- [x] **44px touch targets** — `--tap: 44px` min-height on buttons, nav
      links, submenu items, form inputs, FAQ summaries, quick exit.
- [x] **Semantic landmarks** — one `<header>`, `<nav aria-label>`,
      `<main id="main">`, `<footer>` per page; sections labelled via
      `aria-labelledby`.
- [x] **Skip-to-content link** — first focusable element on every page.
- [x] **One H1 per page** — owned by the layout; heading levels descend
      logically (no decorative H5/H6).
- [x] **`prefers-reduced-motion`** — all transitions/animations collapse
      to ~0ms; fade-on-scroll only applies under
      `(prefers-reduced-motion: no-preference)`; no parallax, no autoplay.
- [x] **Keyboard-operable nav** — disclosure buttons with
      `aria-expanded`/`aria-haspopup`, Escape closes menus, mobile toggle
      is a real button with `aria-controls`.
- [x] **Forms** — every input has a visible `<label>`, hints are inside
      labels (announced together), no placeholder-as-label.
- [x] **Images** — meaningful alt on content images; `aria-hidden` on
      decorative SVGs and the lining divider.
- [x] **`aria-current="page"`** on active nav items; breadcrumb nav with
      `aria-label="Breadcrumb"`.

## To verify before launch (manual pass)

- [ ] Screen reader walkthrough (NVDA + VoiceOver) of home, families, and
      tip form.
- [ ] Keyboard-only journey: reach Donate and Quick Exit from every page
      template.
- [ ] Zoom to 200% and 400% — no loss of content or horizontal scroll.
- [ ] Re-run contrast checks on any new colors/photos added with real
      content.
- [ ] Reading-level pass (target ~8th grade) on help pages after final
      copy edits.
