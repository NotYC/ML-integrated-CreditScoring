// const mongoose = require('mongoose');
//
// const userSchema = new mongoose.Schema({
//   username: String,
//   email: { type: String, unique: true },
//   password: String,
//   isVerified: { type: String, default: "NO" }
//
// });
//
// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
  dob: { type: String, required: true },
  uid: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: String, default: "NO" },
  profilePhoto: { type: String },
  phone: { type: String }
  }, {timestamps: true});

module.exports = mongoose.model('User', userSchema);

