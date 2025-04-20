// {
//     _id: ObjectId("..."),           // bankId
//     user_id: ObjectId("..."),       // foreign key to users._id
//     bankName: "ICICI Bank",
//     accountNumber: "XXXX1234",
//     ifsc: "ICIC0001234",
//     accountType: "Savings",
//     addedAt: ISODate("2025-04-19T13:00:00Z")
//   }

// models/BankAccount.js
const mongoose = require('mongoose');

const bankAccountSchema = new mongoose.Schema({
  userId:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // FK
  bankName: { type: String, required: true },
  accountNumber: { type: String, required: true },
  ifscCode: { type: String, required: true },
  accountType: { type: String }, // e.g. 'Savings', 'Current'
  balance:   { type: Number, default: 0 },
  
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BankAccount', bankAccountSchema);
