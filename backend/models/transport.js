const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema({
  type: { type: String, required: true }, // air, rail, bus, rickshaw, etc.
  title: { type: String, required: true },
  details: { type: String, required: true },
  cost: { type: String, required: true },
  city: { type: String, default: "Jaipur" }
}, { timestamps: true });

module.exports = mongoose.model("Transport", transportSchema);