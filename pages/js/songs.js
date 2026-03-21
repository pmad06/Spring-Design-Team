// ─────────────────────────────────────────────
//  js/songs.js  —  song list page
//
//  Depends on:  data.js
//  Used by:     songs.html
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("songs-table-body");

  tbody.innerHTML = SONGS.map((s, i) => `
    <tr onclick="window.location.href='song.html?id=${s.id}'" style="cursor:pointer;">
      <td class="tbl-num">${String(i + 1).padStart(2, "0")}</td>
      <td class="tbl-title">${s.title}</td>
      <td class="tbl-artist">${s.artist}</td>
      <td class="tbl-key">${s.key}</td>
      <td class="tbl-chords">${s.chords.join(" · ")}</td>
      <td class="tbl-arrow">→</td>
    </tr>
  `).join("");
});
