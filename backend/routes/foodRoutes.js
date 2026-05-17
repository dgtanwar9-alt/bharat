const express = require("express");
const router = express.Router();
const Food = require("../models/food");
const defaultFood = require("../data/defaultFood");

router.get("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      let filtered = defaultFood;
      if (req.query.city) {
        filtered = defaultFood.filter(f => f.city && f.city.toLowerCase() === req.query.city.toLowerCase());
      }
      return res.json({ data: filtered });
    }
    const foods = await Food.find(req.query);
    res.json({ data: foods.length > 0 ? foods : defaultFood });
  } catch (error) {
    // Fallback to defaults on any error
    res.json({ data: defaultFood });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(404).json({ error: "Not found" });
    }
    const food = await Food.findById(req.params.id);
    if (!food) return res.status(404).json({ error: "Food not found" });
    res.json(food);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(400).json({ error: "Memory mode not supported for POST" });
    }
    const food = await Food.create(req.body);
    res.status(201).json(food);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;