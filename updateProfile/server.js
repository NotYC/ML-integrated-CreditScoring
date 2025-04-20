// updateProfile/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('/updateProfileRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/profile', router);

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/creditScoreDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
})
.catch((err) => console.error('MongoDB connection error:', err));
