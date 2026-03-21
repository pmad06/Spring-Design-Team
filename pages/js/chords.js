// ─────────────────────────────────────────────
//  js/chords.js  —  Pranathi's chord dictionary page
//
//  Depends on:  data.js,  chordDiagram.js
//  Used by:     chords.html
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("dict-grid");

  grid.innerHTML = Object.entries(CHORD_DIAGRAMS).map(([name, _]) => `
    <div class="dict-card">
      <div class="dict-card-name">${name}</div>
      ${buildChordSVG(name, 16, 18)}
    </div>
  `).join("");
});
