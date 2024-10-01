import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({});    

const app = express();

// Custom CORS Middleware to manually set the headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173"); // Allow specific origin
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials like cookies
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  next();
});

app.get("/home", (req, res) => {
  return res.status(200).json({
    message: "https://i.ibb.co/wCzqmTr/1123.png",
    success: true,
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));    
app.use(cookieParser());

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
  console.log(`Server running on Port ${PORT}`);
});