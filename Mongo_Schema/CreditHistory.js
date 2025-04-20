// {
//     _id: ObjectId("..."),
//     bank_id: ObjectId("..."),       // foreign key to bank_accounts._id
//     user_id: ObjectId("..."),       // redundant but useful for direct lookup
//     input: {
//       Age: 30,
//       Marital_Status: "Married",
//       Employment_Status: "Employed",
//       Education_Level: "Postgraduate",
//       Income: 75000,
//       Number_of_Dependents: 2,
//       Credit_Utilization_Ratio: 0.25,
//       Missed_Payments_90days: 0,
//       Total_Credit_Accounts: 5,
//       Debt_to_Income_Ratio: 0.18,
//       Length_of_Credit_History: 6.2,
//       Bankruptcies: 0
//     },
//     score: 770,
//     rating: "Very Good",
//     timestamp: ISODate("2025-04-19T14:30:00Z")
//   }

// models/CreditHistory.js
const mongoose = require('mongoose');

const creditHistorySchema = new mongoose.Schema({
  userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bankId:  { type: mongoose.Schema.Types.ObjectId, ref: 'BankAccount', required: true },

  age:       { type: Number, required: true },
  marital_status: { type: String, required: true },
  profession:     { type: String, required: true },
  education:      { type: String, required: true },
  income:         { type: Number, required: true },
  dependents:     { type: Number, required: true },
  credit_util:    { type: Number, required: true },
  missed_payments: { type: Number, required: true },
  total_accounts:  { type: Number, required: true },
  dti:             { type: Number, required: true },
  credit_history:  { type: Number, required: true },
  bankruptcies:    { type: Number, required: true },

  score:   { type: Number, required: true },
  rating:  { type: String, required: true },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CreditHistory', creditHistorySchema);
