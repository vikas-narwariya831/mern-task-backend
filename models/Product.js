const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  price: String,
  imageUrl: String
});

module.exports = mongoose.model('Product', productSchema);
