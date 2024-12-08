// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Vytvorenie Express aplikácie
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Pripojenie k MongoDB
const uri = "mongodb://127.0.0.1:27017/zadanie2"; // Uprav 'nazov_databazy' podľa potreby

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Definovanie routes
import usersRouter from "./routes/users.js";
app.use("/api/users", usersRouter);

// Spustenie servera
const PORT = 5000; // Pevne zadaný port

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
