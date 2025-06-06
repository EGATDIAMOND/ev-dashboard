const mongoose = require('mongoose');

const powerModuleSchema = new mongoose.Schema({
  stationId: String,
  PM1: Number,
  PM2: Number,
  timestamp1: Date,
  timestamp2: Date,
});

// ชื่อ collection ต้องตรงกับใน MongoDB (กรณีคุณใช้ชื่อว่า PowerModule)
module.exports = mongoose.model('PowerModule', powerModuleSchema, 'PowerModule');
