import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.js";
import bookingRoutes from "./routes/booking.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors(
  {
    origin: "*",
  }
));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminRoutes);

// Add this block for the root route
app.get('/', (req, res) => {
  res.send('API Running');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
