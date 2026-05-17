const express = require("express");

const router = express.Router();
const stateGuides = require("../../assets/js/district");

function normalizeStateKey(value) {
  if (!value) return "rajasthan";

  const raw = String(value).trim().toLowerCase();
  const aliasMap = {
    "himachal-pradesh": "himachal",
    "new-delhi": "delhi",
    delhi: "delhi",
    goa: "goa",
    kerala: "kerala",
    rajasthan: "rajasthan",
    "uttar-pradesh": "uttar-pradesh",
    "andhra-pradesh": "andhra-pradesh",
    "tamil-nadu": "tamil-nadu",
    ladakh: "ladakh",
    "jammu-and-kashmir": "jammu-and-kashmir"
  };

  return aliasMap[raw] || raw;
}

function createSummary([key, state]) {
  return {
    key,
    label: state.header?.label || key,
    title: state.header?.title || key,
    subtitle: state.header?.subtitle || "",
    heroImg: state.header?.heroImg || "",
    topPlaceCount: Array.isArray(state.topPlaces) ? state.topPlaces.length : 0,
    morePlaceCount: Array.isArray(state.morePlaces) ? state.morePlaces.length : 0
  };
}

router.get("/", (req, res) => {
  const entries = Object.entries(stateGuides || {});

  if (req.query.full === "true") {
    return res.json({
      data: stateGuides,
      count: entries.length
    });
  }

  return res.json({
    data: entries.map(createSummary),
    count: entries.length
  });
});

router.get("/:stateKey", (req, res) => {
  const key = normalizeStateKey(req.params.stateKey);
  const state = stateGuides[key];

  if (!state) {
    return res.status(404).json({ error: "State guide not found." });
  }

  return res.json({
    data: {
      key,
      ...state
    }
  });
});

module.exports = router;
