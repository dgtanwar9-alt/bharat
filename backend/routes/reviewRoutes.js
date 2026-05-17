const express = require("express");
const router = express.Router();
const Review = require("../models/review");
const defaultReviews = require("../data/defaultReviews");

router.get("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      // Return default reviews instead of empty array
      return res.json({ data: defaultReviews });
    }
    const reviews = await Review.find(req.query).sort({ createdAt: -1 });
    res.json({ data: reviews.length > 0 ? reviews : defaultReviews });
  } catch (error) {
    res.json({ data: defaultReviews });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(404).json({ error: "Not found" });
    }
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ error: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(400).json({ error: "Memory mode not supported for POST" });
    }
    const review = await Review.create(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;