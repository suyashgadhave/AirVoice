const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  id: Number,
  plan: Number,
  data: String,
  validity: String,
  SMS: Number,
  category: String
});

module.exports = mongoose.model('Offer', offerSchema, 'offers');
