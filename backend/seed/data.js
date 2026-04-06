
// Seed data and optional direct-seed script.
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Song = require('../models/song');

function loadEnvFromFile(envPath) {
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let val = line.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = val;
    }
  }
}

loadEnvFromFile(path.resolve(__dirname, '..', '.env'));

const SONGS = [

  //  1. TWINKLE TWINKLE LITTLE STAR
  {
    id: "twinkle-twinkle",
    title: "Twinkle Twinkle Little Star",
    artist: "Traditional",
    key: "C Major",
    youtubeId: "yCjJyiqpAuU",
    chords: ["C", "F", "G"],
    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
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

  //  Guitar key: G Major (capo 1 for original Ab)
  //  Chords: G, Em, C, D
  {
    id: "die-with-a-smile",
    title: "Die With a Smile",
    artist: "Bruno Mars & Lady Gaga",
    key: "G Major (Capo 1)",
    youtubeId: "kPa7bsKwL-c",
    chords: ["G", "Em", "C", "D"],

    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
      measures: [
        // Verse: "I, I just woke up from a dream"
        [ {key:"d/4",dur:"q",lyric:"I,",chord:"G"},    {key:"d/4",dur:"q",lyric:"I"},    {key:"b/4",dur:"q",lyric:"just"},  {key:"b/4",dur:"q",lyric:"woke"} ],
        [ {key:"g/4",dur:"q",lyric:"up",chord:"Em"},   {key:"g/4",dur:"q",lyric:"from"}, {key:"a/4",dur:"q",lyric:"a"},    {key:"b/4",dur:"q",lyric:"dream,"} ],
        [ {key:"c/5",dur:"q",lyric:"Where",chord:"C"}, {key:"b/4",dur:"q",lyric:"you"},  {key:"a/4",dur:"q",lyric:"and"},  {key:"g/4",dur:"q",lyric:"I"} ],
        [ {key:"f#/4",dur:"h",lyric:"had",chord:"D"},  {key:"e/4",dur:"h",lyric:"ev-'ry-thing."} ],

        // "Your parents stood by our side"
        [ {key:"d/4",dur:"q",lyric:"Your",chord:"G"},  {key:"d/4",dur:"q",lyric:"par-"}, {key:"b/4",dur:"q",lyric:"ents"}, {key:"b/4",dur:"q",lyric:"stood"} ],
        [ {key:"g/4",dur:"q",lyric:"by",chord:"Em"},   {key:"g/4",dur:"q",lyric:"our"}, {key:"a/4",dur:"q",lyric:"side,"},  {key:"a/4",dur:"q",lyric:"and"} ],
        [ {key:"c/5",dur:"q",lyric:"I",chord:"C"},     {key:"b/4",dur:"q",lyric:"gave"}, {key:"a/4",dur:"q",lyric:"you"},  {key:"g/4",dur:"q",lyric:"my"} ],
        [ {key:"f#/4",dur:"h",lyric:"last",chord:"D"}, {key:"e/4",dur:"h",lyric:"name."} ],

        // Chorus: "If the world was ending"
        [ {key:"g/4",dur:"q",lyric:"If",chord:"G"},    {key:"b/4",dur:"q",lyric:"the"},  {key:"d/5",dur:"q",lyric:"world"}, {key:"d/5",dur:"q",lyric:"was"} ],
        [ {key:"e/5",dur:"h",lyric:"end-",chord:"Em"}, {key:"d/5",dur:"h",lyric:"ing,"} ],
        [ {key:"c/5",dur:"q",lyric:"I'd",chord:"C"},   {key:"b/4",dur:"q",lyric:"wan-"}, {key:"a/4",dur:"q",lyric:"na"},  {key:"g/4",dur:"q",lyric:"be"} ],
        [ {key:"a/4",dur:"h",lyric:"next",chord:"D"},  {key:"g/4",dur:"h",lyric:"to you."} ],

        // "If the party was over"
        [ {key:"g/4",dur:"q",lyric:"If",chord:"G"},    {key:"b/4",dur:"q",lyric:"the"},  {key:"d/5",dur:"q",lyric:"par-"}, {key:"d/5",dur:"q",lyric:"ty"} ],
        [ {key:"e/5",dur:"h",lyric:"was",chord:"Em"},  {key:"d/5",dur:"h",lyric:"o-ver,"} ],
        [ {key:"c/5",dur:"q",lyric:"and",chord:"C"},   {key:"b/4",dur:"q",lyric:"our"},  {key:"a/4",dur:"q",lyric:"time"},  {key:"g/4",dur:"q",lyric:"on"} ],
        [ {key:"a/4",dur:"h",lyric:"Earth",chord:"D"}, {key:"g/4",dur:"h",lyric:"was through,"} ],

        // "I'd wanna hold you just like this"
        [ {key:"g/4",dur:"q",lyric:"I'd",chord:"G"},   {key:"a/4",dur:"q",lyric:"wan-"}, {key:"b/4",dur:"q",lyric:"na"},  {key:"b/4",dur:"q",lyric:"hold"} ],
        [ {key:"b/4",dur:"q",lyric:"you",chord:"Em"},  {key:"a/4",dur:"q",lyric:"just"}, {key:"g/4",dur:"q",lyric:"like"}, {key:"f#/4",dur:"q",lyric:"this,"} ],
        [ {key:"e/4",dur:"q",lyric:"and",chord:"C"},   {key:"g/4",dur:"q",lyric:"die"},  {key:"a/4",dur:"q",lyric:"with"}, {key:"b/4",dur:"q",lyric:"a"} ],
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

  //  Key: D minor
  //  Chords: Dm, F, C, Bb (Bb shown as A# in some charts)
  {
    id: "back-to-black",
    title: "Back to Black",
    artist: "Amy Winehouse",
    key: "D Minor",
    youtubeId: "TJAfLE39ZZ8",
    chords: ["Dm", "F", "C", "Bb"],

    sheetMusic: {
      timeSignature: "4/4",
      clef: "treble",
      measures: [
        // Verse: "He left no time to regret"
        [ {key:"d/4",dur:"q",lyric:"He",chord:"Dm"},  {key:"f/4",dur:"q",lyric:"left"}, {key:"a/4",dur:"q",lyric:"no"},   {key:"a/4",dur:"q",lyric:"time"} ],
        [ {key:"a/4",dur:"q",lyric:"to",chord:"F"},   {key:"g/4",dur:"q",lyric:"re-"},  {key:"f/4",dur:"h",lyric:"gret"} ],
        [ {key:"e/4",dur:"q",lyric:"Kept",chord:"C"}, {key:"f/4",dur:"q",lyric:"his"},  {key:"g/4",dur:"q",lyric:"dick"},  {key:"g/4",dur:"q",lyric:"wet"} ],
        [ {key:"f/4",dur:"h",lyric:"with",chord:"Bb"},{key:"d/4",dur:"h",lyric:"his"} ],

        // "same Juliette"
        [ {key:"d/4",dur:"q",lyric:"same",chord:"Dm"},{key:"f/4",dur:"q",lyric:"Ju-"},  {key:"a/4",dur:"q",lyric:"li-"},  {key:"a/4",dur:"q",lyric:"ette"} ],
        [ {key:"a/4",dur:"h",lyric:"",chord:"F"},     {key:"f/4",dur:"h",lyric:""} ],
        [ {key:"e/4",dur:"q",lyric:"And",chord:"C"},  {key:"f/4",dur:"q",lyric:"she"},  {key:"g/4",dur:"q",lyric:"had"},  {key:"g/4",dur:"q",lyric:"the"} ],
        [ {key:"f/4",dur:"h",lyric:"nerve",chord:"Bb"},{key:"d/4",dur:"h",lyric:"to"} ],

        // "And I grieve"
        [ {key:"d/4",dur:"q",lyric:"And",chord:"Dm"}, {key:"d/4",dur:"q",lyric:"I"},    {key:"f/4",dur:"q",lyric:"grieve"},  {key:"a/4",dur:"q",lyric:""} ],
        [ {key:"a/4",dur:"h",lyric:"",chord:"F"},     {key:"c/5",dur:"h",lyric:""} ],
        [ {key:"b/4",dur:"q",lyric:"'cause",chord:"C"},{key:"a/4",dur:"q",lyric:"I"},   {key:"g/4",dur:"q",lyric:"be-"},  {key:"g/4",dur:"q",lyric:"lieved"} ],
        [ {key:"f/4",dur:"h",lyric:"",chord:"Bb"},    {key:"d/4",dur:"h",lyric:""} ],

        // Chorus: "We only said goodbye with words"
        [ {key:"d/4",dur:"q",lyric:"We",chord:"Dm"},  {key:"f/4",dur:"q",lyric:"on-"},  {key:"a/4",dur:"q",lyric:"ly"},   {key:"c/5",dur:"q",lyric:"said"} ],
        [ {key:"a/4",dur:"q",lyric:"good-",chord:"F"},{key:"a/4",dur:"q",lyric:"bye"},  {key:"g/4",dur:"q",lyric:"with"}, {key:"f/4",dur:"q",lyric:"words"} ],
        [ {key:"e/4",dur:"q",lyric:"I",chord:"C"},    {key:"f/4",dur:"q",lyric:"died"},  {key:"g/4",dur:"q",lyric:"a"},   {key:"g/4",dur:"q",lyric:"hun-"} ],
        [ {key:"f/4",dur:"h",lyric:"dred",chord:"Bb"},{key:"d/4",dur:"h",lyric:"times"} ],

        // "You go back to her"
        [ {key:"d/4",dur:"q",lyric:"You",chord:"Dm"}, {key:"f/4",dur:"q",lyric:"go"},   {key:"a/4",dur:"q",lyric:"back"}, {key:"a/4",dur:"q",lyric:"to"} ],
        [ {key:"a/4",dur:"h",lyric:"her",chord:"F"},  {key:"g/4",dur:"h",lyric:""} ],
        [ {key:"e/4",dur:"q",lyric:"And",chord:"C"},  {key:"f/4",dur:"q",lyric:"I"},    {key:"g/4",dur:"q",lyric:"go"},  {key:"a/4",dur:"q",lyric:"back"} ],
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

];

//  Chord finger position data
//  Also used by Pranathi's chord dictionary page.
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
  Bb:    { fingers:[[1,1],[2,1],[3,3],[4,3],[5,3],[6,1]], open:[], mute:[], barre:1 },
  B:     { fingers:[[1,2],[2,4],[3,4],[4,4],[5,2],[6,2]], open:[], mute:[], barre:2 },
  Bm:    { fingers:[[1,2],[2,3],[3,4],[4,4],[5,2],[6,2]], open:[], mute:[], barre:2 },
  Em7:   { fingers:[[4,2],[5,2]], open:[1,2,3,6], mute:[], barre:null },
  Cadd9: { fingers:[[3,2],[4,3],[5,3]], open:[1,2], mute:[6], barre:null },
  Dsus4: { fingers:[[1,3],[2,3],[3,2]], open:[4], mute:[5,6], barre:null },
  A7:    { fingers:[[2,2],[4,2]], open:[1,3,5], mute:[6], barre:null },
  
};

module.exports = { SONGS, CHORD_DIAGRAMS };

async function seedIfRunDirectly() {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/music-app';

  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB:', MONGO_URI);

  // Upsert by `id` so changes in seed data update existing docs.
  const ops = SONGS.map(song => ({
    updateOne: {
      filter: { id: song.id },
      update: { $set: song },
      upsert: true,
    },
  }));

  const result = await Song.bulkWrite(ops);
  const matched = result.matchedCount || 0;
  const modified = result.modifiedCount || 0;
  const upserted = result.upsertedCount || 0;
  console.log('Upserted songs by id:', { matched, modified, upserted });

  await mongoose.disconnect();
}

if (require.main === module) {
  seedIfRunDirectly().catch(err => {
    console.error('Seeding failed', err);
    process.exit(1);
  });
}
