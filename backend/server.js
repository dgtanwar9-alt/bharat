/* ============================================================
   BHARAT GUIDE – BACKEND SERVER
   ============================================================ */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");

const app = express();
const PORT = process.env.PORT || 5050;
const FRONTEND_DIR = path.join(__dirname, "..", "fronted");

/* -------------------- MIDDLEWARE -------------------- */

// Security middleware
app.use(helmet());

// Rate limiter for API endpoints
const apiLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply CORS with configurable origins (allow local dev)
const allowedOrigins = (process.env.CORS_ORIGIN || "https://bharat-india.vercel.app, http://localhost:3000").split(/,\s*/);
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    }
    return callback(new Error("CORS policy: This origin is not allowed."));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({ limit: '1mb' }));
app.use(mongoSanitize());
app.use(apiLimiter);

/* -------------------- DATABASE -------------------- */

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/smarttrip";

// Default data imports
const defaultPlaces = require("./data/defaultPlaces");
const defaultHotels = require("./data/defaultHotels");
const defaultFood = require("./data/defaultFood");
const defaultDeals = require("./data/defaultDeals");
const defaultTransport = require("./data/defaultTransport");
const defaultReviews = require("./data/defaultReviews");

// Memory fallback flag
app.locals.useMemoryPlaces = false;
app.locals.memoryPlaces = [...defaultPlaces];
app.locals.memoryUsers = new Map();

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.locals.useMemoryPlaces = false;
  })
  .catch((err) => {
    console.warn("⚠️  MongoDB connection failed — running in MEMORY mode");
    console.warn("   Reason:", err.message);
    app.locals.useMemoryPlaces = true;
  });

/* -------------------- ROUTES -------------------- */

// Import route files
const authRoutes = require("./routes/authRoutes");
const placeRoutes = require("./routes/placeRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const foodRoutes = require("./routes/foodRoutes");
const dealRoutes = require("./routes/dealRoutes");
const transportRoutes = require("./routes/transportRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const chatRoutes = require("./routes/chatRoutes");
const cityGuideRoutes = require("./routes/cityGuideRoutes");
const stateGuideRoutes = require("./routes/stateGuideRoutes");

// Mount routes — MATCHING FRONTEND API CALLS
// Frontend calls /api/hotels
app.use("/api/hotels", hotelRoutes);

// Frontend calls /api/restaurants (mapped to food routes)
app.use("/api/restaurants", foodRoutes);
app.use("/api/food", foodRoutes); // also keep /api/food for backward compat

// Frontend calls /api/trip (mapped to transport routes)
app.use("/api/trip", transportRoutes);
app.use("/api/transport", transportRoutes); // backward compat

// Frontend calls /api/packages (mapped to deal routes)
app.use("/api/packages", dealRoutes);
app.use("/api/deals", dealRoutes); // backward compat

// Frontend calls /api/places
app.use("/api/places", placeRoutes);

// Reusable city/state guides used by the new smarttrip-clean frontend
app.use("/api/cities", cityGuideRoutes);
app.use("/api/states", stateGuideRoutes);

// Reviews
app.use("/api/reviews", reviewRoutes);

// Auth
app.use("/api/auth", authRoutes);

// AI Chat
app.use("/api/chat", chatRoutes);

/* -------------------- NEWSLETTER ENDPOINT -------------------- */

const newsletterSubscribers = [];

app.post("/api/newsletter", (req, res) => {
  const { email } = req.body || {};
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailReg.test(email)) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (newsletterSubscribers.includes(email.toLowerCase())) {
    return res.json({ message: "You are already subscribed!" });
  }

  newsletterSubscribers.push(email.toLowerCase());
  return res.json({ message: "Successfully subscribed to newsletter!" });
});

/* -------------------- CONTACT ENDPOINT -------------------- */

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Minimal logging in production
  if (process.env.NODE_ENV !== 'production') {
    console.log(`📩 Contact: ${name} (${email}): ${message}`);
  }

  return res.json({ message: "Message received! We will get back to you soon." });
});

/* -------------------- HEALTH CHECK -------------------- */

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    name: "Bharat Guide Backend API",
    version: "1.0.0",
    endpoints: {
      hotels: "/api/hotels",
      restaurants: "/api/restaurants",
      places: "/api/places",
      packages: "/api/packages",
      trip: "/api/trip",
      reviews: "/api/reviews",
      auth: "/api/auth",
      chat: "/api/chat",
      newsletter: "/api/newsletter",
      contact: "/api/contact"
    }
  });
});

/* -------------------- STATIC FRONTEND -------------------- */

app.use("/assets", express.static(path.join(FRONTEND_DIR, "assets")));
app.use("/js", express.static(path.join(FRONTEND_DIR, "js")));

app.get("/", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "home.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "home.html"));
});

app.get("/city", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "city.html"));
});

app.get("/district", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "district.html"));
});

app.get("/login", (req, res) => {
  // login now served by index.html in frontend
  res.sendFile(path.join(FRONTEND_DIR, "index.html"));
});

app.get("/home.html", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "home.html"));
});

app.get("/city.html", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "city.html"));
});

app.get("/district.html", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "district.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(FRONTEND_DIR, "index.html"));
});

// Fallback error handler — hide stack traces in production
app.use(function (err, req, res, next) {
  console.error(err && err.stack ? err.stack : err);
  var message = process.env.NODE_ENV === 'production' ? 'Internal server error' : (err && err.message) || 'Internal server error';
  res.status(err && err.status ? err.status : 500).json({ error: message });
});

/* -------------------- START SERVER -------------------- */

app.listen(PORT, () => {
  console.log(`\n🚀 Bharat Guide Backend running on http://localhost:${PORT}`);
  console.log("   Mode: auto (MongoDB with memory fallback)\n");
});
