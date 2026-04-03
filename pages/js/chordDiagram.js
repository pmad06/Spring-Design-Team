// ─────────────────────────────────────────────
//  js/chordDiagram.js  —  Piano chord renderer
//
//  Shared between song.js (side panel) and chords.js (dictionary).
//  Depends on: data.js  (for CHORD_DIAGRAMS)
//    const svg = buildChordSVG("Am", 16, 18); // custom string/fret gap
// ─────────────────────────────────────────────

// Map note names to piano key positions (0 = C, 1 = C#, 2 = D, etc.)
const noteToKeyMap = {
  'C': 0, 'C#': 1, 'Db': 1,
  'D': 2, 'D#': 3, 'Eb': 3,
  'E': 4,
  'F': 5, 'F#': 6, 'Gb': 6,
  'G': 7, 'G#': 8, 'Ab': 8,
  'A': 9, 'A#': 10, 'Bb': 10,
  'B': 11
};

function getKeyPosition(note) {
  const match = note.match(/^([A-G]#?b?)(\d+)$/);
  if (!match) return null;

  const noteName = match[1];
  const octave = parseInt(match[2], 10);
  const baseKey = noteToKeyMap[noteName];
  if (baseKey === undefined) return null;

  return baseKey + (octave - 4) * 12;
}

// piano: C4..B5
function buildPianoChordSVG(chordName, width = 300) {
  const diagram = CHORD_DIAGRAMS[chordName];
  if (!diagram || !diagram.notes) {
    return `<div style="text-align:center;padding:16px;border:1px solid #ccc;border-radius:8px;">
      <strong>${chordName}</strong><br>Chord not found
    </div>`;
  }

  const notes = diagram.notes;
  const semitoneNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const keys = [];
  const octave = 4; // only displaying one octave (C4..B4) for simplicity, but can be extended to multiple octaves if needed
  {
    for (let si = 0; si < 12; si++) {
      const name = semitoneNames[si];
      const isBlack = name.includes('#');
      const midi = si;
      keys.push({ note: `${name}${octave}`, midi, isBlack });
    }
  }

  const whiteKeys = keys.filter(k => !k.isBlack);
  const whiteKeyCount = whiteKeys.length; // 7 white keys in an octave
  const viewWidth = Number(width) || 300;
  const whiteKeyWidth = viewWidth / whiteKeyCount;
  const whiteKeyHeight = 80;
  const blackKeyHeight = 50;
  const blackKeyWidth = whiteKeyWidth * 0.6;

  const activeMidis = new Set();
  notes.forEach(note => {
    let normalized = note
    .toUpperCase()
    .replace('DB', 'C#')
    .replace('EB', 'D#')
    .replace('GB', 'F#')
    .replace('AB', 'G#')
    .replace('BB', 'A#');

    normalized = normalized.replace(/\d+/g, ''); // remove octave if present

    let pos = noteToKeyMap[normalized] ?? null;

    if (pos !== null && pos >= 0 && pos < 12) activeMidis.add(pos);
  });

  const svgHeight = whiteKeyHeight + 30;
  let svg = `<svg width="100%" height="${svgHeight}" viewBox="0 0 ${viewWidth} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

  // White keys (base layer)
  let whiteIndex = 0;
  const labelY = whiteKeyHeight + 22;
  keys.forEach(k => {
    if (!k.isBlack) {
      const x = whiteIndex * whiteKeyWidth;
      const active = activeMidis.has(k.midi);
      const fill = active ? '#8b7aaa' : '#fff';
      svg += `<rect x="${x}" y="20" width="${whiteKeyWidth}" height="${whiteKeyHeight}" fill="${fill}" stroke="#000" stroke-width="1"/>`;
      whiteIndex += 1;
    }
  });

  // Black keys (top layer) - positioned between white keys
  whiteIndex = 0;
  keys.forEach(k => {
    if (k.isBlack) {
      const x = whiteIndex * whiteKeyWidth - (blackKeyWidth / 2);
      const active = activeMidis.has(k.midi);
      const fill = active ? '#8b7aaa' : '#000';
      svg += `<rect x="${x}" y="20" width="${blackKeyWidth}" height="${blackKeyHeight}" fill="${fill}" stroke="#000" stroke-width="1"/>`;
    } else {
      whiteIndex++;
    }
  });

  svg += '</svg>';
  return svg;
}

function buildChordDictionarySVG(chordName, width = 180) {
  const diagram = CHORD_DIAGRAMS[chordName];
  if (!diagram || !diagram.notes) {
    return `<div style="text-align:center;padding:12px;border:1px solid #ccc;border-radius:8px;background:#fafafa;">${chordName}<br>Chord not found</div>`;
  }

  // Use a compact piano display only; no duplicate chord label text.
  return `<div style="text-align:center;padding:10px;border:1px solid #ddd;border-radius:8px;background:#fff;min-width:${width}px;">
    ${buildPianoChordSVG(chordName, width)}
  </div>`;
}

// backward compatibility for existing calls in dictionary
function buildChordSVG(chordName, width = 180) {
  return buildChordDictionarySVG(chordName, width);
}

