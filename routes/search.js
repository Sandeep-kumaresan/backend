const express = require('express');
const router = express.Router();
const Search = require('../models/Search');

router.post('/search', async (req, res) => {
  const { type, text } = req.body;

  try {
    // Save the search query
    const search = new Search({ type, text });
    await search.save();

    // Perform search based on type (user or post)
    let results;
    if (type === 'user') {
      // Search for users
      results = await User.find({ username: { $regex: text, $options: 'i' } });
    } else if (type === 'post') {
      // Search for posts
      results = await Post.find({ content: { $regex: text, $options: 'i' } });
    } else {
      return res.status(400).json({ message: 'Invalid search type' });
    }

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
