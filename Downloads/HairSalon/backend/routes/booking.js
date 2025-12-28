import express from "express"
import verifyToken from "../middleware/verifytoken.js";
const bookingRoutes = express.Router()
import Booking from "../models/Booking.js";


bookingRoutes.post("/", verifyToken, async (req, res) => {
  try {
    const { services, date, time } = req.body;

    if (!Array.isArray(services) || services.length === 0) {
      return res.status(400).json({ error: "Services must be a non-empty array." });
    }

    if (!date || !time) {
      return res.status(400).json({ error: "Date and time are required." });
    }

    const booking = new Booking({
      clientId: req.user.id,
      services,
      date,
      time,
      status: "pending",
    });

    await booking.save();

    return res.status(201).json({
      message: "Booking created successfully!",
      booking,
    });

  } catch (err) {
    console.error("Server Booking Error:", err);
    res.status(500).json({ error: "Failed to create booking." });
  }
});
// GET /api/bookings/my
// Middleware: verify user token
bookingRoutes.get("/my", verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ clientId: req.user.id });
    console.log(req.user.id );
    
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bookings" });
  }
});



export default bookingRoutes 