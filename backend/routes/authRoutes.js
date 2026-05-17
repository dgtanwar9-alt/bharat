const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { hashPassword, verifyPassword } = require("../utils/passwords");
const otpStore = new Map();

function getJwtSecret() {
  return process.env.JWT_SECRET || "smarttrip_dev_secret";
}

function normalizeIdentifier(identifier) {
  return identifier.trim().toLowerCase();
}

function isIndianPhone(identifier) {
  return /^[6-9]\d{9}$/.test(identifier);
}

function isEmail(identifier) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
}

function createOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

function createToken(payload) {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });
}

function getMemoryUsers(req) {
  return req.app.locals.memoryUsers;
}

function getMemoryUserByEmail(req, email) {
  return getMemoryUsers(req).get(email.toLowerCase()) || null;
}

function saveMemoryUser(req, user) {
  const normalizedEmail = user.email ? user.email.toLowerCase() : "";
  const id = user.id || normalizedEmail || user.phone || String(Date.now());
  const savedUser = {
    id,
    name: user.name || "",
    email: normalizedEmail,
    phone: user.phone || "",
    password: user.password || ""
  };

  if (normalizedEmail) {
    getMemoryUsers(req).set(normalizedEmail, savedUser);
  }

  return savedUser;
}

function buildUserResponse(user) {
  return {
    name: user?.name || "Traveler",
    email: user?.email || "",
    phone: user?.phone || "",
    identifier: user?.email || user?.phone || ""
  };
}

/* -------------------- SIGNUP -------------------- */
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "Name, email, and password are required." });
  }

  if (!isEmail(email)) {
    return res.status(400).json({ error: "Enter a valid email address." });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: "Password must be at least 6 characters." });
  }

  try {
    if (req.app.locals.useMemoryPlaces) {
      const existingUser = getMemoryUserByEmail(req, email);
      if (existingUser) {
        return res.status(400).json({ error: "Email already registered. Please login." });
      }

      const user = saveMemoryUser(req, {
        name,
        email,
        password: hashPassword(password)
      });

      const token = createToken({ id: user.id, name: user.name, email: user.email });
      return res.json({ message: "Signup successful!", token, user: buildUserResponse(user) });
    }

    // Check if user already exists
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ error: "Email already registered. Please login." });
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashPassword(password)
    });

    const token = createToken({ id: user._id, name: user.name, email: user.email });

    return res.json({ message: "Signup successful!", token, user: buildUserResponse(user) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* -------------------- LOGIN -------------------- */
router.post("/login", async (req, res) => {
  const { phone, email, password } = req.body;

  try {
    if (req.app.locals.useMemoryPlaces) {
      if (email) {
        const normalizedEmail = email.toLowerCase();
        const user = getMemoryUserByEmail(req, normalizedEmail);

        if (!user) {
          return res.status(400).json({ error: "User not found. Please signup first." });
        }

        if (!password || !verifyPassword(password, user.password)) {
          return res.status(401).json({ error: "Invalid email or password." });
        }

        const token = createToken({ id: user.id, name: user.name, email: user.email });
        return res.json({ message: "Login successful!", token, user: buildUserResponse(user) });
      }

      if (phone) {
        const token = createToken({ id: phone, phone });
        return res.json({ message: "Login successful!", token, user: buildUserResponse({ phone }) });
      }

      return res.status(400).json({ error: "Email or phone is required." });
    }

    let user;
    if (email) {
      user = await User.findOne({ email: email.toLowerCase() });

      if (!user) {
        return res.status(400).json({ error: "User not found. Please signup first." });
      }

      if (!password || !verifyPassword(password, user.password || "")) {
        return res.status(401).json({ error: "Invalid email or password." });
      }
    } else if (phone) {
      user = await User.findOne({ phone });
      if (!user) {
        user = await User.create({ phone });
      }
    }

    if (!user) {
      return res.status(400).json({ error: "User not found. Please signup first." });
    }

    const token = createToken({ id: user._id, name: user.name, email: user.email, phone: user.phone });

    res.json({ message: "Login successful!", token, user: buildUserResponse(user) });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/* -------------------- OTP FLOW -------------------- */
router.post("/request-otp", (req, res) => {
  const identifier = normalizeIdentifier(req.body.identifier || "");

  if (!isIndianPhone(identifier) && !isEmail(identifier)) {
    return res.status(400).json({
      error: "Enter a valid Gmail/Email ID or 10 digit Indian mobile number."
    });
  }

  const otp = createOtp();
  otpStore.set(identifier, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000
  });

  return res.json({
    message: isIndianPhone(identifier)
      ? "OTP sent to your mobile number."
      : "OTP sent to your email ID.",
    ...(process.env.NODE_ENV !== "production" ? { devOtp: otp } : {})
  });
});

router.post("/verify-otp", async (req, res) => {
  const identifier = normalizeIdentifier(req.body.identifier || "");
  const otp = String(req.body.otp || "").trim();
  const savedOtp = otpStore.get(identifier);

  if (!savedOtp || savedOtp.expiresAt < Date.now()) {
    otpStore.delete(identifier);
    return res.status(400).json({ error: "OTP expired. Please request a new OTP." });
  }

  if (savedOtp.otp !== otp) {
    return res.status(400).json({ error: "Invalid OTP. Please check and try again." });
  }

  otpStore.delete(identifier);

  let userId = identifier;

  if (!req.app.locals.useMemoryPlaces) {
    const query = isIndianPhone(identifier)
      ? { phone: identifier }
      : { email: identifier };
    const update = isIndianPhone(identifier)
      ? { phone: identifier }
      : { email: identifier };
    const user = await User.findOneAndUpdate(query, update, {
      new: true,
      upsert: true
    });

    userId = user._id;
  } else if (isEmail(identifier)) {
    const existingUser = getMemoryUserByEmail(req, identifier);
    if (!existingUser) {
      saveMemoryUser(req, { email: identifier });
    }
  }

  const token = createToken({ id: userId, identifier });

  return res.json({
    message: "Login successful.",
    token,
    user: { identifier }
  });
});

module.exports = router;
