const mongoose = require('mongoose');

const songSchema = new mongoose.Schem({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    lyrics: { type: String, default: '' },
    youtubeLink: { type: String, default: '' },
});

songSchema.index({ title: 'text', artist: 'text' });

module.exports = mongoose.model('Song', songSchema);
