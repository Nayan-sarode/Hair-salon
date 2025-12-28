import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  services: { type: [String], required: true }, // array of services
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, default: "pending" },
});

export default mongoose.model("Booking", bookingSchema);
