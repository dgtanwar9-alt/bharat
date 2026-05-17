const express = require("express");
const router = express.Router();
const Transport = require("../models/transport");
const defaultTransport = require("../data/defaultTransport");

router.get("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      let filtered = defaultTransport;
      if (req.query.city) {
        filtered = defaultTransport.filter(t => t.city && t.city.toLowerCase() === req.query.city.toLowerCase());
      }
      return res.json({ data: filtered });
    }
    const transports = await Transport.find(req.query);
    res.json({ data: transports.length > 0 ? transports : defaultTransport });
  } catch (error) {
    // Fallback to defaults on any error
    res.json({ data: defaultTransport });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(404).json({ error: "Not found" });
    }
    const transport = await Transport.findById(req.params.id);
    if (!transport) return res.status(404).json({ error: "Transport not found" });
    res.json(transport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      return res.status(400).json({ error: "Memory mode not supported for POST" });
    }
    const transport = await Transport.create(req.body);
    res.status(201).json(transport);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;