const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
  _id: String,
  image: String,
  heading: String,
  subtext: String,
  button: String,
  link: String
});

module.exports = mongoose.model('Banner', bannerSchema);
