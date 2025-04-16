const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  isVerified: { type: String, default: "NO" }
});

module.exports = mongoose.model('User', userSchema);
