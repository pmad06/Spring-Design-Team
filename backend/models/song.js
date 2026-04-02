const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    id: { type: String, default: '' },
    title: { type: String, required: true },
    artist: { type: String, required: true },
    key: { type: String, default: '' },
    youtubeId: { type: String, default: '' },
    youtubeLink: { type: String, default: '' },
    lyrics: { type: String, default: '' },
    chords: { type: [String], default: [] },
    sheetMusic: { type: mongoose.Schema.Types.Mixed, default: null },
    sections: { type: mongoose.Schema.Types.Mixed, default: null },
});

songSchema.index({ title: 'text', artist: 'text', lyrics: 'text', chords: 'text' });

module.exports = mongoose.model('Song', songSchema);
