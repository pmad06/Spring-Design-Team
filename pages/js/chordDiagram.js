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

