// ─────────────────────────────────────────────
<<<<<<< Updated upstream
//  js/chordDiagram.js  —  SVG fretboard renderer
=======
>>>>>>> Stashed changes
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
  for (let octave = 4; octave <= 5; octave++) {
    for (let si = 0; si < 12; si++) {
      const name = semitoneNames[si];
      const isBlack = name.includes('#');
      const midi = (octave - 4) * 12 + si;
      keys.push({ note: `${name}${octave}`, midi, isBlack });
    }
  }

  const whiteKeys = keys.filter(k => !k.isBlack);
  const whiteKeyCount = whiteKeys.length; // 14
  const whiteKeyWidth = width / whiteKeyCount;
  const whiteKeyHeight = 80;
  const blackKeyHeight = 50;
  const blackKeyWidth = whiteKeyWidth * 0.6;

  const noteSet = new Set(notes.map(n => n.toUpperCase()));
  const activeMidis = new Set();
  notes.forEach(note => {
    const pos = getKeyPosition(note);
    if (pos !== null && pos >= 0 && pos < 24) activeMidis.add(pos);
  });

  let svg = `<svg width="${width}" height="${whiteKeyHeight + 30}" viewBox="0 0 ${width} ${whiteKeyHeight + 30}" xmlns="http://www.w3.org/2000/svg">`;

  // White keys
  let whiteIndex = 0;
  keys.forEach(k => {
    if (!k.isBlack) {
      const x = whiteIndex * whiteKeyWidth;
      const active = activeMidis.has(k.midi);
      const fill = active ? '#c8e6c9' : '#fff';
      const stroke = '#000';
      svg += `<rect x="${x}" y="20" width="${whiteKeyWidth}" height="${whiteKeyHeight}" fill="${fill}" stroke="${stroke}" stroke-width="1"/>`;
      if (active) {
        svg += `<text x="${x + whiteKeyWidth / 2}" y="55" text-anchor="middle" font-family="Arial" font-size="11" fill="#2e7d32" font-weight="bold">${k.note}</text>`;
      }
      whiteIndex += 1;
    }
  });

  // Black keys
  let whitePos = 0;
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.isBlack) {
      const prevWhiteIndex = whitePos - 1;
      const nextWhiteIndex = whitePos;
      const x = (prevWhiteIndex * whiteKeyWidth) + (whiteKeyWidth * 0.75) - blackKeyWidth / 2;
      const active = activeMidis.has(key.midi);
      svg += `<rect x="${x}" y="20" width="${blackKeyWidth}" height="${blackKeyHeight}" fill="${active ? '#2e7d32' : '#000'}" stroke="#000" stroke-width="1"/>`;
      if (active) {
        svg += `<text x="${x + blackKeyWidth / 2}" y="40" text-anchor="middle" font-family="Arial" font-size="9" fill="#fff">${key.note}</text>`;
      }
    } else {
      whitePos++;
    }
  }

  svg += `<text x="${width / 2}" y="15" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold" fill="#000">${chordName}</text>`;
  svg += '</svg>';

  return svg;
}

// function buildChordDictionarySVG(chordName, width = 180) {
//   const diagram = CHORD_DIAGRAMS[chordName];
//   if (!diagram || !diagram.notes) {
//     return `<div style="text-align:center;padding:12px;border:1px solid #ccc;border-radius:8px;background:#fafafa;">${chordName}<br>Chord not found</div>`;
//   }

//   return `<div style="text-align:center;padding:10px;border:1px solid #ddd;border-radius:8px;background:#fff;min-width:${width}px;">
//     <div style="font-weight:bold;margin-bottom:6px;">${chordName}</div>
//     <div style="font-size:0.75rem;color:#888;">(select song for piano view)</div>
//   </div>`;
// }

// backward compatibility for existing calls in dictionary
function buildChordSVG(chordName, width = 180) {
  return buildChordDictionarySVG(chordName, width);
}

<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
