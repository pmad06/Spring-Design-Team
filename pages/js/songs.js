// ─────────────────────────────────────────────
//  js/songs.js  —  song list page
//
//  Used by:  songs.html
// ─────────────────────────────────────────────

const API_BASE = 'http://localhost:3000';

document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.getElementById("songs-table-body");

  const songs = await fetch(`${API_BASE}/api/songs`).then(r => r.json());

  tbody.innerHTML = songs.map((s, i) => `
    <tr onclick="window.location.href='song.html?id=${s._id}'" style="cursor:pointer;">
      <td class="tbl-num">${String(i + 1).padStart(2, "0")}</td>
      <td class="tbl-title">${s.title}</td>
      <td class="tbl-artist">${s.artist}</td>
      <td class="tbl-key">${s.key}</td>
      <td class="tbl-chords">${s.chords.join(" · ")}</td>
      <td class="tbl-arrow">→</td>
    </tr>
  `).join("");
});
