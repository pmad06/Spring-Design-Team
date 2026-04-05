// ─────────────────────────────────────────────
//  js/home.js  —  Matilde's home page + search
//
//  Used by:  index.html
// ─────────────────────────────────────────────

const API_BASE = 'http://localhost:3000';

let allSongs = [];

document.addEventListener("DOMContentLoaded", async () => {
  allSongs = await fetch(`${API_BASE}/api/songs`).then(r => r.json());
  renderSongGrid(allSongs);

  // Wire up search input
  document.getElementById("home-search").addEventListener("input", doSearch);
  document.getElementById("home-search").addEventListener("keydown", async e => {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      const results = await fetch(`${API_BASE}/api/search?q=${encodeURIComponent(q)}`).then(r => r.json());
      if (results.length) goToSong(results[0]._id);
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
function renderSongGrid(songs) {
  document.getElementById("home-songs-grid").innerHTML = songs.map(s => `
    <div class="song-card" onclick="goToSong('${s._id}')">
      <div class="song-card-title">${s.title}</div>
      <div class="song-card-artist">${s.artist}</div>
      <div class="song-card-key">Key of ${s.key}</div>
    </div>
  `).join("");
}

// ── Search / filter ───────────────────────────
async function doSearch() {
  const q        = document.getElementById("home-search").value.trim();
  const dropdown = document.getElementById("search-results-dropdown");

  if (!q) { dropdown.classList.remove("visible"); return; }

  const results = await fetch(`${API_BASE}/api/search?q=${encodeURIComponent(q)}`).then(r => r.json());

  dropdown.innerHTML = results.length
    ? results.map(s => `
        <div class="search-result-item" onclick="goToSong('${s._id}')">
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
