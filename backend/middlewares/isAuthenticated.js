import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized", success: false });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(!decoded){
        return res.status(401).json({ message: "Unauthorized", success: false });
    }

    req.id = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized", success: false });
  }
};
export  default isAuthenticated;