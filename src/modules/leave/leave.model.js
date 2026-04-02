const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
  employeeId: String,
  type: String,
  fromDate: Date,
  toDate: Date,
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Leave', leaveSchema);