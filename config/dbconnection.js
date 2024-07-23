require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;
require("dotenv").config()


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

// Your schemas and models go here

// Optionally export the db connection
module.exports = db;
