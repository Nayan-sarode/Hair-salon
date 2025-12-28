
import jwt from "jsonwebtoken";

// Middleware to verify admin
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json("No token provided");
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json("Invalid token");
    console.log(decoded)
    req.user = decoded;
    next();
  });
}

export default verifyToken