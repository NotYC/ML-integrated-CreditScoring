// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const creditHistoryRoutes = require('./routes/creditHistoryRoutes');

const app = express();
const PORT = 5000;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/api/credit-history', creditHistoryRoutes);

mongoose
  .connect('mongodb://127.0.0.1:27017/yourDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
  })
  .catch(console.error);
