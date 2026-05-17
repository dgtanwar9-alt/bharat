const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // street, cafe, restaurant, rooftop
  location: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: Number, default: 0 },
  description: String,
  image: String,
  city: { type: String, default: "Jaipur" }
}, { timestamps: true });

module.exports = mongoose.model("Food", foodSchema);