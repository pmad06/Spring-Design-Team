// ─────────────────────────────────────────────
//  js/home.js  —  Matilde's home page + search
//
//  Depends on:  data.js
//  Used by:     index.html
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderSongGrid();

  // Wire up search input
  document.getElementById("home-search").addEventListener("input", doSearch);
  document.getElementById("home-search").addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const q = e.target.value.trim().toLowerCase();
      const first = SONGS.find(s =>
        s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
      );
      if (first) goToSong(first.id);
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", e => {
    if (!e.target.closest("#search-results-dropdown") && !e.target.closest(".search-bar")) {
      document.getElementById("search-results-dropdown").classList.remove("visible");
    }
  });
});

// ── Song cards grid ───────────────────────────
function renderSongGrid() {
  document.getElementById("home-songs-grid").innerHTML = SONGS.map(s => `
    <div class="song-card" onclick="goToSong('${s.id}')">
      <div class="song-card-title">${s.title}</div>
      <div class="song-card-artist">${s.artist}</div>
      <div class="song-card-key">Key of ${s.key}</div>
    </div>
  `).join("");
}

// ── Search / filter ───────────────────────────
function doSearch() {
  const q        = document.getElementById("home-search").value.trim().toLowerCase();
  const dropdown = document.getElementById("search-results-dropdown");

  if (!q) { dropdown.classList.remove("visible"); return; }

  const results = SONGS.filter(s =>
    s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
  );

  dropdown.innerHTML = results.length
    ? results.map(s => `
        <div class="search-result-item" onclick="goToSong('${s.id}')">
          <div>
            <div class="result-title">${s.title}</div>
            <div class="result-artist">${s.artist}</div>
          </div>
          <span class="result-arrow">→</span>
        </div>
      `).join("")
    : `<div class="no-results">No songs found for "${q}"</div>`;

  dropdown.classList.add("visible");
}

// ── Navigate to song page ─────────────────────
function goToSong(id) {
  window.location.href = `song.html?id=${id}`;
}
