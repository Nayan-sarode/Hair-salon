
import jwt from "jsonwebtoken";

// Middleware to verify admin
function verifyAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json("No token provided");
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json("Invalid token");
    if (decoded.role !== "admin") return res.status(403).json("Admin only");
    console.log(decoded)
    req.user = decoded;
    next();
  });
}

export default verifyAdmin;