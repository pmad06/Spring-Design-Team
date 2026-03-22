// ─────────────────────────────────────────────
//  js/navbar.js  —  shared navbar behaviour
//
//  Loaded on every page. Automatically highlights
//  the correct nav link based on the current filename.
// ─────────────────────────────────────────────

(function () {
  // Map filenames → nav link data-page values
  const PAGE_MAP = {
    "index.html":  "home",
    "songs.html":  "songs",
    "song.html":   "songs",   // song detail lives under Songs in the nav
    "chords.html": "chords",
    "about.html":  "about",
  };

  const filename = window.location.pathname.split("/").pop() || "index.html";
  const activePage = PAGE_MAP[filename] || "home";

  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.dataset.page === activePage) link.classList.add("active");
  });
})();
