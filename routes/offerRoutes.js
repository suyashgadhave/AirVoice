const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');

router.get('/', async (req, res) => {
  try {
    const category = req.query.category;
    const offers = await Offer.find({ category });
    res.json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
