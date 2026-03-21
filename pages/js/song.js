// ─────────────────────────────────────────────
//  js/song.js  —  Catherine's lyrics + chords page
//
//  Depends on:  data.js,  chordDiagram.js
//  Used by:     song.html
// ─────────────────────────────────────────────

let activeChord = null;

// ── On page load ──────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get("id");
  const song   = SONGS.find(s => s.id === id);

  if (!song) {
    document.getElementById("sp-lyrics-panel").innerHTML =
      `<p style="color:var(--text2);font-style:italic;">Song not found. <a href="index.html" style="color:var(--accent);">← Go back</a></p>`;
    return;
  }

  renderSongPage(song);
});

// ── Render everything ─────────────────────────
function renderSongPage(song) {
  // Header
  document.getElementById("sp-title").textContent  = song.title;
  document.getElementById("sp-artist").textContent = song.artist;
  document.getElementById("sp-key").textContent    = "Key of " + song.key;
  document.title = song.title + " — NoteByNote";

  // YouTube embed
  document.getElementById("sp-yt-wrapper").innerHTML =
    `<iframe src="https://www.youtube.com/embed/${song.youtubeId}"
      title="Song video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`;

  // Lyrics
  document.getElementById("sp-lyrics").innerHTML = song.sections.map(section => `
    <div class="song-section">
      <p class="section-label">${section.label}</p>
      ${section.lines.map(line => `
        <div class="lyric-line">
          ${line.map(seg => `
            <span class="chord-word">
              <span
                class="chord-name ${seg.chord ? "has-chord" : ""}"
                ${seg.chord ? `onclick="selectChord('${seg.chord}')" data-chord="${seg.chord}"` : ""}
              >${seg.chord ?? ""}</span>
              <span class="lyric-word">${seg.word}</span>
            </span>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `).join("");

  // Chord pills
  document.getElementById("sp-chord-pills").innerHTML = song.chords.map(c =>
    `<button class="chord-pill" onclick="selectChord('${c}')" data-pill="${c}">${c}</button>`
  ).join("");
}

// ── Chord selection ───────────────────────────
function selectChord(name) {
  activeChord = name;

  // Update hint text
  document.getElementById("sp-chord-hint").textContent = "Showing " + name;

  // Highlight chord names in lyrics
  document.querySelectorAll(".chord-name.has-chord").forEach(el => {
    el.classList.toggle("active", el.dataset.chord === name);
  });

  // Highlight pills
  document.querySelectorAll(".chord-pill").forEach(el => {
    el.classList.toggle("active", el.dataset.pill === name);
  });

  // Draw SVG diagram
  const area = document.getElementById("sp-chord-display");
  area.innerHTML = `<div class="chord-display-name">${name}</div>${buildChordSVG(name)}`;
}
