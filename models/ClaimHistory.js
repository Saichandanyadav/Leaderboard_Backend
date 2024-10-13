const mongoose = require('mongoose');

const claimHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    pointsAwarded: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const ClaimHistory = mongoose.model('ClaimHistory', claimHistorySchema);
module.exports = ClaimHistory;
