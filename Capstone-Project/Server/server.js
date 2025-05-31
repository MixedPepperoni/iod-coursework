const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/lunchbreak')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message, err.stack);
    process.exit(1);
  });

// Health check route (only one, before app.listen)
app.get('/test', (req, res) => {
  res.send('Test route works!');
});

app.get('/api/health', (req, res) => {
  console.log('Health check requested');  // for debugging
  res.status(200).json({ status: 'OK', mongodb: mongoose.connection.readyState });
});

// Import routes
const itemsRoutes = require('./routes/items');

// Use routes
app.use('/api/items', itemsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
