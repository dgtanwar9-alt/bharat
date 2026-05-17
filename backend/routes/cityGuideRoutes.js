const express = require("express");

const router = express.Router();
const cityGuides = require("../../fronted/js/cityData");

function normalizeLookupToken(value) {
  return decodeURIComponent(String(value || "").trim().toLowerCase())
    .replace(/\+/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\s+/g, "");
}

function buildLookupMap() {
  const lookup = {};

  Object.entries(cityGuides || {}).forEach(([key, city]) => {
    const aliases = Array.isArray(city?.aliases) ? city.aliases : [];
    [key, city?.name, ...aliases].forEach((value) => {
      const normalized = normalizeLookupToken(value);
      if (normalized) {
        lookup[normalized] = key;
      }
    });
  });

  return lookup;
}

function resolveCityKey(value) {
  const lookup = buildLookupMap();
  return lookup[normalizeLookupToken(value)] || "";
}

function createSummary([key, city]) {
  return {
    key,
    name: city.name,
    state: city.state,
    description: city.description,
    heroImage: city.heroImage,
    heroHighlights: city.heroHighlights || [],
    aliases: city.aliases || [],
    counts: {
      attractions: Array.isArray(city.attractions) ? city.attractions.length : 0,
      hotels: Array.isArray(city.hotels) ? city.hotels.length : 0,
      food: Array.isArray(city.food) ? city.food.length : 0,
      transport: Array.isArray(city.transport) ? city.transport.length : 0
    }
  };
}

router.get("/", (req, res) => {
  const entries = Object.entries(cityGuides || {});

  if (req.query.full === "true") {
    return res.json({
      data: cityGuides,
      count: entries.length
    });
  }

  const stateFilter = String(req.query.state || "").trim().toLowerCase();
  const search = String(req.query.search || "").trim().toLowerCase();

  const filtered = entries.filter(([, city]) => {
    const stateMatches = !stateFilter || String(city.state || "").toLowerCase() === stateFilter;
    const searchableText = `${city.name || ""} ${city.state || ""} ${(city.aliases || []).join(" ")}`.toLowerCase();
    const searchMatches = !search || searchableText.includes(search);
    return stateMatches && searchMatches;
  });

  return res.json({
    data: filtered.map(createSummary),
    count: filtered.length
  });
});

router.get("/:cityKey", (req, res) => {
  const key = resolveCityKey(req.params.cityKey);

  if (!key || !cityGuides[key]) {
    return res.status(404).json({ error: "City guide not found." });
  }

  return res.json({
    data: {
      key,
      ...cityGuides[key]
    }
  });
});

module.exports = router;

