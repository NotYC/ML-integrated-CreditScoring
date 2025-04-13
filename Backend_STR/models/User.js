import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
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
  verified: { type: Boolean, default: false },
});

export default mongoose.model('User', UserSchema);
