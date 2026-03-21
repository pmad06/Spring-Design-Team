// ─────────────────────────────────────────────
//  js/data.js  —  shared data for all pages
// ─────────────────────────────────────────────

const SONGS = [
  {
    id: "twinkle-twinkle",
    title: "Twinkle Twinkle Little Star",
    artist: "Traditional",
    key: "C Major",
    youtubeId: "yCjJyiqpAuU",
    chords: ["C", "F", "G"],

    // ── Sheet music data for VexFlow ──────────────────────────────
    // Each entry in measures[] is one bar.
    // Each note: { key, dur, lyric, chord? }
    //   key:   VexFlow pitch — "c/4" = middle C
    //   dur:   "q" quarter, "h" half, "w" whole
    //   lyric: syllable shown BELOW the staff
    //   chord: (optional) chord name shown ABOVE the staff at this note
    // ─────────────────────────────────────────────────────────────
    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
      measures: [
        // Bar 1 — "Twin-kle twin-kle"  C
        [
          { key:"c/4", dur:"q", lyric:"Twin-", chord:"C" },
          { key:"c/4", dur:"q", lyric:"kle"              },
          { key:"g/4", dur:"q", lyric:"twin-"            },
          { key:"g/4", dur:"q", lyric:"kle"              },
        ],
        // Bar 2 — "lit-tle star,"  F → C
        [
          { key:"a/4", dur:"q", lyric:"lit-",  chord:"F" },
          { key:"a/4", dur:"q", lyric:"tle"              },
          { key:"g/4", dur:"h", lyric:"star,", chord:"C" },
        ],
        // Bar 3 — "How I won-der"  F
        [
          { key:"f/4", dur:"q", lyric:"How",   chord:"F" },
          { key:"f/4", dur:"q", lyric:"I"                },
          { key:"e/4", dur:"q", lyric:"won-"             },
          { key:"e/4", dur:"q", lyric:"der"              },
        ],
        // Bar 4 — "what you are!"  G → C
        [
          { key:"d/4", dur:"q", lyric:"what",  chord:"G" },
          { key:"d/4", dur:"q", lyric:"you"              },
          { key:"c/4", dur:"h", lyric:"are!",  chord:"C" },
        ],
        // Bar 5 — "Up a-bove the"  C → F
        [
          { key:"g/4", dur:"q", lyric:"Up",    chord:"C" },
          { key:"g/4", dur:"q", lyric:"a-"               },
          { key:"f/4", dur:"q", lyric:"bove",  chord:"F" },
          { key:"f/4", dur:"q", lyric:"the"              },
        ],
        // Bar 6 — "world so high,"  C → G
        [
          { key:"e/4", dur:"q", lyric:"world", chord:"C" },
          { key:"e/4", dur:"q", lyric:"so"               },
          { key:"d/4", dur:"h", lyric:"high,", chord:"G" },
        ],
        // Bar 7 — "Like a dia-mond"  C → F
        [
          { key:"g/4", dur:"q", lyric:"Like",  chord:"C" },
          { key:"g/4", dur:"q", lyric:"a"                },
          { key:"f/4", dur:"q", lyric:"dia-",  chord:"F" },
          { key:"f/4", dur:"q", lyric:"mond"             },
        ],
        // Bar 8 — "in the sky."  C → G
        [
          { key:"e/4", dur:"q", lyric:"in",    chord:"C" },
          { key:"e/4", dur:"q", lyric:"the"              },
          { key:"d/4", dur:"h", lyric:"sky.",  chord:"G" },
        ],
        // Bar 9 — Chorus "Twin-kle twin-kle"  C
        [
          { key:"c/4", dur:"q", lyric:"Twin-", chord:"C" },
          { key:"c/4", dur:"q", lyric:"kle"              },
          { key:"g/4", dur:"q", lyric:"twin-"            },
          { key:"g/4", dur:"q", lyric:"kle"              },
        ],
        // Bar 10 — "lit-tle star,"  F → C
        [
          { key:"a/4", dur:"q", lyric:"lit-",  chord:"F" },
          { key:"a/4", dur:"q", lyric:"tle"              },
          { key:"g/4", dur:"h", lyric:"star,", chord:"C" },
        ],
        // Bar 11 — "How I won-der"  F
        [
          { key:"f/4", dur:"q", lyric:"How",   chord:"F" },
          { key:"f/4", dur:"q", lyric:"I"                },
          { key:"e/4", dur:"q", lyric:"won-"             },
          { key:"e/4", dur:"q", lyric:"der"              },
        ],
        // Bar 12 — "what you are!"  G → C
        [
          { key:"d/4", dur:"q", lyric:"what",  chord:"G" },
          { key:"d/4", dur:"q", lyric:"you"              },
          { key:"c/4", dur:"h", lyric:"are!",  chord:"C" },
        ],
      ],
    },

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