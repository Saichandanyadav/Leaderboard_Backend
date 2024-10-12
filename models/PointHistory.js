const mongoose = require('mongoose');

const pointHistorySchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  pointsAwarded: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PointHistory', pointHistorySchema);
