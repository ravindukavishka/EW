const mongoose = require("mongoose");

const binRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ Add userId field
  binType: { type: String, required: true },
  binSize: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  date: { type: String, required: true },
  timeSlot: { type: String, required: true },
});

const BinRequest = mongoose.model("BinRequest", binRequestSchema);

module.exports = BinRequest;
