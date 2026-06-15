# Type-roles atlas — Soft Editorial

Phase 4b scene worker reads this when text outside §6 components is needed (hero displays, ledes, pill rows, CTA buttons, …). Workflow: pick role by id → paste the CSS rule into scene `<style>` with `s<N>-` prefix on the class names → wrap content using the prefixed class. Family tokens (`var(--font-*)`) resolve to brand DNA at scene-render time.

## type-role: display

- family: display · px: 168–232 · weight: 500
- leading: 0.92 · tracking: -0.02em · case: sentence
- purpose: cover-scale headline (Cormorant 500 roman, generous measure)

```css
.t-trole-display {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(96px, 12vw, 232px);
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: var(--ink);
}

.t-trole-display em {
  font-weight: 400;
  font-style: italic;
}
```

Sample:

```html
<div class="t-trole-display">A canvas where teams design <em>together</em>.</div>
```

## type-role: title

- family: display · px: 140–188 · weight: 500
- leading: 0.95 · tracking: -0.015em · case: sentence
- purpose: section / chapter title at near-cover scale

```css
.t-trole-title {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(96px, 10vw, 188px);
  line-height: 0.95;
  letter-spacing: -0.015em;
  color: var(--ink);
}
```

Sample:

```html
<div class="t-trole-title">Chapter one</div>
```

## type-role: numeral-hero

- family: display · px: 240–320 · weight: 500
- leading: 0.9 · tracking: -0.02em · case: sentence
- purpose: featured hero numeral inside a span-two stat card

```css
.t-trole-numeral-hero {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(160px, 16vw, 320px);
  line-height: 0.9;
  letter-spacing: -0.02em;
  color: var(--ink);
}
```

Sample:

```html
<div class="t-trole-numeral-hero">4M</div>
```

## type-role: section-headline

- family: display · px: 72–96 · weight: 500
- leading: 0.98 · tracking: -0.01em · case: sentence
- purpose: workhorse section headline — chart / comparison / analysis

```css
.t-trole-section-headline {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(56px, 5vw, 96px);
  line-height: 0.98;
  letter-spacing: -0.01em;
  color: var(--ink);
}
```

Sample:

```html
<div class="t-trole-section-headline">A quieter way to work</div>
```

## type-role: quote-text

- family: display · px: 72–88 · weight: 500
- leading: 1.05 · tracking: -0.01em · case: sentence
- purpose: pull-quote body — Cormorant 500 at section scale

```css
.t-trole-quote-text {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(56px, 5vw, 88px);
  line-height: 1.05;
  letter-spacing: -0.01em;
  color: var(--ink);
  max-width: 22ch;
}
```

Sample:

```html
<div class="t-trole-quote-text">Considered, unhurried, careful.</div>
```

## type-role: card-headline

- family: display · px: 56–72 · weight: 500
- leading: 1 · tracking: -0.01em · case: sentence
- purpose: headline filling the head of a card or panel

```css
.t-trole-card-headline {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(44px, 4vw, 72px);
  line-height: 1;
  letter-spacing: -0.01em;
  color: var(--ink);
}
```

Sample:

```html
<div class="t-trole-card-headline">Field notes</div>
```

## type-role: opener

- family: script · px: 44–56 · weight: 500
- leading: 1.1 · tracking: 0 · case: sentence
- purpose: italic opener paragraph for long-form reads (Cormorant italic 500)

```css
.t-trole-opener {
  font-family: var(--font-script);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(32px, 3.2vw, 56px);
  line-height: 1.1;
  color: var(--ink);
  max-width: 32ch;
}
```

Sample:

```html
<div class="t-trole-opener">A short italic opening, set in the same serif, lighter on the page.</div>
```

## type-role: drop-cap

- family: display · px: 108–132 · weight: 500
- leading: 0.85 · tracking: 0 · case: sentence
- purpose: drop cap opening a long-form paragraph (Cormorant 500, floated)

```css
.t-trole-drop-cap {
  float: left;
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(88px, 9vw, 132px);
  line-height: 0.85;
  color: var(--ink);
  padding: 8px 14px 0 0;
}
```

Sample:

```html
<p class="t-trole-body"><span class="t-trole-drop-cap">F</span>or the editorial register the drop cap is the system's most distinctive moment — 132px Cormorant Garamond medium, floated left, the paragraph body wrapping warmly around it.</p>
```

## type-role: numeral-step

- family: script · px: 64–92 · weight: 500
- leading: 0.9 · tracking: 0 · case: lower
- purpose: italic lowercase roman numeral step ordinal (i. ii. iii. iv. v.)

```css
.t-trole-numeral-step {
  font-family: var(--font-script);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(56px, 6vw, 92px);
  line-height: 0.9;
  text-transform: lowercase;
  color: var(--ink);
}
```

Sample:

```html
<div class="t-trole-numeral-step">iii.</div>
```

## type-role: kicker

- family: script · px: 32–38 · weight: 400
- leading: 1.2 · tracking: 0 · case: sentence
- purpose: italic kicker above a cover headline (Cormorant italic 400)

```css
.t-trole-kicker {
  font-family: var(--font-script);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(32px, 2.4vw, 38px);
  line-height: 1.2;
  color: color-mix(in srgb, var(--ink) 72%, transparent);
}
```

Sample:

```html
<div class="t-trole-kicker">— vol. iii, an essay on calm</div>
```

## type-role: marker

- family: script · px: 26–32 · weight: 400
- leading: 1.3 · tracking: 0 · case: sentence
- purpose: small italic ornamental marker (sign-offs, edition labels)

```css
.t-trole-marker {
  font-family: var(--font-script);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(26px, 2vw, 32px);
  line-height: 1.3;
  color: color-mix(in srgb, var(--ink) 60%, transparent);
}
```

Sample:

```html
<div class="t-trole-marker">— filed under field notes</div>
```

## type-role: eyebrow

- family: body · px: 26–34 · weight: 400
- leading: 1.2 · tracking: -0.005em · case: sentence
- purpose: plain Work Sans eyebrow at top-left chrome (NEVER uppercase, NEVER italic)

```css
.t-trole-eyebrow {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: clamp(26px, 1.9vw, 34px);
  line-height: 1.2;
  letter-spacing: -0.005em;
  color: var(--ink);
}
```

Sample:

```html
<div class="t-trole-eyebrow">Section · The quiet field</div>
```

## type-role: page-marker

- family: script · px: 26–32 · weight: 400
- leading: 1 · tracking: 0 · case: sentence
- purpose: italic serif page numeral at top-right chrome (Cormorant italic 400, ink-soft)

```css
.t-trole-page-marker {
  font-family: var(--font-script);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(26px, 1.7vw, 32px);
  line-height: 1;
  color: color-mix(in srgb, var(--ink) 55%, transparent);
}
```

Sample:

```html
<div class="t-trole-page-marker">iv</div>
```
