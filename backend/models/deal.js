const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // hotel, package, experience
  description: { type: String, required: true },
  originalPrice: { type: String, required: true },
  discountedPrice: { type: String, required: true },
  discount: { type: String, required: true },
  timer: { type: String, required: true },
  image: String,
  city: { type: String, default: "Jaipur" }
}, { timestamps: true });

module.exports = mongoose.model("Deal", dealSchema);