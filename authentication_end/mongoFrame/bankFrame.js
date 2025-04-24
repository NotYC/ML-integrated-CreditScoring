const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bankName: { type: String, required: true },
    branch: { type: String, required: true },
    accountNumber: { type: String, required: true },
    ifsc: { type: String, required: true },
    accountType: { type: String, required: true },
    pan: { type: String, required: true },
    phone: { type: String },
    }, {timestamps: true});

module.exports = mongoose.model('Bank', bankSchema);
