import express from "express";
import Booking from "../models/Booking.js";
import verifyAdmin from "../middleware/auth.js"; 

const router = express.Router();


// Get all bookings
router.get("/bookings", verifyAdmin, async (req, res) => {
  const bookings = await Booking.find().populate("clientId", "name email");
  res.json(bookings);
});

// Update booking status
router.put("/booking/:id", verifyAdmin, async (req, res) => {
  const booking = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(booking);
});

export default router;
