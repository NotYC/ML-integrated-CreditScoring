// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  address:   { type: String, required: true },
  city:      { type: String, required: true },
  state:     { type: String, required: true },
  postalCode:{ type: String, required: true },
  dob:       { type: Date, required: true },
  uid:       { type: String, required: true, unique: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
