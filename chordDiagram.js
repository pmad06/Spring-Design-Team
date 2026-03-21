// ─────────────────────────────────────────────
//  js/chordDiagram.js  —  SVG fretboard renderer
//
//  Shared between song.js (side panel) and chords.js (dictionary).
//  Depends on: data.js  (for CHORD_DIAGRAMS)
//
//  Usage:
//    const svg = buildChordSVG("Am");        // returns SVG string
//    const svg = buildChordSVG("Am", 16, 18); // custom string/fret gap
// ─────────────────────────────────────────────

function buildChordSVG(name, stringGap = 18, fretGap = 20) {
  const diag = CHORD_DIAGRAMS[name];
  if (!diag) return `<p style="font-size:0.78rem;color:var(--text3);">Diagram coming soon</p>`;

  const STRINGS = 6, FRETS = 4;
  const PL = stringGap + 4;    // left padding (room for mute/open markers)
  const PT = fretGap + 6;      // top padding
  const R  = Math.floor(stringGap * 0.38);
  const W  = PL + stringGap * (STRINGS - 1) + PL;
  const H  = PT + fretGap * FRETS + 12;

  let s = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`;

  // nut
  s += `<rect x="${PL}" y="${PT - 4}" width="${stringGap * (STRINGS - 1)}" height="4" rx="2" fill="var(--teal)"/>`;

  // fret lines
  for (let f = 1; f <= FRETS; f++)
    s += `<line x1="${PL}" y1="${PT + f * fretGap}" x2="${PL + stringGap * (STRINGS - 1)}" y2="${PT + f * fretGap}" stroke="var(--border2)" stroke-width="0.75"/>`;

  // string lines
  for (let i = 0; i < STRINGS; i++)
    s += `<line x1="${PL + i * stringGap}" y1="${PT}" x2="${PL + i * stringGap}" y2="${PT + FRETS * fretGap}" stroke="var(--border2)" stroke-width="0.75"/>`;

  // barre bar
  if (diag.barre)
    s += `<rect x="${PL}" y="${PT + (diag.barre - 0.65) * fretGap}" width="${stringGap * (STRINGS - 1)}" height="${R * 2}" rx="${R}" fill="var(--teal)" opacity="0.88"/>`;

  // finger dots
  diag.fingers.forEach(([str, fret]) => {
    s += `<circle cx="${PL + (str - 1) * stringGap}" cy="${PT + (fret - 0.5) * fretGap}" r="${R}" fill="var(--teal)"/>`;
  });

  // open string markers
  diag.open.forEach(str => {
    s += `<text x="${PL + (str - 1) * stringGap}" y="${PT - 8}" text-anchor="middle" font-size="${stringGap * 0.55}" font-family="monospace" fill="var(--teal)">o</text>`;
  });

  // muted string markers
  diag.mute.forEach(str => {
    s += `<text x="${PL + (str - 1) * stringGap}" y="${PT - 8}" text-anchor="middle" font-size="${stringGap * 0.55}" font-family="monospace" fill="var(--text3)">×</text>`;
  });

  s += `</svg>`;
  return s;
}
