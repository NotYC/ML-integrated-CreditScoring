// {
//     _id: ObjectId("..."),
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@example.com",
//     passwordHash: "...",
//     uid: "A123XYZ456",
//     dob: "1990-01-15",
//     address: {
//       street: "123 Main St",
//       city: "Delhi",
//       state: "DL",
//       postalCode: "110019"
//     },
//     createdAt: ISODate("2025-04-19T12:00:00Z")
//   }

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  address:   { type: String, required: true },
  city:      { type: String, required: true },
  state:     { type: String, required: true },
  postalCode:{ type: String, required: true },
  dob:       { type: Date,   required: true },
  uid:       { type: String, required: true, unique: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true }, // Store hashed
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
