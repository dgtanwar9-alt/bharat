const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, default: 0 },
  amenities: [String],
  image: String,
  tier: { type: String, enum: ["budget", "mid", "luxury"], required: true },
  description: String,
  city: { type: String, default: "Jaipur" }
}, { timestamps: true });

module.exports = mongoose.model("Hotel", hotelSchema);