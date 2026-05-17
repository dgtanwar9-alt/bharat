const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, default: "Jaipur" },
  category: { type: String, default: "attractions" },
  description: { type: String, default: "" },
  lat: Number,
  lng: Number,
  image: String,
  entryFee: { type: Number, default: 0 },
  currency: { type: String, default: "INR" }
}, { timestamps: true });

module.exports = mongoose.model("Place", placeSchema);
