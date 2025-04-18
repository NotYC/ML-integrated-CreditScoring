// updateProfile/updateProfileModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  profileImage: String,
  isVerified: { type: String, default: 'NO' }
});

module.exports = mongoose.model('User', userSchema);
