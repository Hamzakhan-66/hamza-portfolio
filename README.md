# Hamza Khan — Portfolio (React + Tailwind CSS)

A React + Tailwind CSS rebuild of the original static portfolio, redesigned
into an editorial/luxury visual identity. All content — copy, projects,
skills, education, certificates, contact details, images, resume, and
certificate PDFs — is carried over **exactly** from the original HTML site;
only the technology, color system, and motion language changed.

## Stack

- **React 18** — component-based UI
- **Tailwind CSS** — utility-first styling, themed to the 5-color palette below
- **Vite** (Node.js) — dev server + production bundler

There's no backend here on purpose — a static portfolio doesn't need one.
Node.js is used exactly where it earns its place: as the build/dev tooling
(Vite). The contact form works the same way it did in the original site (a
front-end demo with no email service wired up); swapping in a real backend
is a drop-in change to `src/components/Contact.jsx`'s `handleSend` function.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build locally
```

## Color system

`tailwind.config.js` defines five first-class Tailwind colors — no ad-hoc
hex values anywhere in components, no blue/purple/yellow/cyan/neon:

| Token       | Hex       | Role                                      |
|-------------|-----------|--------------------------------------------|
| `ivory`     | `#F4F0E8` | primary background (Warm Ivory)            |
| `stone`     | `#C9C2B6` | secondary neutral — borders, atmosphere (Soft Stone) |
| `olive`     | `#737A63` | quiet secondary accent (Muted Olive)        |
| `burgundy`  | `#641C28` | dominant accent — CTAs, hovers, highlights (Wine Burgundy) |
| `charcoal`  | `#171717` | primary ink (Deep Charcoal)                 |

Each has tonal variants (`ivory-soft`, `stone-light`/`stone-border`/
`stone-line`, `olive-dark`, `burgundy-dark`, `charcoal-soft`/`charcoal-muted`/
`charcoal-muted2`) used consistently across every component.

## Project structure

```
src/
  data/site.js            ALL content lives here, extracted verbatim from
                           the original HTML. Edit copy/projects/skills/etc.
                           only in this one file.
  hooks/
    useReveal.js            IntersectionObserver "settle-in" — content is
                             ALWAYS visible by default (opacity never 0);
                             only a small transform animates. See "Content
                             visibility" below.
    useTilt.js                3D card tilt + cursor spotlight (project,
                             certificate, education cards; skill chips)
    useMagnetic.js            magnetic pull for buttons
    useImageTilt.js           small, restrained cursor tilt for the hero
                             portrait — event-driven, no continuous loop
    useLayeredSeparation.js   drives the About image's collage — two photo
                             layers drift apart based on cursor position
  components/               one component per section, plus shared pieces
                           (Reveal, Stagger, SectionHeader, SplitText,
                           ProjectCard, SkillChip, EducationCard,
                           CertificateCard)
public/assets/             the real images, certificate PDFs, and resume —
                           copied unchanged from the original site
```

## Motion language

The animation system deliberately avoids a "3D demo" feel — no continuous
parallax loops, no floating/drifting decoration, no spinning objects. Every
effect is either scroll-triggered once, hover-triggered, or a direct,
restrained response to the cursor:

- **Text reveal** — `SplitText` masks each word behind `overflow: hidden`
  and slides it up into place; used for the hero name and every section
  heading.
- **Hero portrait — signature interaction #1.** The photo sits in an
  organic, asymmetric frame (`clip-path`-free — pure `border-radius`,
  cheap) a few pixels off a tinted duplicate layer beneath it. A small,
  event-driven cursor response (`useImageTilt`, no `requestAnimationFrame`)
  shifts the top layer within its mask, revealing more of the layer below
  at the opposite edge.
- **About portrait — signature interaction #2.** A distinct treatment: two
  offset, slightly rotated crops of the same portrait, like loose prints on
  a light table. Moving the cursor across the composition lets the layers
  drift apart and realign (`useLayeredSeparation`).
- **Project cards — signature interaction #3.** The "ink reveal": hovering
  expands a burgundy "case study" face from the *exact point the cursor
  entered the card*, using `clip-path: circle()` driven by the same
  pointer tracking that powers the card's tilt.
- **Everything else** — magnetic buttons, an ink-underline that draws in
  on hover, a nav pill that morphs between active links, thin borders that
  turn burgundy on hover.

All pointer-driven effects are gated behind `(hover: hover) and
(pointer: fine)`, so touch devices skip them automatically. Everything
respects `prefers-reduced-motion`.

## Content visibility

An earlier iteration of this portfolio (pre-React) had a bug where content
depended on JavaScript successfully adding a class before becoming visible
— if that JS ever failed to run, whole sections disappeared. `useReveal` is
deliberately built so content is `opacity: 1` from the first render; reveal
animations only ever animate a small `transform` on top of content that was
already there. No hook or utility in this codebase sets `opacity: 0` or
`display: none` on real content, ever.

## Content changes

None. Every string in `src/data/site.js` was extracted directly from the
original `index.html` — no rewriting, no invented details. The only two
non-content technical fixes: the contact-info email/phone links in the
original HTML were missing their `mailto:`/`tel:` protocol prefixes (so
they didn't actually work as links); those now use `mailto:` and `tel:` so
they function, with the visible text completely unchanged.
