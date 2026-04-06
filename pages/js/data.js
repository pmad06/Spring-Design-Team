// ─────────────────────────────────────────────
//  js/data.js  —  shared data for all pages
// ─────────────────────────────────────────────

const SONGS = [

  // ════════════════════════════════════════════
  //  1. TWINKLE TWINKLE LITTLE STAR
  // ════════════════════════════════════════════
  {
    id: "twinkle-twinkle",
    title: "Twinkle Twinkle Little Star (Piano)",
    artist: "Traditional",
    key: "C Major",
    youtubeId: "p9tW3n6aO9Q",
    chords: ["C", "F", "G"],
    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
      keySignature: "C",
      measures: [
        [ {key:"c/4",dur:"q",lyric:"Twin-",chord:"C"}, {key:"c/4",dur:"q",lyric:"kle"}, {key:"g/4",dur:"q",lyric:"twin-"}, {key:"g/4",dur:"q",lyric:"kle"} ],
        [ {key:"a/4",dur:"q",lyric:"lit-",chord:"F"},  {key:"a/4",dur:"q",lyric:"tle"}, {key:"g/4",dur:"h",lyric:"star,",chord:"C"} ],
        [ {key:"f/4",dur:"q",lyric:"How",chord:"F"},   {key:"f/4",dur:"q",lyric:"I"},   {key:"e/4",dur:"q",lyric:"won-"}, {key:"e/4",dur:"q",lyric:"der"} ],
        [ {key:"d/4",dur:"q",lyric:"what",chord:"G"},  {key:"d/4",dur:"q",lyric:"you"}, {key:"c/4",dur:"h",lyric:"are!",chord:"C"} ],
        [ {key:"g/4",dur:"q",lyric:"Up",chord:"C"},    {key:"g/4",dur:"q",lyric:"a-"},  {key:"f/4",dur:"q",lyric:"bove",chord:"F"}, {key:"f/4",dur:"q",lyric:"the"} ],
        [ {key:"e/4",dur:"q",lyric:"world",chord:"C"}, {key:"e/4",dur:"q",lyric:"so"},  {key:"d/4",dur:"h",lyric:"high,",chord:"G"} ],
        [ {key:"g/4",dur:"q",lyric:"Like",chord:"C"},  {key:"g/4",dur:"q",lyric:"a"},   {key:"f/4",dur:"q",lyric:"dia-",chord:"F"}, {key:"f/4",dur:"q",lyric:"mond"} ],
        [ {key:"e/4",dur:"q",lyric:"in",chord:"C"},    {key:"e/4",dur:"q",lyric:"the"}, {key:"d/4",dur:"h",lyric:"sky.",chord:"G"} ],
        [ {key:"c/4",dur:"q",lyric:"Twin-",chord:"C"}, {key:"c/4",dur:"q",lyric:"kle"}, {key:"g/4",dur:"q",lyric:"twin-"}, {key:"g/4",dur:"q",lyric:"kle"} ],
        [ {key:"a/4",dur:"q",lyric:"lit-",chord:"F"},  {key:"a/4",dur:"q",lyric:"tle"}, {key:"g/4",dur:"h",lyric:"star,",chord:"C"} ],
        [ {key:"f/4",dur:"q",lyric:"How",chord:"F"},   {key:"f/4",dur:"q",lyric:"I"},   {key:"e/4",dur:"q",lyric:"won-"}, {key:"e/4",dur:"q",lyric:"der"} ],
        [ {key:"d/4",dur:"q",lyric:"what",chord:"G"},  {key:"d/4",dur:"q",lyric:"you"}, {key:"c/4",dur:"h",lyric:"are!",chord:"C"} ],
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

  // ════════════════════════════════════════════
  //  2. DIE WITH A SMILE — Bruno Mars & Lady Gaga
  //  Guitar key: G Major (capo 1 for original Ab)
  //  Chords: G, Em, C, D
  // ════════════════════════════════════════════
  {
    id: "die-with-a-smile",
    title: "Die With a Smile",
    artist: "Bruno Mars & Lady Gaga",
    key: "G Major (Capo 1)",
    youtubeId: "ELC9YmxeIyc",
    chords: ["G", "Em", "C", "D"],

    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
      keySignature: "G",
      measures: [
        // Verse: "I, I just woke up from a dream"
        // Bar 1 — G
        [ {key:"d/4",dur:"q",lyric:"I,",chord:"G"},    {key:"d/4",dur:"q",lyric:"I"},    {key:"b/4",dur:"q",lyric:"just"},  {key:"b/4",dur:"q",lyric:"woke"} ],
        // Bar 2 — Em
        [ {key:"g/4",dur:"q",lyric:"up",chord:"Em"},   {key:"g/4",dur:"q",lyric:"from"}, {key:"a/4",dur:"q",lyric:"a"},    {key:"b/4",dur:"q",lyric:"dream,"} ],
        // Bar 3 — C
        [ {key:"c/5",dur:"q",lyric:"Where",chord:"C"}, {key:"b/4",dur:"q",lyric:"you"},  {key:"a/4",dur:"q",lyric:"and"},  {key:"g/4",dur:"q",lyric:"I"} ],
        // Bar 4 — D
        [ {key:"f#/4",dur:"h",lyric:"had",chord:"D"},  {key:"e/4",dur:"h",lyric:"ev-'ry-thing."} ],

        // "Your parents stood by our side"
        // Bar 5 — G
        [ {key:"d/4",dur:"q",lyric:"Your",chord:"G"},  {key:"d/4",dur:"q",lyric:"par-"}, {key:"b/4",dur:"q",lyric:"ents"}, {key:"b/4",dur:"q",lyric:"stood"} ],
        // Bar 6 — Em
        [ {key:"g/4",dur:"q",lyric:"by",chord:"Em"},   {key:"g/4",dur:"q",lyric:"our"}, {key:"a/4",dur:"q",lyric:"side,"},  {key:"a/4",dur:"q",lyric:"and"} ],
        // Bar 7 — C
        [ {key:"c/5",dur:"q",lyric:"I",chord:"C"},     {key:"b/4",dur:"q",lyric:"gave"}, {key:"a/4",dur:"q",lyric:"you"},  {key:"g/4",dur:"q",lyric:"my"} ],
        // Bar 8 — D
        [ {key:"f#/4",dur:"h",lyric:"last",chord:"D"}, {key:"e/4",dur:"h",lyric:"name."} ],

        // Chorus: "If the world was ending"
        // Bar 9 — G
        [ {key:"g/4",dur:"q",lyric:"If",chord:"G"},    {key:"b/4",dur:"q",lyric:"the"},  {key:"d/5",dur:"q",lyric:"world"}, {key:"d/5",dur:"q",lyric:"was"} ],
        // Bar 10 — Em
        [ {key:"e/5",dur:"h",lyric:"end-",chord:"Em"}, {key:"d/5",dur:"h",lyric:"ing,"} ],
        // Bar 11 — C
        [ {key:"c/5",dur:"q",lyric:"I'd",chord:"C"},   {key:"b/4",dur:"q",lyric:"wan-"}, {key:"a/4",dur:"q",lyric:"na"},  {key:"g/4",dur:"q",lyric:"be"} ],
        // Bar 12 — D
        [ {key:"a/4",dur:"h",lyric:"next",chord:"D"},  {key:"g/4",dur:"h",lyric:"to you."} ],

        // "If the party was over"
        // Bar 13 — G
        [ {key:"g/4",dur:"q",lyric:"If",chord:"G"},    {key:"b/4",dur:"q",lyric:"the"},  {key:"d/5",dur:"q",lyric:"par-"}, {key:"d/5",dur:"q",lyric:"ty"} ],
        // Bar 14 — Em
        [ {key:"e/5",dur:"h",lyric:"was",chord:"Em"},  {key:"d/5",dur:"h",lyric:"o-ver,"} ],
        // Bar 15 — C
        [ {key:"c/5",dur:"q",lyric:"and",chord:"C"},   {key:"b/4",dur:"q",lyric:"our"},  {key:"a/4",dur:"q",lyric:"time"},  {key:"g/4",dur:"q",lyric:"on"} ],
        // Bar 16 — D
        [ {key:"a/4",dur:"h",lyric:"Earth",chord:"D"}, {key:"g/4",dur:"h",lyric:"was through,"} ],

        // "I'd wanna hold you just like this"
        // Bar 17 — G
        [ {key:"g/4",dur:"q",lyric:"I'd",chord:"G"},   {key:"a/4",dur:"q",lyric:"wan-"}, {key:"b/4",dur:"q",lyric:"na"},  {key:"b/4",dur:"q",lyric:"hold"} ],
        // Bar 18 — Em
        [ {key:"b/4",dur:"q",lyric:"you",chord:"Em"},  {key:"a/4",dur:"q",lyric:"just"}, {key:"g/4",dur:"q",lyric:"like"}, {key:"f#/4",dur:"q",lyric:"this,"} ],
        // Bar 19 — C
        [ {key:"e/4",dur:"q",lyric:"and",chord:"C"},   {key:"g/4",dur:"q",lyric:"die"},  {key:"a/4",dur:"q",lyric:"with"}, {key:"b/4",dur:"q",lyric:"a"} ],
        // Bar 20 — D → G
        [ {key:"c/5",dur:"h",lyric:"smile.",chord:"D"},{key:"g/4",dur:"h",lyric:"",chord:"G"} ],
      ],
    },

    sections: [
      { label: "Verse 1", lines: [
        [{chord:"G",word:"I, I just "},{chord:null,word:"woke up from a "},{chord:"Em",word:"dream "}],
        [{chord:"C",word:"Where you and I "},{chord:"D",word:"had every-thing "}],
        [{chord:"G",word:"Your parents stood by "},{chord:"Em",word:"our side, "}],
        [{chord:"C",word:"And I gave you my "},{chord:"D",word:"last name "}],
      ]},
      { label: "Verse 2", lines: [
        [{chord:"G",word:"Now I'm reach-ing "},{chord:null,word:"for you at "},{chord:"Em",word:"3 AM "}],
        [{chord:"C",word:"I hope you're ly-ing "},{chord:"D",word:"next to some-one "}],
        [{chord:"G",word:"But if you're not "},{chord:"Em",word:"please hear this song "}],
        [{chord:"C",word:"And know that I will "},{chord:"D",word:"al-ways love you "}],
      ]},
      { label: "Chorus", lines: [
        [{chord:"G",word:"If the world was "},{chord:"Em",word:"end-ing, "}],
        [{chord:"C",word:"I'd wan-na be "},{chord:"D",word:"next to you "}],
        [{chord:"G",word:"If the par-ty was "},{chord:"Em",word:"o-ver, "}],
        [{chord:"C",word:"And our time on Earth was "},{chord:"D",word:"through "}],
        [{chord:"G",word:"I'd wan-na hold "},{chord:"Em",word:"you just like this "}],
        [{chord:"C",word:"And die with a "},{chord:"D",word:"smile "},{chord:"G",word:""}],
      ]},
    ],
  },

  // ════════════════════════════════════════════
  //  3. BACK TO BLACK — Amy Winehouse
  //  Key: D minor
  //  Chords: Dm, F, C, Bb (Bb shown as A# in some charts)
  // ════════════════════════════════════════════
  {
    id: "back-to-black",
    title: "Back to Black",
    artist: "Amy Winehouse",
    key: "D Minor",
    youtubeId: "WBeD5Zx9kME",
    youtubeParams: "?si=MYmdPq1-NB1sPGDd",
    chords: ["Dm", "F", "C", "Bb"],

    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
      keySignature: "Bb",
      measures: [
        // Verse: "He left no time to regret"
        // Bar 1 — Dm
        [ {key:"d/4",dur:"q",lyric:"He",chord:"Dm"},  {key:"f/4",dur:"q",lyric:"left"}, {key:"a/4",dur:"q",lyric:"no"},   {key:"a/4",dur:"q",lyric:"time"} ],
        // Bar 2 — F
        [ {key:"a/4",dur:"q",lyric:"to",chord:"F"},   {key:"g/4",dur:"q",lyric:"re-"},  {key:"f/4",dur:"h",lyric:"gret"} ],
        // Bar 3 — C
        [ {key:"e/4",dur:"q",lyric:"Kept",chord:"C"}, {key:"f/4",dur:"q",lyric:"his"},  {key:"g/4",dur:"q",lyric:"dick"},  {key:"g/4",dur:"q",lyric:"wet"} ],
        // Bar 4 — Bb
        [ {key:"f/4",dur:"h",lyric:"with",chord:"Bb"},{key:"d/4",dur:"h",lyric:"his"} ],

        // "same Juliette"
        // Bar 5 — Dm
        [ {key:"d/4",dur:"q",lyric:"same",chord:"Dm"},{key:"f/4",dur:"q",lyric:"Ju-"},  {key:"a/4",dur:"q",lyric:"li-"},  {key:"a/4",dur:"q",lyric:"ette"} ],
        // Bar 6 — F
        [ {key:"a/4",dur:"h",lyric:"",chord:"F"},     {key:"f/4",dur:"h",lyric:""} ],
        // Bar 7 — C
        [ {key:"e/4",dur:"q",lyric:"And",chord:"C"},  {key:"f/4",dur:"q",lyric:"she"},  {key:"g/4",dur:"q",lyric:"had"},  {key:"g/4",dur:"q",lyric:"the"} ],
        // Bar 8 — Bb
        [ {key:"f/4",dur:"h",lyric:"nerve",chord:"Bb"},{key:"d/4",dur:"h",lyric:"to"} ],

        // "And I grieve"
        // Bar 9 — Dm
        [ {key:"d/4",dur:"q",lyric:"And",chord:"Dm"}, {key:"d/4",dur:"q",lyric:"I"},    {key:"f/4",dur:"q",lyric:"grieve"},  {key:"a/4",dur:"q",lyric:""} ],
        // Bar 10 — F
        [ {key:"a/4",dur:"h",lyric:"",chord:"F"},     {key:"c/5",dur:"h",lyric:""} ],
        // Bar 11 — C
        [ {key:"b/4",dur:"q",lyric:"'cause",chord:"C"},{key:"a/4",dur:"q",lyric:"I"},   {key:"g/4",dur:"q",lyric:"be-"},  {key:"g/4",dur:"q",lyric:"lieved"} ],
        // Bar 12 — Bb
        [ {key:"f/4",dur:"h",lyric:"",chord:"Bb"},    {key:"d/4",dur:"h",lyric:""} ],

        // Chorus: "We only said goodbye with words"
        // Bar 13 — Dm
        [ {key:"d/4",dur:"q",lyric:"We",chord:"Dm"},  {key:"f/4",dur:"q",lyric:"on-"},  {key:"a/4",dur:"q",lyric:"ly"},   {key:"c/5",dur:"q",lyric:"said"} ],
        // Bar 14 — F
        [ {key:"a/4",dur:"q",lyric:"good-",chord:"F"},{key:"a/4",dur:"q",lyric:"bye"},  {key:"g/4",dur:"q",lyric:"with"}, {key:"f/4",dur:"q",lyric:"words"} ],
        // Bar 15 — C
        [ {key:"e/4",dur:"q",lyric:"I",chord:"C"},    {key:"f/4",dur:"q",lyric:"died"},  {key:"g/4",dur:"q",lyric:"a"},   {key:"g/4",dur:"q",lyric:"hun-"} ],
        // Bar 16 — Bb
        [ {key:"f/4",dur:"h",lyric:"dred",chord:"Bb"},{key:"d/4",dur:"h",lyric:"times"} ],

        // "You go back to her"
        // Bar 17 — Dm
        [ {key:"d/4",dur:"q",lyric:"You",chord:"Dm"}, {key:"f/4",dur:"q",lyric:"go"},   {key:"a/4",dur:"q",lyric:"back"}, {key:"a/4",dur:"q",lyric:"to"} ],
        // Bar 18 — F
        [ {key:"a/4",dur:"h",lyric:"her",chord:"F"},  {key:"g/4",dur:"h",lyric:""} ],
        // Bar 19 — C
        [ {key:"e/4",dur:"q",lyric:"And",chord:"C"},  {key:"f/4",dur:"q",lyric:"I"},    {key:"g/4",dur:"q",lyric:"go"},  {key:"a/4",dur:"q",lyric:"back"} ],
        // Bar 20 — Bb → Dm
        [ {key:"bb/3",dur:"h",lyric:"to",chord:"Bb"}, {key:"d/4",dur:"h",lyric:"black",chord:"Dm"} ],
      ],
    },

    sections: [
      { label: "Verse 1", lines: [
        [{chord:"Dm",word:"He left no time to "},{chord:"F",word:"re-gret "}],
        [{chord:"C",word:"Kept his dick wet with his "},{chord:"Bb",word:"same Ju-li-ette "}],
        [{chord:"Dm",word:"And she had the "},{chord:"F",word:"nerve "}],
        [{chord:"C",word:"To re-gret "},{chord:"Bb",word:""}],
      ]},
      { label: "Verse 2", lines: [
        [{chord:"Dm",word:"And I grieve 'cause I be-"},{chord:"F",word:"lieved "}],
        [{chord:"C",word:"Every word you'd "},{chord:"Bb",word:"said "}],
        [{chord:"Dm",word:"I took it all, but "},{chord:"F",word:"your hand "}],
        [{chord:"C",word:"Babe, it was a "},{chord:"Bb",word:"lie "}],
      ]},
      { label: "Chorus", lines: [
        [{chord:"Dm",word:"We on-ly said good-bye with "},{chord:"F",word:"words "}],
        [{chord:"C",word:"I died a hun-dred "},{chord:"Bb",word:"times "}],
        [{chord:"Dm",word:"You go back to "},{chord:"F",word:"her "}],
        [{chord:"C",word:"And I go back to "},{chord:"Bb",word:"black "},{chord:"Dm",word:""}],
      ]},
      { label: "Bridge", lines: [
        [{chord:"Dm",word:"Black, black, black, black, black, black, black "}],
        [{chord:"F",word:"I go back to "}],
        [{chord:"C",word:"I go back to "}],
        [{chord:"Bb",word:"I go back to "},{chord:"Dm",word:"black "}],
      ]},
    ],
  },

  //  Key: A Major
  //  Chords: A, E, D, Dm
  {
    id: "winner-takes-it-all",
    title: "The Winner Takes It All",
    artist: "ABBA",
    key: "A Major",
    youtubeId: "9AGiShfoR_8",
    youtubeParams: "?si=jvIBec8XaEwn8Sh7",
    chords: ["A", "E", "D", "Dm"],

    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
      keySignature: "A",
      measures: [
        // Verse: "I don't wanna talk about things we've gone through"
        [ {key:"a/4",dur:"q",lyric:"I",chord:"A"},     {key:"a/4",dur:"q",lyric:"don't"}, {key:"b/4",dur:"q",lyric:"wan-"}, {key:"a/4",dur:"q",lyric:"na"} ],
        [ {key:"g#/4",dur:"q",lyric:"talk",chord:"E"}, {key:"a/4",dur:"q",lyric:"a-"}, {key:"a/4",dur:"q",lyric:"bout"}, {key:"b/4",dur:"q",lyric:"things"} ],
        [ {key:"a/4",dur:"q",lyric:"we've",chord:"D"}, {key:"b/4",dur:"q",lyric:"gone"}, {key:"a/4",dur:"q",lyric:"through"}, {key:"a/4",dur:"q",lyric:""} ],
        [ {key:"a/4",dur:"h",lyric:"",chord:"A"},      {key:"a/4",dur:"h",lyric:""} ],

        // "Though it's hurting me, now it's history"
        [ {key:"a/4",dur:"q",lyric:"Though",chord:"A"}, {key:"a/4",dur:"q",lyric:"it's"}, {key:"b/4",dur:"q",lyric:"hurt-"}, {key:"a/4",dur:"q",lyric:"ing"} ],
        [ {key:"g#/4",dur:"q",lyric:"me,",chord:"E"},   {key:"a/4",dur:"q",lyric:"now"}, {key:"a/4",dur:"q",lyric:"it's"}, {key:"b/4",dur:"q",lyric:"his-"} ],
        [ {key:"a/4",dur:"q",lyric:"to-",chord:"D"},    {key:"a/4",dur:"q",lyric:"ry"}, {key:"a/4",dur:"q",lyric:""}, {key:"a/4",dur:"q",lyric:""} ],
        [ {key:"a/4",dur:"h",lyric:"",chord:"Dm"},      {key:"a/4",dur:"h",lyric:""} ],

        // Chorus: "I've played all my cards and that's what you've done too"
        [ {key:"a/4",dur:"q",lyric:"I've",chord:"A"},   {key:"a/4",dur:"q",lyric:"played"}, {key:"b/4",dur:"q",lyric:"all"}, {key:"a/4",dur:"q",lyric:"my"} ],
        [ {key:"g#/4",dur:"q",lyric:"cards",chord:"E"}, {key:"a/4",dur:"q",lyric:"and"}, {key:"a/4",dur:"q",lyric:"that's"}, {key:"b/4",dur:"q",lyric:"what"} ],
        [ {key:"a/4",dur:"q",lyric:"you've",chord:"D"}, {key:"a/4",dur:"q",lyric:"done"}, {key:"a/4",dur:"q",lyric:"too,"}, {key:"a/4",dur:"q",lyric:""} ],
        [ {key:"a/4",dur:"h",lyric:"",chord:"A"},       {key:"a/4",dur:"h",lyric:""} ],

        // "Nothing more to say, no more ace to play"
        [ {key:"a/4",dur:"q",lyric:"Noth-",chord:"A"}, {key:"a/4",dur:"q",lyric:"ing"}, {key:"b/4",dur:"q",lyric:"more"}, {key:"a/4",dur:"q",lyric:"to"} ],
        [ {key:"g#/4",dur:"q",lyric:"say,",chord:"E"},  {key:"a/4",dur:"q",lyric:"no"}, {key:"a/4",dur:"q",lyric:"more"}, {key:"b/4",dur:"q",lyric:"ace"} ],
        [ {key:"a/4",dur:"q",lyric:"to",chord:"D"},     {key:"a/4",dur:"q",lyric:"play,"}, {key:"a/4",dur:"q",lyric:""}, {key:"a/4",dur:"q",lyric:""} ],
        [ {key:"a/4",dur:"h",lyric:"",chord:"A"},       {key:"a/4",dur:"h",lyric:""} ],

        // "The winner takes it all"
        [ {key:"a/4",dur:"q",lyric:"The",chord:"D"},    {key:"a/4",dur:"q",lyric:"win-"}, {key:"b/4",dur:"q",lyric:"ner"}, {key:"a/4",dur:"q",lyric:"takes"} ],
        [ {key:"g#/4",dur:"q",lyric:"it",chord:"A"},    {key:"a/4",dur:"q",lyric:"all,"}, {key:"a/4",dur:"q",lyric:""}, {key:"a/4",dur:"q",lyric:""} ],
        [ {key:"a/4",dur:"h",lyric:"",chord:"E"},       {key:"a/4",dur:"h",lyric:""} ],
      ],
    },

    sections: [
      { label: "Verse 1", lines: [
        [{chord:"A",word:"I don't wan-na "},{chord:"E",word:"talk a-bout things "},{chord:"D",word:"we've gone "},{chord:"A",word:"through "}],
        [{chord:"A",word:"Though it's hurt-ing "},{chord:"E",word:"me, now it's "},{chord:"D",word:"his-to-"},{chord:"Dm",word:"ry "}],
      ]},
      { label: "Verse 2", lines: [
        [{chord:"A",word:"I've played all my "},{chord:"E",word:"cards and that's "},{chord:"D",word:"what you've "},{chord:"A",word:"done too "}],
        [{chord:"A",word:"Noth-ing more to "},{chord:"E",word:"say, no more "},{chord:"D",word:"ace to play, "}],
      ]},
      { label: "Chorus", lines: [
        [{chord:"D",word:"The win-ner takes it "},{chord:"A",word:"all, "}],
        [{chord:"E",word:"The los-er has to "},{chord:"A",word:"fall "}],
        [{chord:"A",word:"It's sim-ple and it's "},{chord:"E",word:"plain, "}],
        [{chord:"D",word:"Why should I com-"},{chord:"A",word:"plain? "}],
      ]},
    ],
  },

];

// ─────────────────────────────────────────────
//  Chord finger position data
//  Also used by Pranathi's chord dictionary page.
// ─────────────────────────────────────────────
const CHORD_DIAGRAMS = {
  C:     { notes: ["C", "E", "G"] },
  D:     { notes: ["D", "F#", "A"] },
  Dm:    { notes: ["D", "F", "A"] },
  E:     { notes: ["E", "G#", "B"] },
  Em:    { notes: ["E", "G", "B"] },
  F:     { notes: ["F", "A", "C"] },
  G:     { notes: ["G", "B", "D"] },
  A:     { notes: ["A", "C#", "E"] },
  Am:    { notes: ["A", "C", "E"] },
  Bb:    { notes: ["Bb", "D", "F"] },
  B:     { notes: ["B", "D#", "F#"] },
  Bm:    { notes: ["B", "D", "F#"] },
  Em7:   { notes: ["E", "G", "B", "D"] },
  Cadd9: { notes: ["C", "E", "G", "D"] },
  Dsus4: { notes: ["D", "G", "A"] },
  A7:    { notes: ["A", "C#", "E", "G"] },
};