const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  _id: Number,
  name: String,
  imageUrl: String
});

module.exports = mongoose.model('Category', categorySchema);
