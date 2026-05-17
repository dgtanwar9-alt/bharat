const express = require("express");
const router = express.Router();
const Deal = require("../models/deal");
const defaultDeals = require("../data/defaultDeals");

router.get("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      // Return default deals wrapped in { data: [...] } for frontend
      return res.json({ data: defaultDeals });
    }
    const deals = await Deal.find(req.query);
    res.json({ data: deals.length > 0 ? deals : defaultDeals });
  } catch (error) {
    // Fallback to defaults on any error
    res.json({ data: defaultDeals });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(404).json({ error: "Not found" });
    }
    const deal = await Deal.findById(req.params.id);
    if (!deal) return res.status(404).json({ error: "Deal not found" });
    res.json(deal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(400).json({ error: "Memory mode not supported for POST" });
    }
    const deal = await Deal.create(req.body);
    res.status(201).json(deal);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;