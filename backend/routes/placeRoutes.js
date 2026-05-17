const express = require("express");
const router = express.Router();
const Place = require("../models/place");
const defaultPlaces = require("../data/defaultPlaces");

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function filterMemoryPlaces(places, query) {
  const city = (query.city || "").toLowerCase();
  const category = (query.category || "").toLowerCase();
  const search = (query.search || "").toLowerCase();

  return places.filter((place) => {
    const placeCity = place.city || "";
    const placeCategory = place.category || "";
    const placeDescription = place.description || "";
    const cityMatches = !city || placeCity.toLowerCase() === city;
    const categoryMatches = !category || placeCategory.toLowerCase() === category;
    const searchableText = `${place.name} ${placeCity} ${placeCategory} ${placeDescription}`.toLowerCase();
    const searchMatches = !search || searchableText.includes(search);

    return cityMatches && categoryMatches && searchMatches;
  });
}

router.post("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      const place = {
        _id: String(Date.now()),
        ...req.body
      };

      req.app.locals.memoryPlaces.push(place);
      return res.status(201).json(place);
    }

    const data = await Place.create(req.body);
    return res.status(201).json(data);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      const filtered = filterMemoryPlaces(req.app.locals.memoryPlaces, req.query);
      return res.json({ data: filtered });
    }

    const { city, category, search } = req.query;
    const filter = {};

    if (city) {
      filter.city = new RegExp(`^${escapeRegex(city)}$`, "i");
    }

    if (category) {
      filter.category = new RegExp(`^${escapeRegex(category)}$`, "i");
    }

    if (search) {
      filter.$or = [
        { name: new RegExp(escapeRegex(search), "i") },
        { description: new RegExp(escapeRegex(search), "i") },
        { category: new RegExp(escapeRegex(search), "i") }
      ];
    }

    const data = await Place.find(filter).sort({ category: 1, name: 1 });
    return res.json({ data: data.length > 0 ? data : defaultPlaces });
  } catch (error) {
    return res.json({ data: defaultPlaces });
  }
});

router.get("/city/:city", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      const data = filterMemoryPlaces(req.app.locals.memoryPlaces, {
        city: req.params.city
      });

      return res.json({ data });
    }

    const data = await Place.find({
      city: new RegExp(`^${escapeRegex(req.params.city)}$`, "i")
    }).sort({ category: 1, name: 1 });

    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/recommend/budget/:budget", async (req, res) => {
  try {
    const budget = parseFloat(req.params.budget);

    if (isNaN(budget) || budget < 0) {
      return res.status(400).json({ error: "Invalid budget amount" });
    }

    if (req.app.locals.useMemoryPlaces) {
      // Filter memory places by budget (attractions only)
      const attractions = req.app.locals.memoryPlaces
        .filter(place => place.category === "attractions")
        .filter(place => (place.entryFee || 0) <= budget)
        .sort((a, b) => (b.entryFee || 0) - (a.entryFee || 0));

      // Calculate total fee for all recommended places
      const totalCost = attractions.reduce((sum, place) => sum + (place.entryFee || 0), 0);
      const remainingBudget = budget - totalCost;

      return res.json({
        recommendedPlaces: attractions,
        totalAttractionCost: totalCost,
        remainingBudget: remainingBudget,
        count: attractions.length,
        message: `Found ${attractions.length} attractions within your budget of ₹${budget}`,
        budgetBreakdown: attractions.map(place => ({
          name: place.name,
          entryFee: place.entryFee || 0,
          description: place.description
        }))
      });
    }

    // Database approach
    const attractions = await Place.find({
      category: "attractions",
      entryFee: { $lte: budget }
    }).sort({ entryFee: -1 });

    const totalCost = attractions.reduce((sum, place) => sum + (place.entryFee || 0), 0);
    const remainingBudget = budget - totalCost;

    return res.json({
      recommendedPlaces: attractions,
      totalAttractionCost: totalCost,
      remainingBudget: remainingBudget,
      count: attractions.length,
      message: `Found ${attractions.length} attractions within your budget of ₹${budget}`,
      budgetBreakdown: attractions.map(place => ({
        name: place.name,
        entryFee: place.entryFee || 0,
        description: place.description
      }))
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    if (req.app.locals.useMemoryPlaces) {
      const data = req.app.locals.memoryPlaces.find((place) => place._id === req.params.id);

      if (!data) {
        return res.status(404).json({ error: "Place not found" });
      }

      return res.json(data);
    }

    const data = await Place.findById(req.params.id);

    if (!data) {
      return res.status(404).json({ error: "Place not found" });
    }

    return res.json(data);
  } catch (error) {
    return res.status(400).json({ error: "Invalid place id" });
  }
});

module.exports = router;
