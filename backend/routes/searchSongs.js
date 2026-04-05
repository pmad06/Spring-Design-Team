const express = require('express');
const router  = express.Router();
const Song    = require('../models/song');

router.get('/search', async (req, res) => {
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

module.exports = router;
