const mongoose = require('mongoose');

const generationHistorySchema = new mongoose.Schema({
    income: { type: Number, required: true },               // Income
    NoD: { type: Number, required: true },                  // Number of Dependents
    CUratio: { type: Number, required: true },              // Credit Utilization Ratio
    MissPayment: { type: Number, required: true },          // Missed Payments(90 days)
    CrdAcc: { type: Number, required: true },               // Total Credit Accounts
    D2Iratio: { type: Number, required: true },             // Debt-to-Income Ratio
    lenCH: { type: Number, required: true },                // Length of Credit History
    Bankruptcies: { type: Number, required: true },         // Bankruptcy count
    bankId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bank',
        required: true
    },              
    score: { type: String, required: true },              
    rating: { type: String, required: true }
}, {
    timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('GenerationHistory', generationHistorySchema);
