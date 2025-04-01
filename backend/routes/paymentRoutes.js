const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");
const authMiddleware = require("../authMiddleware"); // Make sure token is verified

// POST /payments - Add new payment
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { amount, method, transactionId, status } = req.body;

    const newPayment = new Payment({
      userId: req.user.id,
      amount,
      method,
      transactionId,
      status: status || "pending",
    });

    const savedPayment = await newPayment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(500).json({ error: "Failed to process payment" });
  }
});

// GET /payments/user - Get user's payment history
router.get("/user", authMiddleware, async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.user.id }).sort({
      paidAt: -1,
    });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch payment history" });
  }
});

// GET /payments/all - Admin route to fetch all payments
router.get("/all", authMiddleware, async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }

  try {
    const allPayments = await Payment.find().populate(
      "userId",
      "firstName lastName email"
    );
    res.json(allPayments);
  } catch (error) {
    res.status(500).json({ error: "Failed to load payments" });
  }
});

module.exports = router;
