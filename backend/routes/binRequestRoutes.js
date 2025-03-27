const express = require("express");
const router = express.Router();
const BinRequest = require("../models/binRequestModel.js");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../authMiddleware.js")

// ✅ Function to Extract User ID from Token
const getUserIdFromToken = (req) => {
  const token = req.header("Authorization");
  if (!token) return null;

  try {
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    return decoded.id; // Return User ID
  } catch (error) {
    return null; // Invalid token
  }
};

// ✅ Create a Bin Request (POST /requests)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id; // ✅ Extract userId from middleware

    const { binType, binSize, deliveryAddress, date, timeSlot } = req.body;

    // ✅ Ensure all required fields are provided
    if (!binType || !binSize || !deliveryAddress || !date || !timeSlot) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newRequest = new BinRequest({
      userId, // ✅ Store userId in the request
      binType,
      binSize,
      deliveryAddress,
      date,
      timeSlot,
    });

    await newRequest.save();
    res.status(201).json({ message: "Bin request created successfully!" });
  } catch (error) {
    console.error("❌ Error creating bin request:", error.message);
    res
      .status(500)
      .json({ error: "Server error: Unable to create bin request." });
  }
});

// ✅ Get Bin Requests for the Logged-in User (GET /requests/user)
router.get("/user", async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized access." });

    const requests = await BinRequest.find({ userId }); // ✅ Fetch only requests for this user
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: "Error fetching bin requests" });
  }
});

// ✅ Delete a Bin Request (DELETE /requests/:id)
router.delete("/:id", async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized access." });

    const request = await BinRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ error: "Request not found." });

    // ✅ Ensure the user can only delete their own request
    if (request.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "Not authorized to delete this request." });
    }

    await request.deleteOne();
    res.json({ message: "Bin request canceled successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error canceling bin request" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);
    if (!userId) return res.status(401).json({ error: "Unauthorized access." });

    const { date, timeSlot } = req.body;

    if (!date || !timeSlot) {
      return res
        .status(400)
        .json({ error: "Date and time slot are required." });
    }

    const request = await BinRequest.findById(req.params.id);
    if (!request) return res.status(404).json({ error: "Request not found." });

    if (request.userId.toString() !== userId) {
      return res
        .status(403)
        .json({ error: "Not authorized to update this request." });
    }

    // ✅ Convert date to ISO format
    request.date = new Date(date).toISOString();
    request.timeSlot = timeSlot;
    await request.save();

    res.status(200).json({
      message: "Request rescheduled successfully!",
      updatedRequest: request,
    });
  } catch (error) {
    console.error("Error updating bin request:", error.message);
    res.status(500).json({ error: "Error rescheduling bin request." });
  }
});

module.exports = router;
