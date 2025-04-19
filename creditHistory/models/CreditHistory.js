// backend/models/CreditHistory.js
const mongoose = require('mongoose');

const CreditHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('CreditHistory', CreditHistorySchema);
