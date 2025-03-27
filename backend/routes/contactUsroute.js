const express = require("express");
const router = express.Router();
const Contact = require("../models/contactUs");

// ✅ Route to Submit Contact Form
router.post("/submit", async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    // Validate input
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    // Save to database
    const newContact = new Contact({ fullName, email, message });
    await newContact.save();

    res
      .status(201)
      .json({ message: "Your message has been sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error submitting message. Please try again." });
  }
});

// ✅ Route to Fetch All Contact Messages (Admin only)
router.get("/all", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages." });
  }
});

module.exports = router;
