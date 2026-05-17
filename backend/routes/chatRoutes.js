const express = require("express");
const router = express.Router();
const Place = require("../models/place");
const defaultPlaces = require("../data/defaultPlaces");

function makePlaceLine(place) {
  return `${place.name}: ${place.description}`;
}

function findPlacesByCategory(places, category) {
  return places.filter((place) => place.category === category);
}

function findMatchingPlace(places, message) {
  return places.find((place) => message.includes(place.name.toLowerCase()));
}

async function getPlaces(req) {
  if (req.app.locals.useMemoryPlaces) {
    return req.app.locals.memoryPlaces;
  }

  try {
    const places = await Place.find({ city: /^Jaipur$/i }).sort({ category: 1, name: 1 }).lean();
    return places.length ? places : defaultPlaces;
  } catch {
    return defaultPlaces;
  }
}

function buildReply(places, message) {
  const normalizedMessage = message.toLowerCase();
  const attractions = findPlacesByCategory(places, "attractions");
  const food = findPlacesByCategory(places, "food");
  const shopping = findPlacesByCategory(places, "shopping");
  const matchedPlace = findMatchingPlace(places, normalizedMessage);

  if (matchedPlace) {
    return `${matchedPlace.name} ke liye: ${matchedPlace.description} Map aur photo dekhne ke liye us card par View Details press karo.`;
  }

  if (normalizedMessage.includes("food") || normalizedMessage.includes("khana") || normalizedMessage.includes("eat")) {
    return `Jaipur food list: ${food.map(makePlaceLine).join(" ")}`;
  }

  if (normalizedMessage.includes("shop") || normalizedMessage.includes("market") || normalizedMessage.includes("bazaar")) {
    return `Shopping ke liye best options: ${shopping.map(makePlaceLine).join(" ")}`;
  }

  if (normalizedMessage.includes("fort") || normalizedMessage.includes("place") || normalizedMessage.includes("visit")) {
    return `Visit ke liye start karo: ${attractions.map((place) => place.name).join(", ")}. Agar short trip hai to Hawa Mahal, City Palace, aur Jal Mahal ek smooth route banate hain.`;
  }

  if (normalizedMessage.includes("plan") || normalizedMessage.includes("itinerary") || normalizedMessage.includes("day")) {
    return "One day Jaipur plan: morning Hawa Mahal and City Palace, afternoon Albert Hall, evening Jal Mahal, dinner me Dal Baati ya Rajasthani Thali. Shopping ke liye Johari Bazaar ya Bapu Bazaar add kar sakte ho.";
  }

  if (normalizedMessage.includes("hello") || normalizedMessage.includes("hi") || normalizedMessage.includes("namaste")) {
    return "Namaste, main aapka Jaipur AI Guide hoon. Aap places, food, shopping, ya one day plan ke baare me pooch sakte ho.";
  }

  return "Aap Jaipur ke attractions, food, shopping, ya one day trip plan ke baare me pooch sakte ho. Example: Hawa Mahal kaisa hai, best food kya hai, ya one day Jaipur plan banao.";
}

router.post("/", async (req, res) => {
  const message = (req.body.message || "").trim();

  if (!message) {
    return res.status(400).json({ reply: "Please apna question type karo." });
  }

  const places = await getPlaces(req);
  const reply = buildReply(places, message);

  return res.json({ reply });
});

module.exports = router;
