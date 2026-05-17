const express = require("express");
const router = express.Router();
const Hotel = require("../models/hotel");
const defaultHotels = require("../data/defaultHotels");

router.get("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      let filtered = defaultHotels;
      if (req.query.city) {
        filtered = defaultHotels.filter(h => h.city.toLowerCase() === req.query.city.toLowerCase());
      }
      return res.json({ data: filtered });
    }
    const hotels = await Hotel.find(req.query);
    res.json({ data: hotels.length > 0 ? hotels : defaultHotels });
  } catch (error) {
    // Fallback to defaults on any error
    res.json({ data: defaultHotels });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(404).json({ error: "Not found" });
    }
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ error: "Hotel not found" });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(400).json({ error: "Memory mode not supported for POST" });
    }
    const hotel = await Hotel.create(req.body);
    res.status(201).json(hotel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;