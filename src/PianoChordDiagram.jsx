import React from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

const PianoChordDiagram = ({ chordName, width = 300 }) => {
  // Map chord names to MIDI note numbers (C4 = 60, C#4 = 61, etc.)
  const noteMappings = {
    'C': [60, 64, 67],    // C4, E4, G4
    'D': [62, 66, 69],    // D4, F#4, A4
    'Dm': [62, 65, 69],   // D4, F4, A4
    'E': [64, 68, 71],    // E4, G#4, B4
    'Em': [64, 67, 71],   // E4, G4, B4
    'F': [65, 69, 72],    // F4, A4, C5
    'G': [67, 71, 74],    // G4, B4, D5
    'A': [69, 73, 76],    // A4, C#5, E5
    'Am': [69, 72, 76],   // A4, C5, E5
    'Bb': [70, 74, 77],   // Bb4, D5, F5
    'B': [71, 75, 78],    // B4, D#5, F#5
    'Bm': [71, 74, 78],   // B4, D5, F#5
    'Em7': [64, 67, 71, 74], // E4, G4, B4, D5
    'Cadd9': [60, 64, 67, 74], // C4, E4, G4, D5
    'Dsus4': [62, 67, 69], // D4, G4, A4
    'A7': [69, 73, 76, 79], // A4, C#5, E5, G5
  };

  const activeNotes = noteMappings[chordName] || [];

  // Define keyboard range (2 octaves from C4 to C6)
  const firstNote = MidiNumbers.fromNote('c4');
  const lastNote = MidiNumbers.fromNote('c6');

  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.QWERTY_ROW,
  });

  return (
    <div style={{ width: `${width}px`, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '10px', fontWeight: 'bold' }}>
        {chordName}
      </div>
      <Piano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={() => {}}
        stopNote={() => {}}
        width={width}
        activeNotes={activeNotes}
        keyboardShortcuts={keyboardShortcuts}
      />
    </div>
  );
};

export default PianoChordDiagram;