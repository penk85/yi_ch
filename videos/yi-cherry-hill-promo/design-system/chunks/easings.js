const EASE = {
  entry: "power2.out", // soft arrival, no overshoot — "considered, unhurried"
  emphasis: "power2.inOut", // gentle inflection on emphasis beats
  exit: "power2.in", // gentle dismissal
  drift: "sine.inOut", // ambient breath on translucent cards
};
const DUR = {
  snap: 0.18, // even "fast" is unhurried — upper-band snap
  med: 0.5,
  slow: 1.0,
};
// RULE: no overshoot anywhere. back.out / elastic / bounce break the editorial calm.
// RULE: italic-em phrases inside a headline fade in *after* the roman headline lands
//       (DUR.snap delay) — the weight drop is a softening, not an entry beat.
// RULE: drop caps enter on a separate beat from their paragraph (DUR.med delay)
//       so the 132px serif glyph reads as a deliberate ornament, not a stutter.
// RULE: pastel card fills cross-fade between scenes, never hard-cut. Color is a
//       slow tonal shift, not a flash.
// RULE: roman-numeral step ordinals (i. ii. iii.) tween linearly on counter reveals.
//       Eased numerals read as "animated" not "printed".
