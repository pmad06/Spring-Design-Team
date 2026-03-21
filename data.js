// ─────────────────────────────────────────────
//  js/data.js  —  shared data for all pages
//
//  Every HTML page loads this with:
//    <script src="../js/data.js"></script>
//    (or  <script src="js/data.js"></script>  from root)
//
//  TO ADD A NEW SONG: copy the object below and fill in the fields.
//  WHEN API IS READY: replace this file's contents with a fetch() call.
// ─────────────────────────────────────────────

const SONGS = [
  {
    id: "twinkle-twinkle",
    title: "Twinkle Twinkle Little Star",
    artist: "Traditional",
    key: "C Major",
    youtubeId: "yCjJyiqpAuU",
    chords: ["C", "F", "G"],
    sections: [
      { label: "Verse 1", lines: [
        [{chord:"C",word:"Twin-kle "},{chord:null,word:"twin-kle "},{chord:"F",word:"lit-tle "},{chord:"C",word:"star, "}],
        [{chord:"F",word:"How I "},{chord:"C",word:"won-der "},{chord:"G",word:"what you "},{chord:"C",word:"are! "}],
        [{chord:"C",word:"Up a-"},{chord:"F",word:"bove the "},{chord:"C",word:"world so "},{chord:"G",word:"high, "}],
        [{chord:"C",word:"Like a "},{chord:"F",word:"dia-mond "},{chord:"G",word:"in the "},{chord:"C",word:"sky."}],
      ]},
      { label: "Verse 2", lines: [
        [{chord:"C",word:"When the "},{chord:"F",word:"blaz-ing "},{chord:"C",word:"sun is "},{chord:"G",word:"gone, "}],
        [{chord:"C",word:"When he "},{chord:"F",word:"no-thing "},{chord:"G",word:"shines up-"},{chord:"C",word:"on, "}],
        [{chord:"F",word:"Then you "},{chord:"C",word:"show your "},{chord:"F",word:"lit-tle "},{chord:"C",word:"light, "}],
        [{chord:"F",word:"Twin-kle "},{chord:"C",word:"twin-kle "},{chord:"G",word:"through the "},{chord:"C",word:"night."}],
      ]},
      { label: "Chorus", lines: [
        [{chord:"C",word:"Twin-kle "},{chord:null,word:"twin-kle "},{chord:"F",word:"lit-tle "},{chord:"C",word:"star, "}],
        [{chord:"F",word:"How I "},{chord:"C",word:"won-der "},{chord:"G",word:"what you "},{chord:"C",word:"are!"}],
      ]},
    ],
  },
];

// ─────────────────────────────────────────────
//  Chord finger position data
//  Also used by Pranathi's chord dictionary page.
// ─────────────────────────────────────────────
const CHORD_DIAGRAMS = {
  C:     { fingers:[[2,1],[3,2],[4,3]], open:[1,2], mute:[6], barre:null },
  D:     { fingers:[[1,2],[2,3],[3,2]], open:[4],   mute:[5,6], barre:null },
  Dm:    { fingers:[[1,1],[2,3],[3,2]], open:[4],   mute:[5,6], barre:null },
  E:     { fingers:[[3,1],[4,2],[5,2]], open:[1,2,6], mute:[], barre:null },
  Em:    { fingers:[[4,2],[5,2]],       open:[1,2,3,6], mute:[], barre:null },
  F:     { fingers:[[1,1],[2,1],[3,2],[4,3],[5,3],[6,1]], open:[], mute:[], barre:1 },
  G:     { fingers:[[1,3],[5,2],[6,3]], open:[2,3,4], mute:[], barre:null },
  A:     { fingers:[[2,2],[3,2],[4,2]], open:[1,5], mute:[6], barre:null },
  Am:    { fingers:[[2,1],[3,2],[4,2]], open:[1,5], mute:[6], barre:null },
  B:     { fingers:[[1,2],[2,4],[3,4],[4,4],[5,2],[6,2]], open:[], mute:[], barre:2 },
  Bm:    { fingers:[[1,2],[2,3],[3,4],[4,4],[5,2],[6,2]], open:[], mute:[], barre:2 },
  Em7:   { fingers:[[4,2],[5,2]], open:[1,2,3,6], mute:[], barre:null },
  Cadd9: { fingers:[[3,2],[4,3],[5,3]], open:[1,2], mute:[6], barre:null },
  Dsus4: { fingers:[[1,3],[2,3],[3,2]], open:[4], mute:[5,6], barre:null },
  A7:    { fingers:[[2,2],[4,2]], open:[1,3,5], mute:[6], barre:null },
};
