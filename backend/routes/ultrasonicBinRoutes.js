const express = require("express");
const router = express.Router();
const UltrasonicBinRequest = require("../models/UltrasonicBinRequest");
const authMiddleware = require("../authMiddleware"); // Ensure user is authenticated

// ✅ Create a new ultrasonic bin request
router.post("/request", authMiddleware, async (req, res) => {
  try {
    const { fullName, email, phone, binSize, address } = req.body;

    const newRequest = new UltrasonicBinRequest({
      userId: req.user.id, // Extract user ID from token
      fullName,
      email,
      phone,
      binSize,
      address,
    });

    await newRequest.save();
    res.status(201).json({ message: "Ultrasonic bin request submitted!" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting request." });
  }
});

// ✅ Fetch all requests for a user
router.get("/user-requests", authMiddleware, async (req, res) => {
  try {
    const requests = await UltrasonicBinRequest.find({ userId: req.user.id });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Error fetching requests." });
  }
});

module.exports = router;
