const mongoose = require('mongoose');

const claimHistorySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pointsAwarded: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ClaimHistory', claimHistorySchema);
