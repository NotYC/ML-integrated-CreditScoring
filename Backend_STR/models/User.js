// Backend_STR/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  city: String,
  state: String,
  postalCode: String,
  dob: Date,
  uid: String,
  email: { type: String, unique: true },
  password: String,
  verified: { type: String, default: 'no' },
});

module.exports = mongoose.model('User', userSchema);
