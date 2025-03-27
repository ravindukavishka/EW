const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    console.log("❌ No token provided");
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Extract only the token part from "Bearer TOKEN_STRING"
    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      console.log("❌ Invalid token format:", token);
      return res.status(401).json({ error: "Invalid token format." });
    }

    const decoded = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
    req.user = decoded; // Attach user data to request
    console.log("✅ Token Verified:", decoded);
    next();
  } catch (error) {
    console.log("❌ Token verification failed:", error.message);
    res.status(403).json({ error: "Invalid or expired token." });
  }
};

module.exports = authMiddleware;
