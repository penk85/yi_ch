# Composition hints — Soft Editorial

**Surface & elevation**

- Slide background is always cream — `var(--brand-canvas, var(--paper-anchor))`.
  Pastel fills appear only as card fills, never as a slide background. The single
  exception is a full-bleed closer scene (one per video at most) that may fill with
  `var(--brand-primary)` for a single quiet "moment".
- Default card fill is `var(--surface-card)` (translucent white at 55%). The cream
  bleeds through and _is_ the depth signal — no shadow, no border. Reach for a
  pastel fill (any of `--brand-primary` / `--brand-secondary` / `--brand-accent`)
  only when a card needs color or status.
- No drop shadows. No glow. No blur halos. Depth comes from translucency and the
  generous rounded form.
- Cards never stack on cards. If a layout needs visual hierarchy, use size and
  color — never z-stacking.

**Brand color placement (role contract)**

- All three brand colors are interchangeable card fills — soft-editorial does not
  assign a fixed `primary→hero` role. The brand-primary is the warmest moment, the
  brand-secondary is the brightest, the brand-accent is the most neutral; but any
  scene may rotate them as needed. The system's voice is "we have a palette of
  pastels", not "we have a hero color".
- **Text stays in `var(--ink)` on every surface, including all pastel cards.**
  Never invert to white on pastel. This is non-negotiable — inverted text breaks
  the editorial calm.
- Two-color limit per scene: at most two of the three brand colors visible at
  once. Three brand colors on one scene reads as a color-wheel demo, not as
  composition.

**Typography discipline**

- One typeface family per headline. Mix weight (500 → 400) and style (roman →
  italic) inside the headline, not faces. Italic `<em>` is the system's emphasis.
- **Left-align by default**, ragged right. Centered headlines are reserved for
  the full-bleed closer and the pull-quote — the system's two "moment" scenes.
- Drop caps appear at most once per scene, only on long-form opener paragraphs
  (132px Cormorant Garamond medium, line-height 0.85). A scene with two drop caps
  is broken.
- Roman-numeral step ordinals (`i.`, `ii.`, `iii.`, `iv.`, `v.`) — lowercase
  italic serif. Arabic step numbers break the editorial register.
- Sentence case everywhere. Soft-editorial has no uppercase element — uppercase
  reads as shouting against the Cormorant serif calm.

**Layout & density**

- Card grids: 28–36px gaps between cards, 80px outer slide padding. The cream
  field around and between cards is load-bearing — a layout that crowds cards
  edge-to-edge reads as broken.
- Two strong things per scene maximum. Hierarchy through size and surface color,
  not stacking.
- Card body density inside cards may be medium-high (matrices, dense step grids,
  lengthy quoted text) — the cream-field margin between cards carries the
  breathing.

**Transitions between scenes**

- Default: 400–600ms crossfade with 16–24px upward drift on incoming cards.
- Hold cream as the background across the cut — the cards swap, the field is
  constant. The cream field is the deck's "spine".
- The full-bleed closer scene fades _to_ full-pastel from cream, holds for the
  closer's duration, fades back to cream on exit.
