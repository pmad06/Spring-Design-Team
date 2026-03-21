// ─────────────────────────────────────────────
//  js/song.js  —  Catherine's lyrics + chords page
// ─────────────────────────────────────────────

let activeChord = null;
let currentView = "sheet";

// ── On page load ──────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id     = params.get("id");
  const song   = SONGS.find(s => s.id === id);

  if (!song) {
    document.getElementById("sheet-music-container").innerHTML =
      `<p style="color:var(--text2);font-style:italic;padding:32px 0;">
         Song not found. <a href="index.html" style="color:var(--accent);">← Go back</a>
       </p>`;
    return;
  }

  renderSongPage(song);
  waitForVexFlow(song);
});

// ── Wait for VexFlow CDN to be ready ─────────
function waitForVexFlow(song) {
  let attempts = 0;
  const check = setInterval(() => {
    attempts++;
    if (typeof Vex !== "undefined" && Vex.Flow) {
      clearInterval(check);
      renderSheetMusic(song);
      return;
    }
    if (attempts >= 50) {
      clearInterval(check);
      const c = document.getElementById("sheet-music-container");
      if (c) c.innerHTML = `<p class="sheet-loading" style="color:#c0392b;">
        VexFlow failed to load after 5 seconds. Check your internet connection and refresh.
      </p>`;
    }
  }, 100);
}

// ── Render header + YouTube + lyrics + pills ──
function renderSongPage(song) {
  document.getElementById("sp-title").textContent  = song.title;
  document.getElementById("sp-artist").textContent = song.artist;
  document.getElementById("sp-key").textContent    = "Key of " + song.key;
  document.title = song.title + " — NoteByNote";

  document.getElementById("sp-yt-wrapper").innerHTML =
    `<iframe
      src="https://www.youtube.com/embed/${song.youtubeId}"
      title="${song.title} video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>`;

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

  document.getElementById("sp-chord-pills").innerHTML = song.chords.map(c =>
    `<button class="chord-pill" onclick="selectChord('${c}')" data-pill="${c}">${c}</button>`
  ).join("");
}

// ── View switcher ─────────────────────────────
function switchView(view) {
  currentView = view;
  document.getElementById("view-sheet").style.display  = view === "sheet"  ? "block" : "none";
  document.getElementById("view-lyrics").style.display = view === "lyrics" ? "block" : "none";
  document.getElementById("btn-sheet").classList.toggle("active",  view === "sheet");
  document.getElementById("btn-lyrics").classList.toggle("active", view === "lyrics");
}

// ── Chord selection — works from ALL sources:
//    • chord name in lyrics view
//    • chord label on sheet music (called from sheetMusic.js)
//    • chord pill in the side panel
function selectChord(name) {
  activeChord = name;

  // Update side panel hint + diagram
  document.getElementById("sp-chord-hint").textContent = "Showing " + name;
  const area = document.getElementById("sp-chord-display");
  area.innerHTML = `<div class="chord-display-name">${name}</div>${buildChordSVG(name)}`;

  // Highlight chord names in lyrics view
  document.querySelectorAll(".chord-name.has-chord").forEach(el => {
    el.classList.toggle("active", el.dataset.chord === name);
  });

  // Highlight chord pills
  document.querySelectorAll(".chord-pill").forEach(el => {
    el.classList.toggle("active", el.dataset.pill === name);
  });

  // Sync highlights on sheet music labels
  // (defined in sheetMusic.js — safe to call even before sheet music renders)
  if (typeof syncSheetChordHighlight === "function") {
    syncSheetChordHighlight(name);
  }
}