const crypto = require("crypto");

const HASH_PREFIX = "scrypt";

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${HASH_PREFIX}$${salt}$${hash}`;
}

function verifyPassword(password, storedValue) {
  if (!storedValue) return false;

  if (!storedValue.startsWith(`${HASH_PREFIX}$`)) {
    return storedValue === password;
  }

  const parts = storedValue.split("$");
  if (parts.length !== 3) return false;

  const salt = parts[1];
  const storedHash = parts[2];
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");

  return crypto.timingSafeEqual(
    Buffer.from(storedHash, "hex"),
    Buffer.from(hash, "hex")
  );
}

module.exports = {
  hashPassword,
  verifyPassword
};

