const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  place: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  text: { type: String, required: true },
  date: { type: String, required: true },
  avatar: { type: String, default: "" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);