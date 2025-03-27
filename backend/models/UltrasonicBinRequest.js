const mongoose = require("mongoose");

const ultrasonicBinRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Link to user
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  binSize: { type: String, required: true }, // Small, Medium, Large
  address: { type: String, required: true },
  requestDate: { type: Date, default: Date.now }, // Auto-filled request date
});

module.exports = mongoose.model(
  "UltrasonicBinRequest",
  ultrasonicBinRequestSchema
);
