// Connects to MongoDB, seeds initial songs, and defines API endpoints for fetching and searching songs.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Song = require('./models/song');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

async function seedSongs() {
  const existing = await Song.countDocuments();
  if (existing > 0) {
    console.log('Songs already seeded:', existing);
    return;
  }

// not sure if this will work but im trying to import the data from the data.js file in the pages folder, which is where we have the songs data stored
const songs = require('../pages/data.js');

  await Song.insertMany(songs);
  console.log('Seeded initial songs:', songs.length);
}

app.get('/api/songs', async (req, res) => {
  try {
    const songs = await Song.find().limit(100).lean();
    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const query = (req.query.q || req.query.query || '').trim();
    if (!query) {
      const all = await Song.find().limit(100).lean();
      return res.json(all);
    }

    const results = await Song.find({ $text: { $search: query } })
      .limit(100)
      .lean();

    res.json(results);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Search failed' });
  }
});

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
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
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