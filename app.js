const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/products', require('./routes/ProductRoutes'));
app.use('/api/banners', require('./routes/BannerRoutes'));
app.use('/api/categories', require('./routes/CategoryRoutes'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


