// Connects to MongoDB, seeds initial songs, and defines API endpoints for fetching and searching songs.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const Song = require('./models/song');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

async function seedSongs() {
  const existing = await Song.countDocuments();
  if (existing > 0) {
    console.log('Songs already seeded:', existing);
    return;
  }

// Seed data lives in backend/seed/data.js
const { SONGS } = require('./seed/data');

  await Song.insertMany(SONGS);
  console.log('Seeded initial songs:', SONGS.length);
}

app.get('/api/songs', async (req, res) => {
  try {
    const songs = await Song.find().limit(100).lean();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

app.use('/api', require('./routes/searchSongs'));

app.get('/api/song/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).lean();
    if (!song) return res.status(404).json({ error: 'Song not found' });
    res.json(song);
  } catch (err) {
    res.status(500).json({ error: 'Fetch song failed' });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

async function start() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to MongoDB:', MONGO_URI);

  await seedSongs();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start().catch(err => {
  console.error('Failed to start server', err);
  process.exit(1);
});
