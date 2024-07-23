const express = require('express');
const router = express.Router();
const Banner = require('../models/banner');

// Get all banners
router.get('/', async (req, res) => {
  try {
    const banners = await Banner.find();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
