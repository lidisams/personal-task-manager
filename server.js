// server.js

// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Import routes
const taskRoutes = require('./routes/taskRoutes'); // Ensure this path is correct

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use('/api/tasks', taskRoutes); // Use task routes

// Set port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // Corrected placeholder
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));